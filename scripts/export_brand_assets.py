# -*- coding: utf-8 -*-
"""
ZCL Hub — Brand Asset Exporter
Renders Master SVGs (assets/logos/) and UI Line Icons (assets/icons/) into
transparent RGBA PNGs, PWA icons, Windows multi-layer .ico files, and
monochrome System Tray icons using headless Microsoft Edge + Pillow.

Author: Nguyễn Hoàng Tùng (@tungkernel)
License: GNU General Public License v3.0 (GPL-3.0)
"""

import base64
import os
import re
import shutil
import subprocess
import tempfile
import time
from PIL import Image

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
LOGOS_DIR = os.path.join(REPO_ROOT, "assets", "logos")
ICONS_DIR = os.path.join(REPO_ROOT, "assets", "icons")
PWA_DIR = os.path.join(REPO_ROOT, "assets", "pwa")
EXPORTS_ICO_DIR = os.path.join(REPO_ROOT, "assets", "exports", "ico")
EXPORTS_PNG_DIR = os.path.join(REPO_ROOT, "assets", "exports", "png")
EXPORTS_TRAY_DIR = os.path.join(REPO_ROOT, "assets", "exports", "tray")

APPS = ["hub", "teleport", "remote", "mind", "study"]
EDGE_CANDIDATES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Edge\Application\msedge.exe",
    shutil.which("msedge") or "",
]


def find_edge():
    for path in EDGE_CANDIDATES:
        if path and os.path.exists(path):
            return path
    raise FileNotFoundError("Microsoft Edge executable not found for headless SVG rendering.")


def wait_for_stable_png(png_path, timeout=20.0):
    deadline = time.time() + timeout
    last_size = -1
    while time.time() < deadline:
        if os.path.exists(png_path):
            size = os.path.getsize(png_path)
            if size > 0 and size == last_size:
                try:
                    with Image.open(png_path) as im:
                        im.load()
                    return
                except Exception:
                    pass
            last_size = size
        time.sleep(0.2)
    raise TimeoutError(f"Timed out waiting for Edge screenshot: {png_path}")


def render_sprite_sheet(edge_exe, work_dir, profile_dir, items, bg_hex, width, height, tag):
    img_tags = []
    for x, y, size, svg_bytes in items:
        b64 = base64.b64encode(svg_bytes).decode("ascii")
        img_tags.append(
            f'<img src="data:image/svg+xml;base64,{b64}" alt="" '
            f'style="position:absolute;left:{x}px;top:{y}px;width:{size}px;height:{size}px;display:block;">'
        )

    html_path = os.path.join(work_dir, f"{tag}.html")
    png_path = os.path.join(work_dir, f"{tag}.png")
    html_content = f"""<!doctype html>
<html>
<head><meta charset="utf-8">
<style>
  html, body {{
    margin: 0; padding: 0;
    width: {width}px; height: {height}px;
    overflow: hidden;
    position: relative;
    background: {bg_hex};
  }}
</style>
</head>
<body>
{''.join(img_tags)}
</body>
</html>"""
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    file_url = "file:///" + html_path.replace("\\", "/")
    cmd = [
        edge_exe,
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--no-first-run",
        "--hide-scrollbars",
        "--force-device-scale-factor=1",
        f"--user-data-dir={profile_dir}",
        f"--window-size={width},{height}",
        f"--screenshot={png_path}",
        file_url,
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"Edge failed rendering {tag}: {res.stderr}")

    wait_for_stable_png(png_path)
    img = Image.open(png_path).convert("RGB")
    if img.size != (width, height):
        img = img.crop((0, 0, width, height))
    return img


def extract_rgba_from_dual_bg(img_black, img_white):
    """Porter-Duff dual-background alpha recovery (zero fringe)."""
    w, h = img_black.size
    b_bytes = img_black.tobytes()
    w_bytes = img_white.tobytes()
    out = bytearray(w * h * 4)

    n = w * h
    for i in range(n):
        idx3 = i * 3
        idx4 = i * 4
        rb, gb, bb = b_bytes[idx3], b_bytes[idx3 + 1], b_bytes[idx3 + 2]
        rw, gw, bw = w_bytes[idx3], w_bytes[idx3 + 1], w_bytes[idx3 + 2]

        diff_avg = ((rw - rb) + (gw - gb) + (bw - bb)) / 765.0
        alpha = 1.0 - diff_avg
        if alpha <= 0.002:
            out[idx4] = 0
            out[idx4 + 1] = 0
            out[idx4 + 2] = 0
            out[idx4 + 3] = 0
            continue
        if alpha > 1.0:
            alpha = 1.0

        r = int(round(rb / alpha))
        g = int(round(gb / alpha))
        b = int(round(bb / alpha))
        a = int(round(alpha * 255.0))

        out[idx4] = 255 if r > 255 else (0 if r < 0 else r)
        out[idx4 + 1] = 255 if g > 255 else (0 if g < 0 else g)
        out[idx4 + 2] = 255 if b > 255 else (0 if b < 0 else b)
        out[idx4 + 3] = 255 if a > 255 else (0 if a < 0 else a)

    return Image.frombytes("RGBA", (w, h), bytes(out))


def build_padded_bg_icon(rgba_img, target_size, scale_ratio, bg_rgb=(9, 8, 12)):
    canvas = Image.new("RGB", (target_size, target_size), bg_rgb)
    inner_size = int(round(target_size * scale_ratio))
    resized = rgba_img.resize((inner_size, inner_size), Image.Resampling.LANCZOS)
    offset = (target_size - inner_size) // 2
    canvas.paste(resized, (offset, offset), resized)
    return canvas


def main():
    edge_exe = find_edge()
    for d in (PWA_DIR, EXPORTS_ICO_DIR, EXPORTS_PNG_DIR, EXPORTS_TRAY_DIR):
        os.makedirs(d, exist_ok=True)

    # Assemble all 5 Master Logos (row 0, 512x512) + 10 Tray Icons (row 1, 128x128)
    sprite_items = []
    logo_boxes = {}
    tray_boxes = {}

    for idx, app in enumerate(APPS):
        svg_path = os.path.join(LOGOS_DIR, f"zcl-{app}.svg")
        with open(svg_path, "rb") as f:
            svg_bytes = f.read()
        x = idx * 512
        sprite_items.append((x, 0, 512, svg_bytes))
        logo_boxes[app] = (x, 0, x + 512, 512)

    tray_col = 0
    for app in APPS:
        icon_path = os.path.join(ICONS_DIR, f"icon-{app}.svg")
        with open(icon_path, "r", encoding="utf-8") as f:
            svg_text = f.read()
        for variant, stroke_hex in (("light", "#ffffff"), ("dark", "#171420")):
            tinted = re.sub(r'stroke="currentColor"', f'stroke="{stroke_hex}"', svg_text)
            x = tray_col * 128
            sprite_items.append((x, 512, 128, tinted.encode("utf-8")))
            tray_boxes[(app, variant)] = (x, 512, x + 128, 640)
            tray_col += 1

    sheet_w, sheet_h = 2560, 640

    with tempfile.TemporaryDirectory(prefix="zcl_export_") as tmp_dir:
        prof_b = os.path.join(tmp_dir, "prof_black")
        prof_w = os.path.join(tmp_dir, "prof_white")
        os.makedirs(prof_b, exist_ok=True)
        os.makedirs(prof_w, exist_ok=True)

        sheet_black = render_sprite_sheet(
            edge_exe, tmp_dir, prof_b, sprite_items, "#000000", sheet_w, sheet_h, "sheet_black"
        )
        sheet_white = render_sprite_sheet(
            edge_exe, tmp_dir, prof_w, sprite_items, "#ffffff", sheet_w, sheet_h, "sheet_white"
        )

    hub_rgba_512 = None

    # 1. Extract and save 5 Master Logo PNGs & 6-size .ico files
    for app in APPS:
        box = logo_boxes[app]
        rgba_512 = extract_rgba_from_dual_bg(sheet_black.crop(box), sheet_white.crop(box))
        if app == "hub":
            hub_rgba_512 = rgba_512

        png_256 = rgba_512.resize((256, 256), Image.Resampling.LANCZOS)
        png_256.save(os.path.join(EXPORTS_PNG_DIR, f"zcl-{app}-256.png"), format="PNG")

        ico_path = os.path.join(EXPORTS_ICO_DIR, f"zcl-{app}.ico")
        ico_sizes = [(16, 16), (24, 24), (32, 32), (48, 48), (64, 64), (256, 256)]
        rgba_512.save(ico_path, format="ICO", sizes=ico_sizes)
        print(f"Exported logo assets: zcl-{app} (256 PNG + 6-size ICO)")

    # 2. Save PWA Icons from ZCL Hub Master RGBA
    hub_rgba_512.save(os.path.join(PWA_DIR, "icon-512.png"), format="PNG")
    hub_192 = hub_rgba_512.resize((192, 192), Image.Resampling.LANCZOS)
    hub_192.save(os.path.join(PWA_DIR, "icon-192.png"), format="PNG")

    maskable_512 = build_padded_bg_icon(hub_rgba_512, 512, 0.82)
    maskable_512.save(os.path.join(PWA_DIR, "icon-maskable-512.png"), format="PNG")

    apple_180 = build_padded_bg_icon(hub_rgba_512, 180, 0.86)
    apple_180.save(os.path.join(PWA_DIR, "apple-touch-icon.png"), format="PNG")
    print("Exported PWA icons: icon-192, icon-512, icon-maskable-512, apple-touch-icon")

    # 3. Extract and save 32x32 System Tray Icons
    for app in APPS:
        for variant in ("light", "dark"):
            box = tray_boxes[(app, variant)]
            rgba_128 = extract_rgba_from_dual_bg(sheet_black.crop(box), sheet_white.crop(box))
            tray_32 = rgba_128.resize((32, 32), Image.Resampling.LANCZOS)
            out_path = os.path.join(EXPORTS_TRAY_DIR, f"tray-{app}-{variant}.png")
            tray_32.save(out_path, format="PNG")
        print(f"Exported tray icons: tray-{app}-light.png & tray-{app}-dark.png")


if __name__ == "__main__":
    main()
