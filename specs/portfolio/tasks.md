---
description: "Danh sách công việc và lộ trình triển khai dự án AI Engineer Portfolio"
---

# Công việc: AI Engineer Portfolio

**Đầu vào**: Tài liệu thiết kế kiến trúc từ `specs/portfolio/plan.md`
**Yêu cầu tiên quyết**: Đọc file plan.md để nắm bối cảnh.

## Tóm tắt Giai đoạn (Phases)

| Giai đoạn | Tiêu đề | Trạng thái | Tasks | Phụ thuộc |
|-----------|---------|------------|-------|-----------|
| 1 | Cài đặt & Nền tảng | hoàn thành | 4 | - |
| 2 | Lập trình Component | hoàn thành | 5 | Giai đoạn 1 |
| 3 | Tinh chỉnh & Build | hoàn thành | 2 | Giai đoạn 2 |
| 4 | [Nâng cấp mở rộng](#giai-đoạn-4-nâng-cấp-mở-rộng) | hoàn thành | 5 | Giai đoạn 3 |

---

## Giai đoạn 1: Cài đặt & Nền tảng (Đã hoàn thành)
- [x] T001 Khởi tạo dự án Vite + React (sử dụng TypeScript) bằng lệnh CLI.
- [x] T002 Cấu hình `tsconfig.json`, `tsconfig.app.json`, và `vite.config.ts`.
- [x] T003 Cài đặt các thư viện lõi (`framer-motion` cho animation, `lucide-react` cho icons).
- [x] T004 Thiết lập CSS Variables toàn cục và Design System thông qua file `index.css`.

---

## Giai đoạn 2: Lập trình Component (Đã hoàn thành)
- [x] T005 [P] Khởi tạo hệ thống dữ liệu (Data Source) thành Module `portfolio.ts` từ file ngoại vi JSON.
- [x] T006 [P] Hoàn thiện 2 chức năng Header: Thanh điều hướng `Navbar.tsx` đa năng và trang bìa giới thiệu `Hero.tsx`.
- [x] T007 [P] Dựng Component `Skills.tsx` bằng việc lặp vòng các nhóm kỹ năng để hiển thị tag năng lực linh hoạt.
- [x] T008 [P] Code Component `Projects.tsx` tạo bố cục thẻ (card layer) hiển thị link Github và website demo.
- [x] T009 [P] Tích hợp Component `Awards.tsx` kết nối chứng chỉ và cài đặt Footer.

---

## Giai đoạn 3: Tinh chỉnh & Build (Đã hoàn thành)
- [x] T010 Lắp ráp mọi Component lại thành quy trình Logic trong vỏ bọc `App.tsx` và nạp vào trang `main.tsx`.
- [x] T011 Chạy giả lập đóng gói Production (`npm run build`) để xác minh mã lỗi.

---

## Giai đoạn 4: Nâng cấp mở rộng (Đã hoàn thành)

**Mục đích**: Thay đổi linh hồn của Website sang tông màu tươi sáng chuyên nghiệp (Light Mode), đồng thời tạo Vertical Timeline Học tập và Băng chuyền hình ảnh đam mê, ngoại khóa.

- [x] T012 Chỉnh sửa file `portfolio.ts`, thêm dữ liệu mảng mock-up (ảo) cho `education` và `extracurricular` bao gồm các trường và link hình ảnh placeholder.
- [x] T013 Tái cấu trúc lại `index.css`: Đảo lộn Variables sang các mã màu Light Mode (Nền off-white, text xám đậm, glassmorphism viền trắng nhạt có bóng box-shadow). Sửa lại màu nền card hover.
- [x] T014 [P] Xây dựng `Education.tsx` sử dụng cấu trúc Vertical Timeline và mốc thời gian thiết kế với Framer Motion mượt mà.
- [x] T015 [P] Xây dựng `Extracurricular.tsx` dưới định dạng Horizontal Carousel (băng chuyền ảnh) đẹp mắt và có hiệu ứng lướt.
- [x] T016 Hook (kết dính) `Education` và `Extracurricular` vào trong `App.tsx`, thay đổi `Navbar.tsx` cập nhật thêm thanh cuộn mục lục tương ứng (anchor links).

---

## Giai đoạn 5: Đồng bộ production & tài liệu vận hành (Đã hoàn thành)

**Mục đích**: Đồng bộ tài liệu với trạng thái triển khai thực tế trên GitHub Pages và quy trình nhánh an toàn.

- [x] T017 Xác nhận cấu hình production dùng GitHub Pages với `base: '/web-profile/'` trong `vite.config.ts`.
- [x] T018 Xác nhận dữ liệu tĩnh dùng `import.meta.env.BASE_URL` trong `src/data/portfolio.ts` để chạy đúng trên cả local và production.
- [x] T019 Thiết lập và xác nhận mô hình nhánh: `main` (production), `dev` (phát triển).
- [x] T020 Rà soát và cập nhật lại tài liệu `specs/portfolio/plan.md` và `specs/portfolio/tasks.md` khớp với trạng thái code hiện tại.
