# -*- coding: utf-8 -*-
"""
ZCL Hub — Automated UI & Codebase Quality Test Suite
Author: Nguyễn Hoàng Tùng (@tungkernel)
License: GNU General Public License v3.0 (GPL-3.0)
"""

import json
import os
import re
import subprocess
import unittest
import xml.etree.ElementTree as ET

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
INDEX_HTML = os.path.join(REPO_ROOT, "index.html")
STYLES_CSS = os.path.join(REPO_ROOT, "src", "styles.css")
APP_JS = os.path.join(REPO_ROOT, "src", "app.js")
SW_JS = os.path.join(REPO_ROOT, "sw.js")
MANIFEST_JSON = os.path.join(REPO_ROOT, "manifest.json")
PAGE_404 = os.path.join(REPO_ROOT, "404.html")
LOGO_SVG = os.path.join(REPO_ROOT, "assets", "logo.svg")


class TestStrictRules(unittest.TestCase):
    """Verifies all strict content and branding rules."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()
        with open(STYLES_CSS, "r", encoding="utf-8") as f:
            self.css = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            self.js = f.read()
        with open(SW_JS, "r", encoding="utf-8") as f:
            self.sw = f.read()

    def test_no_emojis_in_source_code(self):
        emoji_pattern = re.compile(r'[\u2600-\u27BF\U0001F300-\U0001FAFF]')
        for name, content in [
            ("index.html", self.html),
            ("styles.css", self.css),
            ("app.js", self.js),
            ("sw.js", self.sw),
        ]:
            matches = emoji_pattern.findall(content)
            self.assertEqual(len(matches), 0, f"Found emojis in {name}: {matches}")

    def test_no_competitors_mentioned(self):
        for comp in ("TeamViewer", "AnyDesk", "UltraViewer"):
            pattern = re.compile(re.escape(comp), re.IGNORECASE)
            self.assertFalse(pattern.search(self.html), f"Found {comp} in index.html")
            self.assertFalse(pattern.search(self.js), f"Found {comp} in app.js")
            self.assertFalse(pattern.search(self.css), f"Found {comp} in styles.css")

    def test_no_ecosystem_phrase(self):
        for phrase in ("hệ sinh thái", "ecosystem"):
            pattern = re.compile(re.escape(phrase), re.IGNORECASE)
            self.assertFalse(pattern.search(self.html), f"Found '{phrase}' in index.html")
            self.assertFalse(pattern.search(self.js), f"Found '{phrase}' in app.js")

    def test_no_long_identifier(self):
        forbidden = "Bộ Ứng Dụng Mạng Nội Bộ Zero-Cloud LAN"
        pattern = re.compile(re.escape(forbidden), re.IGNORECASE)
        self.assertFalse(pattern.search(self.html))
        self.assertFalse(pattern.search(self.js))

    def test_author_and_license_attribution(self):
        self.assertIn("Nguyễn Hoàng Tùng", self.html)
        self.assertIn("tungkernel", self.html)
        self.assertIn("GPL-3.0", self.html)

    def test_no_complex_technical_jargon_in_text(self):
        for term in (
            "WebRTC DataChannel",
            "mDNS (_zcl._tcp)",
            "TLS 1.3 Direct",
            "NVENC H.264",
            "Opus 48kHz",
            "resumable chunking",
        ):
            self.assertNotIn(term, self.html, f"Found jargon '{term}' in index.html")

    def test_docs_and_pages_strict_compliance(self):
        emoji_pattern = re.compile(r'[\u2600-\u27BF\U0001F300-\U0001FAFF]')
        forbidden_competitors = ("TeamViewer", "AnyDesk", "UltraViewer")
        forbidden_phrases = ("hệ sinh thái", "ecosystem", "Bộ Ứng Dụng Mạng Nội Bộ Zero-Cloud LAN")

        target_files = [
            ("404.html", PAGE_404),
            ("README.md", os.path.join(REPO_ROOT, "README.md")),
            ("docs/README.md", os.path.join(REPO_ROOT, "docs", "README.md")),
            ("docs/user-guide.md", os.path.join(REPO_ROOT, "docs", "user-guide.md")),
            ("docs/architecture.md", os.path.join(REPO_ROOT, "docs", "architecture.md")),
            ("docs/faq.md", os.path.join(REPO_ROOT, "docs", "faq.md")),
            ("docs/roadmap.md", os.path.join(REPO_ROOT, "docs", "roadmap.md")),
        ]

        for label, path in target_files:
            self.assertTrue(os.path.exists(path), f"Missing expected doc/page: {label}")
            with open(path, "r", encoding="utf-8") as f:
                content = f.read()
            self.assertEqual(len(emoji_pattern.findall(content)), 0, f"Found emojis in {label}")
            for comp in forbidden_competitors:
                self.assertFalse(re.search(re.escape(comp), content, re.IGNORECASE), f"Found {comp} in {label}")
            for phrase in forbidden_phrases:
                self.assertFalse(re.search(re.escape(phrase), content, re.IGNORECASE), f"Found '{phrase}' in {label}")


class TestI18nCompleteness(unittest.TestCase):
    """Verifies 100% VI/EN key parity and coverage across index.html and app.js."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            html = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            js = f.read()

        html_keys = set(re.findall(r'data-i18n="([^"]+)"', html))
        html_placeholders = set(re.findall(r'data-i18n-placeholder="([^"]+)"', html))
        html_titles = set(re.findall(r'data-i18n-title="([^"]+)"', html))
        self.all_html_keys = html_keys | html_placeholders | html_titles

        vi_match = re.search(r'vi:\s*\{(.*?)\n\s*\},', js, re.DOTALL)
        en_match = re.search(r'en:\s*\{(.*?)\n\s*\}', js, re.DOTALL)

        self.vi_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', vi_match.group(1), re.MULTILINE)) if vi_match else set()
        self.en_keys = set(re.findall(r'^\s*([a-zA-Z0-9_]+)\s*:', en_match.group(1), re.MULTILINE)) if en_match else set()

    def test_all_html_keys_exist_in_vi(self):
        missing = sorted(self.all_html_keys - self.vi_keys)
        self.assertEqual(missing, [], f"Missing keys in i18n.vi: {missing}")

    def test_all_html_keys_exist_in_en(self):
        missing = sorted(self.all_html_keys - self.en_keys)
        self.assertEqual(missing, [], f"Missing keys in i18n.en: {missing}")

    def test_vi_en_parity(self):
        self.assertEqual(sorted(self.vi_keys - self.en_keys), [], "Keys only in VI")
        self.assertEqual(sorted(self.en_keys - self.vi_keys), [], "Keys only in EN")


class TestTabArchitecture(unittest.TestCase):
    """Verifies the streamlined 3-tab portal architecture."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            self.js = f.read()

    def test_3_tab_views_exist_and_removed_tabs_absent(self):
        for tab_id in ("tab-overview", "tab-apps", "tab-faq"):
            self.assertIn(f'id="{tab_id}"', self.html, f"Missing tab panel: #{tab_id}")
        self.assertNotIn('id="tab-studio"', self.html, "Try on Web tab must be removed")
        self.assertNotIn('id="tab-download"', self.html, "Duplicate Download tab must be merged into tab-apps")
        self.assertNotIn('id="btnInstallPwa"', self.html, "PWA install banner must be removed")
        self.assertNotIn('id="zclConsoleFrame"', self.html, "Fake cockpit console must be removed")
        self.assertNotIn('id="transferCalcSection"', self.html, "Transfer calculator must be removed")
        self.assertNotIn('id="heroPreviewShell"', self.html, "Teleport-specific preview must not be on hub hero")
        self.assertNotIn('class="overview-support-bar"', self.html, "Duplicate overview support bar must be removed")
        donate_start = self.html.find('id="modalPanelDonate"')
        outside_donate_html = self.html[:donate_start] if donate_start != -1 else self.html
        self.assertNotIn("github", outside_donate_html.lower(), "Website UI outside Donate modal must not mention GitHub")
        self.assertIn('class="story-card"', self.html)
        self.assertIn('class="scenarios-grid"', self.html)

    def test_tab_pills_and_indicator(self):
        for target in ('data-tab="tab-overview"', 'data-tab="tab-apps"', 'data-tab="tab-faq"'):
            self.assertIn(target, self.html)
        self.assertIn('id="tabSlidingIndicator"', self.html)
        self.assertIn("updateTabSlidingIndicator", self.js)

    def test_legacy_hash_redirects(self):
        self.assertIn("tab-download", self.js)
        self.assertIn("tab-studio", self.js)


class TestComponentsIntegrity(unittest.TestCase):
    """Verifies real screenshots, multi-platform downloads, FAQ search, Eco mode, and modals."""

    def setUp(self):
        with open(INDEX_HTML, "r", encoding="utf-8") as f:
            self.html = f.read()
        with open(STYLES_CSS, "r", encoding="utf-8") as f:
            self.css = f.read()
        with open(APP_JS, "r", encoding="utf-8") as f:
            self.js = f.read()

    def test_real_screenshots_exist_and_referenced(self):
        shots = (
            "tim-may-moi.png",
            "hoi-nhan-file.png",
            "web-qr-khach.png",
            "tu-dong-hoa-cai-dat.png",
            "en-device-discovery.png",
            "en-receive-prompt.png",
            "en-web-guest.png",
            "en-transfer-settings.png",
        )
        for shot in shots:
            path = os.path.join(REPO_ROOT, "assets", "screenshots", shot)
            self.assertTrue(os.path.exists(path) and os.path.getsize(path) > 0, f"Missing screenshot: {shot}")
            self.assertIn(shot, self.js, f"app.js must map screenshot {shot}")

    def test_teleport_v180_multiplatform_downloads(self):
        self.assertIn("v1.8.0", self.html)
        self.assertIn("teleport-setup-1.8.0-x64.exe", self.js)
        self.assertIn("teleport-gui-1.8.0-windows-x64.zip", self.js)
        self.assertIn("teleport-cli-1.8.0-windows-x64.zip", self.js)
        self.assertIn("Teleport-1.8.0-macOS.dmg", self.js)
        self.assertIn("Teleport-1.8.0-x86_64.AppImage", self.js)
        self.assertIn("zcl-remote-setup-0.2.0-x64.exe", self.js)

    def test_mind_has_no_fake_download_button(self):
        self.assertIsNone(
            re.search(r'btn-open-download[^>]*data-app="mind"|data-app="mind"[^>]*btn-open-download', self.html),
            "ZCL Mind must not have a fake download button while in development",
        )

    def test_faq_search_and_empty_state(self):
        idx_tab_faq = self.html.find('id="tab-faq"')
        idx_faq_empty = self.html.find('id="faqEmptyState"')
        self.assertGreater(idx_faq_empty, idx_tab_faq)
        self.assertIn('id="faqSearchInput"', self.html)
        self.assertIn('id="btnFaqReset"', self.html)

    def test_eco_mode_and_background_effects(self):
        self.assertIn('id="ecoToggleBtn"', self.html)
        self.assertIn('id="bgParticlesCanvas"', self.html)
        self.assertIn('body.eco-mode', self.css)

    def test_feedback_and_adaptive_donate_modal(self):
        idx_feedback = self.html.find('id="modalTabBtnFeedback"')
        idx_donate = self.html.find('id="modalTabBtnDonate"')
        self.assertTrue(idx_feedback != -1 and idx_donate != -1)
        self.assertLess(idx_feedback, idx_donate, "Feedback tab must appear before Donate tab")
        self.assertIn("https://formsubmit.co/ajax/hoangtungcnh@gmail.com", self.js)
        self.assertNotIn("MoMo:", self.html)
        self.assertIn('id="donateSponsorsLink"', self.html)
        self.assertIn("https://github.com/sponsors/tungkernel", self.html)
        self.assertIn('id="modalDonateQrImg"', self.html)
        self.assertIn("modal.classList.add('active')", self.js)
        self.assertNotIn("modal.classList.add('open')", self.js)

    def test_thank_you_modal_collective_voice(self):
        ty_start = self.html.find('id="donateThankYouModal"')
        ty_end = self.html.find('</div>\n  </div>', ty_start)
        ty_html = self.html[ty_start:ty_end]
        self.assertIn('id="btnConfirmDonation"', self.html)
        self.assertNotIn("Nguyễn Hoàng Tùng", ty_html)
        self.assertNotIn("Nguyen Hoang Tung", ty_html)


class TestPWAAndAssets(unittest.TestCase):
    """Verifies manifest, service worker, brand assets, and 404 page."""

    def test_manifest_json_valid(self):
        with open(MANIFEST_JSON, "r", encoding="utf-8") as f:
            data = json.load(f)
        self.assertEqual(data.get("name"), "ZCL Hub")
        self.assertTrue(len(data.get("icons", [])) > 0)

    def test_service_worker_asset_list(self):
        with open(SW_JS, "r", encoding="utf-8") as f:
            sw = f.read()
        self.assertIn("zcl-hub-v46", sw)
        for asset in (
            "./index.html",
            "./404.html",
            "./src/styles.css",
            "./src/app.js",
            "./assets/logo.svg",
            "./assets/screenshots/tim-may-moi.png",
            "./assets/screenshots/en-device-discovery.png",
        ):
            self.assertIn(asset, sw, f"Service worker must cache {asset}")

    def test_brand_logos_valid(self):
        for app in ("hub", "teleport", "remote", "mind", "study"):
            logo_path = os.path.join(REPO_ROOT, "assets", "logos", f"zcl-{app}.svg")
            self.assertTrue(os.path.exists(logo_path))
            with open(logo_path, "r", encoding="utf-8") as f:
                root = ET.fromstring(f.read())
            self.assertEqual(root.attrib.get("viewBox"), "0 0 1024 1024")

    def test_404_page_valid(self):
        with open(PAGE_404, "r", encoding="utf-8") as f:
            content = f.read()
        self.assertIn("ZCL Hub", content)
        self.assertIn("404", content)


class TestJavaScriptSyntax(unittest.TestCase):
    """Verifies zero JS syntax errors via Node.js."""

    def test_app_js_syntax(self):
        res = subprocess.run(["node", "-c", APP_JS], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Syntax error in src/app.js:\n{res.stderr}")

    def test_sw_js_syntax(self):
        res = subprocess.run(["node", "-c", SW_JS], capture_output=True, text=True)
        self.assertEqual(res.returncode, 0, f"Syntax error in sw.js:\n{res.stderr}")


if __name__ == "__main__":
    unittest.main(verbosity=2)
