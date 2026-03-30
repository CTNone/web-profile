export const portfolioData = {
  profile: {
    name: "Chu Thân Nhất",
    title: "Fresher AI Engineer",
    summary: "Xin chào, tôi là Nhất, FRESHER AI ENGINEER từ Đại học Công Nghệ. Tôi luôn sẵn sàng tham gia các dự án với các nhiệm vụ: data cleaning; annotation; fine-tuning mô hình; triển khai prototype; RAG chatbot; sửa lỗi và tối ưu mô hình.",
    email: "nhatthanchu@gmail.com",
    githubUrl: "https://github.com/CTNone",
    linkedinUrl: "https://www.linkedin.com/in/nh%E1%BA%A5t-chu-256814353/"
  },
  skills: [
    { id: "s1", name: "Annotation", category: "Xử lý dữ liệu", proficiency: "Intermediate" },
    { id: "s2", name: "Augmentation", category: "Xử lý dữ liệu", proficiency: "Intermediate" },
    { id: "s3", name: "Tiền xử lý ảnh & text", category: "Xử lý dữ liệu", proficiency: "Advanced" },
    { id: "s4", name: "Xây dựng dataset", category: "Xử lý dữ liệu", proficiency: "Intermediate" },
    { id: "s5", name: "CNN", category: "Thị giác máy tính", proficiency: "Advanced" },
    { id: "s6", name: "ResNet", category: "Thị giác máy tính", proficiency: "Advanced" },
    { id: "s7", name: "Vision Transformer", category: "Thị giác máy tính", proficiency: "Intermediate" },
    { id: "s8", name: "YOLO", category: "Thị giác máy tính", proficiency: "Advanced" },
    { id: "s9", name: "LSTM", category: "Xử lý ngôn ngữ tự nhiên", proficiency: "Intermediate" },
    { id: "s10", name: "Transformer Models", category: "Xử lý ngôn ngữ tự nhiên", proficiency: "Intermediate" },
    { id: "s11", name: "Fine-tuning LLMs", category: "Xử lý ngôn ngữ tự nhiên", proficiency: "Fresher" },
    { id: "s12", name: "RAG Pipeline", category: "Hệ thống AI", proficiency: "Fresher" },
    { id: "s13", name: "Retrieval & Generation", category: "Hệ thống AI", proficiency: "Fresher" },
    { id: "s14", name: "Python", category: "Công cụ & Ngôn ngữ", proficiency: "Advanced" },
    { id: "s15", name: "PyTorch", category: "Công cụ & Ngôn ngữ", proficiency: "Advanced" },
    { id: "s16", name: "TensorFlow", category: "Công cụ & Ngôn ngữ", proficiency: "Intermediate" },
    { id: "s17", name: "Hugging Face", category: "Công cụ & Ngôn ngữ", proficiency: "Intermediate" },
    { id: "s18", name: "OpenCV", category: "Công cụ & Ngôn ngữ", proficiency: "Advanced" },
    { id: "s19", name: "Git", category: "Công cụ & Ngôn ngữ", proficiency: "Intermediate" },
    { id: "s20", name: "Docker", category: "Công cụ & Ngôn ngữ", proficiency: "Fresher" },
    { id: "s21", name: "C++", category: "Công cụ & Ngôn ngữ", proficiency: "Fresher" }
  ],
  projects: [
    {
      id: "p1",
      title: "Cờ Vua Với Giải Thuật Minimax",
      description: "Xây dựng giao diện đồ họa, xử lý sự kiện bằng thư viện Pygame. Tích hợp thuật toán Minimax kết hợp cắt tỉa Alpha-Beta và hàm đánh giá để tạo ra lõi AI dự đoán nước đi tối ưu.",
      techStack: ["Python", "Pygame", "AI Algorithms"],
      liveUrl: "https://github.com",
      repoUrl: "https://github.com/vuong1304/Chess",
      imageUrl: null,
      date: "03/2024 - 05/2024",
      role: "Dự án nhóm"
    },
    {
      id: "p2",
      title: "Dịch thuật Vietsub Tự Động",
      description: "Hệ thống biên dịch tự động pipeline nội bộ. Tự động tải video YouTube, trích xuất âm thanh, nhận diện giọng nói, biên dịch văn bản và đồng bộ xuất tệp SRT.",
      techStack: ["Python", "Speech Recognition", "NLP APIs"],
      liveUrl: "https://github.com",
      repoUrl: "https://github.com/vuong1304/Project_SE",
      imageUrl: null,
      role: "Dự án nhóm"
    },
    {
      id: "p3",
      title: "Chatbot Q&A tích hợp RAG",
      description: "Thu thập, làm sạch và phân mảnh dữ liệu từ website đại học để xây dựng cơ sở tri thức riêng, cải thiện rõ rệt độ chính xác cho câu lệnh sinh của LLM.",
      techStack: ["LLaMA 3", "Sentence-Transformer", "RAG Pipeline"],
      liveUrl: "https://github.com",
      repoUrl: "https://github.com/CTNone/RAG_NLP_build_",
      imageUrl: null,
      date: "05/2025",
      role: "Dự án nhóm"
    },
    {
      id: "p4",
      title: "Phân loại Văn bản Đa nhãn",
      description: "Tiền xử lý bộ dữ liệu mật độ cao. Đánh giá và so sánh thực nghiệm mô hình PhoBERT và CodeBERT, đạt độ chính xác phân loại ấn tượng ở mức 82%.",
      techStack: ["PhoBERT", "LSTM", "BiLSTM+CNN"],
      liveUrl: "https://github.com",
      repoUrl: "https://github.com/levutb2004/deep_learning_uet",
      imageUrl: null,
      date: "10/2024 - 12/2024",
      role: "Dự án nhóm"
    },
    {
      id: "p5",
      title: "Nhận diện Bút bằng YOLOv8",
      description: "Gán nhãn tùy chỉnh và tăng cường dữ liệu bằng Roboflow API. Triển khai phát hiện vật thể End-to-End, đạt mAP50 tĩnh mức 0.935.",
      techStack: ["YOLOv8", "Python", "Roboflow"],
      liveUrl: "https://github.com",
      repoUrl: "https://github.com/CTNone/detect_pen_pencil",
      imageUrl: null,
      role: "Dự án cá nhân"
    },
    {
      id: "p6",
      title: "Website thương mại",
      description: "Bảng điều khiển quản lý doanh thu và phân tích dữ liệu mua sắm cho cửa hàng trực tuyến, cung cấp biểu đồ trực quan động và tích hợp luồng API thời gian thực.",
      techStack: ["Next.js", "Tailwind", "Machine Learning"],
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/levutb2004/ecommerce",
      imageUrl: null,
      role: "Dự án nhóm"
    }
  ],
  awards: [
    {
      id: "a1",
      title: "Giải Ba Tin Học - Giải Thuật",
      issuer: "Sở Giáo dục và Đào tạo Thái Nguyên",
      date: "2021",
      pdfUrl: "/certs/giai3Tin.pdf"
    },
    {
      id: "a2",
      title: "Chinh phục Fansipan",
      issuer: "Ban Quản Lý Vườn Quốc Gia Hoàng Liên",
      date: "22/3/2026",
      pdfUrl: "/certs/fansipang.pdf"
    },
    {
      id: "a3",
      title: "Chứng chỉ VNU",
      issuer: "Trung tâm Dự báo và Phát triển nguồn nhân lực",
      date: "9/9/2026",
      pdfUrl: "/certs/certified.pdf"
    }
  ],
  education: [
    {
      id: "e1",
      institution: "Đại học Công Nghệ",
      degree: "Kỹ sư Trí tuệ Nhân tạo",
      date: "2022 - 2026",
      description: "GPA: 2.9/4.0. Tập trung vào Computer Vision, NLP và Web.",
    },
    {
      id: "e2",
      institution: "THPT Chuyên Thái Nguyên",
      degree: "Lớp Chuyên Tin học",
      date: "2019 - 2022",
      description: "Đạt giải kì thi Học sinh giỏi cấp Tỉnh. Tham gia thường niên các cuộc thi thể thao cấp trường.",
    }
  ],
  extracurricular: [
    {
      id: "ex1",
      title: "Đá bóng",
      imageUrl: "/images/footBall.JPG"
    },
    {
      id: "ex2",
      title: "Chinh phục ngọn núi Fansipan",
      imageUrl: "/images/fansipang.jpg"
    },
    {
      id: "ex3",
      title: "Giải chạy Marathon CTN",
      imageUrl: "/images/Run-CTN-2.jpg"
    },

    // {
    //   id: "ex4",
    //   title: "Họp mặt nhóm nghiên cứu Deep Learning",
    //   imageUrl: "https://images.unsplash.com/photo-1515155075601-23009d0cb6d4?q=80&w=800&auto=format&fit=crop"
    // }
  ]
};
