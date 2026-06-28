import { PortfolioData } from "@/types/portfolio";

export const portfolioDataEN: PortfolioData = {
  services: [
    {
      id: 1,
      icon: "Code",
      title: "Website Development",
      description:
        "Building websites and web applications with ASP.NET Core, PHP, REST API; focusing on clear structure, performance, and scalability.",
    },
    {
      id: 2,
      icon: "Smartphone",
      title: "Mobile App Development",
      description:
        "Developing basic mobile applications with Flutter, focusing on friendly interface and user experience.",
    },
    {
      id: 3,
      icon: "Database",
      title: "Business Analysis",
      description:
        "Completing coursework and personal projects, practicing requirement analysis, system design, and problem-solving skills.",
    },
  ],

  projects: [
    {
      "id": 1,
      "title": "LunQuiz - Real-time Multiplayer Quiz Platform",
      "category": "Web Development",
      "image": "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202026-06-14%20223304.png?raw=true",
      "videoUrl": "",
      "demoUrl": "https://www.lunquiz.site/",
      "tags": ["React", "TypeScript", "Node.js", "Socket.IO", "Game", "Real-time", "Education", "UI/UX"],
      "details": {
        "description": "LunQuiz is a real-time online quiz platform with a modern design. The system allows users to create quizzes, join room-based quizzes, and participate in competitive 1vs1 or 2vs2 PvP matches ranked by a thrilling Elo rating system.",
        "currentStatus": "The project has completed its core features, including real-time multiplayer gameplay via WebSockets, an Elo ranking system, and a powerful Admin Dashboard.",
        "objectives": [
          "Build a smooth and highly interactive online quiz platform",
          "Implement a real-time PvP matchmaking system",
          "Calculate and rank players fairly through an Elo rating system",
          "Create a premium and fluid UI/UX experience with GSAP Animations"
        ],
        "features": [
          "Authentication System: Login, Register, Forgot Password, User Profile Management",
          "Normal Quiz Mode: Create rooms, join via room code, waiting rooms, and live gameplay",
          "Template Management (My Templates): Users can create, edit, and manage their own question sets",
          "Real-time PvP System: Supports 1V1 and 2V2 modes with matchmaking and match-ready lobbies",
          "PvP Gameplay: Real-time synchronization, speed bonus scoring, and answer locking",
          "PvP Statistics: Match history, detailed match results, and global or topic-based leaderboards",
          "Admin Dashboard: Comprehensive management interface (Users, Feedback, Statistics, Categories)",
          "Quiz & PvP Management: PvP question pool management, import questions from quizzes, manage distinct PvP categories",
          "Premium Animations: Integrated GSAP library to create smooth micro-interactions during gameplay"
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
        "challenges": "The biggest challenge was handling state synchronization between players in real-time PvP mode via Socket.IO, ensuring fairness regarding network latency for accurate speed bonus calculations. Additionally, designing a UI/UX with smooth GSAP animations while maintaining high performance (60fps) required meticulous optimization.",
        "outcomes": "The project resulted in a highly polished product, both in terms of real-time logic and interface design. The platform operates stably during intense PvP matches and provides an excellent user experience."
      }
    },

    {
      id: 2,
      title: "English Learning App",
      category: "App Development",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/anh2.png?raw=true",
      videoUrl: "https://youtu.be/V6-YM7v8DBg",
      tags: ["UI/UX", "App", "Education", "Mobile"],
      details: {
        description: "A mobile application that helps English learners practice vocabulary, grammar, and personalized learning paths through an initial assessment. The app is designed with a friendly interface, easy to use for all ages.",
        currentStatus: "The project was developed as a mobile application programming coursework. It has completed the development phase and is currently being tested with a small group of beta users.",
        objectives: [
          "Build an effective English learning support mobile app",
          "Create interactive and engaging learning experiences",
          "Personalized learning path for each user to increase motivation",
          "Develop personal learning progress tracking system"
        ],
        features: [
          "Learn vocabulary by topics with flashcards",
          "4 main skills: Listening, Speaking, Reading, Writing",
          "Listening practice through audio and video",
          "Diverse grammar exercises",
          "AI-powered learning suggestions",
          "Speaking and writing practice mode with AI",
          "Progress tracking and statistics",
          "Rankings and achievements",
          "Daily learning reminders"
        ],
        technologies: [
          "Flutter",
          "Dart",
          "Supabase",
        ],
        challenges: "The biggest challenge was integrating AI to support speaking practice and real-time audio processing. Additionally, designing UI/UX suitable for different screen sizes required extensive testing.",
        outcomes: "The app was completed with all basic features. Received positive reviews from instructors and friends who tested it. The project helped me master Flutter and Supabase."
      }
    },
    {
      id: 3,
      title: "Rental & Room Management Website",
      category: "Web Development",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/avatar_webphong.png?raw=true",
      videoUrl: "https://drive.google.com/file/d/1zrayXT4bXH46KgRGrJOgTzTqs0yrS7Xj/view?usp=sharing",
      tags: ["Web", "UI/UX", "Backend", "E-commerce"],
      details: {
        description: "A web system that allows landlords to post rental listings, manage contracts, payments, and utilities. Tenants can search for suitable rooms, schedule viewings, and make online payments.",
        currentStatus: "Major coursework project, completed beta version with all main features.",
        objectives: [
          "Digitize rental and room management processes",
          "Create a platform connecting landlords and tenants",
          "Automate contract and payment management",
          "Provide utility and service management tools"
        ],
        features: [
          "Post rental listings with images",
          "Search and filter rooms by criteria",
          "Online room viewing scheduling",
          "Electronic contract management",
          "VNPay/MoMo payment integration",
          "Web wallet top-up integration",
          "Electricity and water bill management",
          "Revenue reporting and statistics",
          "Payment reminder notifications via Email",
          "News and rental tips",
          "Tenant utility management features: transaction history, bills, contracts..."
        ],
        technologies: [
          "ASP.NET Core MVC",
          "Entity Framework Core",
          "SQL Server",
          "VNPay/MoMo API",
          "Chart.js"
        ],
        challenges: "Handling complex business logic for contracts, recurring payments, and bill calculations. Integrating payment gateways and ensuring sensitive data security were also major challenges.",
        outcomes: "Completed website with all features. The project helped me deeply understand ASP.NET Core and real-world business logic handling."
      }
    },
    {
      id: 4,
      title: "English Center Management System",
      category: "Business Analysis",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-06-22%20094251.png?raw=true",
      images: [
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-03-05%20213827.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-03-03%20121321.png?raw=true",
        "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-06-22%20094251.png?raw=true",
      ],
      tags: ["Analysis", "Management"],
      details: {
        description: "A project to analyze and design a management system for a language center. Includes business requirement analysis, use case design, class diagrams, and database design.",
        currentStatus: "System Analysis and Design coursework. Completed all analysis and design documentation and some demo modules.",
        objectives: [
          "Analyze business processes of language centers",
          "Design comprehensive management system",
          "Create detailed technical documentation",
          "Demo main features"
        ],
        features: [
          "Student and teacher management",
          "Class scheduling and assignment",
          "Attendance and assignment management",
          "Learning progress tracking",
          "Tuition fee and payment management",
          "Statistical reports",
          "User role management",
          "Notifications and reminders"
        ],
        technologies: [
          "StarUML",
          "Microsoft Visio",
          "SQL Server",
          "C# (Demo)",
          "Windows Forms"
        ],
        challenges: "Analyzing and modeling complex business processes. Designing normalized and optimized databases.",
        outcomes: "Completed comprehensive analysis and design documentation with UML diagrams. Gained clear understanding of professional system analysis and design processes."
      }
    },
    {
      id: 5,
      title: "Electronics Store Winform App",
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
        description: "A desktop sales management application for electronics stores. Supports inventory management, sales, purchasing, and reporting.",
        currentStatus: "Windows Programming coursework. Completed and tested at a small electronics store.",
        objectives: [
          "Build desktop sales management software",
          "Automate sales and inventory management processes",
          "Create business reports and statistics",
          "Support invoice printing and file export"
        ],
        features: [
          "Product and inventory management",
          "Sales and invoice creation",
          "Supplier purchase management",
          "Customer management",
          "Employee management",
          "Daily/monthly revenue reports",
          "Best-selling product statistics",
          "Invoice printing",
          "Excel import/export",
          "Database backup and restore",
          "User role management"
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
        challenges: "Synchronizing product and supplier data. Optimizing performance when querying large datasets.",
        outcomes: "Complete application used in practice. Proficient in 3-tier architecture with BUS, GUI, DAL layers and database handling with ADO.NET."
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
      details: {
        description: "A project to design and implement site-to-site VPN using IPsec to securely connect two company branches. The model was simulated on VMware Workstation Pro combined with Pfsense.",
        currentStatus: "Information Security course project completed, including simulation model and detailed technical documentation.",
        objectives: [
          "Establish secure VPN connection between two sites",
          "Encrypt data transmitted over the Internet",
          "Ensure data security and integrity",
          "Optimize connection performance"
        ],
        features: [
          "IPsec tunnel mode configuration",
          "IKE Phase 1 and Phase 2 setup",
          "AES-256 encryption",
          "SHA-256 hashing",
          "Perfect Forward Secrecy (PFS)",
          "NAT Traversal support",
          "Dead Peer Detection (DPD)",
          "Access Control List (ACL) setup"
        ],
        technologies: [
          "Cisco Router",
          "IPsec",
          "IKE",
          "Cisco Packet Tracer",
          "GNS3",
          "Wireshark"
        ],
        challenges: "Understanding IPsec mechanisms, accurately configuring encryption parameters, and troubleshooting connection errors during VPN setup.",
        outcomes: "Stable working model with securely encrypted VPN data transmission. Enhanced understanding of VPN and network security."
      }
    },
  ],

  experiences: [
    {
      id: 1,
      type: "education",
      title: "IT Engineering (4th Year)",
      organization: "Ho Chi Minh City University of Technology (HUTECH)",
      period: "2021 - Present",
      description: "Studied IT fundamentals, web programming, mobile applications, databases, system analysis & design."
    },
    {
      id: 2,
      type: "work",
      title: "Full Stack Intern",
      organization: "DUDI Software",
      period: "03/2026 - 06/2026",
      description: "Participated in developing frontend and backend features for web applications, working with ReactJS and Node.js."
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
      title: "My Journey: From a HUTECH Freshman with Zero Code to a Full Stack Intern",
      excerpt:
        "Looking back at 4 years of youth at HUTECH, late-night debugging fueled by instant noodles, and my chance to be a Full Stack Intern at DUDI Software.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      date: "20/09/2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "Hello! I'm Vo Thanh Luan" },
        { type: "text", content: "Hey guys! I'm Vo Thanh Luan, currently a 4th-year Software Engineering student at Ho Chi Minh City University of Technology (HUTECH). If you're looking for a shiny profile of a tech wizard... you're in the wrong place! I'm just a dev who loves coding, enjoys watching bugs run, and is currently interning as a Full Stack Developer at DUDI Software." },
        { type: "heading", content: "Starting from Absolute Zero at HUTECH" },
        { type: "text", content: "I remember my freshman year, stepping into HUTECH with zero coding experience. The C language welcomed me with syntax errors where 'a missing semicolon ruins the entire day'. Since then, I fell in love with Java, ASP.NET Core, and then ventured into JavaScript and Flutter to build real projects like LunQuiz." },
        {
          type: "list",
          content: "Here's what I've picked up in my toolkit so far:",
          items: [
            "Fundamental but solid: C, C#",
            "Java & Spring Boot: Specializing in backend systems and heavy business logic",
            "ASP.NET Core: Clean backend solution for enterprise web apps",
            "Database: SQL Server, MySQL, PostgreSQL (where I store all my data)",
            "Flutter & Dart: Code once, run smoothly on both Android and iOS"
          ]
        },
        { type: "heading", content: "Next Destination: Backend and Beyond!" },
        { type: "text", content: "I am aiming to become a true Backend Developer. For me, building a secure, high-load API system and designing clean databases is like building a house foundation - a strong foundation prevents the house from collapsing. I hope my internship at DUDI Software will help me level up quickly!" }
      ]
    },
    {
      id: 2,
      title: "Java - The Serious, Formal, and Loyal Gentleman",
      excerpt:
        "Why is Java criticized for being verbose and tedious, yet large enterprises are still head over heels for it? Let's dissect this seasoned friend!",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      date: "03/10/2025",
      category: "Java",
      content: [
        { type: "heading", content: "What on Earth is Java?" },
        { type: "text", content: "Born in 1995 (older than me!), Java was created by Sun Microsystems with the legendary philosophy: 'Write Once, Run Anywhere' (or write once, debug everywhere depending on your luck). It is a strictly object-oriented language." },
        { type: "heading", content: "Why Love Java?" },
        {
          type: "list",
          content: "Here are some reasons why Java is still like 'old wine that gets better with time':",
          items: [
            "Platform Independence: Thanks to the JVM (Java Virtual Machine) carrying the team, it can run on any OS.",
            "Fully Object-Oriented: Everything in Java must reside inside a Class. No messy global declarations!",
            "Safe & Secure: No direct pointer manipulation like C/C++.",
            "Garbage Collection: Automatic memory cleanup, so devs don't have to sweep the floor manually."
          ]
        },
        { type: "heading", content: "First Program in Life: Hello World" },
        {
          type: "code",
          language: "java",
          content: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello world! Luan here.");
        System.out.println("Wish you all a bug-free coding session!");
    }
}`
        },
        { type: "text", content: "Seems verbose, right? To print a simple line of text, you need to define a Class and write a long-winded main method. But believe me, this verbosity keeps the code extremely clear and maintainable when the project grows massive!" }
      ]
    },
    {
      id: 3,
      title: "The 4 Pillars of OOP in Java - Explained Simply",
      excerpt: "Encapsulation, Inheritance, Polymorphism, and Abstraction. Sounds intimidating, but they are actually very close to daily life.",
      image: "https://www.ennicode.com/wp-content/uploads/2023/06/4-pillar-oops.jpg.webp",
      date: "10/10/2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "OOP - Java's North Star"
        },
        {
          type: "text",
          content: "Object-Oriented Programming (OOP) isn't just theory for exams. It's how we model the real world into code. Let's look at the 4 'table legs' of OOP with a humorous twist."
        },
        {
          type: "heading",
          content: "1. Encapsulation - Hiding Your Secret Stash"
        },
        {
          type: "text",
          content: "Encapsulation is hiding sensitive attributes inside a class and only exposing safe access points via getters/setters. It's like hiding your secret stash of cash - no one gets to touch it directly except through your strict approval process."
        },
        {
          type: "code",
          language: "java",
          content: "public class Student {\n    private String name;\n    private int age;\n    \n    public String getName() {\n        return name;\n    }\n    \n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public void setAge(int age) {\n        if (age > 0) { // Smart filter protecting your data\n            this.age = age;\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "2. Inheritance - Like Father, Like Son"
        },
        {
          type: "text",
          content: "A subclass can reuse attributes and methods from a parent class. Saves a ton of typing time."
        },
        {
          type: "code",
          language: "java",
          content: "public class Animal {\n    protected String name;\n    \n    public void eat() {\n        System.out.println(name + \" is eating like there is no tomorrow...\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" is barking woof woof!\");\n    }\n}"
        },
        {
          type: "heading",
          content: "3. Polymorphism - Shape-shifting like Sun Wukong"
        },
        {
          type: "text",
          content: "One method can behave in multiple ways depending on the object invoking it. We can use Overloading or Overriding."
        },
        {
          type: "code",
          language: "java",
          content: "public class Calculator {\n    // Overloading - same name but different parameters\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}"
        },
        {
          type: "heading",
          content: "4. Abstraction - Focus on the Core"
        },
        {
          type: "text",
          content: "Hiding complex implementation details and only showing the interface. In Java, we use abstract classes or interfaces. Just like driving a car, you only need to know the steering wheel and pedals, not how the engine burns fuel."
        },
        {
          type: "code",
          language: "java",
          content: "// Abstract class\nabstract class Shape {\n    protected String color;\n    public abstract double calculateArea();\n    public void setColor(String color) {\n        this.color = color;\n    }\n}\n\n// Interface\ninterface Drawable {\n    void draw();  // Default abstract method\n    default void printInfo() {\n        System.out.println(\"This is a drawable object!\");\n    }\n}"
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "text",
          content: "Master these 4 pillars, and you're already halfway to becoming a Java master!"
        }
      ]
    },
    {
      id: 4,
      title: "Exception Handling - When Java Throws a Tantrum & How to Calm It",
      excerpt:
        "Code running fine then suddenly dies? Learn how to catch errors smartly with Try-Catch-Finally so your app doesn't crash.",
      image: "https://s3-hfx03.fptcloud.com/codelearnstorage/Upload/Blog/10-dieu-ve-java-exception-va-java-error-63727034762.0195.jpg",
      date: "15/10/2025",
      category: "Java",
      content: [
        { type: "heading", content: "What is an Exception and Why is It So Scary?" },
        { type: "text", content: "Exceptions are runtime events that shake up your app, causing it to crash out of nowhere. Examples: division by zero, accessing arrays out of bounds, or calling a method on a null object." },
        { type: "heading", content: "Try-Catch: The Shock Absorber for Code" },
        { type: "text", content: "Wrap 'dangerous' code in a try block. If a disaster happens, the catch block steps in to handle it smoothly." },
        {
          type: "code",
          language: "java",
          content: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // Out of bounds!
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Calm down! Array index is out of bounds.");
            System.out.println("Error details: " + e.getMessage());
        } finally {
            System.out.println("Whether there's an error or not, the finally block always runs!");
        }
    }
}`
        },
        { type: "heading", content: "Catching Multiple Exceptions" },
        {
          type: "code",
          language: "java",
          content: `try {
    String str = null;
    System.out.println(str.length());
    int result = 10 / 0;
} catch (NullPointerException e) {
    System.out.println("Null Pointer Exception caught!");
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Exception (divide by 0) caught!");
} catch (Exception e) {
    System.out.println("Some general exception caught.");
}`
        },
        {
          type: "list",
          content: "My tips for soothing Java when it's throwing a tantrum:",
          items: [
            "Never leave a catch block empty (swallowing errors is a crime!)",
            "Always release resources (close files, connections) in the finally block",
            "Catch specific errors first, general Exception last",
            "Use try-with-resources for automatic, clean resource closing"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Java vs JavaScript - The Relationship Between Car and Carpet",
      excerpt: "Do you often confuse Java with JavaScript? Let's compare them to see how different they are—like night and day.",
      image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/06/Untitled-design-1.png",
      date: "25/10/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "The Ultimate Naming Illusion"
        },
        {
          type: "text",
          content: "Many programming beginners think JavaScript is Java's younger sibling. But the truth is, they have absolutely nothing to do with each other! The relationship between Java and JavaScript is like the relationship between 'Car' and 'Carpet'."
        },
        {
          type: "heading",
          content: "Comparison: Java vs JavaScript"
        },
        {
          type: "table",
          content: "Core Differences Between Java and JavaScript",
          columns: ["Criteria", "Java", "JavaScript"],
          rows: [
            ["Execution", "Compiled to Bytecode", "Interpreted at runtime"],
            ["Type System", "Strongly typed (Rigid)", "Dynamically typed (Flexible)"],
            ["Runtime Environment", "Runs on JVM", "Runs on Browser/Node.js"],
            ["Main Use Cases", "Backend, Mobile (Android), Enterprise", "Frontend Web, Backend (Node.js)"],
            ["Syntax", "More complex, strict, verbose", "Flexible, concise, easier to learn"],
            ["Programming Model", "Strict OOP", "Multi-paradigm (OOP, Functional, Event)"],
            ["Memory Management", "Automatic (Garbage Collection)", "Automatic (Garbage Collection)"],
            ["Performance", "High, stable for heavy workloads", "Fast for web apps and light I/O"],
            ["Ecosystem", "Spring, Hibernate, Maven", "React, Vue, Express, npm"],
            ["Concurrency", "Robust Multi-threading", "Single-threaded with Event Loop"]
          ]
        },
        {
          type: "heading",
          content: "Variable Declaration Comparison"
        },
        {
          type: "subheading",
          content: "1. Java (Explicit Typing)"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Strongly typed, must specify type\nint total = 100;\n// total = \"one hundred\"; // Compile error!"
        },
        {
          type: "subheading",
          content: "2. JavaScript (Dynamic Typing)"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Dynamically typed, auto type inference\nlet variable = 10;       // Number type\nvariable = \"now a string\"; // Changed to string\nvariable = true;         // Changed to boolean\n\n// Fun operations with mixed types\nlet result = \"5\" + 3;    // \"53\" (Concatenation)\nlet sum = \"5\" - 3;       // 2 (Auto coercion to number)"
        },
        {
          type: "subheading",
          content: "3. Array Handling Differences"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Fixed array size, use ArrayList for dynamic arrays\nimport java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();\nlist.add(\"Java\");\nlist.add(\"Spring Boot\");"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Dynamic arrays, can contain mixed types\nlet mixedArray = [1, \"hello\", true, { name: \"Luan\" }];\nmixedArray.push(\"feel free to add more\");"
        },
        {
          type: "subheading",
          content: "4. Asynchronous Code"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Use Threads or CompletableFuture\nimport java.util.concurrent.CompletableFuture;\nCompletableFuture.supplyAsync(() -> \"Data from Java\");"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Neat Async/Await\nasync function processData() {\n    const data = await fetchData();\n    console.log(\"Received data:\", data);\n}"
        },
        {
          type: "heading",
          content: "When to use which?"
        },
        {
          type: "text",
          content: "Use Java when building a large, stable backend, handling financial/enterprise transactions requiring high precision. Use JavaScript when building frontend web interfaces, or light API servers with Node.js. Or do both like me to go Full Stack!"
        }
      ]
    },
    {
      id: 6,
      title: "JS Basics: Var, Let, Const and the Ghost of Hoisting",
      excerpt:
        "Demystify Scope, differences between Var/Let/Const, and the mysterious Hoisting mechanism in JavaScript to sleep better at night.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      date: "11/03/2025",
      category: "JavaScript",
      content: [
        { type: "heading", content: "Var, Let, Const: What's the Difference?" },
        { type: "text", content: "Before ES6, JavaScript only had var. Then let and const were introduced to solve the mess that var caused." },
        {
          type: "code",
          language: "javascript",
          content: `// var has function scope - easily overwritten accidentally
function testVar() {
    var x = 10;
    if (true) {
        var x = 20; // Same variable x!
        console.log(x); // 20
    }
    console.log(x); // 20
}

// let has block scope - much safer
function testLet() {
    let y = 10;
    if (true) {
        let y = 20; // Entirely different y in the if block
        console.log(y); // 20
    }
    console.log(y); // 10
}

// const has block scope and cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error!`
        },
        { type: "heading", content: "Functions vs Arrow Functions" },
        {
          type: "code",
          language: "javascript",
          content: `// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function - concise and has no lexical 'this' of its own
const multiply = (a, b) => a * b;

console.log(add(5, 3));        // 8
console.log(multiply(5, 3));   // 15`
        },
        { type: "heading", content: "What on Earth is Hoisting?" },
        { type: "text", content: "Hoisting is JS's default behavior of moving declarations to the top of the current scope before execution. It makes code behave weirdly if you use var." },
        {
          type: "code",
          language: "javascript",
          content: `// Call a function before declaration? Works fine!
greet();

function greet() {
    console.log("Hey guys! Luan here.");
}

// Use variable before declaration? Returns undefined instead of throwing error!
console.log(myVar); // undefined
var myVar = 5;

// let and const are NOT hoisted (technically in the Temporal Dead Zone)
console.log(y); // ReferenceError!
let y = 10;`
        }
      ]
    },
    {
      id: 7,
      title: "ES6 - The Shiny New Toys to Save Your Fingers",
      excerpt: "Explore powerful ES6 features like Arrow Functions, Destructuring, Spread Operator, and Template Literals.",
      image: "https://images.viblo.asia/6549a9d8-f10e-4b5f-a87e-ae16631d2e52.png",
      date: "13/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "ES6 (ECMAScript 2015) - The Great Transformation"
        },
        {
          type: "text",
          content: "ES6 is like an engine upgrade for JavaScript. It introduces a suite of syntax additions that make code shorter, cleaner, and much more professional."
        },
        {
          type: "heading",
          content: "1. Let & Const - Goodbye Var"
        },
        {
          type: "text",
          content: "Provides tighter variable scope management, preventing silly bugs caused by scope leaks."
        },
        {
          type: "code",
          language: "javascript",
          content: "let age = 22;\nage = 23; // Can be changed freely\n\nconst user = { name: 'Luan' };\nuser.name = 'Thanh Luan'; // OK - mutating object properties\n// user = {}; // Error! Cannot reassign a new object."
        },
        {
          type: "heading",
          content: "2. Arrow Functions"
        },
        {
          type: "text",
          content: "Super concise function syntax, especially great when passed to array methods like map and filter."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Old way\nconst double = function(x) { return x * 2; };\n\n// ES6 Arrow Function\nconst doubleArrow = x => x * 2;\n\n// No parameters\nconst sayHello = () => 'Hello everyone!';"
        },
        {
          type: "heading",
          content: "3. Destructuring"
        },
        {
          type: "text",
          content: "Unpack values from arrays or properties from objects directly, without repeating the object name."
        },
        {
          type: "code",
          language: "javascript",
          content: "const student = { name: 'Vo Thanh Luan', school: 'HUTECH' };\n// Extract name and school\nconst { name, school } = student;\nconsole.log(name + \" studies at \" + school);"
        },
        {
          type: "heading",
          content: "4. Spread Operator (...)"
        },
        {
          type: "text",
          content: "Spreads elements of an array or properties of an object. Extremely useful for cloning or merging data."
        },
        {
          type: "code",
          language: "javascript",
          content: "const original = [1, 2, 3];\nconst cloned = [...original]; // Copy array\n\nconst details = { ...student, age: 22 }; // Add property to object clone"
        },
        {
          type: "heading",
          content: "5. Template Literals"
        },
        {
          type: "text",
          content: "No more painful string concatenation with '+'. Use backticks (`) and \${variable} to embed variables directly."
        },
        {
          type: "code",
          language: "javascript",
          content: "const myName = 'Luan';\nconst job = 'Intern';\nconsole.log(`I'm \\${myName}, currently working as a \\${job} at DUDI Software.`);"
        },
        {
          type: "heading",
          content: "Summary"
        },
        {
          type: "list",
          content: "Key ES6 takeaways to memorize:",
          items: [
            "Use const for constants or stable objects/arrays, let when reassignment is needed",
            "Arrow functions shorten code and automatically bind the lexical context 'this'",
            "Destructuring saves time extracting data",
            "Spread operator is the ultimate weapon for copying and merging arrays/objects",
            "Template literals make string interpolation super clean"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Closures in JavaScript - Explained Simply without Mind-Bending",
      excerpt: "What is a Closure? How a function can remember its past, and how to use it to create private variables.",
      image: "https://edward-huang.com/images/what-is-really-so-special-about-javascript-closure-/Closure%20JS.png",
      date: "15/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "An Easy-to-Digest Definition of Closure"
        },
        {
          type: "text",
          content: "A Closure is the combination of a function bundled together with references to its surrounding state. Simply put: A child function remembers and can access variables from its parent outer function, even after the parent function has finished executing and is removed from memory."
        },
        {
          type: "code",
          language: "javascript",
          content: "function outer() {\n    const secretMessage = \"Luan loves coding!\";\n    \n    function inner() {\n        console.log(secretMessage); // inner remembers secretMessage from outer\n    }\n    \n    return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // Prints: \"Luan loves coding!\""
        },
        {
          type: "heading",
          content: "Real-World Example: Creating a Counter"
        },
        {
          type: "code",
          language: "javascript",
          content: "function createCounter() {\n    let count = 0; // Completely private variable thanks to closure\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        reset: function() {\n            count = 0;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\ncounter.reset();\nconsole.log(counter.increment()); // 1"
        },
        {
          type: "heading",
          content: "Beware of Loops and Var"
        },
        {
          type: "code",
          language: "javascript",
          content: "// Classic bug due to var having no block scope\nfor (var i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // Prints 4, 4, 4 because i incremented to 4 before timeouts ran\n    }, 100);\n}\n\n// Modern solution: Use let to create a new block scope for each loop iteration\nfor (let i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // Prints 1, 2, 3 as expected\n    }, 100);\n}"
        },
        {
          type: "heading",
          content: "Real-World App: Secure Bank Account"
        },
        {
          type: "code",
          language: "javascript",
          content: "function createBankAccount(initialBalance) {\n    let balance = initialBalance; // Private variable\n    \n    return {\n        deposit: function(amount) {\n            balance += amount;\n            return balance;\n        },\n        withdraw: function(amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return balance;\n            }\n            return 'Insufficient balance!';\n        }\n    };\n}\n\nconst myAccount = createBankAccount(1000);\nconsole.log(myAccount.deposit(500)); // 1500\n// console.log(myAccount.balance); // undefined (cannot access directly)"
        },
        {
          type: "heading",
          content: "Summary"
        },
        {
          type: "list",
          content: "Important things to remember about Closures:",
          items: [
            "Closures help create private properties and methods, similar to OOP in Java",
            "Helps functions remember their outer scope where they were defined",
            "Always use let/const in loops to avoid var scope issues",
            "Widely used in the Module Pattern and Function Factories"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Array, Set, Map in JS - The Trio of Data Processing",
      excerpt: "Distinguish Map vs Object, Set vs Array. Learn how to use map(), filter(), reduce() to handle arrays like a pro.",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-20%20174654.png?raw=true",
      date: "18/11/2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "1. Map - When Objects Aren't Enough"
        },
        {
          type: "text",
          content: "Map stores data in key-value pairs like Object, but Map keys can be of any data type (including other objects), unlike Objects which restrict keys to String or Symbol. Plus, Map maintains the insertion order of elements."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Create Map\nconst map = new Map();\n\n// Set values\nmap.set('name', 'Vo Thanh Luan');\nmap.set('school', 'HUTECH');\nmap.set({ id: 99 }, 'Special Data'); // Key is an object!\n\n// Check and iterate Map\nconsole.log(map.get('name')); // 'Vo Thanh Luan'\nconsole.log(map.size); // 3"
        },
        {
          type: "heading",
          content: "2. Set - A World with No Duplicates"
        },
        {
          type: "text",
          content: "A Set is a collection of unique values. If you add a value that already exists, it is silently ignored. Check out this quick array deduplication trick using Set:"
        },
        {
          type: "code",
          language: "javascript",
          content: "const numbers = [1, 2, 2, 3, 4, 4, 5];\n\n// Deduplicate array using Set\nconst uniqueNumbers = [...new Set(numbers)];\nconsole.log(uniqueNumbers); // [1, 2, 3, 4, 5]"
        },
        {
          type: "heading",
          content: "3. Array Methods - Write Declarative Code"
        },
        {
          type: "text",
          content: "Ditch the traditional for-loops when dealing with arrays, and embrace map, filter, reduce to make your code look clean and professional."
        },
        {
          type: "subheading",
          content: "Transform Methods"
        },
        {
          type: "text",
          content: "map() transforms each element, filter() selects elements that meet a condition, and reduce() reduces an array to a single value."
        },
        {
          type: "code",
          language: "javascript",
          content: "const nums = [1, 2, 3, 4];\n\n// Double array elements\nconst doubled = nums.map(n => n * 2); // [2, 4, 6, 8]\n\n// Filter even numbers\nconst even = nums.filter(n => n % 2 === 0); // [2, 4]\n\n// Calculate sum\nconst sum = nums.reduce((total, n) => total + n, 0); // 10"
        },
        {
          type: "subheading",
          content: "Search Methods"
        },
        {
          type: "text",
          content: "find() returns the first element matching a condition, findIndex() returns its index, some() checks if at least one element matches, every() checks if all elements match."
        },
        {
          type: "code",
          language: "javascript",
          content: "const students = [\n  { id: 1, name: 'Luan' },\n  { id: 2, name: 'Nam' }\n];\n\nconst luan = students.find(s => s.name === 'Luan'); // { id: 1, name: 'Luan' }\nconst hasLuan = students.some(s => s.name === 'Luan'); // true"
        },
        {
          type: "subheading",
          content: "Other Handy Methods"
        },
        {
          type: "text",
          content: "includes() checks if a value exists in the array. slice() extracts a subarray (non-destructive). splice() removes or inserts elements (mutates the original array)."
        },
        {
          type: "code",
          language: "javascript",
          content: "const arr = ['Java', 'JS', 'C#'];\nconsole.log(arr.includes('JS')); // true\n\nconst sub = arr.slice(0, 2); // ['Java', 'JS']"
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "list",
          content: "Summary when processing data:",
          items: [
            "Use Map when keys are complex or insertion order matters",
            "Use Set when you need a list of unique values",
            "Make full use of Array methods to keep code clean and avoid manual loops"
          ]
        }
      ]
    },
    {
      id: 10,
      title: "A Senior Student's Survival and Self-Learning Guide at HUTECH",
      excerpt:
        "How to balance university classes, a Full Stack Intern role at DUDI Software, and stay sane? Here's my personal experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "01/12/2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "Senior Year Shock: Theory Meets Reality" },
        { type: "text", content: "Senior year is a delicate time. You have graduation projects to worry about, and real work starts. When I joined DUDI Software as a Full Stack Intern, I was also overwhelmed by the mountain of new technologies." },
        {
          type: "list",
          content: "The valuable lessons I learned:",
          items: [
            "Learn through real projects: Don't just read tutorials. Code something yourself, like this portfolio or the LunQuiz project.",
            "Read others' code: Search GitHub for projects you want to make, and study how experienced devs structure folders and write code.",
            "Ask questions the right way: When facing a bug, debug on your own for at least 30 minutes. Use Google/StackOverflow before asking a mentor.",
            "Master English: Reading English docs (like MDN, Spring Docs) gives you direct access to the original sources."
          ]
        },
        { type: "heading", content: "Learning Resources I Often Use" },
        {
          type: "list",
          content: "High-quality references:",
          items: [
            "Official Documentation: MDN Web Docs for JavaScript, Spring Docs for Java Spring Boot.",
            "YouTube Channels: Traversy Media, Programming with Mosh, Web Dev Simplified.",
            "Algorithm Practice: LeetCode (one problem a day keeps the brain sharp).",
            "Communities: Reddit r/learnprogramming, local developer groups."
          ]
        },
        { type: "heading", content: "Self-Learning Roadmap from Personal Experience" },
        { type: "text", content: "I started with basic C to build logic, then Java to master OOP and SQL Server databases. Next was JavaScript/TypeScript to learn React Frontend. This combination gave me the confidence to cover both Frontend and Backend." },
        { type: "heading", content: "Mistakes to Avoid" },
        {
          type: "list",
          content: "Avoid these if you don't want to burn out:",
          items: [
            "Learning too many languages/frameworks at once without mastering any.",
            "Watching tutorials passively without typing out the code.",
            "Copy-pasting code from StackOverflow or ChatGPT without understanding what it does.",
            "Skipping foundational knowledge (data structures, databases) to jump straight to frameworks."
          ]
        }
      ]
    },
    {
      id: 11,
      title: "TCP vs UDP – Networking Protocols Under a Fun Lens",
      excerpt:
        "One is a meticulously careful guy (TCP), and the other is a speed-obsessed courier (UDP). When should you use which?",
      image: "https://image.vietnix.vn/wp-content/uploads/2022/07/UDP-va-TCP.webp",
      date: "15/12/2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "1. Introduction"
        },
        {
          type: "text",
          content: "Whether you're sending messages on Zalo, browsing the web, or playing a 1v1 PvP match on my LunQuiz project, your data is sent using two of the most popular transport protocols: TCP and UDP."
        },
        {
          type: "subheading",
          content: "Who are they?"
        },
        {
          type: "text",
          content: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) operate at the Transport Layer (Layer 4) of the network model. Their main job is to transport data packets between computers."
        },
        {
          type: "heading",
          content: "2. TCP - The Meticulous and Careful Courier"
        },
        {
          type: "text",
          content: "TCP is connection-oriented. Before sending any data, it must establish a secure connection using the famous 3-way handshake."
        },
        {
          type: "subheading",
          content: "TCP Personality:"
        },
        {
          type: "list",
          content: "Key features of TCP:",
          items: [
            "Always performs a 3-way handshake (SYN -> SYN-ACK -> ACK) before working.",
            "Ensures data arrives intact, not a single byte is lost.",
            "Guarantees order: Send packets 1, 2, 3, receiver gets them in order 1, 2, 3.",
            "Has error checking and congestion control.",
            "Slower than UDP due to the overhead of confirming (ACK) each packet."
          ]
        },
        {
          type: "subheading",
          content: "TCP 3-Way Handshake as a Dialogue:"
        },
        {
          type: "code",
          language: "text",
          content: "Client: \"Hey Server, connection request!\" (SYN)\nServer: \"Hey Client, request received, let's connect!\" (SYN-ACK)\nClient: \"Awesome, starting data transmission now!\" (ACK)\n\n-> Connection established successfully."
        },
        {
          type: "subheading",
          content: "Real-World TCP Uses"
        },
        {
          type: "list",
          content: "TCP is used where data accuracy is critical:",
          items: [
            "Web browsing (HTTP/HTTPS)",
            "Email transmission (SMTP, IMAP)",
            "File transfer (FTP)",
            "Online banking and shopping transactions"
          ]
        },
        {
          type: "heading",
          content: "3. UDP - The Speed-Obsessed Courier"
        },
        {
          type: "text",
          content: "UDP is connectionless. It doesn't bother shaking hands; it just shoots packets away. It doesn't care if the receiver gets it or if packets get lost along the way."
        },
        {
          type: "subheading",
          content: "UDP Personality:"
        },
        {
          type: "list",
          content: "Key features of UDP:",
          items: [
            "No connection setup needed (shoots packets instantly).",
            "No guarantee of delivery (lost packets are skipped).",
            "Extremely high speed and ultra-low latency.",
            "Lightweight with minimal overhead."
          ]
        },
        {
          type: "subheading",
          content: "Real-World UDP Uses"
        },
        {
          type: "list",
          content: "UDP is used where speed and real-time response are priorities:",
          items: [
            "Video calls (Zoom, Microsoft Teams, Zalo Call)",
            "Real-time online games (like PvP matches on LunQuiz)",
            "Live video streaming and online music",
            "DNS queries (speedy domain name lookups)"
          ]
        },
        {
          type: "heading",
          content: "4. TCP vs UDP Comparison Table"
        },
        {
          type: "table",
          content: "The Core Differences",
          columns: ["Criteria", "TCP (Meticulous)", "UDP (Speedy)"],
          rows: [
            ["Connection", "Requires handshake and connection setup", "Connectionless, sends immediately"],
            ["Reliability", "Guaranteed delivery, retries on loss", "No guarantee, lost is lost"],
            ["Speed", "Slower due to overhead", "Much faster, minimal delay"],
            ["Packet Order", "Guaranteed correct order", "No order guarantee"],
            ["Packet Weight", "Heavy (header 20 bytes)", "Light (header 8 bytes)"]
          ]
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "text",
          content: "Use TCP when you need absolute accuracy (like logins, payments). Use UDP when you need low latency and blazing speed (like video calls, gaming). Understanding TCP vs UDP helps you design optimized network architectures!"
        }
      ]
    },
    {
      id: 12,
      title: "Server Optimization with Java NIO - Non-blocking I/O",
      excerpt:
        "How can a single thread handle thousands of concurrent connections? Discover the power of Selector and Channel in Java NIO.",
      image: "https://i.ytimg.com/vi/FRY9BjU2W5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDU6kOPcqFngjUqGqf8f7PcJxv6ZQ",
      date: "20/12/2025",
      category: "Java",
      content: [
        {
          type: "text",
          content: "In traditional socket programming (Blocking I/O), every time a client connects to the Server, we must allocate a dedicated Thread to handle it. If we have 10,000 clients? The server needs 10,000 threads. This leads to crashes due to memory exhaustion (RAM) and heavy CPU overhead from Context Switching. Java NIO (New I/O) solves this problem elegantly."
        },
        {
          type: "heading",
          content: "1. Blocking I/O – The Headache of Traditional Sockets"
        },
        {
          type: "text",
          content: "The 'One Thread per Connection' model works fine for small user bases. But when concurrent connections surge (like when LunQuiz hosts thousands of concurrent PvP players), this model fails spectacularly."
        },
        {
          type: "list",
          content: "Limitations of Blocking I/O:",
          items: [
            "Threads are blocked waiting for client data, wasting CPU resources.",
            "High memory cost to maintain thread stacks (each thread takes ~512KB - 1MB of RAM).",
            "CPU spends more time on Context Switching than executing actual business logic."
          ]
        },
        {
          type: "heading",
          content: "2. Java NIO to the Rescue"
        },
        {
          type: "text",
          content: "Java NIO introduces a new model: Event-driven and Non-blocking. The server thread never blocks waiting for data. Instead, it only works when a real event occurs (e.g., a client sends data)."
        },
        {
          type: "heading",
          content: "3. Three Core Components of Java NIO"
        },
        {
          type: "subheading",
          content: "Channel"
        },
        {
          type: "text",
          content: "A Channel is like a two-way data pipe. Unlike traditional Input/OutputStreams which are one-way, a Channel allows both reading and writing simultaneously."
        },
        {
          type: "subheading",
          content: "Buffer"
        },
        {
          type: "text",
          content: "A Buffer is a memory container for data. In NIO, you don't read/write directly from Channels; you go through Buffers: Channel -> Buffer -> Processing -> Buffer -> Channel."
        },
        {
          type: "code",
          language: "java",
          content: "// Allocate Buffer of 1024 bytes\nByteBuffer buffer = ByteBuffer.allocate(1024);\n\n// Read from Channel into Buffer\nchannel.read(buffer);\n\n// Flip Buffer from write to read mode\nbuffer.flip();"
        },
        {
          type: "subheading",
          content: "Selector (The Sentinel - Heart of NIO)"
        },
        {
          type: "text",
          content: "A Selector is a component that lets a single Thread monitor multiple Channels (connections) at once. It acts like a gatekeeper, notifying the thread only when a Channel is ready (e.g., new client, data available to read)."
        },
        {
          type: "heading",
          content: "4. A Simple NIO Server Example using Selector"
        },
        {
          type: "code",
          language: "java",
          content: "import java.nio.channels.*;\nimport java.nio.*;\nimport java.net.*;\nimport java.util.*;\n\npublic class NIOServer {\n    public static void main(String[] args) throws Exception {\n        Selector selector = Selector.open();\n        ServerSocketChannel serverChannel = ServerSocketChannel.open();\n        serverChannel.bind(new InetSocketAddress(8080));\n        serverChannel.configureBlocking(false); // Enable Non-blocking!\n        serverChannel.register(selector, SelectionKey.OP_ACCEPT);\n        System.out.println(\"NIO Server started on port 8080...\");\n        \n        while (true) {\n            selector.select(); // Wait for events\n            Set<SelectionKey> selectedKeys = selector.selectedKeys();\n            Iterator<SelectionKey> iter = selectedKeys.iterator();\n            \n            while (iter.hasNext()) {\n                SelectionKey key = iter.next();\n                iter.remove();\n                \n                if (key.isAcceptable()) {\n                    // Accept new client connection\n                    SocketChannel clientChannel = serverChannel.accept();\n                    clientChannel.configureBlocking(false);\n                    clientChannel.register(selector, SelectionKey.OP_READ);\n                    System.out.println(\"Client connected: \" + clientChannel.getRemoteAddress());\n                }\n                if (key.isReadable()) {\n                    // Read client data\n                    SocketChannel clientChannel = (SocketChannel) key.channel();\n                    ByteBuffer buffer = ByteBuffer.allocate(1024);\n                    clientChannel.read(buffer);\n                    // Process data...\n                }\n            }\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "5. Blocking IO vs Java NIO"
        },
        {
          type: "table",
          content: "Blocking IO vs Non-blocking NIO",
          columns: ["Criteria", "Blocking IO (OIO)", "Non-blocking IO (NIO)"],
          rows: [
            ["Processing Model", "1 Thread per Connection", "1 Thread for multiple Connections"],
            ["Scalability", "Poor under extremely high connections", "Excellent, handles tens of thousands"],
            ["Resource Overhead", "High RAM and CPU Context Switching", "Low RAM usage, optimal CPU use"],
            ["Code Complexity", "Simple, straightforward", "More complex, event-driven"]
          ]
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "text",
          content: "Java NIO is the backbone of high-performance backend frameworks like Netty, Spring WebFlux, and Vert.x. Mastering Java NIO helps you understand resource optimization and prepares you to build large-scale real-time systems!"
        }
      ]
    }
  ],

  certificates: [
    {
      id: 1,
      title: "Networking Basics",
      issuer: "Cisco",
      date: "November, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20145024.png?raw=true",
      credentialId: "e7935a5a-7538-4dad-b4a8-a2fc40a71c29",
      skills: ["Network"]
    },
    {
      id: 2,
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "December, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20150039.png?raw=true",
      credentialId: "5c24284d-57cd-444c-90c1-3f22cb5812c9",
      skills: ["JavaScript"]
    },
    {
      id: 3,
      title: "JavaScript Essentials 2",
      issuer: "Cisco",
      date: "December, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-19%20150123.png?raw=true",
      credentialId: "3d927bc9-374a-4fc7-9ad3-87cfe029829f",
      skills: ["JavaScript"]
    },
    {
      id: 4,
      title: "TOEIC 565",
      issuer: "IIG Vietnam",
      date: "December, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/z7343453066600_27ed7a9552dfeba93b90814f58a17d54.jpg?raw=true",
      credentialId: "Vo Thanh Luan",
      skills: ["English"]
    },
    {
      id: 5,
      title: "Communication and Teamwork Skills",
      issuer: "Hutech",
      date: "August, 2025",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/z7343453059717_35847c4345af003e7b161514a0c691d7.jpg?raw=true",
      credentialId: "0055772",
      skills: ["Communication", "Teamwork"]
    },
  ],

  stats: [
    { id: 1, value: "10+", label: "Completed Projects" },
    { id: 2, value: "6+", label: "Certificates" },
    { id: 3, value: "6+", label: "Technologies Used" },
  ],
};
