import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  services: [
    {
      id: 1,
      icon: "Code",
      title: "Website Development",
      description:
        "Xây dựng website và ứng dụng web với ASP.NET Core, PHP, REST API; tập trung vào cấu trúc rõ ràng, hiệu năng và khả năng mở rộng.",
    },
    {
      id: 2,
      icon: "Smartphone",
      title: "Mobile App Development",
      description:
        "Phát triển ứng dụng di động cơ bản với Flutter, tập trung vào giao diện thân thiện và trải nghiệm người dùng.",
    },
    {
      id: 3,
      icon: "Database",
      title: "Business Analysis",
      description:
        "Thực hiện đồ án môn học và dự án cá nhân, rèn luyện kỹ năng phân tích yêu cầu, thiết kế hệ thống và giải quyết vấn đề.",
    },
  ],

  projects: [

    {
      "id": 1,
      "title": "LunQuiz - Nơi thi đấu trắc nghiệm thời gian thực",
      "category": "Web Development",
      "image": "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202026-06-14%20223304.png?raw=true",
      "videoUrl": "",
      "demoUrl": "https://www.lunquiz.site/",
      "tags": ["React", "TypeScript", "Node.js", "UI/UX"],
      "details": {
        "description": "LunQuiz là một nền tảng thi trắc nghiệm trực tuyến thời gian thực (real-time) với thiết kế hiện đại. Hệ thống cho phép người dùng tạo các bài trắc nghiệm, tham gia phòng chơi chung (room-based quiz), cũng như hệ thống thi đấu đối kháng (PvP) 1vs1 hoặc 2vs2 xếp hạng bằng điểm Elo kịch tính.",
        "currentStatus": "Dự án đã hoàn thiện các tính năng cốt lõi bao gồm thi đấu thời gian thực qua WebSockets, hệ thống xếp hạng Elo, và bảng điều khiển quản trị (Admin Dashboard) mạnh mẽ.",
        "objectives": [
          "Xây dựng nền tảng trắc nghiệm trực tuyến mượt mà và có tính tương tác cao",
          "Triển khai hệ thống thi đấu PvP thời gian thực (Real-time PvP)",
          "Tính toán và xếp hạng người chơi công bằng qua hệ thống điểm Elo",
          "Tạo ra trải nghiệm UI/UX cao cấp, mượt mà với GSAP Animations"
        ],
        "features": [
          "Hệ thống xác thực: Đăng nhập, Đăng ký, Quên mật khẩu, Quản lý hồ sơ người dùng",
          "Chế độ chơi thường: Tạo phòng, tham gia bằng mã phòng (Join Room), phòng chờ (Waiting Room), và chơi game trực tiếp (Game Play)",
          "Quản lý bộ đề (My Templates): Người dùng có thể tự tạo, chỉnh sửa và quản lý các bộ câu hỏi của riêng mình",
          "Hệ thống thi đấu đối kháng PvP (Real-time): Hỗ trợ các chế độ 1V1, 2V2 với tính năng tìm trận (Matchmaking), phòng chờ thi đấu (Match Ready)",
          "Gameplay PvP: Đồng bộ hóa thời gian thực, tính điểm thưởng tốc độ (Speed Bonus), khóa đáp án",
          "Thống kê PvP: Lịch sử đấu (PvP History), chi tiết trận đấu (Match Detail), Bảng xếp hạng (Leaderboard) theo Elo toàn cầu hoặc theo chủ đề",
          "Admin Dashboard: Bảng điều khiển quản lý toàn diện (Người dùng, Phản hồi, Thống kê, Phân loại)",
          "Quản trị Quiz & PvP: Quản lý ngân hàng câu hỏi PvP (Question Pool), import câu hỏi từ Quiz, quản lý các danh mục PvP riêng biệt",
          "Hoạt ảnh cao cấp: Tích hợp thư viện GSAP để tạo các micro-interactions mượt mà trong quá trình chơi"
        ],
        "technologies": [
          "Node.js (Backend)",
          "React",
          "TypeScript",
          "Vite",
          "Socket.IO (Client)",
          "Tailwind CSS",
          "Shadcn UI",
          "GSAP (Animation)",
          "Zustand (State Management)",
          "React Query"
        ],
        "challenges": "Thử thách lớn nhất là việc xử lý đồng bộ hóa trạng thái (state synchronization) giữa các người chơi trong chế độ PvP thời gian thực thông qua Socket.IO, đảm bảo tính công bằng về độ trễ mạng (latency) để tính điểm thưởng tốc độ chính xác. Đồng thời, việc thiết kế UI/UX với các hiệu ứng chuyển động mượt mà bằng GSAP nhưng vẫn giữ hiệu năng cao (60fps) cũng đòi hỏi sự tối ưu kỹ lưỡng.",
        "outcomes": "Dự án đã mang lại một sản phẩm có độ hoàn thiện cao cả về mặt logic thời gian thực và thiết kế giao diện. Nền tảng hoạt động ổn định trong các trận đấu PvP căng thẳng và đem lại trải nghiệm rất tốt cho người dùng."
      }
    },

    {
      id: 2,
      title: "Ứng dụng ôn luyện Tiếng Anh",
      category: "App Development",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/anh2.png?raw=true",
      videoUrl: "https://youtu.be/V6-YM7v8DBg",
      tags: ["UI/UX", "App", "Education", "Mobile"],
      details: {
        description: "Ứng dụng mobile giúp người học tiếng Anh luyện tập từ vựng, ngữ pháp và lộ trình dành riêng cho bạn thông qua bài đánh giá đầu vào. Ứng dụng được thiết kế với giao diện thân thiện, dễ sử dụng cho mọi lứa tuổi.",
        currentStatus: "Dự án được phát triển như đồ án môn học Lập trình ứng dụng di động. Hiện đã hoàn thành giai đoạn phát triển và đang trong quá trình thử nghiệm với nhóm người dùng thử nghiệm nhỏ.",
        objectives: [
          "Xây dựng ứng dụng mobile hỗ trợ học tiếng Anh hiệu quả",
          "Tạo trải nghiệm học tập tương tác và thú vị",
          "Lộ trình dành riêng cho từng người để tăng động lực học tập",
          "Phát triển hệ thống theo dõi tiến độ học tập cá nhân"
        ],
        features: [
          "Học từ vựng theo chủ đề với flashcard",
          "Gồm 4 kỹ năng chính: Nghe, Nói, Đọc, Viết",
          "Luyện nghe qua audio và video",
          "Bài tập ngữ pháp đa dạng",
          "Gợi ý học tập bằng AI ",
          "Chế độ luyện nói và viết với AI",
          "Theo dõi tiến độ và thống kê",
          "Xếp hạng và thành tích",
          "Nhắc nhở học tập hàng ngày"
        ],
        technologies: [
          "Flutter",
          "Dart",
          "Supabase",
        ],
        challenges: "Thử thách lớn nhất là tích hợp AI để hỗ trợ luyện nói và xử lý âm thanh real-time. Ngoài ra, việc thiết kế UI/UX phù hợp với nhiều màn hình khác nhau cũng đòi hỏi nhiều thử nghiệm.",
        outcomes: "Ứng dụng đã hoàn thành với đầy đủ tính năng cơ bản. Nhận được đánh giá tốt từ giảng viên và bạn bè thử nghiệm. Dự án giúp tôi nắm vững Flutter và Supabase."
      }
    },
    {
      id: 3,
      title: "Website Cho thuê & Quản lý Phòng Trọ",
      category: "Web Development",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/avatar_webphong.png?raw=true",
      videoUrl: "https://drive.google.com/file/d/1zrayXT4bXH46KgRGrJOgTzTqs0yrS7Xj/view?usp=sharing",
      tags: ["Web", "UI/UX", "Backend", "E-commerce"],
      details: {
        description: "Hệ thống web cho phép chủ trọ đăng tin cho thuê phòng, quản lý hợp đồng, thanh toán và các tiện ích. Người thuê có thể tìm kiếm phòng trọ phù hợp, đặt lịch xem phòng và thanh toán online.",
        currentStatus: "Dự án đồ án chuyên ngành, đã hoàn thành phiên bản beta với đầy đủ chức năng chính.",
        objectives: [
          "Số hóa quy trình cho thuê và quản lý phòng trọ",
          "Tạo nền tảng kết nối chủ trọ và người thuê",
          "Tự động hóa quản lý hợp đồng và thanh toán",
          "Cung cấp công cụ quản lý tiện ích và dịch vụ"
        ],
        features: [
          "Đăng tin cho thuê phòng với hình ảnh",
          "Tìm kiếm và lọc phòng theo tiêu chí",
          "Đặt lịch xem phòng online",
          "Quản lý hợp đồng điện tử",
          "Thanh toán tích hợp VNPay/MoMo",
          "Tích hợp nạp tiền vào ví điện tử web",
          "Quản lý hóa đơn điện nước",
          "Báo cáo và thống kê doanh thu",
          "Thông báo nhắc nhở thanh toán qua Email",
          "Tin tức và mẹo thuê trọ",
          "Các chức năng quản lý tiện ích cho người thuê: lịch sử giao dịch, hóa đơn, hợp đồng..."
        ],
        technologies: [
          "ASP.NET Core MVC",
          "Entity Framework Core",
          "SQL Server",
          "VNPay/MoMo API",
          "Chart.js"
        ],
        challenges: "Xử lý logic nghiệp vụ phức tạp về hợp đồng, thanh toán định kỳ và tính toán hóa đơn. Tích hợp payment gateway và đảm bảo bảo mật dữ liệu nhạy cảm cũng là thử thách lớn.",
        outcomes: "Hoàn thành website với đầy đủ tính năng. Dự án giúp tôi hiểu sâu về ASP.NET Core và xử lý nghiệp vụ thực tế."
      }
    },
    {
      id: 4,
      title: "Quản lý Trung tâm Tiếng Anh",
      category: "Business Analysis",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-06-22%20094251.png?raw=true",
      images: [
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-03-05%20213827.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-03-03%20121321.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-06-22%20094251.png?raw=true",
      ],
      tags: ["Analysis", "Management"],
      details: {
        description: "Dự án phân tích và thiết kế hệ thống quản lý cho trung tâm ngoại ngữ. Bao gồm phân tích yêu cầu nghiệp vụ, thiết kế use case, class diagram và database.",
        currentStatus: "Dự án môn Phân tích và Thiết kế Hệ thống. Đã hoàn thành toàn bộ tài liệu phân tích thiết kế và một số module demo.",
        objectives: [
          "Phân tích quy trình nghiệp vụ của trung tâm ngoại ngữ",
          "Thiết kế hệ thống quản lý toàn diện",
          "Tạo tài liệu kỹ thuật chi tiết",
          "Demo các chức năng chính"
        ],
        features: [
          "Quản lý học viên và giáo viên",
          "Xếp lịch học và phân lớp",
          "Quản lý điểm danh và bài tập",
          "Theo dõi tiến độ học tập",
          "Quản lý học phí và thanh toán",
          "Báo cáo thống kê",
          "Phân quyền người dùng",
          "Thông báo và nhắc nhở"
        ],
        technologies: [
          "StarUML",
          "Microsoft Visio",
          "SQL Server",
          "C# (Demo)",
          "Windows Forms"
        ],
        challenges: "Phân tích và mô hình hóa các quy trình nghiệp vụ phức tạp. Thiết kế database chuẩn hóa và tối ưu.",
        outcomes: "Hoàn thành tài liệu phân tích thiết kế đầy đủ với các sơ đồ UML. Hiểu rõ quy trình phân tích thiết kế hệ thống chuyên nghiệp."
      }
    },
    {
      id: 5,
      title: "Winform Bán đồ điện tử",
      category: "Winform Development",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234829.png?raw=true",
      images: [
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20233902.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234647.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234639.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234535.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234505.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234455.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234429.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234353.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234408.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-18%20234608.png?raw=true"
      ],
      tags: ["Winform", "Backend"],
      details: {
        description: "Ứng dụng desktop quản lý bán hàng cho cửa hàng điện tử. Hỗ trợ quản lý kho, bán hàng, nhập hàng và báo cáo.",
        currentStatus: "Dự án môn Lập trình Windows. Đã hoàn thành và sử dụng thử nghiệm tại một cửa hàng điện tử nhỏ.",
        objectives: [
          "Xây dựng phần mềm quản lý bán hàng desktop",
          "Tự động hóa quy trình bán hàng và quản lý kho",
          "Tạo báo cáo và thống kê kinh doanh",
          "Hỗ trợ in hóa đơn và xuất file"
        ],
        features: [
          "Quản lý sản phẩm và kho hàng",
          "Bán hàng và tạo hóa đơn",
          "Quản lý nhập hàng từ nhà cung cấp",
          "Quản lý khách hàng",
          "Quản lý nhân viên",
          "Báo cáo doanh thu theo ngày/tháng",
          "Thống kê sản phẩm bán chạy",
          "In hóa đơn",
          "Xuất và Nhập Excel",
          "Backup và restore database",
          "Phân quyền người dùng"
        ],
        technologies: [
          "C#",
          "Windows Forms",
          "Guna2 UI Framework",
          "SQL Server",
          "ADO.NET",
          "Reports Viewer",
          "Excel Interop"
        ],
        challenges: "Xử lý đồng bộ dữ liệu sản phẩm và nhà cung cấp. Tối ưu hóa hiệu suất khi truy vấn dữ liệu lớn.",
        outcomes: "Ứng dụng hoàn chỉnh và được sử dụng thực tế. Sử dụng thành thạo mô hình 3 lớp gồm BUS, GUI, DAL và xử lý database với ADO.NET."
      }
    },
    {
      id: 6,
      title: "IPsec VPN Site-to-Site",
      category: "Cybersecurity",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/A_sitetosite.png?raw=true",
      images: [
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/sitetosite.jpg?raw=true",
        "https://raw.githubusercontent.com/Vothanhluan2k4/portfolio-assets/7f8d3390568e0ec29ffaaea4e1792e1fb1c9a9aa/images/siteA.jpg",
        "https://raw.githubusercontent.com/Vothanhluan2k4/portfolio-assets/7f8d3390568e0ec29ffaaea4e1792e1fb1c9a9aa/images/siteB.jpg",
        "https://raw.githubusercontent.com/Vothanhluan2k4/portfolio-assets/7f8d3390568e0ec29ffaaea4e1792e1fb1c9a9aa/images/cerSiteA.jpg",
        "https://raw.githubusercontent.com/Vothanhluan2k4/portfolio-assets/7f8d3390568e0ec29ffaaea4e1792e1fb1c9a9aa/images/ruleA.jpg"
      ],
      tags: ["Security", "Networking"],
      "details": {
        "description": "Dự án thiết kế và triển khai VPN site-to-site sử dụng IPsec nhằm kết nối an toàn giữa hai chi nhánh của công ty. Mô hình được mô phỏng trên VMware Workstation Pro kết hợp với Pfsense.",
        "currentStatus": "Dự án môn 'An toàn và Bảo mật Thông tin' đã hoàn thành, bao gồm mô hình mô phỏng và tài liệu kỹ thuật chi tiết.",
        "objectives": [
          "Thiết lập kết nối VPN an toàn giữa hai site",
          "Mã hóa dữ liệu truyền qua Internet",
          "Đảm bảo tính bảo mật và toàn vẹn dữ liệu",
          "Tối ưu hiệu suất kết nối"
        ],
        "features": [
          "Cấu hình IPsec tunnel mode",
          "Thiết lập IKE Phase 1 và Phase 2",
          "Mã hóa AES-256",
          "Sử dụng Hash SHA-256",
          "Perfect Forward Secrecy (PFS)",
          "Hỗ trợ NAT Traversal",
          "Dead Peer Detection (DPD)",
          "Thiết lập Access Control List (ACL)"
        ],
        "technologies": [
          "Router Cisco",
          "IPsec",
          "IKE",
          "Cisco Packet Tracer",
          "GNS3",
          "Wireshark"
        ],
        "challenges": "Hiểu rõ cơ chế hoạt động của IPsec, cấu hình chính xác các tham số mã hóa, và xử lý lỗi kết nối khi thiết lập VPN.",
        "outcomes": "Mô hình hoạt động ổn định, dữ liệu truyền qua VPN được mã hóa an toàn. Nâng cao hiểu biết về VPN và bảo mật mạng."
      }
    },
  ],
  experiences: [
    {
      id: 1,
      type: "education",
      title: "Kỹ sư Công nghệ Thông tin (Năm 4)",
      organization: "Đại học Công nghệ Thành phố Hồ Chí Minh (HUTECH)",
      period: "2021 - Hiện tại",
      description: "Học các môn nền tảng CNTT, lập trình Web,ứng dụng di động, CSDL, phân tích & thiết kế hệ thống."
    },
    {
      id: 2,
      type: "work",
      title: "Thực tập sinh Full Stack",
      organization: "Công ty TNHH Phần mềm DUDI",
      period: "03/2026 - 06/2026",
      description: "Tham gia phát triển các tính năng frontend và backend cho ứng dụng web, làm việc với ReactJS và Node.js."
    }
  ],
  skills: [
    { id: 1, name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", percentage: 90 },
    { id: 2, name: "Visual Studio Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png", percentage: 90 },
    { id: 3, name: "Visual Studio 2022", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", percentage: 88 },
    { id: 4, name: "StartUML", logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/3/32/Staruml_logo.png/250px-Staruml_logo.png", percentage: 85 },
    { id: 5, name: "SQL Server", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", percentage: 80 },
    { id: 6, name: "PostgreSQL", logo: "https://images.icon-icons.com/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png", percentage: 75 },
    { id: 7, name: "Cisco packet tracer", logo: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png", percentage: 75 },
    { id: 8, name: "Laragon", logo: "https://cdn.worldvectorlogo.com/logos/laragon.svg", percentage: 75 },
  ],
  blogs: [
    {
      id: 1,
      title: "Hành trình từ số 0 HUTECH đến Full Stack Intern xịn sò",
      excerpt:
        "Nhìn lại chặng đường 4 năm thanh xuân ở HUTECH, những đêm thức trắng debug cùng mì tôm và cơ duyên làm Full Stack Intern tại DUDI Software.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      date: "20/09/2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "Xin chào! Mình là Võ Thành Luận" },
        { type: "text", content: "Chào các bạn! Mình là Võ Thành Luận, hiện là sinh viên năm 4 chuyên ngành Kỹ thuật Phần mềm tại Đại học Công nghệ TP.HCM (HUTECH). Nếu bạn đang tìm kiếm một chiếc profile bóng bẩy kiểu siêu nhân thì... lộn tiệm rồi. Mình chỉ là một gã dev đam mê gõ code, thích ngắm bug chạy và đang thực tập vị trí Full Stack tại DUDI Software." },
        { type: "heading", content: "Bắt đầu từ số 0 tròn trĩnh tại HUTECH" },
        { type: "text", content: "Nhớ hồi năm nhất, bước chân vào HUTECH với hành trang là con số 0 tròn trĩnh về lập trình. Ngôn ngữ C chào đón mình bằng những lỗi cú pháp 'mất dấu chấm phẩy bay màu cả bài'. Từ đó, mình bén duyên với Java, ASP.NET Core, rồi dấn thân sang JavaScript và Flutter để làm các dự án thực tế như LunQuiz." },
        {
          type: "list",
          content: "Chiếc túi ba gang chứa những kỹ năng mình đã góp nhặt được:",
          items: [
            "Ngôn ngữ cơ bản nhưng chất: C, C#",
            "Java & Spring Boot: Chuyên trị hệ thống backend, xử lý nghiệp vụ nặng đô",
            "ASP.NET Core: Giải pháp backend xịn sò cho các ứng dụng web doanh nghiệp",
            "Database: SQL Server, MySQL, PostgreSQL (nơi lưu trữ đống data của mình)",
            "Flutter & Dart: Code mobile một lần, chạy mượt trên cả Android lẫn iOS"
          ]
        },
        { type: "heading", content: "Định hướng sắp tới: Tiến lên Backend!" },
        { type: "text", content: "Mình đang hướng tới trở thành một Backend Developer thực thụ. Với mình, xây dựng hệ thống API bảo mật, chịu tải tốt và thiết kế database chuẩn chỉnh giống như việc xây móng nhà vậy - móng có chắc thì nhà mới không sập. Hy vọng kỳ thực tập ở DUDI Software sẽ giúp mình nâng trình nhanh chóng!" }
      ]
    },
    {
      id: 2,
      title: "Java - Anh thanh niên nghiêm túc, đứng đắn và chung thủy",
      excerpt:
        "Tại sao Java bị chê là dài dòng, rườm rà nhưng các doanh nghiệp lớn vẫn mê mẩn? Cùng bóc mẽ anh bạn đứng tuổi này nhé!",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      date: "03/10/2025",
      category: "Java",
      content: [
        { type: "heading", content: "Java là cái chi chi?" },
        { type: "text", content: "Sinh năm 1995 (lớn tuổi hơn cả mình), Java được tạo ra bởi Sun Microsystems với triết lý huyền thoại: 'Write Once, Run Anywhere' (Viết một lần, chạy khắp nơi - hoặc là viết một lần, debug mọi nơi tùy nhân phẩm). Nó là ngôn ngữ hướng đối tượng cực kỳ nghiêm ngặt." },
        { type: "heading", content: "Tại sao lại yêu thương Java?" },
        {
          type: "list",
          content: "Một số ưu điểm khiến Java vẫn 'gừng càng già càng cay':",
          items: [
            "Độc lập nền tảng: Nhờ có máy ảo JVM (Java Virtual Machine) gánh team, chạy hệ điều hành nào cũng cân được.",
            "Hướng đối tượng hoàn toàn: Mọi thứ trong Java đều phải nằm trong Class. Không có chuyện khai báo bừa bãi!",
            "An toàn & Bảo mật: Không cho phép can thiệp trực tiếp vào con trỏ bộ nhớ như C/C++.",
            "Bộ thu gom rác tự động (Garbage Collection): Dọn dẹp rác bộ nhớ tự động, dev đỡ phải tự đi quét dọn."
          ]
        },
        { type: "heading", content: "Chương trình đầu đời: Hello World" },
        {
          type: "code",
          language: "java",
          content: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào thế giới! Lại là Luận đây.");
        System.out.println("Chúc các bạn code không bug nhé!");
    }
}`
        },
        { type: "text", content: "Thấy dài dòng không? Để in ra một dòng chữ, bạn cần định nghĩa Class, rồi viết phương thức main dài ngoằng. Nhưng tin mình đi, sự dài dòng này giúp code cực kỳ tường minh và dễ bảo trì khi dự án phình to đấy!" }
      ]
    },
    {
      id: 3,
      title: "4 trụ cột OOP trong Java - Giải thích siêu dễ hiểu",
      excerpt: "Đóng gói, Kế thừa, Đa hình và Trừu tượng. Nghe thì đao to búa lớn nhưng thực ra cực kỳ gần gũi.",
      image: "https://www.ennicode.com/wp-content/uploads/2023/06/4-pillar-oops.jpg.webp",
      date: "10/10/2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "OOP - Kim chỉ nam của Java"
        },
        {
          type: "text",
          content: "Lập trình hướng đối tượng (OOP) không chỉ là lý thuyết đi thi. Nó là cách chúng ta mô hình hóa thế giới thực vào code. Cùng điểm qua 4 chiếc 'chân bàn' của OOP qua góc nhìn hài hước nhé."
        },
        {
          type: "heading",
          content: "1. Encapsulation (Tính đóng gói) - Giấu quỹ đen"
        },
        {
          type: "text",
          content: "Đóng gói là việc bạn che giấu các thuộc tính nhạy cảm bên trong class và chỉ cung cấp các cổng truy cập an toàn qua getter/setter. Giống như việc bạn giấu quỹ đen vậy, không ai được động vào trực tiếp ngoại trừ qua sự kiểm duyệt của bạn."
        },
        {
          type: "code",
          language: "java",
          content: "public class Student {\n    private String name;\n    private int age;\n    \n    public String getName() {\n        return name;\n    }\n    \n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public void setAge(int age) {\n        if (age > 0) { // Bộ lọc bảo vệ dữ liệu xịn sò\n            this.age = age;\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "2. Inheritance (Tính kế thừa) - Con nhà tông không giống lông cũng giống cánh"
        },
        {
          type: "text",
          content: "Class con có thể sử dụng lại các thuộc tính và phương thức từ Class cha. Tiết kiệm thời gian gõ code đáng kể."
        },
        {
          type: "code",
          language: "java",
          content: "public class Animal {\n    protected String name;\n    \n    public void eat() {\n        System.out.println(name + \" đang ăn cật lực...\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" đang sủa gâu gâu!\");\n    }\n}"
        },
        {
          type: "heading",
          content: "3. Polymorphism (Tính đa hình) - Biến hình như Tôn Ngộ Không"
        },
        {
          type: "text",
          content: "Một phương thức nhưng có thể thực hiện theo nhiều cách khác nhau tùy thuộc vào đối tượng gọi nó. Có thể dùng nạp chồng (Overloading) hoặc ghi đè (Overriding)."
        },
        {
          type: "code",
          language: "java",
          content: "public class Calculator {\n    // Nạp chồng phương thức (Overloading) - cùng tên nhưng khác tham số\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}"
        },
        {
          type: "heading",
          content: "4. Abstraction (Tính trừu tượng) - Tập trung vào cái cốt lõi"
        },
        {
          type: "text",
          content: "Ẩn đi những chi tiết triển khai phức tạp và chỉ đưa ra giao diện sử dụng. Trong Java, ta dùng abstract class hoặc interface. Giống như bạn lái xe ô tô, chỉ cần biết vô lăng, chân ga chứ không cần biết động cơ bên trong đốt xăng thế nào."
        },
        {
          type: "code",
          language: "java",
          content: "// Sử dụng abstract class\nabstract class Shape {\n    protected String color;\n    public abstract double calculateArea();\n    public void setColor(String color) {\n        this.color = color;\n    }\n}\n\n// Sử dụng interface\ninterface Drawable {\n    void draw();  // Phương thức abstract mặc định\n    default void printInfo() {\n        System.out.println(\"Đây là đối tượng có thể vẽ được!\");\n    }\n}"
        },
        {
          type: "heading",
          content: "Kết luận"
        },
        {
          type: "text",
          content: "Nắm vững 4 tính chất này, bạn đã đi được nửa chặng đường trở thành cao thủ Java rồi đó!"
        }
      ]
    },
    {
      id: 4,
      title: "Exception Handling - Khi Java dỗi và cách dỗ dành",
      excerpt:
        "Code đang chạy tự dưng lăn ra chết? Tìm hiểu cách bắt lỗi thông minh với Try-Catch-Finally để app không bay màu đột ngột.",
      image: "https://s3-hfx03.fptcloud.com/codelearnstorage/Upload/Blog/10-dieu-ve-java-exception-va-java-error-63727034762.0195.jpg",
      date: "15/10/2025",
      category: "Java",
      content: [
        { type: "heading", content: "Exception là cái gì mà đáng sợ thế?" },
        { type: "text", content: "Exception (ngoại lệ) là những sự kiện 'ông trời tạo địa chấn' xảy ra lúc chạy app làm chương trình sập nguồn đột ngột. Ví dụ: chia cho 0, truy cập mảng vượt quá giới hạn, hay gọi một object null." },
        { type: "heading", content: "Try-Catch: Bộ giảm xóc cho code" },
        { type: "text", content: "Hãy bao bọc những đoạn code 'nguy hiểm' vào block try, nếu có biến cố xảy ra, block catch sẽ đứng ra chịu trận và xử lý êm đẹp." },
        {
          type: "code",
          language: "java",
          content: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // Lỗi vượt quá chỉ mục mảng!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Bình tĩnh bạn ơi! Chỉ mục mảng bị lố rồi.");
            System.out.println("Chi tiết lỗi: " + e.getMessage());
        } finally {
            System.out.println("Dù có lỗi hay không, block finally vẫn chạy nhé!");
        }
    }
}`
        },
        { type: "heading", content: "Bắt nhiều lỗi cùng lúc (Multiple Catch)" },
        {
          type: "code",
          language: "java",
          content: `try {
    String str = null;
    System.out.println(str.length());
    int result = 10 / 0;
} catch (NullPointerException e) {
    System.out.println("Lỗi Null Pointer rồi!");
} catch (ArithmeticException e) {
    System.out.println("Lỗi toán học (chia cho 0)!");
} catch (Exception e) {
    System.out.println("Lỗi gì đó chung chung khác.");
}`
        },
        {
          type: "list",
          content: "Kinh nghiệm dỗ dành Java khi dỗi:",
          items: [
            "Đừng bao giờ để catch block trống rỗng (nuốt lỗi là tội ác!)",
            "Luôn giải phóng tài nguyên (close file, connection) trong block finally",
            "Bắt lỗi cụ thể trước, lỗi chung (Exception) sau cùng",
            "Sử dụng try-with-resources để tự động đóng tài nguyên xịn mịn"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Java vs JavaScript - Mối quan hệ giữa Car và Carpet",
      excerpt: "Bạn có hay nhầm lẫn giữa Java và JavaScript? Hãy cùng so sánh để thấy chúng khác nhau một trời một vực như thế nào.",
      image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/06/Untitled-design-1.png",
      date: "25/10/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "Cú lừa thế kỷ mang tên tên gọi"
        },
        {
          type: "text",
          content: "Rất nhiều người mới học lập trình nghĩ rằng JavaScript là em ruột của Java. Nhưng sự thật là hai ngôn ngữ này chả có họ hàng gì với nhau cả! Sự giống nhau của Java và JavaScript giống hệt như sự giống nhau của 'Car' (xe hơi) và 'Carpet' (thảm trải sàn) vậy."
        },
        {
          type: "heading",
          content: "So sánh Java vs JavaScript"
        },
        {
          type: "table",
          content: "Điểm khác biệt chính giữa Java và JavaScript",
          columns: ["Tiêu chí", "Java", "JavaScript"],
          rows: [
            ["Kiểu biên dịch", "Compiled language (ra Bytecode)", "Interpreted language (Thông dịch)"],
            ["Kiểu dữ liệu", "Strongly typed (Chặt chẽ)", "Dynamically typed (Linh hoạt)"],
            ["Môi trường chạy", "Chạy trên JVM (Java Virtual Machine)", "Chạy trên Browser/Node.js"],
            ["Ứng dụng chính", "Backend, Mobile (Android), Enterprise", "Frontend Web, Backend (Node.js)"],
            ["Cú pháp", "Phức tạp hơn, nghiêm ngặt, dài dòng", "Linh hoạt, ngắn gọn, dễ học hơn"],
            ["Mô hình lập trình", "OOP thuần túy", "Multi-paradigm (OOP, Functional, Event)"],
            ["Quản lý bộ nhớ", "Tự động (Garbage Collection)", "Tự động (Garbage Collection)"],
            ["Hiệu năng", "Cao, ổn định khi xử lý tác vụ nặng", "Nhanh cho ứng dụng web và I/O nhẹ"],
            ["Hệ sinh thái", "Spring, Hibernate, Maven", "React, Vue, Express, npm"],
            ["Xử lý đồng thời", "Multi-threading mạnh mẽ", "Single-threaded với Event Loop thần thánh"]
          ]
        },
        {
          type: "heading",
          content: "Ví dụ so sánh cách khai báo biến"
        },
        {
          type: "subheading",
          content: "1. Khai báo biến trong Java (Cần chỉ định kiểu)"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Strongly typed, cần khai báo kiểu dữ liệu rõ ràng\nint total = 100;\n// total = \"một trăm\"; // Lỗi biên dịch ngay lập tức!"
        },
        {
          type: "subheading",
          content: "2. Khai báo biến trong JavaScript (Tự động nhận kiểu)"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Dynamically typed, không cần khai báo kiểu trước\nlet variable = 10;       // Kiểu number\nvariable = \"now a string\"; // Chuyển thành string nhẹ nhàng\nvariable = true;         // Chuyển thành boolean luôn\n\n// Phép toán vui vẻ với kiểu dữ liệu hỗn hợp\nlet result = \"5\" + 3;    // \"53\" (Ghép chuỗi)\nlet sum = \"5\" - 3;       // 2 (Tự động ép kiểu về number để trừ)"
        },
        {
          type: "subheading",
          content: "3. Xử lý mảng (Array) khác biệt"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Mảng cố định kích thước, muốn động phải dùng ArrayList\nimport java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(\"Spring Boot\");"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Mảng động linh hoạt, chứa gì cũng được\nlet mixedArray = [1, \"hello\", true, { name: \"Luận\" }];\nmixedArray.push(\"thêm thoải mái vào cuối\");"
        },
        {
          type: "subheading",
          content: "4. Bất đồng bộ (Asynchronous)"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Dùng Thread hoặc CompletableFuture\nimport java.util.concurrent.CompletableFuture;\nCompletableFuture.supplyAsync(() -> \"Dữ liệu từ Java\");"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Async/Await siêu gọn gàng\nasync function processData() {\n    const data = await fetchData();\n    console.log(\"Dữ liệu nhận về:\", data);\n}"
        },
        {
          type: "heading",
          content: "Khi nào nên dùng ngôn ngữ nào?"
        },
        {
          type: "text",
          content: "Dùng Java khi bạn cần xây dựng hệ thống backend lớn, ổn định, xử lý các tác vụ tài chính, ngân hàng yêu cầu độ chính xác cao. Dùng JavaScript khi bạn làm giao diện web frontend, hoặc viết các API nhẹ nhàng, nhanh chóng với Node.js. Hoặc học cả hai giống mình để làm Full Stack!"
        }
      ]
    },
    {
      id: 6,
      title: "Các khái niệm JS cơ bản - Var, Let, Const và bóng ma Hoisting",
      excerpt:
        "Hiểu rõ Scope, sự khác nhau giữa Var/Let/Const và cơ chế Hoisting kỳ bí của JavaScript để tránh mất ngủ về đêm.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      date: "11/03/2025",
      category: "JavaScript",
      content: [
        { type: "heading", content: "Var, Let, Const khác nhau chỗ nào?" },
        { type: "text", content: "Trước ES6, JavaScript chỉ có var. Sau đó let và const ra đời để giải quyết đống rắc rối mà var mang lại." },
        {
          type: "code",
          language: "javascript",
          content: `// var có function scope - dễ bị ghi đè ngoài ý muốn
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // Cùng một biến x!
        console.log(x); // 20
    }
    console.log(x); // 20
}

// let có block scope - an toàn hơn nhiều
function testLet() {
    let y = 10;
    if (true) {
        let y = 20; // Biến y hoàn toàn khác nằm trong block if
        console.log(y); // 20
    }
    console.log(y); // 10
}

// const có block scope và không thể gán lại giá trị mới
const PI = 3.14159;
// PI = 3.14; // Lỗi ngay lập tức!`
        },
        { type: "heading", content: "Functions vs Arrow Functions" },
        {
          type: "code",
          language: "javascript",
          content: `// Hàm truyền thống (Traditional function)
function add(a, b) {
    return a + b;
}

// Hàm mũi tên (Arrow function) - gọn gàng và không có 'this' riêng
const multiply = (a, b) => a * b;

console.log(add(5, 3));        // 8
console.log(multiply(5, 3));   // 15`
        },
        { type: "heading", content: "Hoisting là cái quái gì?" },
        { type: "text", content: "Hoisting là cơ chế của JS tự động đưa khai báo biến và hàm lên đầu scope trước khi thực thi. Nó làm cho code chạy rất kỳ lạ nếu bạn dùng var." },
        {
          type: "code",
          language: "javascript",
          content: `// Gọi hàm trước khi khai báo? Vẫn chạy ngon!
greet();

function greet() {
    console.log("Chào các bạn! Luận đây.");
}

// Gọi biến trước khi khai báo? Trả về undefined chứ không lỗi!
console.log(myVar); // undefined
var myVar = 5;

// let và const thì KHÔNG bị hoisting (thực ra là nằm trong Temporal Dead Zone)
console.log(y); // Lỗi ReferenceError!
let y = 10;`
        }
      ]
    },
    {
      id: 7,
      title: "ES6 - Bộ đồ chơi mới giúp code JS bớt mỏi tay",
      excerpt: "Tìm hiểu các tính năng bá đạo của ES6 như Arrow Function, Destructuring, Spread Operator và Template Literals.",
      image: "https://images.viblo.asia/6549a9d8-f10e-4b5f-a87e-ae16631d2e52.png",
      date: "13/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "ES6 (ECMAScript 2015) - Bước chuyển mình vĩ đại"
        },
        {
          type: "text",
          content: "ES6 giống như một phiên bản nâng cấp động cơ cho JavaScript. Nó mang lại một loạt cú pháp mới giúp viết code ngắn hơn, sạch hơn và chuyên nghiệp hơn hẳn."
        },
        {
          type: "heading",
          content: "1. Let & Const - Tạm biệt Var"
        },
        {
          type: "text",
          content: "Quản lý scope của biến chặt chẽ hơn, tránh những lỗi ngớ ngẩn do rò rỉ scope."
        },
        {
          type: "code",
          language: "javascript",
          content: "let age = 22;\nage = 23; // Thay đổi thoải mái\n\nconst user = { name: 'Luận' };\nuser.name = 'Thành Luận'; // OK - Thay đổi thuộc tính bên trong object\n// user = {}; // Lỗi! Không thể gán lại object mới."
        },
        {
          type: "heading",
          content: "2. Arrow Functions"
        },
        {
          type: "text",
          content: "Viết hàm siêu ngắn gọn, cực kỳ phù hợp khi truyền vào các hàm xử lý mảng như map, filter."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Cách viết cũ\nconst double = function(x) { return x * 2; };\n\n// ES6 Arrow Function\nconst doubleArrow = x => x * 2;\n\n// Không tham số\nconst sayHello = () => 'Hello mọi người!';"
        },
        {
          type: "heading",
          content: "3. Destructuring"
        },
        {
          type: "text",
          content: "Bóc tách phần tử từ Array hoặc Object một cách trực quan, không cần gọi lặp đi lặp lại tên object."
        },
        {
          type: "code",
          language: "javascript",
          content: "const student = { name: 'Võ Thành Luận', school: 'HUTECH' };\n// Lấy ra biến name và school\nconst { name, school } = student;\nconsole.log(name + \" học tại \" + school);"
        },
        {
          type: "heading",
          content: "4. Spread Operator (...)"
        },
        {
          type: "text",
          content: "Rải các phần tử của mảng hoặc thuộc tính của object. Cực kỳ hữu dụng để sao chép hoặc ghép dữ liệu."
        },
        {
          type: "code",
          language: "javascript",
          content: "const original = [1, 2, 3];\nconst cloned = [...original]; // Sao chép mảng\n\nconst details = { ...student, age: 22 }; // Thêm thuộc tính vào object"
        },
        {
          type: "heading",
          content: "5. Template Literals"
        },
        {
          type: "text",
          content: "Không còn phải cộng chuỗi bằng dấu '+' cực khổ nữa, dùng dấu backtick (`) và \${biến} để đưa biến trực tiếp vào chuỗi."
        },
        {
          type: "code",
          language: "javascript",
          content: "const myName = 'Luận';\nconst job = 'Intern';\nconsole.log(`Tôi là \${myName}, hiện làm \${job} tại DUDI Software.`);"
        },
        {
          type: "heading",
          content: "Tóm tắt"
        },
        {
          type: "list",
          content: "Những điểm chính của ES6 cần nhớ nằm lòng:",
          items: [
            "Dùng const cho hằng số hoặc object/array cố định, let khi cần gán lại",
            "Arrow function giúp code ngắn gọn, tự động bind ngữ cảnh lexical 'this'",
            "Destructuring rút ngắn thời gian bóc tách dữ liệu",
            "Spread operator là vũ khí đắc lực để sao chép và gộp mảng/object",
            "Template literals giúp viết chuỗi nội suy cực kỳ sạch đẹp"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Closures trong JavaScript - Hiểu đơn giản không hack não",
      excerpt: "Closure là gì? Làm thế nào một hàm có thể nhớ được quá khứ của nó và ứng dụng để tạo ra biến Private.",
      image: "https://edward-huang.com/images/what-is-really-so-special-about-javascript-closure-/Closure%20JS.png",
      date: "15/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "Định nghĩa dễ nuốt về Closure"
        },
        {
          type: "text",
          content: "Một Closure là sự kết hợp giữa một hàm và môi trường nơi nó được tạo ra. Nói một cách dễ hiểu: Hàm con có khả năng 'ghi nhớ' và truy cập được các biến của hàm cha bên ngoài nó, ngay cả khi hàm cha đã chạy xong và biến mất khỏi bộ nhớ."
        },
        {
          type: "code",
          language: "javascript",
          content: "function outer() {\n    const secretMessage = \"Luận thích code!\";\n    \n    function inner() {\n        console.log(secretMessage); // inner nhớ biến secretMessage của outer\n    }\n    \n    return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // In ra: \"Luận thích code!\""
        },
        {
          type: "heading",
          content: "Ví dụ thực tế: Tạo máy đếm (Counter)"
        },
        {
          type: "code",
          language: "javascript",
          content: "function createCounter() {\n    let count = 0; // Biến này hoàn toàn private nhờ closure\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        reset: function() {\n            count = 0;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\ncounter.reset();\nconsole.log(counter.increment()); // 1"
        },
        {
          type: "heading",
          content: "Cẩn thận với vòng lặp và var"
        },
        {
          type: "code",
          language: "javascript",
          content: "// Lỗi kinh điển do var không có block scope\nfor (var i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // In ra 4, 4, 4 vì i đã tăng lên 4 trước khi timeout chạy\n    }, 100);\n}\n\n// Giải pháp hiện đại: Sử dụng let để tạo block scope mới cho mỗi vòng lặp\nfor (let i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // In ra chuẩn bài 1, 2, 3\n    }, 100);\n}"
        },
        {
          type: "heading",
          content: "Ứng dụng thực tế: Tài khoản ngân hàng bảo mật"
        },
        {
          type: "code",
          language: "javascript",
          content: "function createBankAccount(initialBalance) {\n    let balance = initialBalance; // Biến private\n    \n    return {\n        deposit: function(amount) {\n            balance += amount;\n            return balance;\n        },\n        withdraw: function(amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return balance;\n            }\n            return 'Tài khoản không đủ số dư!';\n        }\n    };\n}\n\nconst myAccount = createBankAccount(1000);\nconsole.log(myAccount.deposit(500)); // 1500\n// console.log(myAccount.balance); // undefined (không thể truy cập trực tiếp)"
        },
        {
          type: "heading",
          content: "Tóm tắt"
        },
        {
          type: "list",
          content: "Điểm quan trọng cần nhớ về Closure:",
          items: [
            "Closure giúp tạo ra các thuộc tính và phương thức private giống như trong OOP Java",
            "Giúp hàm ghi nhớ scope bên ngoài nơi nó được định nghĩa",
            "Luôn dùng let/const trong vòng lặp để tránh lỗi scope của var",
            "Ứng dụng nhiều trong Module Pattern và Function Factory"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Array, Set, Map trong JS - Bộ ba siêu đẳng xử lý dữ liệu",
      excerpt: "Phân biệt Map vs Object, Set vs Array. Học cách sử dụng map(), filter(), reduce() để xử lý mảng mượt mà.",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-20%20174654.png?raw=true",
      date: "18/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "1. Map - Khi Object chưa đủ đô"
        },
        {
          type: "text",
          content: "Map lưu trữ dữ liệu dạng key-value giống Object, nhưng key của Map có thể là bất kỳ kiểu dữ liệu gì (kể cả object khác) chứ không bị giới hạn chỉ là String hay Symbol như Object. Hơn nữa, Map giữ nguyên thứ tự các phần tử khi thêm vào."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Tạo Map\nconst map = new Map();\n\n// Thêm dữ liệu\nmap.set('name', 'Võ Thành Luận');\nmap.set('school', 'HUTECH');\nmap.set({ id: 99 }, 'Dữ liệu đặc biệt'); // Key là một object!\n\n// Kiểm tra và duyệt Map\nconsole.log(map.get('name')); // 'Võ Thành Luận'\nconsole.log(map.size); // 3"
        },
        {
          type: "heading",
          content: "2. Set - Thế giới không có sự trùng lặp"
        },
        {
          type: "text",
          content: "Set là một bộ sưu tập các phần tử duy nhất. Nếu bạn thêm một giá trị đã tồn tại vào Set, nó sẽ tự động bỏ qua. Tuyệt chiêu lọc trùng mảng cực nhanh bằng Set:"
        },
        {
          type: "code",
          language: "javascript",
          content: "const numbers = [1, 2, 2, 3, 4, 4, 5];\n\n// Dùng Set để lọc trùng mảng\nconst uniqueNumbers = [...new Set(numbers)];\nconsole.log(uniqueNumbers); // [1, 2, 3, 4, 5]"
        },
        {
          type: "heading",
          content: "3. Array Methods - Viết code chuẩn Declarative"
        },
        {
          type: "text",
          content: "Hãy bỏ các vòng lặp for truyền thống đi khi xử lý mảng, và làm quen với bộ ba map, filter, reduce để code của bạn trông chuyên nghiệp và ngắn gọn hơn."
        },
        {
          type: "subheading",
          content: "Transform Methods - Biến đổi dữ liệu"
        },
        {
          type: "text",
          content: "map() dùng để biến đổi từng phần tử trong mảng, filter() để lọc các phần tử thỏa mãn điều kiện, và reduce() để gom mảng về một giá trị duy nhất."
        },
        {
          type: "code",
          language: "javascript",
          content: "const nums = [1, 2, 3, 4];\n\n// Nhân đôi giá trị mảng\nconst doubled = nums.map(n => n * 2); // [2, 4, 6, 8]\n\n// Lọc số chẵn\nconst even = nums.filter(n => n % 2 === 0); // [2, 4]\n\n// Tính tổng các số\nconst sum = nums.reduce((total, n) => total + n, 0); // 10"
        },
        {
          type: "subheading",
          content: "Search Methods - Tìm kiếm phần tử"
        },
        {
          type: "text",
          content: "find() trả về phần tử đầu tiên thỏa mãn điều kiện, findIndex() trả về vị trí của nó, some() kiểm tra có ít nhất một phần tử đạt yêu cầu, every() kiểm tra toàn bộ phần tử."
        },
        {
          type: "code",
          language: "javascript",
          content: "const students = [\n  { id: 1, name: 'Luận' },\n  { id: 2, name: 'Nam' }\n];\n\nconst luan = students.find(s => s.name === 'Luận'); // { id: 1, name: 'Luận' }\nconst hasLuan = students.some(s => s.name === 'Luận'); // true"
        },
        {
          type: "subheading",
          content: "Các phương thức tiện ích khác"
        },
        {
          type: "text",
          content: "includes() để kiểm tra nhanh một giá trị có nằm trong mảng hay không. slice() để trích xuất mảng con (không thay đổi mảng cũ). splice() để xóa hoặc chèn phần tử (sẽ thay đổi trực tiếp mảng gốc)."
        },
        {
          type: "code",
          language: "javascript",
          content: "const arr = ['Java', 'JS', 'C#'];\nconsole.log(arr.includes('JS')); // true\n\nconst sub = arr.slice(0, 2); // ['Java', 'JS']"
        },
        {
          type: "heading",
          content: "Kết luận"
        },
        {
          type: "list",
          content: "Tóm lại khi xử lý dữ liệu:",
          items: [
            "Dùng Map khi key phức tạp hoặc cần duy trì thứ tự chèn phần tử",
            "Dùng Set khi cần lưu danh sách độc nhất (không trùng lặp)",
            "Tận dụng tối đa các Array methods để code ngắn sạch, tránh vòng lặp thủ công"
          ]
        }
      ]
    },
    {
      id: 10,
      title: "Bí kíp sinh tồn và tự học của sinh viên năm cuối HUTECH",
      excerpt:
        "Làm sao để vừa hoàn thành việc học trên trường, vừa đi thực tập Full Stack ở DUDI Software mà không bị stress? Đây là trải nghiệm của mình.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "01/12/2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "Cú sốc năm cuối: Khi lý thuyết va chạm thực tế" },
        { type: "text", content: "Năm cuối đại học là thời điểm nhạy cảm. Bạn vừa phải lo đồ án tốt nghiệp, vừa bắt đầu đi làm thực tế. Bản thân mình khi vào thực tập Full Stack tại DUDI Software cũng từng ngợp trước khối lượng công nghệ mới." },
        {
          type: "list",
          content: "Những bài học xương máu mình rút ra:",
          items: [
            "Học qua dự án thực tế: Đừng chỉ đọc tài liệu suông. Hãy tự tay code một cái gì đó, ví dụ như trang portfolio này hay dự án LunQuiz.",
            "Đọc code của người khác: Lên GitHub gõ từ khóa dự án bạn muốn làm, xem cách các dev dày dạn kinh nghiệm tổ chức thư mục và viết code.",
            "Đặt câu hỏi đúng cách: Khi gặp bug, hãy tự debug trước ít nhất 30 phút, tìm trên Google/StackOverflow trước khi đi hỏi mentor.",
            "Rèn luyện tiếng Anh: Đọc tài liệu tiếng Anh (như MDN, Spring Docs) giúp bạn tiếp cận kiến thức gốc nhanh nhất."
          ]
        },
        { type: "heading", content: "Tài nguyên học tập mình hay dùng" },
        {
          type: "list",
          content: "Nguồn tham khảo chất lượng cao:",
          items: [
            "Documentation chính thức: MDN Web Docs cho JavaScript, Spring Docs cho Java Spring Boot.",
            "Kênh YouTube: Traversy Media, Programming with Mosh, Web Dev Simplified.",
            "Luyện thuật toán: LeetCode (mỗi ngày 1 bài cho đầu óc minh mẫn).",
            "Cộng đồng: Reddit r/learnprogramming, các group lập trình viên Việt Nam."
          ]
        },
        { type: "heading", content: "Lộ trình tự học từ trải nghiệm cá nhân" },
        { type: "text", content: "Mình đi từ C cơ bản để rèn luyện tư duy logic, sau đó học Java để nắm vững lập trình hướng đối tượng OOP và cơ sở dữ liệu SQL Server. Kế tiếp là học JavaScript/TypeScript để làm Frontend React. Sự kết hợp này giúp mình tự tin gánh cả Frontend lẫn Backend." },
        { type: "heading", content: "Những sai lầm nên tránh" },
        {
          type: "list",
          content: "Hãy tránh xa những điều này nếu không muốn burn-out:",
          items: [
            "Học quá nhiều ngôn ngữ/framework cùng một lúc mà không nắm chắc cái nào.",
            "Xem video tutorial thụ động mà không trực tiếp gõ code thực hành.",
            "Copy-paste code từ StackOverflow hay ChatGPT mà không thèm hiểu dòng code đó làm gì.",
            "Bỏ qua kiến thức nền tảng (cấu trúc dữ liệu, cơ sở dữ liệu) để nhảy cóc vào framework."
          ]
        }
      ]
    },
    {
      id: 11,
      title: "TCP vs UDP – Giao thức mạng dưới lăng kính vui nhộn",
      excerpt:
        "Một bên là anh chàng cẩn thận, tỉ mỉ (TCP) và một bên là gã giao hàng bất chấp tốc độ (UDP). Khi nào dùng gì?",
      image: "https://image.vietnix.vn/wp-content/uploads/2022/07/UDP-va-TCP.webp",
      date: "15/12/2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "1. Giới thiệu chung"
        },
        {
          type: "text",
          content: "Khi bạn gửi tin nhắn trên Zalo, lướt web, hay chơi game PvP đối kháng 1v1 trên dự án LunQuiz của mình, dữ liệu sẽ được truyền đi thông qua hai giao thức mạng phổ biến nhất: TCP và UDP."
        },
        {
          type: "subheading",
          content: "Họ là ai?"
        },
        {
          type: "text",
          content: "TCP (Transmission Control Protocol) và UDP (User Datagram Protocol) hoạt động ở tầng Transport (Tầng 4) của mô hình mạng. Nhiệm vụ chính của tụi nó là vận chuyển các gói dữ liệu giữa các máy tính với nhau."
        },
        {
          type: "heading",
          content: "2. TCP - Anh chàng shipper cẩn thận và chu đáo"
        },
        {
          type: "text",
          content: "TCP là giao thức hướng kết nối (connection-oriented). Trước khi gửi thư, nó bắt buộc phải thiết lập một kết nối an toàn với máy nhận thông qua cơ chế bắt tay 3 bước."
        },
        {
          type: "subheading",
          content: "Tính cách của TCP:"
        },
        {
          type: "list",
          content: "Những đặc điểm nổi bật của TCP:",
          items: [
            "Luôn bắt tay 3 bước (SYN -> SYN-ACK -> ACK) trước khi làm việc.",
            "Đảm bảo dữ liệu đến nơi đầy đủ, không thiếu một byte nào.",
            "Đảm bảo đúng thứ tự: Gửi gói 1, 2, 3 thì đầu nhận sẽ nhận đúng 1, 2, 3.",
            "Có cơ chế kiểm soát lỗi và kiểm soát tắc nghẽn (quá tải đường truyền).",
            "Chậm hơn UDP vì tốn thời gian xác nhận (ACK) cho mỗi gói tin."
          ]
        },
        {
          type: "subheading",
          content: "TCP Bắt tay 3 bước dưới dạng tin nhắn đối thoại:"
        },
        {
          type: "code",
          language: "text",
          content: "Client: \"Alo Server, kết nối với mình nha?\" (SYN)\nServer: \"Ok Client nhận được rồi nha, kết nối luôn!\" (SYN-ACK)\nClient: \"Ok mình bắt đầu gửi dữ liệu đây!\" (ACK)\n\n-> Kết nối an toàn đã thiết lập thành công."
        },
        {
          type: "subheading",
          content: "Ứng dụng thực tế của TCP"
        },
        {
          type: "list",
          content: "TCP được dùng trong các dịch vụ yêu cầu tính chính xác cao:",
          items: [
            "Web (giao thức HTTP/HTTPS)",
            "Gửi Email (SMTP, IMAP)",
            "Truyền tải file dữ liệu (FTP)",
            "Giao dịch ngân hàng, mua sắm online"
          ]
        },
        {
          type: "heading",
          content: "3. UDP - Gã giao hàng siêu tốc, bất chấp mọi rủi ro"
        },
        {
          type: "text",
          content: "UDP là giao thức không kết nối (connectionless). Nó không thèm bắt tay bắt chân, có dữ liệu là nó bắn đi luôn. Nó không quan tâm người nhận có nhận được hay không, có bị mất gói tin giữa đường hay không."
        },
        {
          type: "subheading",
          content: "Tính cách của UDP:"
        },
        {
          type: "list",
          content: "Những đặc điểm nổi bật của UDP:",
          items: [
            "Không cần thiết lập kết nối (bắn gói tin đi ngay lập tức).",
            "Không đảm bảo dữ liệu đến đầy đủ (mất gói tin thì bỏ qua luôn).",
            "Tốc độ cực nhanh và độ trễ siêu thấp.",
            "Nhẹ nhàng, không tốn nhiều tài nguyên hệ thống."
          ]
        },
        {
          type: "subheading",
          content: "Ứng dụng thực tế của UDP"
        },
        {
          type: "list",
          content: "UDP được dùng trong các ứng dụng ưu tiên tốc độ và thời gian thực:",
          items: [
            "Video call (Zoom, Microsoft Teams, Zalo Call)",
            "Chơi game online thời gian thực (như các game đối kháng trên LunQuiz)",
            "Livestream video, nghe nhạc trực tuyến",
            "Hệ thống DNS (truy vấn tên miền nhanh)"
          ]
        },
        {
          type: "heading",
          content: "4. Bảng so sánh TCP vs UDP tóm tắt"
        },
        {
          type: "table",
          content: "Sự khác biệt cốt lõi",
          columns: ["Tiêu chí", "TCP (Anh cẩn thận)", "UDP (Anh nhanh nhẹn)"],
          rows: [
            ["Kết nối", "Có bắt tay thiết lập kết nối", "Không cần kết nối"],
            ["Đảm bảo dữ liệu", "Có, gửi lại nếu mất", "Không, mất là mất luôn"],
            ["Tốc độ", "Chậm hơn", "Nhanh hơn rất nhiều"],
            ["Đảm bảo thứ tự", "Có đảm bảo thứ tự gói tin", "Không đảm bảo thứ tự"],
            ["Trọng lượng gói", "Nặng (header 20 bytes)", "Nhẹ (header 8 bytes)"]
          ]
        },
        {
          type: "heading",
          content: "Kết luận"
        },
        {
          type: "text",
          content: "Hãy dùng TCP khi bạn cần độ chính xác tuyệt đối (như đăng nhập, thanh toán). Hãy dùng UDP khi bạn cần độ trễ thấp và tốc độ bàn thờ (như gọi video, chơi game). Việc hiểu rõ TCP vs UDP sẽ giúp bạn thiết kế kiến trúc hệ thống mạng cực kỳ tối ưu!"
        }
      ]
    },
    {
      id: 12,
      title: "Tối ưu hóa Server với Java NIO - Non-blocking I/O",
      excerpt:
        "Làm sao để 1 thread duy nhất có thể cân hàng ngàn kết nối cùng lúc? Khám phá sức mạnh của Selector và Channel trong Java NIO.",
      image: "https://i.ytimg.com/vi/FRY9BjU2W5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDU6kOPcqFngjUqGqf8f7PcJxv6ZQ",
      date: "20/12/2025",
      category: "Java",
      content: [
        {
          type: "text",
          content: "Trong lập trình Socket truyền thống (Blocking I/O), mỗi khi có một client kết nối tới Server, ta phải cấp cho nó 1 Thread riêng biệt để xử lý. Nếu có 10.000 client kết nối? Server sẽ cần 10.000 thread. Kết quả là hệ thống sập vì cạn kiệt bộ nhớ (RAM) và CPU tốn quá nhiều thời gian cho việc Context Switching. Java NIO (New I/O) ra đời để giải quyết triệt để vấn đề này."
        },
        {
          type: "heading",
          content: "1. Blocking I/O – Nỗi đau đầu của Socket truyền thống"
        },
        {
          type: "text",
          content: "Mô hình 'One Thread per Connection' hoạt động rất tốt với số lượng client nhỏ. Nhưng khi số lượng người dùng đồng thời tăng lên đột biến (như khi hệ thống game LunQuiz thu hút hàng ngàn người chơi cùng lúc), mô hình này sẽ bộc lộ điểm yếu chết người."
        },
        {
          type: "list",
          content: "Những hạn chế của Blocking I/O:",
          items: [
            "Thread bị block (chặn) khi đợi client gửi dữ liệu, gây lãng phí tài nguyên.",
            "Tốn bộ nhớ RAM để duy trì các stack của thread (mỗi thread tiêu tốn khoảng 512KB - 1MB RAM).",
            "CPU tốn nhiều thời gian cho việc chuyển đổi ngữ cảnh (Context Switching) hơn là xử lý nghiệp vụ chính."
          ]
        },
        {
          type: "heading",
          content: "2. Java NIO ra đời giải cứu thế giới"
        },
        {
          type: "text",
          content: "Java NIO giới thiệu một mô hình mới: hướng sự kiện (Event-driven) và Non-blocking. Thread của Server sẽ không bao giờ bị block để ngồi chờ đợi dữ liệu nữa. Thay vào đó, nó chỉ làm việc khi có sự kiện thực sự xảy ra (ví dụ: client gửi dữ liệu đến)."
        },
        {
          type: "heading",
          content: "3. Ba thành phần cốt lõi của Java NIO"
        },
        {
          type: "subheading",
          content: "Channel (Kênh truyền dữ liệu)"
        },
        {
          type: "text",
          content: "Channel giống như một đường ống truyền dữ liệu 2 chiều. Khác với InputStream hay OutputStream của IO truyền thống (chỉ truyền 1 chiều), Channel cho phép cả đọc lẫn ghi đồng thời."
        },
        {
          type: "subheading",
          content: "Buffer (Vùng đệm)"
        },
        {
          type: "text",
          content: "Buffer là vùng đệm bộ nhớ dùng để chứa dữ liệu. Khi làm việc với NIO, bạn không đọc ghi trực tiếp từ Channel mà phải thông qua Buffer. Luồng đi sẽ là: Channel -> Buffer -> Xử lý dữ liệu -> Buffer -> Channel."
        },
        {
          type: "code",
          language: "java",
          content: "// Khởi tạo Buffer có kích thước 1024 bytes\nByteBuffer buffer = ByteBuffer.allocate(1024);\n\n// Đọc dữ liệu từ Channel ghi vào Buffer\nchannel.read(buffer);\n\n// Chuyển Buffer từ chế độ ghi sang chế độ đọc\nbuffer.flip();"
        },
        {
          type: "subheading",
          content: "Selector (Bộ giám sát - Trái tim của NIO)"
        },
        {
          type: "text",
          content: "Selector là một thành phần cho phép một Thread duy nhất giám sát nhiều Channel (kết nối) cùng một lúc. Nó hoạt động như một người gác cổng, khi nào có Channel nào sẵn sàng (có dữ liệu gửi lên, có client mới kết nối) thì nó mới báo cho Thread xử lý."
        },
        {
          type: "heading",
          content: "4. Ví dụ code NIO Server đơn giản sử dụng Selector"
        },
        {
          type: "code",
          language: "java",
          content: "import java.nio.channels.*;\nimport java.nio.*;\nimport java.net.*;\nimport java.util.*;\n\npublic class NIOServer {\n    public static void main(String[] args) throws Exception {\n        Selector selector = Selector.open();\n        ServerSocketChannel serverChannel = ServerSocketChannel.open();\n        serverChannel.bind(new InetSocketAddress(8080));\n        serverChannel.configureBlocking(false); // Bật chế độ Non-blocking!\n        serverChannel.register(selector, SelectionKey.OP_ACCEPT);\n        System.out.println(\"NIO Server started on port 8080...\");\n        \n        while (true) {\n            selector.select(); // Chờ có sự kiện xảy ra\n            Set<SelectionKey> selectedKeys = selector.selectedKeys();\n            Iterator<SelectionKey> iter = selectedKeys.iterator();\n            \n            while (iter.hasNext()) {\n                SelectionKey key = iter.next();\n                iter.remove();\n                \n                if (key.isAcceptable()) {\n                    // Chấp nhận kết nối mới từ client\n                    SocketChannel clientChannel = serverChannel.accept();\n                    clientChannel.configureBlocking(false);\n                    clientChannel.register(selector, SelectionKey.OP_READ);\n                    System.out.println(\"Client mới kết nối: \" + clientChannel.getRemoteAddress());\n                }\n                if (key.isReadable()) {\n                    // Đọc dữ liệu từ client\n                    SocketChannel clientChannel = (SocketChannel) key.channel();\n                    ByteBuffer buffer = ByteBuffer.allocate(1024);\n                    clientChannel.read(buffer);\n                    // Xử lý dữ liệu...\n                }\n            }\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "5. So sánh nhanh Blocking IO vs Java NIO"
        },
        {
          type: "table",
          content: "Blocking IO vs Non-blocking NIO",
          columns: ["Tiêu chí", "Blocking IO (OIO)", "Non-blocking IO (NIO)"],
          rows: [
            ["Mô hình xử lý", "1 Thread cho 1 Connection", "1 Thread cho nhiều Connection"],
            ["Khả năng chịu tải", "Kém khi số kết nối cực lớn", "Cực tốt, xử lý hàng vạn kết nối"],
            ["Tiêu hao tài nguyên", "Tốn nhiều RAM và CPU Context Switch", "Tiết kiệm RAM và tối ưu CPU"],
            ["Độ phức tạp code", "Dễ viết, trực quan", "Khó viết hơn, hướng sự kiện"]
          ]
        },
        {
          type: "heading",
          content: "Kết luận"
        },
        {
          type: "text",
          content: "Java NIO là nền tảng cốt lõi của những framework backend hiệu suất cao như Netty, Spring WebFlux, Vert.x. Việc nắm vững Java NIO giúp bạn hiểu sâu sắc cách tối ưu hóa tài nguyên máy chủ và sẵn sàng xây dựng các hệ thống realtime lớn!"
        }
      ]
    }
  ],

  certificates: [
    {
      id: 1,
      title: "Networking Basics",
      issuer: "Cisco",
      date: "Tháng 11, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20145024.png?raw=true",
      credentialId: "e7935a5a-7538-4dad-b4a8-a2fc40a71c29",
      skills: [
        "Network ",
      ]
    },
    {
      id: 2,
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "Tháng 12, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20150039.png?raw=true",
      credentialId: "5c24284d-57cd-444c-90c1-3f22cb5812c9",
      skills: ["JavaScript"]
    },
    {
      id: 3,
      title: "JavaScript Essentials 2",
      issuer: "Cisco",
      date: "Tháng 12, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20150123.png?raw=true",
      credentialId: "3d927bc9-374a-4fc7-9ad3-87cfe029829f",
      skills: ["JavaScript"]
    },
    {
      id: 4,
      title: "TOEIC 565",
      issuer: "IIG Vietnam",
      date: "Tháng 12, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/z7343453066600_27ed7a9552dfeba93b90814f58a17d54.jpg?raw=true",
      credentialId: "Vo Thanh Luan",
      skills: ["English"]
    },
    {
      id: 5,
      title: "Kỹ năng giao tiếp và làm việc nhóm",
      issuer: "Hutech",
      date: "Tháng 8, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/z7343453059717_35847c4345af003e7b161514a0c691d7.jpg?raw=true",
      credentialId: "0055772",
      skills: ["Communication", "Teamwork"]
    },
  ],
  stats: [
    { id: 1, value: "10+", label: "Dự án hoàn thành" },
    { id: 2, value: "6+", label: "Chứng chỉ" },
    { id: 3, value: "6+", label: "Công nghệ sử dụng" },
  ],
};
