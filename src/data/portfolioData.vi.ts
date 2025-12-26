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
      id: 1,
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
      id: 2,
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
      id: 3,
      type: "work",
      title: "Senior Product Designer",
      organization: "Google Inc.",
      period: "2022 - Present",
      description: "Leading design for Google Workspace products and mentoring junior designers.",
    },
 
  ],
  skills: [
    { id: 1, name: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg", percentage: 90 },
    { id: 2, name: "Visual Studio Code", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png", percentage: 90 },
    { id: 3, name: "Visual Studio 2022", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg", percentage: 88 },
    { id: 4, name: "StartUML", logo: "https://p1.hiclipart.com/preview/240/352/17/star-symbol-staruml-unified-modeling-language-uml-tool-diagram-computer-software-java-umlet-png-clipart.jpg", percentage: 85 },
    { id: 5, name: "SQL Server", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", percentage: 80 },
    { id: 6, name: "PostgreSQL", logo: "https://images.icon-icons.com/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png", percentage: 75 },
    { id: 7, name: "Cisco packet tracer", logo: "https://hurbad.com/wp-content/uploads/2021/12/Cisco-Packet-Tracer.png", percentage: 75 },
    { id: 8, name: "NetBeans", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Apache_NetBeans_Logo.svg/1776px-Apache_NetBeans_Logo.svg.png", percentage: 75 },
    { id: 9, name: "Laragon", logo: "https://cdn.worldvectorlogo.com/logos/laragon.svg", percentage: 75 },
    { id: 10, name: "VMware", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/2051px-Vmware_workstation_16_icon.svg.png", percentage: 70 },
  ],
  blogs: [
  {
    id: 1,
    title: "Giới thiệu về tôi và hành trình học lập trình",
    excerpt:
      "Chia sẻ ngắn về bản thân, định hướng nghề nghiệp và con đường học Java & JavaScript của tôi.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    date: "20/09/2025",
    category: "Giới thiệu",
    content: [
      { type: "heading", content: "Xin chào! Tôi là Võ Thành Luận" },
      { type: "text", content: "Tôi là sinh viên năm 4 ngành Kỹ thuật Phần mềm tại Đại học Công nghệ TP.HCM (HUTECH). Với niềm đam mê về lập trình và công nghệ, tôi đã dành 3 năm để học hỏi và rèn luyện kỹ năng trong lĩnh vực phát triển phần mềm." },
      { type: "heading", content: "Hành trình học lập trình" },
      { type: "text", content: "Bắt đầu từ năm nhất với ngôn ngữ C cơ bản, tôi dần tiếp cận với Java, JavaScript và các framework hiện đại. Mỗi ngôn ngữ đều mang đến những thử thách riêng nhưng cũng giúp tôi phát triển tư duy lập trình toàn diện." },
      { 
        type: "list", 
        content: "Các kỹ năng chính tôi đã học:",
        items: [
          "Ngôn ngữ lập trình: C, C#",
          "Java & Spring Boot cho backend development",
          "ASP.NET Core cho web applications",
          "Database: SQL Server,MySQL, PostgreSQL",
          "Mobile: Flutter "
        ]
      },
      { type: "heading", content: "Định hướng nghề nghiệp" },
      { type: "text", content: "Tôi đang hướng tới vị trí Backend Developer, đặc biệt quan tâm đến việc xây dựng các hệ thống API hiệu quả và bảo mật. Tôi tin rằng một backend vững chắc là nền tảng cho mọi ứng dụng thành công." }
    ]
  },
  {
    id: 2,
    title: "Java là gì? Tổng quan cho người mới bắt đầu",
    excerpt:
      "Giới thiệu ngôn ngữ Java, ưu điểm, ứng dụng thực tế và lý do Java vẫn được sử dụng rộng rãi.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
    date: "03/10/2025",
    category: "Java",
    content: [
      { type: "heading", content: "Java là gì?" },
      { type: "text", content: "Java là ngôn ngữ lập trình hướng đối tượng (OOP) được phát triển bởi Sun Microsystems vào năm 1995. Với phương châm 'Write Once, Run Anywhere' (Viết một lần, chạy mọi nơi), Java đã trở thành một trong những ngôn ngữ phổ biến nhất thế giới." },
      { type: "heading", content: "Ưu điểm của Java" },
      { 
        type: "list",
        content: "Những ưu điểm nổi bật:",
        items: [
          "Độc lập nền tảng nhờ JVM (Java Virtual Machine)",
          "Hướng đối tượng hoàn toàn",
          "Bảo mật cao",
          "Cộng đồng lớn và nhiều thư viện hỗ trợ",
          "Hiệu suất tốt với garbage collection tự động"
        ]
      },
      { type: "heading", content: "Ví dụ Hello World" },
      { 
        type: "code", 
        language: "java",
        content: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        System.out.println("Welcome to Java programming!");
    }
}`
      },
      { type: "text", content: "Đây là chương trình Java đơn giản nhất. Mọi chương trình Java đều bắt đầu từ phương thức main()." }
    ]
  },
  {
  "id": 3,
  "title": "Các khái niệm OOP quan trọng trong Java",
  "excerpt": "Tổng hợp 4 tính chất OOP trong Java: Encapsulation, Inheritance, Polymorphism và Abstraction.",
  "image": "https://www.ennicode.com/wp-content/uploads/2023/06/4-pillar-oops.jpg.webp",
  "date": "10/10/2025",
  "category": "Java",
  "content": [
    {
      "type": "heading",
      "content": "4 Tính chất OOP cơ bản"
    },
    {
      "type": "text",
      "content": "Lập trình hướng đối tượng (OOP) là nền tảng của Java. Hiểu rõ 4 tính chất này sẽ giúp bạn viết code Java hiệu quả hơn."
    },
    {
      "type": "heading",
      "content": "1. Encapsulation (Đóng gói)"
    },
    {
      "type": "text",
      "content": "Đóng gói là việc ẩn dữ liệu bên trong class và chỉ cho phép truy cập thông qua các phương thức public."
    },
    {
      "type": "code",
      "language": "java",
      "content": "public class Student {\n    private String name;\n    private int age;\n    \n    public String getName() {\n        return name;\n    }\n    \n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n    \n    public void setAge(int age) {\n        if (age > 0) {\n            this.age = age;\n        }\n    }\n}"
    },
    {
      "type": "heading",
      "content": "2. Inheritance (Kế thừa)"
    },
    {
      "type": "text",
      "content": "Kế thừa cho phép class con sử dụng lại các thuộc tính và phương thức của class cha."
    },
    {
      "type": "code",
      "language": "java",
      "content": "public class Animal {\n    protected String name;\n    \n    public void eat() {\n        System.out.println(name + \" is eating\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" is barking\");\n    }\n}"
    },
    {
      "type": "heading",
      "content": "3. Polymorphism (Đa hình)"
    },
    {
      "type": "text",
      "content": "Đa hình cho phép một phương thức có nhiều hành vi khác nhau."
    },
    {
      "type": "code",
      "language": "java",
      "content": "public class Calculator {\n    // Method overloading\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}"
    },
    {
      "type": "heading",
      "content": "4. Abstraction (Tính trừu tượng)"
    },
    {
      "type": "text",
      "content": "Tính trừu tượng cho phép ẩn đi chi tiết phức tạp và chỉ hiển thị những tính năng cần thiết. Trong Java, abstraction được thực hiện thông qua abstract class hoặc interface."
    },
    {
      "type": "code",
      "language": "java",
      "content": "// Sử dụng abstract class\nabstract class Shape {\n    protected String color;\n    \n    // Phương thức abstract - không có thân phương thức\n    public abstract double calculateArea();\n    \n    // Phương thức cụ thể\n    public void setColor(String color) {\n        this.color = color;\n    }\n}\n\n// Sử dụng interface\ninterface Drawable {\n    void draw();  // Phương thức abstract mặc định\n    \n    default void printInfo() {\n        System.out.println(\"This is a drawable object\");\n    }\n}\n\n// Class kế thừa abstract class và implement interface\nclass Circle extends Shape implements Drawable {\n    private double radius;\n    \n    public Circle(double radius) {\n        this.radius = radius;\n    }\n    \n    @Override\n    public double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n    \n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a circle with radius: \" + radius);\n    }\n}"
    },
    {
      "type": "heading",
      "content": "Kết luận"
    },
    {
      "type": "text",
      "content": "4 tính chất OOP trong Java không chỉ giúp code trở nên rõ ràng, dễ bảo trì mà còn tăng tính tái sử dụng. Việc nắm vững Encapsulation, Inheritance, Polymorphism và Abstraction là nền tảng để trở thành một lập trình viên Java chuyên nghiệp."
    }
  ]
},
  {
    id: 4,
    title: "Exception Handling trong Java dễ hiểu",
    excerpt:
      "Cách xử lý ngoại lệ trong Java với try-catch-finally và các best practice khi viết code.",
    image: "https://s3-hfx03.fptcloud.com/codelearnstorage/Upload/Blog/10-dieu-ve-java-exception-va-java-error-63727034762.0195.jpg",
    date: "15/10/2025",
    category: "Java",
    content: [
      { type: "heading", content: "Exception là gì?" },
      { type: "text", content: "Exception (ngoại lệ) là sự kiện bất thường xảy ra trong quá trình thực thi chương trình, làm gián đoạn luồng bình thường của chương trình." },
      { type: "heading", content: "Try-Catch-Finally" },
      { type: "text", content: "Cấu trúc try-catch-finally giúp bắt và xử lý exception một cách an toàn." },
      {
        type: "code",
        language: "java",
        content: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Lỗi: Index vượt quá kích thước mảng");
            System.out.println("Chi tiết: " + e.getMessage());
        } finally {
            System.out.println("Block finally luôn được thực thi");
        }
    }
}`
      },
      { type: "heading", content: "Multiple Catch Blocks" },
      {
        type: "code",
        language: "java",
        content: `try {
    String str = null;
    System.out.println(str.length());
    int result = 10 / 0;
} catch (NullPointerException e) {
    System.out.println("Null pointer exception");
} catch (ArithmeticException e) {
    System.out.println("Arithmetic exception");
} catch (Exception e) {
    System.out.println("Generic exception");
}`
      },
      {
        type: "list",
        content: "Best Practices:",
        items: [
          "Luôn catch exception cụ thể trước, exception chung sau",
          "Không để catch block rỗng",
          "Sử dụng finally để cleanup resources",
          "Throw exception khi cần thiết với thông điệp rõ ràng"
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "JavaScript là gì? Khác gì so với Java?",
    "excerpt": "So sánh Java và JavaScript, giúp người mới tránh nhầm lẫn và hiểu đúng vai trò từng ngôn ngữ.",
    "image": "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/06/Untitled-design-1.png",
    "date": "25/10/2025",
    "category": "JavaScript",
    "content": [
        {
            "type": "heading",
            "content": "JavaScript là gì?"
        },
        {
            "type": "text",
            "content": "JavaScript là ngôn ngữ lập trình kịch bản (scripting language) chủ yếu được sử dụng để tạo nội dung động trên web. Mặc dù có tên gần giống Java, nhưng hai ngôn ngữ này hoàn toàn khác nhau."
        },
        {
            "type": "heading",
            "content": "So sánh Java vs JavaScript"
        },
        {
            "type": "table",
            "content": "Điểm khác biệt chính giữa Java và JavaScript",
            "columns": ["Tiêu chí", "Java", "JavaScript"],
            "rows": [
                ["Kiểu ngôn ngữ", "Compiled language", "Interpreted language"],
                ["Kiểu dữ liệu", "Strongly typed", "Dynamically typed"],
                ["Môi trường chạy", "Chạy trên JVM (Java Virtual Machine)", "Chạy trên Browser/Node.js"],
                ["Ứng dụng chính", "Backend, Mobile (Android), Enterprise", "Frontend Web, Backend (Node.js)"],
                ["Cú pháp", "Phức tạp hơn, nghiêm ngặt", "Linh hoạt, dễ học hơn"],
                ["Mô hình lập trình", "OOP thuần túy", "Multi-paradigm (OOP, Functional, Event-driven)"],
                ["Quản lý bộ nhớ", "Tự động (Garbage Collection)", "Tự động (Garbage Collection)"],
                ["Hiệu năng", "Cao, ổn định", "Nhanh cho web, phụ thuộc engine"],
                ["Hệ sinh thái", "Spring, Hibernate, Maven", "React, Vue, Express, npm"],
                ["Xử lý đồng thời", "Multi-threading mạnh mẽ", "Single-threaded với Event Loop"]
            ]
        },
        {
            "type": "heading",
            "content": "Ví dụ so sánh cùng một chức năng"
        },
        {
            "type": "subheading",
            "content": "1. Khai báo và sử dụng biến"
        },
        {
            "type": "code",
            "language": "java",
            "content": "// JAVA - Strongly typed, cần khai báo kiểu dữ liệu\n int total = 0;\n"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// JAVASCRIPT - Dynamically typed, không cần khai báo kiểu\nlet number = 10;          // number\nlet text = \"Hello\";      // string\nlet isActive = true;      // boolean\n\n// Kiểu có thể thay đổi động\nlet variable = 10;       // number\nvariable = \"now a string\"; // chuyển thành string\nvariable = true;         // chuyển thành boolean\n\n// Có thể thực hiện phép toán với kiểu khác\nlet result = \"5\" + 3;    // \"53\" (string concatenation)\nlet sum = \"5\" - 3;       // 2 (number)"
        },
        {
            "type": "subheading",
            "content": "2. Xử lý mảng (Array)"
        },
        {
            "type": "code",
            "language": "java",
            "content": "// JAVA - Mảng có kích thước cố định\nimport java.util.Arrays;\nimport java.util.ArrayList;\n\npublic class ArrayExample {\n    public static void main(String[] args) {\n        // Mảng cơ bản\n        int[] numbers = {1, 2, 3, 4, 5};\n        System.out.println(\"Length: \" + numbers.length);\n        \n        // Thêm phần tử phải dùng ArrayList\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        list.add(\"is\");\n        list.add(\"cool\");\n        \n        // Duyệt mảng\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println(numbers[i]);\n        }\n    }\n}"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// JAVASCRIPT - Mảng động linh hoạt\n// Khai báo mảng\nlet fruits = [\"apple\", \"banana\", \"orange\"];\n\n// Mảng có thể chứa nhiều kiểu dữ liệu\nlet mixedArray = [1, \"hello\", true, {name: \"John\"}, [1, 2, 3]];\n\n// Thêm/xóa phần tử dễ dàng\nfruits.push(\"mango\");        // thêm vào cuối\nfruits.unshift(\"grape\");     // thêm vào đầu\nlet lastFruit = fruits.pop(); // xóa phần tử cuối\n\n// Các phương thức built-in mạnh mẽ\nlet numbers = [1, 2, 3, 4, 5];\n\n// map - biến đổi mảng\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]\n\n// filter - lọc mảng\nlet evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]\n\n// reduce - tính tổng\nlet sum = numbers.reduce((total, num) => total + num, 0); // 15\n\n// forEach - duyệt mảng\nnumbers.forEach(num => console.log(num));"
        },
        {
            "type": "subheading",
            "content": "3. Xử lý bất đồng bộ (Asynchronous)"
        },
        {
            "type": "code",
            "language": "java",
            "content": "// JAVA - Sử dụng Thread hoặc CompletableFuture\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class AsyncExample {\n    public static void main(String[] args) {\n        // Sử dụng CompletableFuture cho bất đồng bộ\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            try {\n                Thread.sleep(2000); // Giả lập delay\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return \"Kết quả từ Java\";\n        });\n        \n        future.thenAccept(result -> {\n            System.out.println(\"Nhận được: \" + result);\n        });\n        \n        // Chờ kết quả\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// JAVASCRIPT - Async/Await syntax gọn gàng\n// Giả lập hàm bất đồng bộ\nfunction fetchData() {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve(\"Dữ liệu từ server\");\n        }, 2000);\n    });\n}\n\n// Cách 1: Dùng Promise\nfetchData()\n    .then(data => {\n        console.log(\"Nhận được:\", data);\n        return data.toUpperCase();\n    })\n    .then(processedData => {\n        console.log(\"Đã xử lý:\", processedData);\n    })\n    .catch(error => {\n        console.error(\"Lỗi:\", error);\n    });\n\n// Cách 2: Dùng async/await (hiện đại hơn)\nasync function processData() {\n    try {\n        console.log(\"Đang tải dữ liệu...\");\n        const data = await fetchData();\n        console.log(\"Đã nhận:\", data);\n        \n        // Có thể await nhiều promise song song\n        const [result1, result2] = await Promise.all([\n            fetchData(),\n            fetchData()\n        ]);\n        console.log(\"Kết quả song song:\", result1, result2);\n    } catch (error) {\n        console.error(\"Lỗi xử lý:\", error);\n    }\n}\n\nprocessData();"
        },
        {
            "type": "heading",
            "content": "Khi nào dùng ngôn ngữ nào?"
        },
        {
            "type": "text",
            "content": "Dùng Java khi cần xây dựng ứng dụng enterprise, mobile Android, hoặc hệ thống backend lớn yêu cầu ổn định cao. Dùng JavaScript khi phát triển web frontend, hoặc backend với Node.js cho các ứng dụng real-time, API nhẹ."
        },
        {
            "type": "list",
            "content": "Tóm tắt sự khác biệt:",
            "items": [
                "Java: Strict, an toàn, phù hợp cho hệ thống lớn",
                "JavaScript: Linh hoạt, nhanh prototype, phù hợp cho web",
                "Java: Cần compile trước khi chạy",
                "JavaScript: Chạy trực tiếp trên trình duyệt",
                "Java: Hệ sinh thái mạnh với Spring, Hibernate",
                "JavaScript: Hệ sinh thái phong phú với React, Vue, Express"
            ]
        }
    ]
},
  {
    id: 6,
    title: "Các khái niệm JavaScript cơ bản cần nắm vững",
    excerpt:
      "Giải thích biến, scope, function, arrow function và hoisting trong JavaScript.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
    date: "11/03/2025",
    category: "JavaScript",
    content: [
      { type: "heading", content: "Variables và Scope" },
      { type: "text", content: "JavaScript có 3 cách khai báo biến: var, let, và const. Mỗi cách có scope khác nhau." },
      {
        type: "code",
        language: "javascript",
        content: `// var - function scope
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable
        console.log(x); // 20
    }
    console.log(x); // 20
}

// let - block scope
function testLet() {
    let y = 10;
    if (true) {
        let y = 20; // Different variable
        console.log(y); // 20
    }
    console.log(y); // 10
}

// const - block scope, immutable
const PI = 3.14159;
// PI = 3.14; // Error!`
      },
      { type: "heading", content: "Functions và Arrow Functions" },
      {
        type: "code",
        language: "javascript",
        content: `// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const multiply = (a, b) => a * b;

// Arrow function with block
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};

console.log(add(5, 3));        // 8
console.log(multiply(5, 3));   // 15
console.log(divide(10, 2));    // 5`
      },
      { type: "heading", content: "Hoisting" },
      { type: "text", content: "Hoisting là cơ chế JavaScript đưa khai báo biến và function lên đầu scope trước khi code thực thi." },
      {
        type: "code",
        language: "javascript",
        content: `// Function hoisting
greet(); // Works!

function greet() {
    console.log("Hello!");
}

// Variable hoisting with var
console.log(x); // undefined (not error)
var x = 5;

// let và const không hoisting
console.log(y); // ReferenceError
let y = 10;`
      }
    ]
  },
  {
    "id": 7,
    "title": "ES6 là gì? Những tính năng quan trọng",
    "excerpt": "Tìm hiểu let, const, arrow functions, destructuring, spread operator và template literal trong ES6.",
    "image": "https://images.viblo.asia/6549a9d8-f10e-4b5f-a87e-ae16631d2e52.png",
    "date": "13/11/2025",
    "category": "JavaScript",
    "content": [
        {
            "type": "heading",
            "content": "ES6 (ECMAScript 2015)"
        },
        {
            "type": "text",
            "content": "ES6 là bản cập nhật lớn của JavaScript, mang đến nhiều tính năng mới giúp code ngắn gọn hơn."
        },
        {
            "type": "heading",
            "content": "1. let & const"
        },
        {
            "type": "text",
            "content": "Thay thế var, giúp kiểm soát scope tốt hơn."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// let - có thể thay đổi\nlet age = 25;\nage = 26; // OK\n\n// const - không thể thay đổi\nconst PI = 3.14;\n// PI = 3.15; // ERROR\n\n// const với object\nconst user = { name: 'Luận' };\nuser.name = 'Nam'; // OK - thay đổi thuộc tính\n// user = {}; // ERROR - không thể gán lại"
        },
        {
            "type": "heading",
            "content": "2. Arrow Functions"
        },
        {
            "type": "text",
            "content": "Cú pháp ngắn gọn, không có this riêng."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Cách viết thường\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst addArrow = (a, b) => {\n    return a + b;\n};\n\n// Rút gọn (implicit return)\nconst addShort = (a, b) => a + b;\n\n// Một tham số\nconst double = x => x * 2;\n\n// Không tham số\nconst sayHi = () => 'Hello!';\n\n// Dùng trong callback\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6]"
        },
        {
            "type": "heading",
            "content": "3. Destructuring"
        },
        {
            "type": "text",
            "content": "Lấy giá trị từ array/object dễ dàng."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Array destructuring\nconst colors = ['red', 'green', 'blue'];\nconst [firstColor, secondColor] = colors;\nconsole.log(firstColor); // 'red'\n\n// Object destructuring\nconst person = { name: 'Luận', age: 22 };\nconst { name, age } = person;\nconsole.log(name); // 'Luận'\n\n// Với tên biến khác\nconst { name: fullName } = person;\nconsole.log(fullName); // 'Luận'\n\n// Giá trị mặc định\nconst { city = 'Hanoi' } = person;\nconsole.log(city); // 'Hanoi'"
        },
        {
            "type": "heading",
            "content": "4. Spread Operator (...)"
        },
        {
            "type": "text",
            "content": "Mở rộng array/object."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Với array\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = [...arr1, ...arr2]; // [1, 2, 3, 4]\n\n// Copy array\nconst original = [1, 2, 3];\nconst copy = [...original];\n\n// Với object\nconst user = { name: 'Luận' };\nconst userWithAge = { ...user, age: 22 };\n// { name: 'Luận', age: 22 }\n\n// Merge object\nconst defaults = { theme: 'dark' };\nconst custom = { theme: 'light', fontSize: 14 };\nconst settings = { ...defaults, ...custom };\n// { theme: 'light', fontSize: 14 }"
        },
        {
            "type": "heading",
            "content": "5. Template Literals"
        },
        {
            "type": "text",
            "content": "Tạo string với biến và xuống dòng dễ dàng."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "const name = 'Luận';\nconst age = 22;\n\n// Cách cũ\nconsole.log('Tôi là ' + name + ', ' + age + ' tuổi');\n\n// Template literal\nconsole.log(`Tôi là ${name}, ${age} tuổi`);\n\n// Xuống dòng\nconst message = `\n  Xin chào,\n  Tôi tên là ${name}.\n  Năm nay ${age} tuổi.\n`;\n\n// Tính toán trong template\nconst price = 100000;\nconsole.log(`Giá: ${price} VND`);\nconsole.log(`Giảm 20%: ${price * 0.8} VND`);"
        },
        {
            "type": "heading",
            "content": "6. Default Parameters"
        },
        {
            "type": "text",
            "content": "Tham số mặc định cho hàm."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Cách cũ\nfunction greet(name) {\n    name = name || 'Khách';\n    return `Xin chào ${name}`;\n}\n\n// ES6\nfunction greetES6(name = 'Khách') {\n    return `Xin chào ${name}`;\n}\n\ngreetES6(); // 'Xin chào Khách'\ngreetES6('Luận'); // 'Xin chào Luận'"
        },
        {
            "type": "heading",
            "content": "Tóm tắt"
        },
        {
            "type": "list",
            "content": "Những điểm chính:",
            "items": [
                "Dùng const cho hằng số, let cho biến thay đổi",
                "Arrow function ngắn gọn, phù hợp callback",
                "Destructuring giúp lấy dữ liệu từ array/object dễ dàng",
                "Spread operator để copy và merge",
                "Template literal viết string dễ đọc hơn"
            ]
        }
    ]
},
  {
    "id": 8,
    "title": "Closures trong JavaScript - Hiểu đơn giản",
    "excerpt": "Closure là gì? Cách hoạt động và ứng dụng thực tế trong lập trình JavaScript.",
    "image": "https://edward-huang.com/images/what-is-really-so-special-about-javascript-closure-/Closure%20JS.png",
    "date": "15/11/2025",
    "category": "JavaScript",
    "content": [
        {
            "type": "heading",
            "content": "Closure là gì?"
        },
        {
            "type": "text",
            "content": "Hàm nhớ và truy cập được biến từ nơi nó được tạo ra, kể cả khi chạy ở nơi khác."
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Ví dụ cơ bản\nfunction outer() {\n    const secret = 'Hello';\n    \n    function inner() {\n        console.log(secret); // Vẫn truy cập được biến secret\n    }\n    \n    return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // 'Hello'"
        },
        {
            "type": "heading",
            "content": "Ví dụ thực tế: Counter"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "function createCounter() {\n    let count = 0; // Biến private\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        reset: function() {\n            count = 0;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\ncounter.reset();\nconsole.log(counter.increment()); // 1"
        },
        {
            "type": "heading",
            "content": "Vấn đề với vòng lặp"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// Vấn đề\nfor (var i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // In ra 4, 4, 4\n    }, 100);\n}\n\n// Giải pháp: Dùng let\nfor (let i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // In ra 1, 2, 3\n    }, 100);\n}"
        },
        {
            "type": "heading",
            "content": "Ứng dụng thực tế"
        },
        {
            "type": "code",
            "language": "javascript",
            "content": "// 1. Private variables\nfunction createBankAccount(initial) {\n    let balance = initial; // Private\n    \n    return {\n        deposit: function(amount) {\n            balance += amount;\n            return balance;\n        },\n        withdraw: function(amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return balance;\n            }\n            return 'Không đủ tiền';\n        }\n    };\n}\n\nconst account = createBankAccount(1000);\nconsole.log(account.deposit(500)); // 1500\nconsole.log(account.withdraw(200)); // 1300\n\n// 2. Function factory\nfunction createMultiplier(multiplier) {\n    return function(num) {\n        return num * multiplier;\n    };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(5)); // 15"
        },
        {
            "type": "heading",
            "content": "Tóm tắt"
        },
        {
            "type": "list",
            "content": "Điểm quan trọng:",
            "items": [
                "Closure giúp tạo biến private",
                "Hàm nhớ scope nơi nó được tạo",
                "Dùng let thay var trong vòng lặp",
                "Ứng dụng: module pattern, function factory"
            ]
        }
    ]
},
  {
  "id": 9,
  "title": "Array, Set và Map Methods trong JavaScript",
  "excerpt": "So sánh Map vs Object, Set vs Array và các method hữu ích của Array.",
  "image": "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-20%20174654.png?raw=true",
  "date": "18/11/2025",
  "category": "JavaScript",
  "content": [
    {
      "type": "heading",
      "content": "1. Map - Key/Value Collection"
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "// Tạo Map\nconst map = new Map();\n\n// Thêm dữ liệu\nmap.set('name', 'Luận');\nmap.set('age', 22);\nmap.set({ id: 1 }, 'Object key'); // key là object\n\n// Lấy dữ liệu\nconsole.log(map.get('name')); // 'Luận'\n\n// Kiểm tra\nconsole.log(map.has('age')); // true\nconsole.log(map.size); // 3\n\n// Duyệt Map\nfor (let [key, value] of map) {\n  console.log(key, value);\n}\n\n// Chuyển thành Array\nconsole.log([...map]); // [['name', 'Luận'], ...]"
    },
    {
      "type": "heading",
      "content": "2. Set - Unique Values"
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "// Tạo Set\nconst set = new Set();\n\n// Thêm giá trị\nset.add(1);\nset.add(2);\nset.add(2); // Bị bỏ qua\nset.add('hello');\n\nconsole.log(set.size); // 3 (1, 2, 'hello')\n\n// Kiểm tra\nconsole.log(set.has(2)); // true\n\n// Loại bỏ trùng lặp từ Array\nconst numbers = [1, 2, 2, 3, 3, 4];\nconst unique = [...new Set(numbers)];\nconsole.log(unique); // [1, 2, 3, 4]\n\n// Duyệt Set\nfor (let value of set) {\n  console.log(value);\n}"
    },
    {
      "type": "heading",
      "content": "3. Array Methods"
    },
    {
      "type": "subheading",
      "content": "Transform Methods"
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "const nums = [1, 2, 3, 4];\n\n// map - biến đổi\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8]\n\n// filter - lọc\nconst even = nums.filter(n => n % 2 === 0);\nconsole.log(even); // [2, 4]\n\n// reduce - tính tổng\nconst sum = nums.reduce((total, n) => total + n, 0);\nconsole.log(sum); // 10"
    },
    {
      "type": "subheading",
      "content": "Search Methods"
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "const users = [\n  { id: 1, name: 'Luận' },\n  { id: 2, name: 'Nam' },\n  { id: 3, name: 'Hùng' }\n];\n\n// find - tìm theo điều kiện\nconst user = users.find(u => u.id === 2);\nconsole.log(user); // { id: 2, name: 'Nam' }\n\n// findIndex - tìm vị trí\nconst index = users.findIndex(u => u.name === 'Hùng');\nconsole.log(index); // 2\n\n// some - có ít nhất 1\nconst hasNam = users.some(u => u.name === 'Nam');\nconsole.log(hasNam); // true\n\n// every - tất cả\nconst allHaveId = users.every(u => u.id > 0);\nconsole.log(allHaveId); // true"
    },
    {
      "type": "subheading",
      "content": "Other Useful Methods"
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "// includes - kiểm tra có tồn tại\nconst arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\n\n// slice - cắt mảng (không thay đổi mảng gốc)\nconst sliced = arr.slice(1, 3);\nconsole.log(sliced); // [2, 3]\n\n// splice - thay đổi mảng gốc\nconst fruits = ['apple', 'banana', 'orange'];\nfruits.splice(1, 1, 'grape'); // xóa 1 phần tử ở vị trí 1, thêm 'grape'\nconsole.log(fruits); // ['apple', 'grape', 'orange']\n\n// sort - sắp xếp\nconst unsorted = [3, 1, 4, 2];\nunsorted.sort((a, b) => a - b);\nconsole.log(unsorted); // [1, 2, 3, 4]"
    },
    {
      "type": "heading",
      "content": "Khi nào dùng gì?"
    },
    {
      "type": "list",
      "content": "",
      "items": [
        "Map: Khi cần key không phải string, hoặc cần giữ thứ tự",
        "Set: Khi cần giá trị duy nhất, hoặc kiểm tra tồn tại nhanh",
        "Array: Khi cần danh sách có thứ tự, truy cập theo index"
      ]
    },
    {
      "type": "code",
      "language": "javascript",
      "content": "// Ví dụ thực tế\n\n// 1. Map cho cache\nconst cache = new Map();\nfunction getUser(id) {\n  if (cache.has(id)) {\n    return cache.get(id);\n  }\n  // Lấy từ API\n  const user = { id, name: 'User' + id };\n  cache.set(id, user);\n  return user;\n}\n\n// 2. Set cho tags duy nhất\nconst articleTags = ['js', 'html', 'js', 'css', 'react'];\nconst uniqueTags = [...new Set(articleTags)];\nconsole.log(uniqueTags); // ['js', 'html', 'css', 'react']\n\n// 3. Array methods cho xử lý danh sách\nconst products = [\n  { name: 'Laptop', price: 1000 },\n  { name: 'Mouse', price: 50 },\n  { name: 'Keyboard', price: 80 }\n];\n\n// Lọc sản phẩm > 100\nconst expensive = products.filter(p => p.price > 100);\nconsole.log(expensive); // [{ name: 'Laptop', price: 1000 }]\n\n// Tính tổng giá\nconst total = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log(total); // 1130"
    }
  ]
},
  {
    id: 10,
    title: "Kinh nghiệm tự học lập trình cho sinh viên IT",
    excerpt:
      "Chia sẻ cách tự học hiệu quả, tài liệu tham khảo và lời khuyên cho sinh viên năm cuối.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    date: "01/12/2025",
    category: "Chia sẻ",
    content: [
      { type: "heading", content: "Lời khuyên từ kinh nghiệm cá nhân" },
      { type: "text", content: "Sau gần 4 năm học và làm việc với code, tôi muốn chia sẻ một số kinh nghiệm giúp bạn tự học lập trình hiệu quả hơn." },
      {
        type: "list",
        content: "Những điều quan trọng nhất:",
        items: [
          "Thực hành mỗi ngày, dù chỉ 30 phút",
          "Làm dự án thực tế thay vì chỉ học lý thuyết",
          "Đọc code của người khác trên GitHub",
          "Tham gia cộng đồng và hỏi đáp",
          "Không ngại làm lại từ đầu khi cần"
        ]
      },
      { type: "heading", content: "Tài nguyên học tập" },
      {
        type: "list",
        content: "Nguồn tài liệu tôi hay dùng:",
        items: [
          "Documentation chính thức (Java Docs, MDN)",
          "YouTube: Traversy Media, Programming with Mosh",
          "Courses: Udemy, Cisco",
          "Practice: LeetCode, HackerRank",
          "Community: Stack Overflow, Reddit"
        ]
      },
      { type: "heading", content: "Lộ trình học của tôi" },
      { type: "text", content: "Bắt đầu với C để hiểu cơ bản về lập trình. Sau đó học Java để nắm vững OOP. Tiếp theo là JavaScript cho web development. Cuối cùng là các framework như Spring Boot, React." },
      { type: "heading", content: "Sai lầm cần tránh" },
      {
        type: "list",
        content: "",
        items: [
          "Học quá nhiều ngôn ngữ cùng lúc",
          "Chỉ xem hướng dẫn mà không code",
          "Sợ làm sai nên không dám thử",
          "Copy-paste code mà không hiểu",
          "Bỏ qua kiến thức nền tảng để học framework"
        ]
      }
    ]
  },
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
    { id: 1, value: "8+", label: "Dự án hoàn thành" },
    { id: 2, value: "6+", label: "Chứng chỉ" },
    { id: 3, value: "6+", label: "Công nghệ sử dụng" },
  ],
};
