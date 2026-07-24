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
      id: "chia-doi-random",
      title: "Chia đội random",
      description: "Chia lớp thành các đội ngẫu nhiên, cân bằng và dùng nhanh trong hoạt động nhóm.",
      category: "classroom",
      url: "https://teams.mini-study-tool.online/",
      tags: ["chia doi", "random", "lop hoc"],
      status: "new",
      featured: false,
      updated: "2026-07-24",
    },
    {
      id: "phan-cho-ngoi-random",
      title: "Phân chỗ ngồi random",
      description: "Tạo sơ đồ chỗ ngồi ngẫu nhiên cho lớp học và xuất kết quả nhanh.",
      category: "classroom",
      url: "https://seats.mini-study-tool.online/",
      tags: ["cho ngoi", "random", "lop hoc"],
      status: "live",
      featured: false,
      updated: "2026-07-24",
    },
    {
      id: "irregular-verbs-360",
      title: "Irregular Verbs 360",
      description: "Luyện tập 360 động từ bất quy tắc tiếng Anh bằng flashcard và mini game.",
      category: "english",
      url: "https://verbs.mini-study-tool.online/",
      tags: ["tieng anh", "dong tu bat quy tac", "mini game"],
      status: "new",
      featured: false,
      updated: "2026-07-24",
    },
    {
      id: "vocab-game",
      title: "VocabGame",
      description: "Mini game luyện tập vựng tiếng Anh tự custom bộ từ.",
      image: "assets/VocabGame.png",
      category: "english",
      url: "https://vocab.mini-study-tool.online/",
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
      url: "https://slot.mini-study-tool.online/",
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
      url: "https://binary.mini-study-tool.online/",
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
      url: "https://pokerun.mini-study-tool.online/",
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
      url: "https://crossword.mini-study-tool.online/",
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
      url: "https://python-flow.mini-study-tool.online/",
      tags: ["python", "tin hoc", "minh hoa"],
      status: "live",
      featured: false,
      updated: "2026-07-22",
    },
  ],
};
