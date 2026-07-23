/*
  Cach them mini web moi:
  1. Them chu de vao "categories" neu chua co.
  2. Them object moi vao "tools".
  3. Doi "url" thanh link GitHub Pages/Vercel that cua ban.
  4. Neu co anh minh hoa, them "image" voi duong dan anh tuong doi hoac URL HTTPS.
*/

window.MINI_WEB_HUB = {
  categories: [
    {
      id: "classroom",
      name: "Tiện ích lớp học",
      description:
        "Công cụ dùng nhanh trong giờ học, hoạt động nhóm và quản lý lớp.",
      icon: "clipboard-list",
      color: "#3b82f6",
    },
    {
      id: "computer-science",
      name: "Tin học",
      description:
        "Mini web và game hỗ trợ học lập trình, thuật toán và kỹ năng số.",
      icon: "code-2",
      color: "#7c5cff",
    },
    {
      id: "english",
      name: "Tiếng Anh",
      description: "Mini game và công cụ luyện từ vựng, ngữ pháp, nghe đọc.",
      icon: "languages",
      color: "#ec4899",
    },
  ],

  tools: [
    {
      id: "group-maker",
      title: "Chia nhóm tự động",
      description: "Chia danh sách học sinh thành nhiều nhóm cân bằng.",
      category: "classroom",
      url: "https://example.com/group-maker",
      // image: "https://example.com/images/group-maker.webp",
      tags: ["chia nhom", "random", "lop hoc"],
      status: "new",
      featured: false,
      updated: "2026-07-22",
    },
    {
      id: "timer",
      title: "Đồng hồ lớp học",
      description: "Bấm giờ làm bài, nghỉ giữa tiết và hoạt động nhóm.",
      category: "classroom",
      url: "https://example.com/timer",
      tags: ["timer", "dong ho", "lop hoc"],
      status: "live",
      featured: false,
      updated: "2026-07-16",
    },
    {
      id: "quiz-maker",
      title: "Tạo quiz nhanh",
      description: "Soạn câu hỏi trắc nghiệm ngắn và chia sẻ cho học sinh.",
      category: "classroom",
      url: "https://example.com/quiz-maker",
      tags: ["quiz", "kiem tra", "trac nghiem"],
      status: "draft",
      featured: false,
      updated: "2026-07-12",
    },
    {
      id: "vocab-game",
      title: "VocabGame",
      description: "Mini game luyện tập vựng tiếng Anh tự custom bộ từ.",
      image: "assets/VocabGame.png",
      category: "english",
      url: "https://kydung.github.io/VocabGame_Custom/",
      tags: ["tieng anh", "tu vung", "mini game"],
      status: "live",
      featured: true,
      updated: "2026-07-22",
    },
    {
      id: "slot-machine-random",
      title: "SlotMachine",
      image: "assets/SlotMachineThumbnail.png",
      description:
        "Quay chọn ngẫu nhiên cho hoạt động, câu hỏi hoặc học sinh trong lớp.",
      category: "classroom",
      url: "https://kydung.github.io/SlotMachine_Random/",
      tags: ["random", "lop hoc", "quay so"],
      status: "live",
      featured: true,
      updated: "2026-07-22",
    },
    {
      id: "binary-lab",
      title: "BinaryLab",
      description:
        "Khám phá số nhị phân bằng các bài tương tác dành cho môn Tin học.",
      image: "assets/BinaryLab.png",
      category: "computer-science",
      url: "https://kydung.github.io/Binary_Lab/",
      tags: ["tin hoc", "nhi phan", "tuong tac"],
      status: "live",
      featured: true,
      updated: "2026-07-22",
    },
    {
      id: "poke-run",
      title: "PokeRun",
      image: "assets/PokeRun.png",
      description: "Mini game dùng nhanh cho hoạt động trong lớp học.",
      category: "classroom",
      url: "https://kydung.github.io/PokeRun/",
      tags: ["mini game", "lop hoc", "random"],
      status: "live",
      featured: false,
      updated: "2026-07-22",
    },
    {
      id: "crossword-game",
      title: "CrossWordGame",
      description:
        "Trò chơi ô chữ hỗ trợ hoạt động học tập và ôn tập trong lớp.",
      image: "assets/CrossWordGame.png",
      category: "classroom",
      url: "https://kydung.github.io/CrossWordGame-Remake/",
      tags: ["o chu", "mini game", "lop hoc"],
      status: "live",
      featured: false,
      updated: "2026-07-22",
    },
    {
      id: "python-flow-visualizer",
      title: "Minh họa luồng code Python",
      description:
        "Theo dõi trực quan cách câu lệnh Python chạy theo từng bước.",
      image: "assets/MinhHoaLuong.png",
      category: "computer-science",
      url: "https://kydung.github.io/Minh-Hoa-Luong-Python/",
      tags: ["python", "tin hoc", "minh hoa"],
      status: "live",
      featured: false,
      updated: "2026-07-22",
    },
  ],
};
