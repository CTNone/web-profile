---
id: T002
title: Cấu hình tsconfig và vite.config
phase: Giai đoạn 1
status: completed
task-file: tasks.md
task-line: 13
---

# Test case T002 - Cấu hình tsconfig và vite.config

## Mục tiêu
Đảm bảo cấu hình TypeScript và Vite phù hợp với dự án React.

## Test cases
- [ ] `tsconfig.json` chứa `jsx: react-jsx` và `moduleResolution: node`.
- [ ] `tsconfig.app.json` liên kết đúng tới `tsconfig.json`.
- [ ] `vite.config.ts` sử dụng plugin React và không có lỗi biên dịch.
- [ ] Chạy `npm run build` không báo lỗi liên quan đến cấu hình.
