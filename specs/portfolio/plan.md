---
title: "Website Portfolio AI Engineer"
description: "Sự hiện diện web portfolio chuyên nghiệp được xây dựng với React, Vite, và Vanilla CSS."
status: active
priority: P1
effort: 3h
branch: dev
tags: [frontend, react, portfolio, light-mode]
created: 2026-03-27
---

# Kế hoạch Triển khai: Website Portfolio AI Engineer

**Nhánh mã nguồn (Branch)**: `dev` (phát triển), `main` (production) | **Ngày**: 2026-03-27 | **Spec**: N/A
**Đầu vào**: Đặc tả tính năng từ bộ dữ liệu `portfolio.json` và yêu cầu bổ sung từ phiên `/ck-brainstorm`.

## Tóm tắt

Xây dựng website Portfolio kỹ sư AI chuyên nghiệp phục vụ cho mục tiêu tìm kiếm việc làm, được xây dựng sử dụng Vite + React + TypeScript. Giao diện được thiết kế hiện đại, cao cấp với Vanilla CSS (hiệu ứng chiều sâu Glassmorphism, **tông màu sáng Light mode UI**), và tạo các hoạt ảnh (animation) mượt mà bằng Framer Motion.

*Bản nâng cấp (Phase 4):*
Giao diện sẽ chuyển hoàn toàn sang Light Mode tông tươi sáng. Bổ sung thêm dòng thời gian học tập (Vertical Timeline) và băng chuyền ảnh ngoại khóa, đam mê (Interactive Carousel).

## Ngữ cảnh Kỹ thuật

**Ngôn ngữ/Phiên bản**: TypeScript 5.5, React 18, HTML5
**Dependencies chính (Thư viện)**: Vite, Framer Motion, Lucide React
**Lưu trữ (Storage)**: Dữ liệu tĩnh (`src/data/portfolio.ts`)
**Kiểm thử (Testing)**: Biên dịch bằng và soát lỗi thông qua `tsc` trước khi Bundle
**Nền tảng đích**: Trình duyệt Web đa nền tảng
**Loại dự án**: Ứng dụng Web tĩnh (Single Page Application - SPA)
**Ràng buộc UI**: Không sử dụng Tailwind CSS. Phải tạo ra giao diện Light Mode Off-white thật sang trọng bằng Vanilla CSS.

## Cấu trúc Dự án

### Tài liệu quy chuẩn

```text
specs/portfolio/
├── plan.md              # Kế hoạch chi tiết của dự án
└── tasks.md             # Danh sách và tiến độ theo dõi công việc
```

### Mã nguồn thực thi

```text
src/
├── components/          # Component tái sử dụng (Hero, Navbar, Skills, Projects, Awards, Education, Extracurricular, v.v.)
├── data/                # Lớp khai báo dữ liệu tĩnh (chứa portfolio.ts)
├── App.tsx              # Component cấp cao nhất chuyên lắp ráp bố cục
├── index.css            # Hệ thống thiết kế (Design System), Variables cho Light Mode
└── main.tsx             # Điểm nạp (Entry point) gắn kết với DOM hiển thị
```

**Quyết định cấu trúc**: Duy trì tính mô-đun tốt của React. `Education.tsx` sẽ triển khai logic cột dọc dọc theo màn hình để làm timeline. `Extracurricular.tsx` sẽ triển khai logic kéo thả/trượt mượt mà (Carousel) của CSS hoặc Framer Motion.

## Cập nhật trạng thái thực tế (đồng bộ codebase hiện tại)

- Đã cấu hình deploy GitHub Pages với `base: '/web-profile/'` trong `vite.config.ts`.
- Dữ liệu tĩnh (ảnh/chứng chỉ/PDF) dùng đường dẫn theo `import.meta.env.BASE_URL` trong `src/data/portfolio.ts` để chạy đúng cả local và production.
- Trạng thái nhánh hiện tại:
  - `main`: nhánh production đang deploy.
  - `dev`: nhánh phát triển an toàn trước khi merge về production.
