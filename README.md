# Mini Web Hub

Trang chủ static để tổng hợp các mini web học tập, code, random học sinh và tiện ích lớp học.

## Sửa danh sách mini web

Mở `tools-data.js`, thêm object mới vào mảng `tools`:

```js
{
  id: "ten-tool-khong-dau",
  title: "Tên mini web",
  description: "Mô tả ngắn của tool.",
  category: "study",
  url: "https://username.github.io/tool-name",
  image: "assets/previews/ten-tool.webp", // Optional. Omit for the category icon fallback.
  tags: ["tag 1", "tag 2"],
  status: "live",
  featured: false,
  updated: "2026-07-22",
}
```

Nếu cần chủ đề mới, thêm vào mảng `categories` trong cùng file. `category` của tool phải trùng với `id` của chủ đề.

## Ảnh minh họa

`image` là tùy chọn. Đặt ảnh trong `assets/previews/` rồi dùng đường dẫn tương đối, ví dụ `assets/previews/flashcard.webp`, hoặc dùng URL HTTPS. Ảnh sẽ tự crop vừa card; nếu không khai báo hoặc link ảnh lỗi, giao diện tự hiển thị icon của chủ đề.

## Chạy thử

Mở trực tiếp `index.html` trong trình duyệt, hoặc deploy cả thư mục này lên Vercel/GitHub Pages.
