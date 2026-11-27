// ZCL Hub — Clean 3-Tab Portal Logic (Zero-Dependency ES6+)
// Author: Nguyễn Hoàng Tùng (@tungkernel) · License: GPL-3.0

// ==========================================
// 1. BILINGUAL I18N (100% VI / EN PARITY)
// ==========================================
const i18n = {
  vi: {
    page_title: "ZCL Hub — Bộ công cụ làm việc trực tiếp & hoàn toàn riêng tư",
    nav_brand_tooltip: "Về trang chủ ZCL Hub",
    nav_overview: "Tổng quan",
    nav_apps_download: "Ứng dụng & Tải về",
    nav_faq: "Hướng dẫn & Hỏi đáp",
    nav_feedback: "Góp ý",
    nav_donate: "Ủng hộ",
    eco_toggle: "Chế độ tiết kiệm pin / Giảm hiệu ứng",
    theme_toggle: "Chuyển chế độ sáng / tối",
    eco_enabled_toast: "Đã bật Chế độ Tiết kiệm (tắt hiệu ứng nền)",
    eco_disabled_toast: "Đã tắt Chế độ Tiết kiệm (bật lại hiệu ứng nền)",

    hero_pill: "Windows · macOS · Linux · 100% Mạng nội bộ",
    hero_title: '<span class="title-gradient">ZCL Hub</span>',
    hero_lede: "Bộ công cụ làm việc trực tiếp trên máy tính và mạng nội bộ — truyền file, điều khiển từ xa và trợ lý cá nhân hoàn toàn ngoại tuyến. Không đám mây, không tài khoản.",
    hero_btn_apps: "Khám phá Ứng dụng & Tải về",
    hero_btn_guide: "Hướng dẫn nhanh",

    shot_cap_discovery: "Tự tìm các máy tính trong cùng mạng Wi-Fi, ghép đôi một lần bằng mã 6 số.",
    shot_cap_receive: "Luôn hỏi xác nhận trước khi nhận file hoặc thư mục từ máy khác.",
    shot_cap_qr: "Quét mã QR để gửi nhận ảnh và tệp với điện thoại không cần cài thêm ứng dụng.",
    shot_cap_settings: "Chỉ gửi phần thay đổi, tự phân loại thư mục nhận và cổng đẩy tự động.",

    ov_story_badge: "CÂU CHUYỆN CỦA ZCL HUB",
    ov_story_title: "Đừng gửi dữ liệu đi nửa vòng Trái Đất chỉ để sang chiếc bàn bên cạnh.",
    ov_story_lead: "Hai chiếc máy tính chỉ cách nhau một sải tay. Vậy mà lâu nay, mỗi lần muốn chuyển bộ ảnh gia đình hay đoạn phim kỷ niệm, ta lại phải đẩy lên mạng xa xôi, chờ tải lên, chờ tải về rồi chấp nhận ảnh bị nén mờ.",
    ov_story_quote: "“Những gì thuộc về căn phòng của bạn, hãy để nó ở lại trong căn phòng của bạn.”",
    ov_route_old_label: "Cách cũ · Đi đường vòng",
    ov_route_old_mid: "Máy chủ xa xôi · Chờ đợi · Nén mờ",
    ov_route_new_label: "Với ZCL Hub · Đi thẳng trong phòng",
    ov_route_new_mid: "Thẳng qua Wi-Fi chung · Nguyên bản · Tức thì",
    ov_node_a: "Máy bạn",
    ov_node_b: "Máy bên cạnh",

    ov_scene_badge: "CẢM GIÁC KHÁC BIỆT",
    ov_scene_title: "Ba khoảnh khắc khiến bạn không muốn quay lại cách cũ",
    ov_sc1_title: "Gửi trọn chuyến đi chỉ trong chớp mắt",
    ov_sc1_desc: "Vừa đi chơi về, cả album ảnh và những đoạn phim kỷ niệm sang máy bên cạnh nguyên vẹn từng chi tiết — không cần tìm dây cáp, không cần cắm USB.",
    ov_sc2_title: "Hai chiếc máy bỗng hòa làm một",
    ov_sc2_desc: "Ngồi gọn trên sofa vẫn chạm tay vào màn hình máy bàn bên kia, chép dòng chữ ở máy này là dán ngay sang máy kia, quét mã là điện thoại nhận được liền.",
    ov_sc3_title: "Bình yên làm việc ngay cả khi mất mạng",
    ov_sc3_desc: "Ngoài kia có đứt mạng Internet, mọi việc bên trong căn phòng của bạn vẫn chạy êm ru. Mọi tệp tin và ghi nhớ riêng tư luôn nằm gọn trong tay bạn.",
    ov_btn_view_download: "Xem & Tải về",

    pil1_title: "Tốc độ tối đa của mạng",
    pil1_desc: "Truyền thẳng giữa các máy cùng phòng, không bóp băng thông và tự nối lại nếu mất mạng giữa chừng.",
    pil2_title: "Riêng tư tuyệt đối",
    pil2_desc: "Dữ liệu đi thẳng giữa các thiết bị đã xác nhận tin cậy, không đi qua máy chủ trung gian và không cần tài khoản.",
    pil3_title: "Chạy tốt khi mất Internet",
    pil3_desc: "Chỉ cần chung cục phát Wi-Fi hoặc dây mạng nội bộ là gửi file và điều khiển bình thường ngay cả khi mất mạng ngoài.",
    pil4_title: "Miễn phí, không quảng cáo",
    pil4_desc: "Không giới hạn dung lượng, không khóa tính năng, không quảng cáo và được duy trì độc lập cho cộng đồng.",

    store_catalog_badge: "ỨNG DỤNG & TẢI VỀ",
    store_catalog_title: "Chọn ứng dụng để xem chi tiết hoặc tải ngay",
    store_catalog_sub: "Miễn phí hoàn toàn, không cần tài khoản. Chọn ứng dụng để xem chi tiết và tải bản mới nhất.",
    store_back_catalog: "Quay lại danh sách ứng dụng",
    crumb_store: "Ứng dụng & Tải về",

    tp_status: "Bản chính thức",
    rm_status: "Bản thử nghiệm",
    mind_status: "Đang phát triển",
    chip_gpl: "Mã nguồn mở GPL-3.0",
    chip_proprietary: "Miễn phí",
    chip_coming_soon: "Sắp ra mắt",
    chip_author: "Tác giả: Nguyễn Hoàng Tùng",

    tp_desc: "Gửi file, thư mục dung lượng lớn, đồng bộ khay nhớ tạm hai chiều và gửi ảnh sang điện thoại qua mã QR.",
    tp_f1: "Nối lại tự động khi mất điện hoặc rớt Wi-Fi, không phải gửi lại từ đầu",
    tp_f2: "Chỉ gửi phần thay đổi, tự đẩy thư mục theo dõi và hỗ trợ dòng lệnh",
    tp_f3: "Hỗ trợ Windows, macOS, Linux và điện thoại qua mã QR trình duyệt",

    rm_desc: "Điều khiển máy tính từ xa mượt mà qua Wi-Fi chung. Chuột bấm ăn ngay, không quảng cáo và không giới hạn thời gian.",
    rm_f1: "Màn hình rõ nét 60 FPS, tối ưu độ nét theo tốc độ Wi-Fi",
    rm_f2: "Di chuột và bấm phím phản hồi tức thì như ngồi trước máy thật",
    rm_f3: "Luôn hỏi xác nhận và có nút ngắt kết nối khẩn cấp một chạm",

    mind_desc: "Trợ lý cá nhân chạy 100% trên máy tính Windows, ghi nhớ thói quen, lịch trình và mối quan hệ hoàn toàn ngoại tuyến.",
    mind_f1: "Bản đồ thấu hiểu 6 chiều lưu cục bộ trên ổ đĩa của bạn",
    mind_f2: "Chạy hoàn toàn bằng CPU, không cần card đồ họa rời (RAM từ 8 GB)",
    mind_f3: "Không gửi dữ liệu ra ngoài, toàn quyền xem, sửa hoặc xóa trí nhớ",
    store_btn_view_mind: "Xem chi tiết & Lộ trình",

    dt_tp_category: "Truyền file & Khay nhớ tạm nội bộ",
    detail_status_tp_ready: "Chính thức · v1.8.0",
    dt_tp_lede: "Chuyển file và thư mục dung lượng lớn, đồng bộ khay nhớ tạm hai chiều giữa các máy tính cùng mạng, kèm chế độ khách qua mã QR cho điện thoại.",
    dt_tp_dl_heading: "Tải ZCL Teleport theo hệ điều hành",
    dt_tp_dl_honest_note: "Bản Windows được kiểm thử thường xuyên trên máy thật. Bản macOS (.dmg) và Linux (.AppImage) được đóng gói và kiểm thử tự động trên máy chủ dựng bản, chưa kiểm thử trên máy vật lý.",
    os_tag_tested: "Kiểm thử máy thật",
    os_tag_ci: "Đóng gói tự động",
    dl_btn_win_exe: "Tải bộ cài (.exe · 25.4 MB)",
    dl_btn_win_zip: "Bản chạy ngay (.zip · 33.5 MB)",
    dl_btn_win_cli: "Bản dòng lệnh CLI (.zip · 14.9 MB)",
    dl_btn_mac_dmg: "Tải ảnh đĩa (.dmg · 41.1 MB)",
    dl_btn_linux_appimage: "Tải AppImage (72.7 MB)",
    os_tip_mac: "Mở lần đầu: chuột phải vào ứng dụng → chọn Mở (Open) và cho phép truy cập Mạng cục bộ.",
    os_tip_linux: "Cấp quyền chạy bằng <code>chmod +x</code> rồi chạy trực tiếp.",

    dt_tp_gallery_title: "Giao diện thực tế",
    dt_features_title: "4 Điểm nổi bật nhất của ứng dụng",
    dt_specs_title: "Thông số thực tế",
    dt_tp_f1_title: "Tự nối lại xuyên mất điện",
    dt_tp_f1_desc: "Đang gửi tệp hàng chục GB mà rớt Wi-Fi hoặc tắt máy đột ngột, bật lại ứng dụng sẽ tự gửi tiếp đúng đoạn còn thiếu.",
    dt_tp_f2_title: "Chỉ gửi phần thay đổi",
    dt_tp_f2_desc: "Khi cập nhật lại tệp dung lượng lớn, ứng dụng tự phát hiện và chỉ truyền những phần thực sự thay đổi để tiết kiệm thời gian.",
    dt_tp_f3_title: "Thư mục tự đẩy & Phân loại",
    dt_tp_f3_desc: "Thả tệp vào thư mục theo dõi để tự động gửi sang máy đích, đồng thời tự sắp xếp tệp nhận về theo loại hoặc người gửi.",
    dt_tp_f4_title: "Khay nhớ tạm & Chế độ QR",
    dt_tp_f4_desc: "Copy văn bản hoặc ảnh ở máy này để dán sang máy kia, và mở mã QR chia sẻ nhanh với điện thoại không cần cài ứng dụng.",

    spec_speed: "Tốc độ truyền",
    spec_val_speed: "Tối đa tốc độ mạng nội bộ (100 MB/s – 1 GB/s)",
    spec_limit: "Dung lượng tệp",
    spec_val_limit: "Không giới hạn dung lượng, hỗ trợ cả thư mục nhiều tệp",
    spec_os: "Hệ điều hành",
    spec_security: "Bảo mật",
    spec_val_security: "Kết nối mã hóa trực tiếp giữa 2 máy, 0 máy chủ ngoài",
    spec_license: "Bản quyền & Tác giả",
    spec_internet: "Kết nối Internet",
    spec_val_internet: "Không cần Internet, chỉ cần chung mạng Wi-Fi / LAN",

    dt_rm_category: "Điều khiển máy tính từ xa",
    detail_status_ready: "Thử nghiệm · v0.2.0",
    dt_rm_lede: "Điều khiển máy tính từ xa mượt mà 60 FPS qua mạng Wi-Fi chung trong phòng, chuột bấm ăn ngay không quảng cáo và có nút dừng khẩn cấp.",
    dt_rm_btn_dl: "Tải bản cài đặt (.exe · 72.0 MB)",
    dt_rm_btn_zip: "Tải bản chạy ngay (.zip · 108.6 MB)",
    dt_rm_f1_title: "Chuột bấm ăn ngay, không giật hình",
    dt_rm_f1_desc: "Dữ liệu truyền thẳng trực tiếp trong mạng nội bộ mang lại trải nghiệm điều khiển tức thì, hạn chế tối đa độ trễ.",
    dt_rm_f2_title: "Màn hình tự tối ưu độ nét",
    dt_rm_f2_desc: "Ứng dụng tự động điều chỉnh chất lượng hình ảnh theo tốc độ Wi-Fi để luôn duy trì khung hình chuyển động 60 FPS.",
    dt_rm_f3_title: "Hoạt động khi mất Internet",
    dt_rm_f3_desc: "Kể cả khi mất kết nối mạng ngoài, hai máy tính dùng chung Wi-Fi vẫn điều khiển nhau bình thường.",
    dt_rm_f4_title: "Xin phép & Ngắt khẩn cấp",
    dt_rm_f4_desc: "Luôn hiển thị thông báo xin phép trước khi kết nối, kèm thanh ngắt kết nối một chạm bất cứ lúc nào.",
    spec_fps: "Tốc độ khung hình",
    spec_val_fps: "60 FPS mượt mà",
    spec_mouse: "Độ trễ phản hồi",
    spec_val_latency: "Dưới 1ms (phản hồi tức thì)",
    spec_val_security_rm: "Dữ liệu truyền thẳng trong phòng, 0 máy chủ ngoài",
    spec_val_license_closed: "Miễn phí · Nguyễn Hoàng Tùng (@tungkernel)",

    dt_mind_category: "Trợ lý cá nhân ngoại tuyến",
    dt_mind_lede: "Trợ lý cá nhân chạy 100% bằng CPU trên máy tính Windows, tự động ghi nhớ thói quen, lịch trình, tính cách và mối quan hệ hoàn toàn ngoại tuyến.",
    dt_mind_coming_note: "Đang hoàn thiện — sẽ sớm mở tải về tại đây",
    dt_mind_badge_map: "Bản đồ thấu hiểu 6 chiều lưu 100% trên máy",
    dt_mind_dim_1: "Hồ sơ cá nhân",
    dt_mind_dim_2: "Thói quen",
    dt_mind_dim_3: "Lịch trình",
    dt_mind_dim_4: "Quan hệ",
    dt_mind_dim_5: "Tính cách",
    dt_mind_dim_6: "Điểm mạnh / lưu ý",
    dt_mind_f1_title: "Bản đồ thấu hiểu 6 chiều",
    dt_mind_f1_desc: "Tự động phân loại và lưu giữ thông tin về bản thân, thói quen, lịch làm việc, tính cách và mối quan hệ.",
    dt_mind_f2_title: "Thu thập thông minh",
    dt_mind_f2_desc: "Kết hợp biểu mẫu nhập nhanh ban đầu và tự động cập nhật thêm thói quen mới qua trò chuyện hàng ngày.",
    dt_mind_f3_title: "Chạy 100% bằng CPU trên máy",
    dt_mind_f3_desc: "Tối ưu cho máy tính phổ thông không cần card đồ họa rời, hoạt động ổn định với RAM khuyến nghị từ 8 GB.",
    dt_mind_f4_title: "Toàn quyền kiểm soát và riêng tư",
    dt_mind_f4_desc: "Dữ liệu không rời khỏi máy tính. Bạn có toàn quyền xem, chỉnh sửa hoặc xóa bất kỳ thông tin nào máy đã ghi nhớ.",
    spec_mind_resp_label: "Thời gian phản hồi",
    spec_mind_resp_val: "Dưới 1.5 giây (bắt đầu xuất chữ)",
    spec_mind_speed_label: "Yêu cầu phần cứng",
    spec_mind_speed_val: "CPU phổ thông · RAM từ 8 GB",
    spec_mind_sec_val: "100% Trên máy, 0 máy chủ ngoài",
    spec_mind_net_val: "Hoàn toàn không cần Internet (100% Ngoại tuyến)",

    qs_badge: "3 BƯỚC ĐƠN GIẢN",
    qs_title: "Cách sử dụng trong 1 phút",
    qs_sub: "Không cần tạo tài khoản hay cấu hình mạng phức tạp.",
    qs_step1_title: "Tải ứng dụng về máy",
    qs_step1: "Mở mục [Ứng dụng & Tải về] và tải bộ cài phù hợp cho các máy tính cần kết nối.",
    qs_step2_title: "Kết nối chung Wi-Fi hoặc dây mạng",
    qs_step2: "Đảm bảo các máy tính dùng chung một mạng Wi-Fi (hoặc dây mạng nội bộ), rồi mở ứng dụng lên.",
    qs_step3_title: "Ghép đôi 1 lần và sử dụng",
    qs_step3: "Hai máy tự tìm thấy nhau ngay. Xác nhận mã 6 số lần đầu và bắt đầu gửi file hoặc điều khiển.",

    faq_badge: "HỎI ĐÁP",
    faq_title: "Những thắc mắc thường gặp",
    faq_search_placeholder: "Tìm nhanh câu trả lời (ví dụ: mất mạng, macOS, cảnh báo, ủng hộ...)",
    faq_q1: "Nhà tôi bị mất mạng Internet thì có dùng được không?",
    faq_a1: "Hoàn toàn dùng được. Ứng dụng chỉ cần hai máy kết nối chung một cục phát Wi-Fi hoặc dây mạng nội bộ là có thể truyền file và điều khiển nhau với tốc độ tối đa, kể cả khi mất kết nối Internet.",
    faq_q2: "Dữ liệu của tôi có bị gửi ra máy chủ bên ngoài không?",
    faq_a2: "Tuyệt đối không. Dữ liệu đi thẳng giữa hai thiết bị của bạn trong phòng, được mã hóa an toàn. Ứng dụng không có máy chủ đám mây, không yêu cầu đăng nhập và không thu thập dữ liệu sử dụng.",
    faq_q3: "Ứng dụng có miễn phí và giới hạn dung lượng không?",
    faq_a3: "Hoàn toàn miễn phí, không quảng cáo và không giới hạn dung lượng tệp hay thời gian sử dụng. ZCL Teleport là mã nguồn mở GPL-3.0.",
    faq_q4: "Mở lần đầu máy báo cảnh báo bảo vệ trên Windows / macOS thì làm sao?",
    faq_a4: 'Vì dự án độc lập chưa mua chứng chỉ ký mã thương mại nên hệ điều hành có thể hiện cảnh báo tệp mới. Trên Windows: bấm "More info" rồi chọn "Run anyway" và cho phép mạng riêng tư (Private networks). Trên macOS: chuột phải vào ứng dụng rồi chọn Mở (Open) và cấp quyền Mạng cục bộ.',
    faq_q5: "Tốc độ gửi file tối đa phụ thuộc vào yếu tố nào?",
    faq_a5: "Tốc độ phụ thuộc trực tiếp vào cục phát Wi-Fi hoặc dây mạng của bạn: Wi-Fi phổ thông đạt 30–80 MB/s, Wi-Fi 6 hoặc cắm dây mạng trực tiếp đạt từ 100 MB/s tới gần 1 GB/s.",
    faq_q6: "Đang gửi file nặng mà mất mạng hoặc tắt máy có phải gửi lại từ đầu không?",
    faq_a6: "Không. ZCL Teleport lưu lại tiến độ từng phần đã truyền xong. Khi hai máy kết nối lại, ứng dụng tự động truyền tiếp đúng phần còn thiếu.",
    faq_q7: "Tôi có thể ủng hộ để dự án tiếp tục duy trì bằng cách nào?",
    faq_a7: "Bạn có thể quét mã VietQR hoặc chuyển khoản trong mục Ủng hộ ở thanh trên cùng. Mọi khoản ủng hộ đều hoàn toàn tự nguyện và không làm thay đổi cam kết miễn phí.",
    faq_empty_title: "Không tìm thấy câu hỏi phù hợp",
    faq_empty_sub: "Thử tìm bằng từ khóa khác hoặc bấm nút bên dưới để xem toàn bộ câu hỏi.",
    faq_btn_reset: "Hiện tất cả câu hỏi",

    footer_desc: "Nhanh hơn, mượt hơn và hoàn toàn riêng tư giữa các máy tính cùng phòng.",
    footer_apps: "Ứng dụng",
    footer_res: "Danh mục",
    footer_feedback: "Góp ý & Báo lỗi",
    footer_donate: "Ủng hộ dự án",
    footer_contact: "Tác giả & Liên hệ",
    footer_rights: "Mã nguồn mở GPL-3.0. Phát triển bởi Nguyễn Hoàng Tùng.",

    modal_close_btn: "Đóng",
    modal_btn_start: "Bắt đầu tải xuống",
    modal_smartscreen_tip: '<strong>Mẹo nhỏ:</strong> Nếu Windows hiện cảnh báo tệp mới, bấm <em>"More info"</em> &rarr; chọn <em>"Run anyway"</em>.',
    modal_mac_tip: '<strong>Lưu ý macOS:</strong> Mở lần đầu bằng cách chuột phải vào ứng dụng &rarr; chọn <em>"Open"</em> và cấp quyền Mạng cục bộ.',
    modal_linux_tip: '<strong>Lưu ý Linux:</strong> Chạy <code>chmod +x Teleport-*.AppImage</code> rồi mở trực tiếp tệp AppImage.',
    toast_downloading: "Đang bắt đầu tải xuống tệp cài đặt...",

    fb_modal_title: "Góp ý & Báo lỗi",
    fb_modal_desc: "Đóng góp ý kiến trực tiếp giúp ZCL Hub ngày càng hoàn thiện hơn.",
    fb_rating_label: "Mức độ hài lòng của bạn:",
    fb_rating_1: "Chưa hài lòng (1 sao)",
    fb_rating_2: "Cần cải thiện (2 sao)",
    fb_rating_3: "Bình thường (3 sao)",
    fb_rating_4: "Hài lòng (4 sao)",
    fb_rating_5: "Rất tuyệt vời (5 sao)",
    fb_type_label: "Loại phản hồi:",
    fb_cat_feature: "Đề xuất tính năng",
    fb_cat_bug: "Báo lỗi trải nghiệm",
    fb_cat_review: "Chia sẻ cảm nhận",
    fb_cat_other: "Khác",
    fb_app_label: "Ứng dụng liên quan:",
    fb_app_all: "ZCL Hub (Chung)",
    fb_app_tp: "ZCL Teleport",
    fb_app_rm: "ZCL Remote",
    fb_app_mind: "ZCL Mind",
    fb_msg_label: "Nội dung phản hồi hoặc mô tả lỗi:",
    fb_msg_ph: "Hãy viết cảm nhận, tính năng bạn mong muốn hoặc chi tiết lỗi gặp phải...",
    fb_name_label: "Họ tên hoặc biệt danh (tùy chọn):",
    fb_name_ph: "Ví dụ: Minh Quân, Thu Hà...",
    fb_email_label: "Email liên hệ (tùy chọn):",
    fb_email_ph: "email@cuaban.com",
    fb_btn_submit: "Gửi ý kiến đóng góp",
    fb_submitting: "Đang gửi góp ý...",
    fb_success_title: "Cảm ơn bạn đã gửi đóng góp!",
    fb_success_desc: "Ý kiến của bạn đã được ghi nhận. Bạn cũng có thể gửi nhanh qua Email hoặc sao chép nội dung bên dưới.",
    fb_btn_mail: "Gửi email cho tác giả",
    fb_btn_copy: "Sao chép nội dung",
    fb_btn_another: "Gửi thêm ý kiến khác",
    fb_toast_sent: "Đã gửi góp ý đến tác giả thành công!",
    fb_toast_submitted: "Đã lưu góp ý thành công!",
    fb_toast_copied: "Đã sao chép nội dung góp ý!",

    dn_modal_title: "Ủng hộ dự án ZCL Hub",
    dn_modal_desc: "Quét mã VietQR để tiếp sức cho dự án ZCL Hub.",
    dn_amount_20k: "20.000đ · Ly cà phê",
    dn_amount_50k: "50.000đ · Tiếp sức",
    dn_amount_100k: "100.000đ · Đồng hành",
    dn_amount_custom: "Tùy tâm",
    dn_bank_label: "Ngân hàng:",
    dn_bank_val: "MB Bank (Quân Đội)",
    dn_acc_num_label: "Số tài khoản:",
    dn_msg_label: "Nội dung chuyển khoản:",
    dn_btn_copy_acc: "Sao chép số tài khoản",
    dn_btn_copy_msg: "Sao chép nội dung",
    dn_btn_confirm: "Tôi đã chuyển khoản · Xác nhận ủng hộ",
    dn_confirm_hint: "Bấm sau khi bạn đã hoàn tất quét mã QR hoặc chuyển khoản thành công",
    dn_toast_acc_copied: "Đã sao chép số tài khoản MB Bank: 0906279876",
    dn_toast_msg_copied: "Đã sao chép nội dung chuyển khoản: ZCL Hub",

    ty_badge: "TRI ÂN ĐỒNG HÀNH",
    ty_title: "Cảm ơn bạn đã ủng hộ chúng tôi!",
    ty_subtitle: "Thank you for supporting us · Cảm ơn bạn đã đồng hành cùng ZCL Hub",
    ty_message: "Mọi sự tiếp sức và đồng hành quý báu của bạn là nguồn động lực to lớn giúp ZCL Hub tiếp tục được duy trì và phát triển hoàn toàn miễn phí, mượt mà và độc lập cho cộng đồng.",
    ty_project_name: "ZCL Hub",
    ty_project_role: "Dự án mã nguồn mở vì cộng đồng",
    ty_btn_home: "Quay lại trang chính",
    ty_btn_feedback: "Gửi thêm lời nhắn / Góp ý",
    ty_toast: "Cảm ơn bạn đã ủng hộ ZCL Hub!"
  },

  en: {
    page_title: "ZCL Hub — Local-First, Private Desktop Tools",
    nav_brand_tooltip: "Back to ZCL Hub home",
    nav_overview: "Overview",
    nav_apps_download: "Apps & Downloads",
    nav_faq: "Guide & FAQ",
    nav_feedback: "Feedback",
    nav_donate: "Sponsor",
    eco_toggle: "Eco Mode / Reduce background animations",
    theme_toggle: "Toggle light / dark theme",
    eco_enabled_toast: "Eco Mode enabled (background animations paused)",
    eco_disabled_toast: "Eco Mode disabled (background animations restored)",

    hero_pill: "Windows · macOS · Linux · 100% Local Network",
    hero_title: '<span class="title-gradient">ZCL Hub</span>',
    hero_lede: "Local-first desktop tools for file transfer, remote control, and an offline personal assistant. No cloud, no accounts, 100% private.",
    hero_btn_apps: "Explore Apps & Downloads",
    hero_btn_guide: "Quick Guide",

    shot_cap_discovery: "Automatically discovers computers on the same Wi-Fi and pairs once with a 6-digit code.",
    shot_cap_receive: "Always asks for your confirmation before accepting incoming files or folders.",
    shot_cap_qr: "Scan a QR code to exchange photos and files with any phone browser — no app install needed.",
    shot_cap_settings: "Smart delta transfer, automatic receive routing, and auto-push watch folders.",

    ov_story_badge: "THE STORY BEHIND ZCL HUB",
    ov_story_title: "Why send your files halfway around the world just to reach the desk next to you?",
    ov_story_lead: "Your computers sit an arm's length apart. Yet every time you want to move a family photo album or a home video, you end up uploading to distant servers, waiting on progress bars, and settling for compressed copies.",
    ov_story_quote: "“What belongs in your room should stay in your room.”",
    ov_route_old_label: "The old way · A long detour",
    ov_route_old_mid: "Distant servers · Waiting · Compressed",
    ov_route_new_label: "With ZCL Hub · Straight across the room",
    ov_route_new_mid: "Direct over local Wi-Fi · Original quality · Instant",
    ov_node_a: "Your computer",
    ov_node_b: "Next desk",

    ov_scene_badge: "HOW IT FEELS",
    ov_scene_title: "Three everyday moments that make the difference",
    ov_sc1_title: "Share an entire trip in the blink of an eye",
    ov_sc1_desc: "Back from a vacation, your whole photo album and videos land on the next computer in full original quality — no cables to hunt for, no thumb drives needed.",
    ov_sc2_title: "Two computers feeling like one",
    ov_sc2_desc: "Reach your desktop smoothly from the sofa, copy a note on one screen and paste it on the next, or scan a code to hand photos straight to a phone.",
    ov_sc3_title: "Calm focus even when the Internet is out",
    ov_sc3_desc: "Even when the outside connection drops, everything inside your room keeps flowing smoothly. Your files and private notes stay strictly in your own hands.",
    ov_btn_view_download: "Details & Download",

    pil1_title: "Full local network speed",
    pil1_desc: "Transfers directly between computers in the same room with automatic resume after outages or restarts.",
    pil2_title: "Private by design",
    pil2_desc: "Encrypted direct links between trusted devices with zero external servers and no accounts required.",
    pil3_title: "Works without Internet",
    pil3_desc: "As long as devices share a Wi-Fi router or local cable, transfers and control work even when Internet is down.",
    pil4_title: "Free, with no ads",
    pil4_desc: "No file size caps, no time limits, no paywalls, and independently maintained for the community.",

    store_catalog_badge: "APPS & DOWNLOADS",
    store_catalog_title: "Explore apps and download the latest release",
    store_catalog_sub: "Completely free, no account needed. Pick an app to view details and download the latest release.",
    store_back_catalog: "Back to all apps",
    crumb_store: "Apps & Downloads",

    tp_status: "Official release",
    rm_status: "Beta",
    mind_status: "In development",
    chip_gpl: "Open-source GPL-3.0",
    chip_proprietary: "Free",
    chip_coming_soon: "Coming soon",
    chip_author: "Author: Nguyễn Hoàng Tùng",

    tp_desc: "Transfer large files and folders, sync clipboard both ways, and exchange files with phones via QR code.",
    tp_f1: "Automatic resume across Wi-Fi drops, power loss, or restarts",
    tp_f2: "Smart delta transfer, auto-push watch folders, and built-in CLI",
    tp_f3: "Available for Windows, macOS, Linux, plus phone browser QR mode",

    rm_desc: "Smooth remote desktop control over local Wi-Fi with instant cursor response, no ads, and no session time limits.",
    rm_f1: "Crisp 60 FPS display with adaptive quality for your Wi-Fi speed",
    rm_f2: "Instant mouse and keyboard response directly over your local network",
    rm_f3: "Requires permission before connecting, with a one-click stop button",

    mind_desc: "Offline personal assistant running 100% on Windows CPU, keeping habits, schedules, and personal notes private.",
    mind_f1: "Six-dimension personal memory map stored strictly on your drive",
    mind_f2: "Runs entirely on CPU with no discrete GPU required (8 GB RAM+)",
    mind_f3: "Zero cloud uploads — full control to view, edit, or delete memory",
    store_btn_view_mind: "Details & Roadmap",

    dt_tp_category: "Local File Transfer & Clipboard Sync",
    detail_status_tp_ready: "Official · v1.8.0",
    dt_tp_lede: "Move multi-gigabyte files and folders, sync clipboard text and images between computers, and share with phones over a local QR code.",
    dt_tp_dl_heading: "Download ZCL Teleport for your platform",
    dt_tp_dl_honest_note: "Windows builds are tested regularly on physical machines. macOS (.dmg) and Linux (.AppImage) packages are built and verified in automated CI and have not yet been tested on physical Macs or Linux machines.",
    os_tag_tested: "Hardware tested",
    os_tag_ci: "CI built",
    dl_btn_win_exe: "Download Installer (.exe · 25.4 MB)",
    dl_btn_win_zip: "Portable GUI (.zip · 33.5 MB)",
    dl_btn_win_cli: "Standalone CLI (.zip · 14.9 MB)",
    dl_btn_mac_dmg: "Download Disk Image (.dmg · 41.1 MB)",
    dl_btn_linux_appimage: "Download AppImage (72.7 MB)",
    os_tip_mac: "First launch: right-click the app → choose Open, and allow Local Network access.",
    os_tip_linux: "Make executable with <code>chmod +x</code> and run directly.",

    dt_tp_gallery_title: "Real interface screenshots",
    dt_features_title: "4 Key Highlights",
    dt_specs_title: "Practical Specifications",
    dt_tp_f1_title: "Two-way power-loss resume",
    dt_tp_f1_desc: "If Wi-Fi drops or either computer restarts mid-transfer, Teleport resumes right where it left off.",
    dt_tp_f2_title: "Smart delta transfer",
    dt_tp_f2_desc: "When re-sending updated large files, only the changed parts are transmitted to save time.",
    dt_tp_f3_title: "Watch folders & smart routing",
    dt_tp_f3_desc: "Drop files into a watched folder to push automatically, and route incoming files by sender or file type.",
    dt_tp_f4_title: "Clipboard sync & Phone QR mode",
    dt_tp_f4_desc: "Copy text or images on one computer and paste on another, or share with phones via a temporary QR code.",

    spec_speed: "Transfer speed",
    spec_val_speed: "Full local link speed (100 MB/s – 1 GB/s)",
    spec_limit: "File size limit",
    spec_val_limit: "Unlimited file size and nested folder transfers",
    spec_os: "Operating systems",
    spec_security: "Privacy & Security",
    spec_val_security: "Direct encrypted connection between trusted devices, zero cloud",
    spec_license: "License & Author",
    spec_internet: "Internet requirement",
    spec_val_internet: "No Internet required — shared Wi-Fi or LAN only",

    dt_rm_category: "Local Remote Desktop Control",
    detail_status_ready: "Beta · v0.2.0",
    dt_rm_lede: "Smooth 60 FPS remote desktop control over your local Wi-Fi with instant cursor response, no ads, and a one-click emergency stop.",
    dt_rm_btn_dl: "Download Installer (.exe · 72.0 MB)",
    dt_rm_btn_zip: "Download Portable (.zip · 108.6 MB)",
    dt_rm_f1_title: "Instant mouse & keyboard",
    dt_rm_f1_desc: "Direct local-network transport keeps mouse and keyboard input crisp and responsive.",
    dt_rm_f2_title: "Adaptive 60 FPS display",
    dt_rm_f2_desc: "Automatically balances image sharpness with your local Wi-Fi speed for smooth motion.",
    dt_rm_f3_title: "Works without Internet",
    dt_rm_f3_desc: "Even when your Internet connection is down, two computers on the same Wi-Fi can still connect.",
    dt_rm_f4_title: "Explicit consent & instant stop",
    dt_rm_f4_desc: "Always asks for permission before control begins, with a one-click disconnect bar.",
    spec_fps: "Frame rate",
    spec_val_fps: "Smooth 60 FPS",
    spec_mouse: "Input latency",
    spec_val_latency: "Sub-millisecond local response",
    spec_val_security_rm: "Direct local room transfer, zero external servers",
    spec_val_license_closed: "Free · Nguyễn Hoàng Tùng (@tungkernel)",

    dt_mind_category: "Offline Personal Assistant",
    dt_mind_lede: "Personal assistant running 100% on Windows CPU, remembering habits, schedules, and personal notes strictly offline.",
    dt_mind_coming_note: "In active development — download coming soon",
    dt_mind_badge_map: "Six-dimension personal map stored 100% locally",
    dt_mind_dim_1: "Profile",
    dt_mind_dim_2: "Habits",
    dt_mind_dim_3: "Schedules",
    dt_mind_dim_4: "Relationships",
    dt_mind_dim_5: "Personality",
    dt_mind_dim_6: "Strengths & Notes",
    dt_mind_f1_title: "Six-dimension memory map",
    dt_mind_f1_desc: "Organizes your profile, daily habits, schedules, preferences, and contacts cleanly on your own device.",
    dt_mind_f2_title: "Guided & conversational learning",
    dt_mind_f2_desc: "Combines quick initial setup forms with automatic updates from everyday conversations.",
    dt_mind_f3_title: "100% CPU execution",
    dt_mind_f3_desc: "Tuned for everyday laptops without a dedicated GPU (8 GB RAM or more recommended).",
    dt_mind_f4_title: "Full data ownership",
    dt_mind_f4_desc: "Nothing leaves your computer. Inspect, edit, or delete any stored item whenever you want.",
    spec_mind_resp_label: "Response latency",
    spec_mind_resp_val: "Under 1.5 seconds to first word",
    spec_mind_speed_label: "Hardware target",
    spec_mind_speed_val: "Everyday CPU · 8 GB RAM or higher",
    spec_mind_sec_val: "100% On-device, zero external servers",
    spec_mind_net_val: "No Internet required (100% Offline)",

    qs_badge: "3 SIMPLE STEPS",
    qs_title: "Get started in one minute",
    qs_sub: "No account signup or manual network setup required.",
    qs_step1_title: "Download the app",
    qs_step1: "Open [Apps & Downloads] and install the package for each computer you want to connect.",
    qs_step2_title: "Join the same Wi-Fi or LAN",
    qs_step2: "Connect your computers to the same Wi-Fi router or local cable and launch the app.",
    qs_step3_title: "Pair once and start working",
    qs_step3: "Devices find each other automatically. Confirm the 6-digit code once and start transferring or controlling.",

    faq_badge: "FAQ",
    faq_title: "Frequently Asked Questions",
    faq_search_placeholder: "Search answers (e.g., offline, macOS, warning, sponsor...)",
    faq_q1: "Does it still work when my Internet is down?",
    faq_a1: "Yes. As long as both computers are connected to the same Wi-Fi router or local network cable, transfers and control run at full speed even without Internet access.",
    faq_q2: "Is any of my data sent to external servers?",
    faq_a2: "Never. Everything travels directly and securely between your devices on the local network. There are no cloud servers, no accounts, and no usage tracking.",
    faq_q3: "Are the apps free and without file size limits?",
    faq_a3: "Yes — completely free, ad-free, and with no file size or session limits. ZCL Teleport is open-source under GPL-3.0.",
    faq_q4: "Why does Windows or macOS show a security warning on first launch?",
    faq_a4: 'As an independent project without commercial code-signing certificates yet, your OS may flag new downloads. On Windows, click "More info" → "Run anyway" and allow Private networks. On macOS, right-click the app → choose Open and allow Local Network access.',
    faq_q5: "What determines maximum transfer speed?",
    faq_a5: "Speed depends directly on your local Wi-Fi or wired network: typical Wi-Fi reaches 30–80 MB/s, while Wi-Fi 6 or wired Gigabit/multi-Gigabit links reach 100 MB/s up to nearly 1 GB/s.",
    faq_q6: "If a large transfer drops mid-way, do I have to start over?",
    faq_a6: "No. ZCL Teleport tracks completed portions and automatically resumes from where it stopped once both computers reconnect.",
    faq_q7: "How can I support ongoing development?",
    faq_a7: "You can scan the VietQR code or use bank transfer via the Sponsor button in the top bar. Support is completely optional and never gates features.",
    faq_empty_title: "No matching questions found",
    faq_empty_sub: "Try another keyword or reset the search to view all questions.",
    faq_btn_reset: "Show all questions",

    footer_desc: "Faster, smoother, and completely private across computers in the same room.",
    footer_apps: "Apps",
    footer_res: "Navigation",
    footer_feedback: "Feedback & Bug Report",
    footer_donate: "Support the Project",
    footer_contact: "Author & Contact",
    footer_rights: "Open-source GPL-3.0. Built by Nguyễn Hoàng Tùng.",

    modal_close_btn: "Close",
    modal_btn_start: "Start Download",
    modal_smartscreen_tip: '<strong>Tip:</strong> If Windows flags a new file, click <em>"More info"</em> &rarr; choose <em>"Run anyway"</em>.',
    modal_mac_tip: '<strong>macOS tip:</strong> On first launch, right-click the app &rarr; choose <em>"Open"</em> and grant Local Network access.',
    modal_linux_tip: '<strong>Linux tip:</strong> Run <code>chmod +x Teleport-*.AppImage</code> and launch the AppImage directly.',
    toast_downloading: "Starting download...",

    fb_modal_title: "Feedback & Bug Report",
    fb_modal_desc: "Share your thoughts or report an issue to help improve ZCL Hub.",
    fb_rating_label: "Your satisfaction:",
    fb_rating_1: "Unsatisfied (1 star)",
    fb_rating_2: "Needs work (2 stars)",
    fb_rating_3: "Neutral (3 stars)",
    fb_rating_4: "Satisfied (4 stars)",
    fb_rating_5: "Outstanding (5 stars)",
    fb_type_label: "Feedback type:",
    fb_cat_feature: "Feature request",
    fb_cat_bug: "Bug report",
    fb_cat_review: "User experience",
    fb_cat_other: "Other",
    fb_app_label: "Related app:",
    fb_app_all: "ZCL Hub (General)",
    fb_app_tp: "ZCL Teleport",
    fb_app_rm: "ZCL Remote",
    fb_app_mind: "ZCL Mind",
    fb_msg_label: "Message or issue details:",
    fb_msg_ph: "Share what you liked, what feature you need, or details about a bug...",
    fb_name_label: "Your name or nickname (optional):",
    fb_name_ph: "e.g. Alex, Minh...",
    fb_email_label: "Contact email (optional):",
    fb_email_ph: "you@example.com",
    fb_btn_submit: "Send Feedback",
    fb_submitting: "Sending feedback...",
    fb_success_title: "Thank you for your feedback!",
    fb_success_desc: "Your feedback has been recorded. You can also send it via email or copy the message below.",
    fb_btn_mail: "Email the author",
    fb_btn_copy: "Copy content",
    fb_btn_another: "Send another message",
    fb_toast_sent: "Feedback sent to the author successfully!",
    fb_toast_submitted: "Feedback saved successfully!",
    fb_toast_copied: "Feedback copied to clipboard!",

    dn_modal_title: "Support ZCL Hub",
    dn_modal_desc: "Scan VietQR to support ZCL Hub.",
    dn_amount_20k: "20,000 VND · Coffee",
    dn_amount_50k: "50,000 VND · Boost",
    dn_amount_100k: "100,000 VND · Supporter",
    dn_amount_custom: "Custom",
    dn_bank_label: "Bank:",
    dn_bank_val: "MB Bank (Vietnam)",
    dn_acc_num_label: "Account number:",
    dn_msg_label: "Transfer note:",
    dn_btn_copy_acc: "Copy account",
    dn_btn_copy_msg: "Copy note",
    dn_btn_confirm: "I have transferred · Confirm support",
    dn_confirm_hint: "Click after completing your QR scan or bank transfer",
    dn_toast_acc_copied: "Copied MB Bank account: 0906279876",
    dn_toast_msg_copied: "Copied transfer note: ZCL Hub",

    ty_badge: "APPRECIATION",
    ty_title: "Thank you for supporting us!",
    ty_subtitle: "Thank you for supporting us · Cảm ơn bạn đã đồng hành cùng ZCL Hub",
    ty_message: "Your generous support helps keep ZCL Hub free, fast, private, and independently maintained for the community.",
    ty_project_name: "ZCL Hub",
    ty_project_role: "Independent open-source project",
    ty_btn_home: "Back to home",
    ty_btn_feedback: "Leave a note / Feedback",
    ty_toast: "Thank you for supporting ZCL Hub!"
  }
};

const SCREENSHOT_MAP = {
  vi: {
    discovery: "assets/screenshots/tim-may-moi.png",
    receive: "assets/screenshots/hoi-nhan-file.png",
    qr: "assets/screenshots/web-qr-khach.png",
    settings: "assets/screenshots/tu-dong-hoa-cai-dat.png"
  },
  en: {
    discovery: "assets/screenshots/en-device-discovery.png",
    receive: "assets/screenshots/en-receive-prompt.png",
    qr: "assets/screenshots/en-web-guest.png",
    settings: "assets/screenshots/en-transfer-settings.png"
  }
};

function detectInitialLang() {
  try {
    const saved = localStorage.getItem('zcl_lang');
    if (saved === 'vi' || saved === 'en') return saved;
  } catch (e) {}
  const navLang = (navigator.language || 'vi').toLowerCase();
  return navLang.startsWith('vi') ? 'vi' : 'en';
}

let currentLang = detectInitialLang();
let currentPreviewShot = 'discovery';

function updateScreenshotsForLanguage(lang) {
  const map = SCREENSHOT_MAP[lang] || SCREENSHOT_MAP.vi;
  document.querySelectorAll('.lang-screenshot[data-shot]').forEach((img) => {
    const key = img.getAttribute('data-shot');
    if (map[key]) img.src = map[key];
  });
  const heroImg = document.getElementById('heroPreviewImg');
  if (heroImg && map[currentPreviewShot]) {
    heroImg.src = map[currentPreviewShot];
  }
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('zcl_lang', lang);
  } catch (e) {}
  document.documentElement.lang = lang;
  document.title = i18n[lang].page_title;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key] !== undefined) {
      el.innerHTML = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (i18n[lang][key] !== undefined) {
      el.placeholder = i18n[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (i18n[lang][key] !== undefined) {
      el.title = i18n[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  updateScreenshotsForLanguage(lang);
  updateHeroDownloadButtonLabel();

  if (typeof updateTabSlidingIndicator === 'function') {
    updateTabSlidingIndicator();
  }
}

// ==========================================
// 2. HERO REAL SCREENSHOT PREVIEW SWITCHER
// ==========================================
function initHeroPreview() {
  const buttons = document.querySelectorAll('.preview-tab-btn[data-shot]');
  const img = document.getElementById('heroPreviewImg');
  const caption = document.getElementById('heroPreviewCaption');
  if (!buttons.length || !img) return;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const shot = btn.getAttribute('data-shot');
      if (!shot) return;
      currentPreviewShot = shot;

      buttons.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', active ? 'true' : 'false');
      });

      const map = SCREENSHOT_MAP[currentLang] || SCREENSHOT_MAP.vi;
      if (map[shot]) img.src = map[shot];

      if (caption) {
        const capKey = `shot_cap_${shot}`;
        caption.setAttribute('data-i18n', capKey);
        if (i18n[currentLang] && i18n[currentLang][capKey]) {
          caption.textContent = i18n[currentLang][capKey];
        }
      }
    });
  });
}

// ==========================================
// 3. 3-TAB NAVIGATION & APP DETAIL ROUTING
// ==========================================
function showAppDetail(appName, updateHash = true) {
  const views = document.querySelectorAll('#tab-apps .apps-view');
  views.forEach((v) => v.classList.remove('active-app-view'));

  let targetId = 'appsCatalogView';
  if (appName === 'teleport') targetId = 'appDetailTeleport';
  else if (appName === 'remote') targetId = 'appDetailRemote';
  else if (appName === 'mind') targetId = 'appDetailMind';

  const targetEl = document.getElementById(targetId);
  if (targetEl) targetEl.classList.add('active-app-view');

  if (updateHash) {
    const newHash = appName ? `#apps/${appName}` : '#apps';
    if (window.location.hash !== newHash) {
      history.replaceState(null, null, newHash);
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTabSlidingIndicator() {
  const indicator = document.getElementById('tabSlidingIndicator');
  const activeTab = document.querySelector('.main-tab-pill.active');
  if (!indicator) return;

  if (!activeTab) {
    indicator.style.opacity = '0';
    return;
  }

  indicator.style.width = `${activeTab.offsetWidth}px`;
  indicator.style.transform = `translateX(${activeTab.offsetLeft}px)`;
  indicator.style.opacity = '1';
}

function switchMainTab(targetTabId, updateHash = true) {
  if (!targetTabId) return;
  let normalizedId = targetTabId.startsWith('tab-') ? targetTabId : `tab-${targetTabId}`;
  // Redirect legacy hashes (#download, #studio) cleanly to #apps
  if (normalizedId === 'tab-download' || normalizedId === 'tab-studio') {
    normalizedId = 'tab-apps';
  }

  const targetView = document.getElementById(normalizedId);
  if (!targetView) return;

  document.querySelectorAll('.tab-view').forEach((v) => v.classList.remove('active'));
  targetView.classList.add('active');

  document.querySelectorAll('.main-tab-pill').forEach((pill) => {
    const isMatch = pill.getAttribute('data-tab') === normalizedId;
    pill.classList.toggle('active', isMatch);
    pill.setAttribute('aria-selected', isMatch ? 'true' : 'false');
  });

  const cleanId = normalizedId.replace('tab-', '');
  const brandLink = document.querySelector('.site-header .brand');
  if (brandLink) {
    brandLink.classList.toggle('active', cleanId === 'overview');
  }

  if (updateHash) {
    const targetHash = `#${cleanId}`;
    if (window.location.hash !== targetHash && !(cleanId === 'apps' && window.location.hash.startsWith('#apps/'))) {
      history.replaceState(null, null, targetHash);
    }
  }

  updateTabSlidingIndicator();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleRouteHash(hashStr) {
  const clean = (hashStr || '#overview').replace(/^#/, '').toLowerCase();
  if (clean === 'feedback') {
    switchMainTab('tab-overview', false);
    if (typeof window.openFeedbackDonateModal === 'function') window.openFeedbackDonateModal('feedback');
    return;
  }
  if (clean === 'donate') {
    switchMainTab('tab-overview', false);
    if (typeof window.openFeedbackDonateModal === 'function') window.openFeedbackDonateModal('donate');
    return;
  }
  if (clean.startsWith('apps/')) {
    const appName = clean.split('/')[1];
    switchMainTab('tab-apps', false);
    showAppDetail(appName, false);
    return;
  }
  if (clean === 'apps' || clean === 'download') {
    switchMainTab('tab-apps', false);
    showAppDetail(null, false);
    return;
  }
  if (clean === 'faq') {
    switchMainTab('tab-faq', false);
    return;
  }
  switchMainTab('tab-overview', false);
}

function initMainTabs() {
  document.querySelectorAll('[data-tab]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const targetTab = el.getAttribute('data-tab');
      const appTarget = el.getAttribute('data-app-target');
      if (targetTab) {
        e.preventDefault();
        switchMainTab(targetTab, !appTarget);
        if (targetTab === 'tab-apps') {
          showAppDetail(appTarget || null, true);
        }
      }
    });
  });

  document.querySelectorAll('[data-action="open-detail"]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const appTarget = btn.getAttribute('data-app-target');
      switchMainTab('tab-apps', false);
      showAppDetail(appTarget, true);
    });
  });

  document.querySelectorAll('[data-action="back-to-catalog"]').forEach((btn) => {
    btn.addEventListener('click', () => showAppDetail(null, true));
  });

  window.addEventListener('hashchange', () => handleRouteHash(window.location.hash));
  window.addEventListener('resize', updateTabSlidingIndicator);

  handleRouteHash(window.location.hash || '#overview');
  setTimeout(updateTabSlidingIndicator, 100);
}

// ==========================================
// 4. DOWNLOAD REGISTRY & GITHUB RELEASES SYNC
// ==========================================
const DOWNLOAD_REGISTRY = {
  teleport: {
    name: 'ZCL Teleport',
    repo: 'Nha-Cong-Dong/zero-cloud-lan-teleport',
    version: 'v1.8.0',
    isLive: true,
    releaseUrl: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/latest',
    files: {
      exe: {
        name: 'teleport-setup-1.8.0-x64.exe',
        size: '25.4 MB',
        osLabel: 'Windows 10/11',
        url: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/download/v1.8.0/teleport-setup-1.8.0-x64.exe'
      },
      zip: {
        name: 'teleport-gui-1.8.0-windows-x64.zip',
        size: '33.5 MB',
        osLabel: 'Windows 10/11 (Portable)',
        url: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/download/v1.8.0/teleport-gui-1.8.0-windows-x64.zip'
      },
      cli: {
        name: 'teleport-cli-1.8.0-windows-x64.zip',
        size: '14.9 MB',
        osLabel: 'Windows CLI',
        url: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/download/v1.8.0/teleport-cli-1.8.0-windows-x64.zip'
      },
      dmg: {
        name: 'Teleport-1.8.0-macOS.dmg',
        size: '41.1 MB',
        osLabel: 'macOS',
        url: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/download/v1.8.0/Teleport-1.8.0-macOS.dmg'
      },
      appimage: {
        name: 'Teleport-1.8.0-x86_64.AppImage',
        size: '72.7 MB',
        osLabel: 'Linux (x86_64)',
        url: 'https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/releases/download/v1.8.0/Teleport-1.8.0-x86_64.AppImage'
      }
    }
  },
  remote: {
    name: 'ZCL Remote',
    repo: 'tungkernel/zcl-hub',
    assetPrefix: 'zcl-remote',
    version: 'v0.2.0',
    isLive: true,
    releaseUrl: 'https://github.com/tungkernel/zcl-hub/releases/tag/v0.2.0',
    files: {
      exe: {
        name: 'zcl-remote-setup-0.2.0-x64.exe',
        size: '72.0 MB',
        osLabel: 'Windows 10/11',
        url: 'https://github.com/tungkernel/zcl-hub/releases/download/v0.2.0/zcl-remote-setup-0.2.0-x64.exe'
      },
      zip: {
        name: 'zcl-remote-gui-0.2.0-windows-x64.zip',
        size: '108.6 MB',
        osLabel: 'Windows 10/11 (Portable)',
        url: 'https://github.com/tungkernel/zcl-hub/releases/download/v0.2.0/zcl-remote-gui-0.2.0-windows-x64.zip'
      }
    }
  },
  mind: {
    name: 'ZCL Mind',
    repo: 'tungkernel/zcl-hub',
    version: 'v0.1.0-alpha',
    isLive: false,
    releaseUrl: 'https://github.com/tungkernel/zcl-hub/releases',
    files: {}
  }
};

let currentDownloadTarget = { app: 'teleport', format: 'exe' };

function detectUserTeleportFormat() {
  const ua = (navigator.userAgent || '').toLowerCase();
  const platform = (navigator.platform || '').toLowerCase();
  if (platform.includes('mac') || ua.includes('macintosh')) return 'dmg';
  if (platform.includes('linux') || (ua.includes('linux') && !ua.includes('android'))) return 'appimage';
  return 'exe';
}

function updateHeroDownloadButtonLabel() {
  const btnText = document.getElementById('heroPrimaryDownloadText');
  if (!btnText) return;
  const ver = DOWNLOAD_REGISTRY.teleport.version;
  const fmt = detectUserTeleportFormat();
  const isVi = currentLang === 'vi';
  if (fmt === 'dmg') {
    btnText.textContent = isVi ? `Tải ZCL Teleport ${ver} (macOS)` : `Download ZCL Teleport ${ver} (macOS)`;
  } else if (fmt === 'appimage') {
    btnText.textContent = isVi ? `Tải ZCL Teleport ${ver} (Linux)` : `Download ZCL Teleport ${ver} (Linux)`;
  } else {
    btnText.textContent = isVi ? `Tải ZCL Teleport ${ver}` : `Download ZCL Teleport ${ver}`;
  }
}

function formatFileSize(bytes) {
  if (!bytes || bytes <= 0) return '';
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function refreshTeleportVersionUI() {
  const tp = DOWNLOAD_REGISTRY.teleport;
  ['ovTpVersion', 'catalogTpVersion'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = tp.version;
  });
  const pill = document.getElementById('detailTpStatusPill');
  if (pill) {
    pill.textContent = currentLang === 'vi' ? `Chính thức · ${tp.version}` : `Official · ${tp.version}`;
  }
  const winMeta = document.getElementById('tpWinMeta');
  const macMeta = document.getElementById('tpMacMeta');
  const linuxMeta = document.getElementById('tpLinuxMeta');
  if (winMeta) winMeta.textContent = `${tp.version} · 64-bit`;
  if (macMeta) macMeta.textContent = `${tp.version} · .dmg`;
  if (linuxMeta) linuxMeta.textContent = `${tp.version} · AppImage`;
  updateHeroDownloadButtonLabel();
}

async function syncReleasesFromGitHub() {
  try {
    const res = await fetch(`https://api.github.com/repos/${DOWNLOAD_REGISTRY.teleport.repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' }
    });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.tag_name || !Array.isArray(data.assets)) return;

    const tp = DOWNLOAD_REGISTRY.teleport;
    tp.version = data.tag_name;
    tp.releaseUrl = data.html_url || tp.releaseUrl;

    data.assets.forEach((asset) => {
      const name = asset.name || '';
      const lower = name.toLowerCase();
      const size = formatFileSize(asset.size);
      if (lower.endsWith('.exe')) {
        tp.files.exe = { ...tp.files.exe, name, size, url: asset.browser_download_url };
      } else if (lower.includes('-gui-') && lower.endsWith('.zip')) {
        tp.files.zip = { ...tp.files.zip, name, size, url: asset.browser_download_url };
      } else if (lower.includes('-cli-') && lower.endsWith('.zip')) {
        tp.files.cli = { ...tp.files.cli, name, size, url: asset.browser_download_url };
      } else if (lower.endsWith('.dmg')) {
        tp.files.dmg = { ...tp.files.dmg, name, size, url: asset.browser_download_url };
      } else if (lower.endsWith('.appimage')) {
        tp.files.appimage = { ...tp.files.appimage, name, size, url: asset.browser_download_url };
      }
    });

    refreshTeleportVersionUI();
  } catch (e) {
    // Offline or API rate-limited: fallback registry values remain active
  }
}

function showToast(message) {
  const toast = document.getElementById('toastMsg');
  const textEl = document.getElementById('toastText');
  if (!toast || !textEl) return;

  textEl.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._hideTimer);
  toast._hideTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

function triggerDirectFileDownload(appKey, format = 'exe') {
  const entry = DOWNLOAD_REGISTRY[appKey];
  if (!entry || !entry.isLive || !entry.files[format]) return;
  const file = entry.files[format];
  const a = document.createElement('a');
  a.href = file.url;
  a.download = file.name;
  a.rel = 'noopener noreferrer';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast(i18n[currentLang].toast_downloading || 'Starting download...');
}

function initDownloadModal() {
  const modal = document.getElementById('downloadModal');
  const btnClose = document.getElementById('btnModalClose');
  const btnTrigger = document.getElementById('btnTriggerDownload');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDesc');
  const nameEl = document.getElementById('modalFileName');
  const sizeEl = document.getElementById('modalFileSize');
  const tipEl = document.getElementById('modalPlatformTip');
  const githubEl = document.getElementById('modalGithubLink');

  if (!modal) return;

  function openModal(appKey, rawFormat) {
    const entry = DOWNLOAD_REGISTRY[appKey];
    if (!entry || !entry.isLive) return;
    const format = rawFormat === 'auto' ? detectUserTeleportFormat() : rawFormat;
    const file = entry.files[format] || entry.files.exe;
    if (!file) return;

    currentDownloadTarget = { app: appKey, format };
    const isVi = currentLang === 'vi';

    if (titleEl) titleEl.textContent = isVi ? `Tải ${entry.name}` : `Download ${entry.name}`;
    if (descEl) descEl.textContent = `${entry.version} · ${file.osLabel || 'Windows 10/11'}`;
    if (nameEl) nameEl.textContent = file.name;
    if (sizeEl) sizeEl.textContent = file.size;
    if (githubEl) githubEl.href = entry.releaseUrl;

    if (tipEl) {
      let tipKey = 'modal_smartscreen_tip';
      if (format === 'dmg') tipKey = 'modal_mac_tip';
      else if (format === 'appimage') tipKey = 'modal_linux_tip';
      tipEl.setAttribute('data-i18n', tipKey);
      tipEl.innerHTML = i18n[currentLang][tipKey];
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-open-download').forEach((btn) => {
    btn.addEventListener('click', () => {
      const appKey = btn.getAttribute('data-app') || 'teleport';
      const format = btn.getAttribute('data-format') || 'exe';
      openModal(appKey, format);
    });
  });

  if (btnTrigger) {
    btnTrigger.addEventListener('click', () => {
      triggerDirectFileDownload(currentDownloadTarget.app, currentDownloadTarget.format);
      closeModal();
    });
  }

  if (btnClose) btnClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });
}

// ==========================================
// 5. FAQ ACCORDION & INSTANT SEARCH
// ==========================================
function initFaq() {
  document.querySelectorAll('.faq-question').forEach((btn) => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (item) item.classList.toggle('active');
    });
  });
}

function removeVietnameseAccents(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase();
}

function initFaqSearch() {
  const input = document.getElementById('faqSearchInput');
  const clearBtn = document.getElementById('faqSearchClear');
  const metaEl = document.getElementById('faqSearchMeta');
  const countText = document.getElementById('faqSearchCountText');
  const emptyState = document.getElementById('faqEmptyState');
  const resetBtn = document.getElementById('btnFaqReset');
  const items = document.querySelectorAll('#faqGrid .faq-item');

  if (!input || !items.length) return;

  function runFilter() {
    const query = removeVietnameseAccents(input.value.trim());
    let visibleCount = 0;

    items.forEach((item) => {
      const text = removeVietnameseAccents(item.textContent);
      const match = !query || text.includes(query);
      item.style.display = match ? '' : 'none';
      if (match) {
        visibleCount++;
        if (query) item.classList.add('active');
      }
    });

    if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
    if (metaEl) metaEl.style.display = query ? 'block' : 'none';
    if (countText) {
      countText.textContent = currentLang === 'vi'
        ? `Tìm thấy ${visibleCount} câu trả lời`
        : `Found ${visibleCount} matching answers`;
    }
    if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  input.addEventListener('input', runFilter);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      runFilter();
      input.focus();
    });
  }
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      input.value = '';
      runFilter();
    });
  }
}

// ==========================================
// 6. THEME TOGGLE, ECO MODE & BACKGROUND EFFECTS
// ==========================================
const THEME_STORAGE_KEY = 'zcl_theme';

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {}
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  const metaScheme = document.querySelector('meta[name="color-scheme"]');
  if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#FBF6EC' : '#09080c');
  if (metaScheme) metaScheme.setAttribute('content', theme);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {}
}

function initThemeToggle() {
  applyTheme(getPreferredTheme());
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
  });
}

let isEcoModeActive = false;
try {
  isEcoModeActive = localStorage.getItem('zcl_eco_mode') === 'true';
} catch (e) {}

function initEcoMode() {
  const btnEco = document.getElementById('ecoToggleBtn');
  if (isEcoModeActive) document.body.classList.add('eco-mode');

  if (btnEco) {
    btnEco.addEventListener('click', () => {
      isEcoModeActive = !isEcoModeActive;
      document.body.classList.toggle('eco-mode', isEcoModeActive);
      try {
        localStorage.setItem('zcl_eco_mode', isEcoModeActive ? 'true' : 'false');
      } catch (e) {}
      showToast(isEcoModeActive ? i18n[currentLang].eco_enabled_toast : i18n[currentLang].eco_disabled_toast);
      if (!isEcoModeActive && typeof window.resumeBgParticles === 'function') {
        window.resumeBgParticles();
      }
    });
  }
}

function initBackgroundEffects() {
  const spotlight = document.getElementById('bgMouseSpotlight');
  const canvas = document.getElementById('bgParticlesCanvas');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (spotlight && !window.matchMedia('(hover: none)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        spotlight.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      spotlight.style.opacity = '0';
    });

    function animateSpotlight() {
      if (isVisible) {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        spotlight.style.left = `${currentX}px`;
        spotlight.style.top = `${currentY}px`;
      }
      requestAnimationFrame(animateSpotlight);
    }
    requestAnimationFrame(animateSpotlight);
  }

  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let animationId = null;
  let isPageVisible = !document.hidden;

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  resizeCanvas();

  const isMobile = window.innerWidth < 768;
  const nodeCount = isMobile ? 16 : 30;
  const nodes = [];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.2 + 1.0,
      baseAlpha: Math.random() * 0.32 + 0.22,
      pulseSpeed: Math.random() * 0.015 + 0.008,
      phase: Math.random() * Math.PI * 2,
      isMint: Math.random() > 0.45
    });
  }

  const mousePos = { x: -1000, y: -1000 };
  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  }, { passive: true });
  window.addEventListener('mouseleave', () => {
    mousePos.x = -1000;
    mousePos.y = -1000;
  });

  function renderNodes() {
    if (!isPageVisible || document.body.classList.contains('eco-mode')) {
      animationId = null;
      return;
    }

    ctx.clearRect(0, 0, width, height);
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const mintColor = isLight ? '11, 94, 71' : '133, 237, 202';
    const lilacColor = isLight ? '75, 46, 145' : '206, 163, 243';

    const maxDist = isMobile ? 95 : 125;
    const mouseConnectDist = 130;
    const maxDistSq = maxDist * maxDist;
    const mouseDistSq = mouseConnectDist * mouseConnectDist;

    for (let i = 0; i < nodes.length; i++) {
      const n1 = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const n2 = nodes[j];
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          const alpha = (1 - dist / maxDist) * (isLight ? 0.1 : 0.14);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${n1.isMint ? mintColor : lilacColor}, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.stroke();
        }
      }

      if (mousePos.x > 0 && mousePos.y > 0) {
        const mdx = n1.x - mousePos.x;
        const mdy = n1.y - mousePos.y;
        const mDistSq = mdx * mdx + mdy * mdy;
        if (mDistSq < mouseDistSq) {
          const mDist = Math.sqrt(mDistSq);
          const mAlpha = (1 - mDist / mouseConnectDist) * (isLight ? 0.16 : 0.22);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${mintColor}, ${mAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(mousePos.x, mousePos.y);
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      if (!prefersReduced) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) { n.x = 0; n.vx *= -1; }
        else if (n.x > width) { n.x = width; n.vx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; }
        else if (n.y > height) { n.y = height; n.vy *= -1; }
        n.phase += n.pulseSpeed;
      }
      const pulse = 1 + Math.sin(n.phase) * 0.25;
      const alpha = n.baseAlpha * (isLight ? 0.55 : 0.8);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.isMint ? mintColor : lilacColor}, ${alpha})`;
      ctx.fill();
    }

    if (!prefersReduced) {
      animationId = requestAnimationFrame(renderNodes);
    }
  }

  if (!prefersReduced) {
    animationId = requestAnimationFrame(renderNodes);
  } else {
    renderNodes();
  }

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resizeCanvas();
      if (prefersReduced) renderNodes();
    }, 150);
  });

  document.addEventListener('visibilitychange', () => {
    isPageVisible = !document.hidden;
    if (isPageVisible && !prefersReduced && !document.body.classList.contains('eco-mode') && !animationId) {
      animationId = requestAnimationFrame(renderNodes);
    } else if (!isPageVisible && animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  });

  window.resumeBgParticles = function () {
    if (isPageVisible && !prefersReduced && !document.body.classList.contains('eco-mode') && !animationId) {
      animationId = requestAnimationFrame(renderNodes);
    }
  };
}

function initTabScrollFades() {
  const wrapper = document.getElementById('navTabsWrapper');
  if (!wrapper) return;
  function updateFades() {
    const scrollLeft = wrapper.scrollLeft;
    const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
    wrapper.classList.toggle('can-scroll-left', scrollLeft > 8);
    wrapper.classList.toggle('can-scroll-right', scrollLeft < maxScroll - 8);
  }
  wrapper.addEventListener('scroll', updateFades, { passive: true });
  window.addEventListener('resize', updateFades, { passive: true });
  setTimeout(updateFades, 150);
}

function initBackToTop() {
  const btn = document.getElementById('btnBackToTop');
  const ring = document.getElementById('progressRingCircle');
  if (!btn) return;
  const circumference = 2 * Math.PI * 19;
  if (ring) {
    ring.style.strokeDasharray = `${circumference}`;
    ring.style.strokeDashoffset = `${circumference}`;
  }

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    btn.classList.toggle('visible', scrollTop > 280);
    if (ring && docHeight > 0) {
      const progress = Math.min(scrollTop / docHeight, 1);
      ring.style.strokeDashoffset = `${circumference * (1 - progress)}`;
    }
  }, { passive: true });

  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === '1') switchMainTab('tab-overview');
    else if (e.key === '2') { switchMainTab('tab-apps'); showAppDetail(null, true); }
    else if (e.key === '3') switchMainTab('tab-faq');
  });
}

// ==========================================
// 7. FEEDBACK, DONATE & THANK-YOU MODALS
// ==========================================
function initFeedbackSystem() {
  function setupStars(containerId, textId) {
    const container = document.getElementById(containerId);
    const textEl = document.getElementById(textId);
    if (!container) return { getRating: () => 5, reset: () => {} };
    let currentRating = 5;
    const starBtns = container.querySelectorAll('.fb-star-btn');

    function updateStars(val) {
      currentRating = val;
      starBtns.forEach((btn) => {
        const r = parseInt(btn.getAttribute('data-rating'), 10);
        btn.classList.toggle('active', r <= val);
      });
      if (textEl) {
        const key = `fb_rating_${val}`;
        textEl.setAttribute('data-i18n', key);
        textEl.textContent = (i18n[currentLang] && i18n[currentLang][key]) || `${val}`;
      }
    }

    starBtns.forEach((btn) => {
      btn.addEventListener('click', () => updateStars(parseInt(btn.getAttribute('data-rating'), 10)));
    });
    return { getRating: () => currentRating, reset: () => updateStars(5) };
  }

  function setupChips(groupId) {
    const group = document.getElementById(groupId);
    if (!group) return { getValue: () => '', setValue: () => {} };
    let activeVal = '';
    const firstActive = group.querySelector('.fb-chip.active');
    if (firstActive) activeVal = firstActive.getAttribute('data-cat') || firstActive.getAttribute('data-app') || '';

    group.querySelectorAll('.fb-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.fb-chip').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeVal = btn.getAttribute('data-cat') || btn.getAttribute('data-app') || '';
      });
    });

    return {
      getValue: () => activeVal,
      setValue: (val) => {
        group.querySelectorAll('.fb-chip').forEach((b) => {
          const v = b.getAttribute('data-cat') || b.getAttribute('data-app');
          b.classList.toggle('active', v === val);
        });
        activeVal = val;
      }
    };
  }

  const modalStars = setupStars('modalFbRatingStars', 'modalFbRatingText');
  const modalCat = setupChips('modalFbCatGroup');
  const modalApp = setupChips('modalFbAppGroup');

  const modalForm = document.getElementById('modalFeedbackForm');
  const modalSuccess = document.getElementById('modalFbSuccessState');
  if (!modalForm || !modalSuccess) return;

  modalForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const msgInput = document.getElementById('modalFbMessage');
    const nameInput = document.getElementById('modalFbName');
    const emailInput = document.getElementById('modalFbEmail');
    const submitBtn = document.getElementById('modalFbSubmitBtn');
    const msg = msgInput ? msgInput.value.trim() : '';

    if (!msg) {
      if (msgInput) {
        msgInput.focus();
        msgInput.classList.add('input-error');
        setTimeout(() => msgInput.classList.remove('input-error'), 2000);
      }
      return;
    }

    const catMap = {
      feature: i18n[currentLang].fb_cat_feature,
      bug: i18n[currentLang].fb_cat_bug,
      review: i18n[currentLang].fb_cat_review,
      other: i18n[currentLang].fb_cat_other
    };
    const appMap = {
      all: i18n[currentLang].fb_app_all,
      teleport: i18n[currentLang].fb_app_tp,
      remote: i18n[currentLang].fb_app_rm,
      mind: i18n[currentLang].fb_app_mind
    };

    const selectedCat = modalCat.getValue() || 'feature';
    const selectedApp = modalApp.getValue() || 'all';
    const entry = {
      id: Date.now(),
      rating: modalStars.getRating(),
      categoryLabel: catMap[selectedCat] || selectedCat,
      targetAppLabel: appMap[selectedApp] || selectedApp,
      name: nameInput ? nameInput.value.trim() : '',
      email: emailInput ? emailInput.value.trim() : '',
      message: msg
    };

    try {
      const existing = JSON.parse(localStorage.getItem('zcl_user_feedbacks') || '[]');
      existing.unshift(entry);
      localStorage.setItem('zcl_user_feedbacks', JSON.stringify(existing.slice(0, 20)));
    } catch (err) {}

    const btnMail = document.getElementById('modalFbBtnMail');
    if (btnMail) {
      const mailSubject = encodeURIComponent(`[ZCL Hub] ${entry.categoryLabel} - ${entry.targetAppLabel}`);
      const mailBody = encodeURIComponent(`Rating: ${entry.rating}/5\nType: ${entry.categoryLabel}\nApp: ${entry.targetAppLabel}\nName: ${entry.name || 'Anonymous'}\nEmail: ${entry.email || 'None'}\n\nMessage:\n${entry.message}`);
      btnMail.href = `mailto:hoangtungcnh@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    }

    const btnCopy = document.getElementById('modalFbBtnCopy');
    if (btnCopy) {
      btnCopy.onclick = () => {
        const text = `[ZCL Hub]\nRating: ${entry.rating}/5\nType: ${entry.categoryLabel}\nApp: ${entry.targetAppLabel}\nName: ${entry.name || 'Anonymous'}\nEmail: ${entry.email || 'None'}\n\n${entry.message}`;
        navigator.clipboard.writeText(text).then(() => showToast(i18n[currentLang].fb_toast_copied));
      };
    }

    const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="spin-icon"></span><span>${i18n[currentLang].fb_submitting}</span>`;
    }

    let networkSent = false;
    try {
      const response = await fetch('https://formsubmit.co/ajax/hoangtungcnh@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: entry.name || 'Anonymous',
          Email: entry.email || 'None',
          Rating: `${entry.rating}/5`,
          Category: entry.categoryLabel,
          App: entry.targetAppLabel,
          Message: entry.message,
          _subject: `[ZCL Hub] ${entry.categoryLabel} - ${entry.targetAppLabel} (${entry.rating}/5)`,
          _template: 'table',
          _captcha: 'false'
        })
      });
      if (response.ok) networkSent = true;
    } catch (err) {
      networkSent = false;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
      }
    }

    modalForm.style.display = 'none';
    modalSuccess.style.display = 'block';
    showToast(networkSent ? i18n[currentLang].fb_toast_sent : i18n[currentLang].fb_toast_submitted);
  });

  const btnAnother = document.getElementById('modalFbBtnAnother');
  if (btnAnother) {
    btnAnother.addEventListener('click', () => {
      modalForm.reset();
      modalStars.reset();
      modalCat.setValue('feature');
      modalApp.setValue('all');
      modalForm.style.display = 'block';
      modalSuccess.style.display = 'none';
    });
  }
}

function initDonateSystem() {
  const BANK_ACCOUNT = '0906279876';
  const MOMO_ACCOUNT = '0906279876';
  const DEFAULT_MEMO = 'ZCL Hub';

  const imgEl = document.getElementById('modalDonateQrImg');
  const memoEl = document.getElementById('modalDonateMemo');

  document.querySelectorAll('.modal-amount-picker .donate-amount-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.modal-amount-picker .donate-amount-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      const amount = parseInt(pill.getAttribute('data-amount') || '0', 10);
      const memo = pill.getAttribute('data-memo') || DEFAULT_MEMO;

      if (memoEl) memoEl.textContent = memo;
      if (imgEl) {
        const amountParam = amount > 0 ? `&amount=${amount}` : '';
        imgEl.src = `https://img.vietqr.io/image/MB-${BANK_ACCOUNT}-compact2.png?addInfo=${encodeURIComponent(memo)}${amountParam}`;
        const qrWrap = imgEl.closest('.donate-qr-wrapper');
        if (qrWrap) {
          qrWrap.classList.remove('qr-updating');
          void qrWrap.offsetWidth;
          qrWrap.classList.add('qr-updating');
          setTimeout(() => qrWrap.classList.remove('qr-updating'), 450);
        }
      }
    });
  });

  const btnCopyAcc = document.getElementById('btnModalCopyAcc');
  if (btnCopyAcc) {
    btnCopyAcc.addEventListener('click', () => {
      navigator.clipboard.writeText(BANK_ACCOUNT).then(() => showToast(i18n[currentLang].dn_toast_acc_copied));
    });
  }

  const btnCopyMemo = document.getElementById('btnModalCopyMemo');
  if (btnCopyMemo) {
    btnCopyMemo.addEventListener('click', () => {
      const text = memoEl ? memoEl.textContent.trim() : DEFAULT_MEMO;
      navigator.clipboard.writeText(text).then(() => showToast(i18n[currentLang].dn_toast_msg_copied));
    });
  }

  const btnCopyMomo = document.getElementById('btnModalCopyMomo');
  if (btnCopyMomo) {
    btnCopyMomo.addEventListener('click', () => {
      navigator.clipboard.writeText(MOMO_ACCOUNT).then(() => showToast(i18n[currentLang].dn_toast_momo_copied));
    });
  }

  const btnConfirm = document.getElementById('btnConfirmDonation');
  if (btnConfirm) {
    btnConfirm.addEventListener('click', () => {
      if (typeof window.closeFeedbackDonateModal === 'function') window.closeFeedbackDonateModal();
      setTimeout(() => {
        if (typeof window.openThankYouModal === 'function') window.openThankYouModal();
      }, 200);
      showToast(i18n[currentLang].ty_toast);
    });
  }
}

function initUnifiedFeedbackDonateModal() {
  const modal = document.getElementById('feedbackModal');
  if (!modal) return;

  const btnClose = document.getElementById('btnFeedbackModalClose');
  const tabFb = document.getElementById('modalTabBtnFeedback');
  const tabDn = document.getElementById('modalTabBtnDonate');
  const panelFb = document.getElementById('modalPanelFeedback');
  const panelDn = document.getElementById('modalPanelDonate');

  function setModalTab(tabName) {
    const isDonate = tabName === 'donate';
    if (tabFb) { tabFb.classList.toggle('active', !isDonate); tabFb.setAttribute('aria-selected', String(!isDonate)); }
    if (tabDn) { tabDn.classList.toggle('active', isDonate); tabDn.setAttribute('aria-selected', String(isDonate)); }
    if (panelFb) panelFb.classList.toggle('active', !isDonate);
    if (panelDn) panelDn.classList.toggle('active', isDonate);
  }

  function openModal(initialTab = 'feedback') {
    setModalTab(initialTab);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openFeedbackDonateModal = openModal;
  window.closeFeedbackDonateModal = closeModal;

  if (tabFb) tabFb.addEventListener('click', () => setModalTab('feedback'));
  if (tabDn) tabDn.addEventListener('click', () => setModalTab('donate'));
  if (btnClose) btnClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  const triggers = [
    ['btnHeaderFeedback', 'feedback'],
    ['footerLinkFeedback', 'feedback'],
    ['btnHeaderDonate', 'donate'],
    ['footerLinkDonate', 'donate']
  ];

  triggers.forEach(([id, tab]) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(tab);
      });
    }
  });
}

function initThankYouModal() {
  const modal = document.getElementById('donateThankYouModal');
  if (!modal) return;
  const btnClose = document.getElementById('btnThankYouModalClose');
  const btnHome = document.getElementById('btnThankYouBackHome');
  const btnFeedback = document.getElementById('btnThankYouLeaveMsg');

  function openThankYouModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeThankYouModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  window.openThankYouModal = openThankYouModal;
  window.closeThankYouModal = closeThankYouModal;

  if (btnClose) btnClose.addEventListener('click', closeThankYouModal);
  if (btnHome) {
    btnHome.addEventListener('click', () => {
      closeThankYouModal();
      switchMainTab('tab-overview');
    });
  }
  if (btnFeedback) {
    btnFeedback.addEventListener('click', () => {
      closeThankYouModal();
      setTimeout(() => {
        if (typeof window.openFeedbackDonateModal === 'function') window.openFeedbackDonateModal('feedback');
      }, 150);
    });
  }
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeThankYouModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeThankYouModal();
  });
}

function initServiceWorker() {
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ==========================================
// 8. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  const safeRun = (name, fn) => {
    try { fn(); } catch (err) { console.error(`[ZCL Hub Init] ${name}:`, err); }
  };

  safeRun('ThemeToggle', initThemeToggle);
  safeRun('Language', () => setLanguage(currentLang));

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });

  safeRun('HeroPreview', initHeroPreview);
  safeRun('MainTabs', initMainTabs);
  safeRun('Faq', initFaq);
  safeRun('FaqSearch', initFaqSearch);
  safeRun('DownloadModal', initDownloadModal);
  safeRun('GitHubReleases', syncReleasesFromGitHub);
  safeRun('KeyboardShortcuts', initKeyboardShortcuts);
  safeRun('BackToTop', initBackToTop);
  safeRun('BackgroundEffects', initBackgroundEffects);
  safeRun('EcoMode', initEcoMode);
  safeRun('TabScrollFades', initTabScrollFades);
  safeRun('FeedbackSystem', initFeedbackSystem);
  safeRun('DonateSystem', initDonateSystem);
  safeRun('UnifiedFeedbackDonateModal', initUnifiedFeedbackDonateModal);
  safeRun('ThankYouModal', initThankYouModal);
  safeRun('ServiceWorker', initServiceWorker);
});
