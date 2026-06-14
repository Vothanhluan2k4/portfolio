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
      id: 1,
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
      id: 2,
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
      title: "Introduction to Me and My Programming Journey",
      excerpt: "A brief sharing about myself, career direction, and my journey learning Java & JavaScript.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
      date: "Sep 20, 2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "1. Hello! I'm Vo Thanh Luan" },
        { type: "text", content: "I'm a 4th-year Software Engineering student at Ho Chi Minh City University of Technology (HUTECH). With a passion for programming and technology, I've spent 3 years learning and honing my skills in software development." },
        { type: "heading", content: "2. My Programming Journey" },
        { type: "text", content: "Starting from first year with basic C, I gradually approached Java, JavaScript, and modern frameworks. Each language brings its own challenges but also helps me develop comprehensive programming thinking." },
        { 
          type: "list", 
          content: "My main skills learned:",
          items: [
            "Programming languages: C, C#",
            "Java & Spring Boot for backend development",
            "ASP.NET Core for web applications",
            "Database: SQL Server, MySQL, PostgreSQL",
            "Mobile: Flutter"
          ]
        },
        { type: "heading", content: "3. Career Direction" },
        { type: "text", content: "I'm aiming for a Backend Developer position, particularly interested in building efficient and secure API systems. I believe a solid backend is the foundation for every successful application." }
      ]
    },
    {
      id: 2,
      title: "What is Java? Overview for Beginners",
      excerpt: "Introduction to Java language, advantages, practical applications, and why Java is still widely used.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
      date: "Oct 03, 2025",
      category: "Java",
      content: [
        { type: "heading", content: "1. What is Java?" },
        { type: "text", content: "Java is an object-oriented programming (OOP) language developed by Sun Microsystems in 1995. With the motto 'Write Once, Run Anywhere', Java has become one of the most popular languages in the world." },
        { type: "heading", content: "2. Java Advantages" },
        { 
          type: "list",
          content: "Key advantages:",
          items: [
            "Platform independent thanks to JVM (Java Virtual Machine)",
            "Fully object-oriented",
            "High security",
            "Large community and extensive library support",
            "Good performance with automatic garbage collection"
          ]
        },
        { type: "heading", content: "3. Hello World Example" },
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
        { type: "text", content: "This is the simplest Java program. Every Java program starts from the main() method." }
      ]
    },
    {
      id: 3,
      title: "Important OOP Concepts in Java",
      excerpt: "Summary of 4 OOP properties in Java: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      image: "https://www.ennicode.com/wp-content/uploads/2023/06/4-pillar-oops.jpg.webp",
      date: "Oct 10, 2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "4 Basic OOP Properties"
        },
        {
          type: "text",
          content: "Object-Oriented Programming (OOP) is the foundation of Java. Understanding these 4 properties will help you write Java code more effectively."
        },
        {
          type: "heading",
          content: "1. Encapsulation"
        },
        {
          type: "text",
          content: "Encapsulation is hiding data inside a class and only allowing access through public methods."
        },
        {
          type: "code",
          language: "java",
          content: "public class Student {\n    private String name;\n    private int age;\n    \n    public String getName() {\n        return name;\n    }\n    \n    public void setName(String name) {\n        this.name = name;\n    }\n    \n    public int getAge() {\n        return age;\n    }\n    \n    public void setAge(int age) {\n        if (age > 0) {\n            this.age = age;\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "2. Inheritance"
        },
        {
          type: "text",
          content: "Inheritance allows child classes to reuse properties and methods of parent classes."
        },
        {
          type: "code",
          language: "java",
          content: "public class Animal {\n    protected String name;\n    \n    public void eat() {\n        System.out.println(name + \" is eating\");\n    }\n}\n\npublic class Dog extends Animal {\n    public void bark() {\n        System.out.println(name + \" is barking\");\n    }\n}"
        },
        {
          type: "heading",
          content: "3. Polymorphism"
        },
        {
          type: "text",
          content: "Polymorphism allows one method to have different behaviors."
        },
        {
          type: "code",
          language: "java",
          content: "public class Calculator {\n    // Method overloading\n    public int add(int a, int b) {\n        return a + b;\n    }\n    \n    public double add(double a, double b) {\n        return a + b;\n    }\n    \n    public int add(int a, int b, int c) {\n        return a + b + c;\n    }\n}"
        },
        {
          type: "heading",
          content: "4. Abstraction"
        },
        {
          type: "text",
          content: "Abstraction allows hiding complex details and only showing necessary features. In Java, abstraction is implemented through abstract classes or interfaces."
        },
        {
          type: "code",
          language: "java",
          content: "// Using abstract class\nabstract class Shape {\n    protected String color;\n    \n    // Abstract method - no method body\n    public abstract double calculateArea();\n    \n    // Concrete method\n    public void setColor(String color) {\n        this.color = color;\n    }\n}\n\n// Using interface\ninterface Drawable {\n    void draw();  // Default abstract method\n    \n    default void printInfo() {\n        System.out.println(\"This is a drawable object\");\n    }\n}\n\n// Class inheriting abstract class and implementing interface\nclass Circle extends Shape implements Drawable {\n    private double radius;\n    \n    public Circle(double radius) {\n        this.radius = radius;\n    }\n    \n    @Override\n    public double calculateArea() {\n        return Math.PI * radius * radius;\n    }\n    \n    @Override\n    public void draw() {\n        System.out.println(\"Drawing a circle with radius: \" + radius);\n    }\n}"
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "text",
          content: "The 4 OOP properties in Java not only make code clearer and easier to maintain but also increase reusability. Mastering Encapsulation, Inheritance, Polymorphism, and Abstraction is the foundation to becoming a professional Java programmer."
        }
      ]
    },
    {
      id: 4,
      title: "Exception Handling in Java Made Simple",
      excerpt: "How to handle exceptions in Java with try-catch-finally and best practices when writing code.",
      image: "https://s3-hfx03.fptcloud.com/codelearnstorage/Upload/Blog/10-dieu-ve-java-exception-va-java-error-63727034762.0195.jpg",
      date: "Oct 15, 2025",
      category: "Java",
      content: [
        { type: "heading", content: "1. What is an Exception?" },
        { type: "text", content: "An exception is an abnormal event that occurs during program execution, disrupting the normal flow of the program." },
        { type: "heading", content: "2. Try-Catch-Finally" },
        { type: "text", content: "The try-catch-finally structure helps catch and handle exceptions safely." },
        {
          type: "code",
          language: "java",
          content: `public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]); // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index exceeds array size");
            System.out.println("Details: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes");
        }
    }
}`
        },
        { type: "heading", content: "3. Multiple Catch Blocks" },
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
            "Always catch specific exceptions first, generic exceptions last",
            "Don't leave catch blocks empty",
            "Use finally for resource cleanup",
            "Throw exceptions when necessary with clear messages"
          ]
        }
      ]
    },
    {
      id: 5,
      title: "What is JavaScript? How Different from Java?",
      excerpt: "Comparing Java and JavaScript, helping beginners avoid confusion and understand each language's role.",
      image: "https://www.mygreatlearning.com/blog/wp-content/uploads/2022/06/Untitled-design-1.png",
      date: "Oct 25, 2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "1. What is JavaScript?"
        },
        {
          type: "text",
          content: "JavaScript is a scripting language primarily used to create dynamic content on the web. Despite having similar names, Java and JavaScript are completely different languages."
        },
        {
          type: "heading",
          content: "2. Java vs JavaScript Comparison"
        },
        {
          type: "table",
          content: "Key differences between Java and JavaScript",
          columns: ["Criteria", "Java", "JavaScript"],
          rows: [
            ["Language Type", "Compiled language", "Interpreted language"],
            ["Data Types", "Strongly typed", "Dynamically typed"],
            ["Runtime Environment", "Runs on JVM (Java Virtual Machine)", "Runs on Browser/Node.js"],
            ["Main Applications", "Backend, Mobile (Android), Enterprise", "Frontend Web, Backend (Node.js)"],
            ["Syntax", "More complex, strict", "Flexible, easier to learn"],
            ["Programming Model", "Pure OOP", "Multi-paradigm (OOP, Functional, Event-driven)"],
            ["Memory Management", "Automatic (Garbage Collection)", "Automatic (Garbage Collection)"],
            ["Performance", "High, stable", "Fast for web, depends on engine"],
            ["Ecosystem", "Spring, Hibernate, Maven", "React, Vue, Express, npm"],
            ["Concurrency", "Powerful multi-threading", "Single-threaded with Event Loop"]
          ]
        },
        {
          type: "heading",
          content: "3. Example Comparing Same Functionality"
        },
        {
          type: "subheading",
          content: "1. Variable Declaration and Usage"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Strongly typed, requires type declaration\nint total = 0;"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Dynamically typed, no type declaration needed\nlet number = 10;          // number\nlet text = \"Hello\";      // string\nlet isActive = true;      // boolean\n\n// Type can change dynamically\nlet variable = 10;       // number\nvariable = \"now a string\"; // becomes string\nvariable = true;         // becomes boolean\n\n// Can perform operations with different types\nlet result = \"5\" + 3;    // \"53\" (string concatenation)\nlet sum = \"5\" - 3;       // 2 (number)"
        },
        {
          type: "subheading",
          content: "2. Array Handling"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Array with fixed size\nimport java.util.Arrays;\nimport java.util.ArrayList;\n\npublic class ArrayExample {\n    public static void main(String[] args) {\n        // Basic array\n        int[] numbers = {1, 2, 3, 4, 5};\n        System.out.println(\"Length: \" + numbers.length);\n        \n        // Must use ArrayList to add elements\n        ArrayList<String> list = new ArrayList<>();\n        list.add(\"Java\");\n        list.add(\"is\");\n        list.add(\"cool\");\n        \n        // Iterate array\n        for (int i = 0; i < numbers.length; i++) {\n            System.out.println(numbers[i]);\n        }\n    }\n}"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Dynamic flexible array\n// Array declaration\nlet fruits = [\"apple\", \"banana\", \"orange\"];\n\n// Array can contain multiple data types\nlet mixedArray = [1, \"hello\", true, {name: \"John\"}, [1, 2, 3]];\n\n// Easy add/remove elements\nfruits.push(\"mango\");        // add to end\nfruits.unshift(\"grape\");     // add to beginning\nlet lastFruit = fruits.pop(); // remove last element\n\n// Powerful built-in methods\nlet numbers = [1, 2, 3, 4, 5];\n\n// map - transform array\nlet doubled = numbers.map(num => num * 2); // [2, 4, 6, 8, 10]\n\n// filter - filter array\nlet evenNumbers = numbers.filter(num => num % 2 === 0); // [2, 4]\n\n// reduce - calculate sum\nlet sum = numbers.reduce((total, num) => total + num, 0); // 15\n\n// forEach - iterate array\nnumbers.forEach(num => console.log(num));"
        },
        {
          type: "subheading",
          content: "3. Asynchronous Handling"
        },
        {
          type: "code",
          language: "java",
          content: "// JAVA - Using Thread or CompletableFuture\nimport java.util.concurrent.CompletableFuture;\nimport java.util.concurrent.ExecutionException;\n\npublic class AsyncExample {\n    public static void main(String[] args) {\n        // Using CompletableFuture for async\n        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {\n            try {\n                Thread.sleep(2000); // Simulate delay\n            } catch (InterruptedException e) {\n                e.printStackTrace();\n            }\n            return \"Result from Java\";\n        });\n        \n        future.thenAccept(result -> {\n            System.out.println(\"Received: \" + result);\n        });\n        \n        // Wait for result\n        try {\n            Thread.sleep(3000);\n        } catch (InterruptedException e) {\n            e.printStackTrace();\n        }\n    }\n}"
        },
        {
          type: "code",
          language: "javascript",
          content: "// JAVASCRIPT - Clean Async/Await syntax\n// Simulate async function\nfunction fetchData() {\n    return new Promise((resolve) => {\n        setTimeout(() => {\n            resolve(\"Data from server\");\n        }, 2000);\n    });\n}\n\n// Method 1: Using Promise\nfetchData()\n    .then(data => {\n        console.log(\"Received:\", data);\n        return data.toUpperCase();\n    })\n    .then(processedData => {\n        console.log(\"Processed:\", processedData);\n    })\n    .catch(error => {\n        console.error(\"Error:\", error);\n    });\n\n// Method 2: Using async/await (more modern)\nasync function processData() {\n    try {\n        console.log(\"Loading data...\");\n        const data = await fetchData();\n        console.log(\"Received:\", data);\n        \n        // Can await multiple promises in parallel\n        const [result1, result2] = await Promise.all([\n            fetchData(),\n            fetchData()\n        ]);\n        console.log(\"Parallel results:\", result1, result2);\n    } catch (error) {\n        console.error(\"Processing error:\", error);\n    }\n}\n\nprocessData();"
        },
        {
          type: "heading",
          content: "4. When to Use Which Language?"
        },
        {
          type: "text",
          content: "Use Java when building enterprise applications, Android mobile apps, or large backend systems requiring high stability. Use JavaScript when developing web frontends, or backend with Node.js for real-time applications and lightweight APIs."
        },
        {
          type: "list",
          content: "Summary of differences:",
          items: [
            "Java: Strict, safe, suitable for large systems",
            "JavaScript: Flexible, fast prototyping, suitable for web",
            "Java: Requires compilation before running",
            "JavaScript: Runs directly in browser",
            "Java: Strong ecosystem with Spring, Hibernate",
            "JavaScript: Rich ecosystem with React, Vue, Express"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Essential JavaScript Concepts to Master",
      excerpt: "Explaining variables, scope, function, arrow function, and hoisting in JavaScript.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop",
      date: "Mar 11, 2025",
      category: "JavaScript",
      content: [
        { type: "heading", content: "1. Variables and Scope" },
        { type: "text", content: "JavaScript has 3 ways to declare variables: var, let, and const. Each has different scope." },
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
        { type: "heading", content: "2. Functions and Arrow Functions" },
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
        { type: "heading", content: "3. Hoisting" },
        { type: "text", content: "Hoisting is JavaScript's mechanism of moving declarations to the top of the scope before code execution." },
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

// let and const don't hoist
console.log(y); // ReferenceError
let y = 10;`
        }
      ]
    },
    {
      id: 7,
      title: "What is ES6? Important Features",
      excerpt: "Learn about let, const, arrow functions, destructuring, spread operator, and template literals in ES6.",
      image: "https://images.viblo.asia/6549a9d8-f10e-4b5f-a87e-ae16631d2e52.png",
      date: "Nov 13, 2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "ES6 (ECMAScript 2015)"
        },
        {
          type: "text",
          content: "ES6 is a major JavaScript update, bringing many new features that make code more concise."
        },
        {
          type: "heading",
          content: "1. let & const"
        },
        {
          type: "text",
          content: "Replaces var, provides better scope control."
        },
        {
          type: "code",
          language: "javascript",
          content: "// let - can be changed\nlet age = 25;\nage = 26; // OK\n\n// const - cannot be changed\nconst PI = 3.14;\n// PI = 3.15; // ERROR\n\n// const with object\nconst user = { name: 'Luan' };\nuser.name = 'Nam'; // OK - change property\n// user = {}; // ERROR - cannot reassign"
        },
        {
          type: "heading",
          content: "2. Arrow Functions"
        },
        {
          type: "text",
          content: "Concise syntax, no own this."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Traditional way\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow function\nconst addArrow = (a, b) => {\n    return a + b;\n};\n\n// Shortened (implicit return)\nconst addShort = (a, b) => a + b;\n\n// One parameter\nconst double = x => x * 2;\n\n// No parameters\nconst sayHi = () => 'Hello!';\n\n// Use in callback\nconst numbers = [1, 2, 3];\nconst doubled = numbers.map(n => n * 2); // [2, 4, 6]"
        },
        {
          type: "heading",
          content: "3. Destructuring"
        },
        {
          type: "text",
          content: "Extract values from array/object easily."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Array destructuring\nconst colors = ['red', 'green', 'blue'];\nconst [firstColor, secondColor] = colors;\nconsole.log(firstColor); // 'red'\n\n// Object destructuring\nconst person = { name: 'Luan', age: 22 };\nconst { name, age } = person;\nconsole.log(name); // 'Luan'\n\n// With different variable name\nconst { name: fullName } = person;\nconsole.log(fullName); // 'Luan'\n\n// Default value\nconst { city = 'Hanoi' } = person;\nconsole.log(city); // 'Hanoi'"
        },
        {
          type: "heading",
          content: "4. Spread Operator (...)"
        },
        {
          type: "text",
          content: "Expand array/object."
        },
        {
          type: "code",
          language: "javascript",
          content: "// With array\nconst arr1 = [1, 2];\nconst arr2 = [3, 4];\nconst combined = [...arr1, ...arr2]; // [1, 2, 3, 4]\n\n// Copy array\nconst original = [1, 2, 3];\nconst copy = [...original];\n\n// With object\nconst user = { name: 'Luan' };\nconst userWithAge = { ...user, age: 22 };\n// { name: 'Luan', age: 22 }\n\n// Merge object\nconst defaults = { theme: 'dark' };\nconst custom = { theme: 'light', fontSize: 14 };\nconst settings = { ...defaults, ...custom };\n// { theme: 'light', fontSize: 14 }"
        },
        {
          type: "heading",
          content: "5. Template Literals"
        },
        {
          type: "text",
          content: "Create strings with variables and line breaks easily."
        },
        {
          type: "code",
          language: "javascript",
          content: "const name = 'Luan';\nconst age = 22;\n\n// Old way\nconsole.log('I am ' + name + ', ' + age + ' years old');\n\n// Template literal\nconsole.log(`I am ${name}, ${age} years old`);\n\n// Line breaks\nconst message = `\n  Hello,\n  My name is ${name}.\n  I'm ${age} years old.\n`;\n\n// Calculation in template\nconst price = 100000;\nconsole.log(`Price: ${price} VND`);\nconsole.log(`20% off: ${price * 0.8} VND`);"
        },
        {
          type: "heading",
          content: "6. Default Parameters"
        },
        {
          type: "text",
          content: "Default parameters for functions."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Old way\nfunction greet(name) {\n    name = name || 'Guest';\n    return `Hello ${name}`;\n}\n\n// ES6\nfunction greetES6(name = 'Guest') {\n    return `Hello ${name}`;\n}\n\ngreetES6(); // 'Hello Guest'\ngreetES6('Luan'); // 'Hello Luan'"
        },
        {
          type: "heading",
          content: "Summary"
        },
        {
          type: "list",
          content: "Key points:",
          items: [
            "Use const for constants, let for changing variables",
            "Arrow functions are concise, suitable for callbacks",
            "Destructuring helps extract data from array/object easily",
            "Spread operator for copying and merging",
            "Template literals make strings more readable"
          ]
        }
      ]
    },
    {
      id: 8,
      title: "Closures in JavaScript - Simplified",
      excerpt: "What is a closure? How it works and practical applications in JavaScript programming.",
      image: "https://edward-huang.com/images/what-is-really-so-special-about-javascript-closure-/Closure%20JS.png",
      date: "Nov 15, 2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "1. What is a Closure?"
        },
        {
          type: "text",
          content: "A function that remembers and can access variables from where it was created, even when running elsewhere."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Basic example\nfunction outer() {\n    const secret = 'Hello';\n    \n    function inner() {\n        console.log(secret); // Still can access secret variable\n    }\n    \n    return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // 'Hello'"
        },
        {
          type: "heading",
          content: "2. Practical Example: Counter"
        },
        {
          type: "code",
          language: "javascript",
          content: "function createCounter() {\n    let count = 0; // Private variable\n    \n    return {\n        increment: function() {\n            count++;\n            return count;\n        },\n        reset: function() {\n            count = 0;\n        }\n    };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\ncounter.reset();\nconsole.log(counter.increment()); // 1"
        },
        {
          type: "heading",
          content: "3. Loop Issue"
        },
        {
          type: "code",
          language: "javascript",
          content: "// Problem\nfor (var i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // Prints 4, 4, 4\n    }, 100);\n}\n\n// Solution: Use let\nfor (let i = 1; i <= 3; i++) {\n    setTimeout(function() {\n        console.log(i); // Prints 1, 2, 3\n    }, 100);\n}"
        },
        {
          type: "heading",
          content: "Practical Applications"
        },
        {
          type: "code",
          language: "javascript",
          content: "// 1. Private variables\nfunction createBankAccount(initial) {\n    let balance = initial; // Private\n    \n    return {\n        deposit: function(amount) {\n            balance += amount;\n            return balance;\n        },\n        withdraw: function(amount) {\n            if (amount <= balance) {\n                balance -= amount;\n                return balance;\n            }\n            return 'Insufficient funds';\n        }\n    };\n}\n\nconst account = createBankAccount(1000);\nconsole.log(account.deposit(500)); // 1500\nconsole.log(account.withdraw(200)); // 1300\n\n// 2. Function factory\nfunction createMultiplier(multiplier) {\n    return function(num) {\n        return num * multiplier;\n    };\n}\n\nconst double = createMultiplier(2);\nconst triple = createMultiplier(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(5)); // 15"
        },
        {
          type: "heading",
          content: "5. Summary"
        },
        {
          type: "list",
          content: "Important points:",
          items: [
            "Closures help create private variables",
            "Functions remember the scope where they were created",
            "Use let instead of var in loops",
            "Applications: module pattern, function factory"
          ]
        }
      ]
    },
    {
      id: 9,
      title: "Array, Set, and Map Methods in JavaScript",
      excerpt: "Compare Map vs Object, Set vs Array, and useful Array methods.",
      image: "https://github.com/Vothanhluan2k4/portfolio-assets/blob/main/images/Screenshot%202025-12-20%20174654.png?raw=true",
      date: "Nov 18, 2025",
      category: "JavaScript",
      content: [
        {
          type: "heading",
          content: "1. Map - Key/Value Collection"
        },
        {
          type: "text",
          content: "Map is a data structure that stores key-value pairs, similar to Object but more flexible. Map allows keys to be any data type (object, function, primitive), preserves the order of elements as they are added, and provides many useful methods for data manipulation."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Create Map\nconst map = new Map();\n\n// Add data\nmap.set('name', 'Luan');\nmap.set('age', 22);\nmap.set({ id: 1 }, 'Object key'); // key is object\n\n// Get data\nconsole.log(map.get('name')); // 'Luan'\n\n// Check\nconsole.log(map.has('age')); // true\nconsole.log(map.size); // 3\n\n// Iterate Map\nfor (let [key, value] of map) {\n  console.log(key, value);\n}\n\n// Convert to Array\nconsole.log([...map]); // [['name', 'Luan'], ...]"
        },
        {
          type: "heading",
          content: "2. Set - Unique Values"
        },
        {
          type: "text",
          content: "Set is a collection that only contains unique values, not allowing duplicates. Set is very useful when you need to remove duplicate elements from an array or quickly check the existence of a value. Unlike Array, Set has no index and automatically ignores duplicate values when adding."
        },
        {
          type: "code",
          language: "javascript",
          content: "// Create Set\nconst set = new Set();\n\n// Add values\nset.add(1);\nset.add(2);\nset.add(2); // Ignored\nset.add('hello');\n\nconsole.log(set.size); // 3 (1, 2, 'hello')\n\n// Check\nconsole.log(set.has(2)); // true\n\n// Remove duplicates from Array\nconst numbers = [1, 2, 2, 3, 3, 4];\nconst unique = [...new Set(numbers)];\nconsole.log(unique); // [1, 2, 3, 4]\n\n// Iterate Set\nfor (let value of set) {\n  console.log(value);\n}"
        },
        {
          type: "heading",
          content: "3. Array Methods"
        },
        {
          type: "text",
          content: "Arrays in JavaScript have many useful methods that make data processing easier. These methods are divided into groups by functionality: transforming data, searching, and other operations. Understanding each group of methods will help you write more concise and readable code."
        },
        {
          type: "subheading",
          content: "Transform Methods"
        },
        {
          type: "text",
          content: "This group of methods helps transform data in arrays. map() is used to transform each element, filter() to filter elements that meet a condition, and reduce() to fold all elements into a single value (like sum, product)."
        },
        {
          type: "code",
          language: "javascript",
          content: "const nums = [1, 2, 3, 4];\n\n// map - transform\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8]\n\n// filter - filter\nconst even = nums.filter(n => n % 2 === 0);\nconsole.log(even); // [2, 4]\n\n// reduce - sum\nconst sum = nums.reduce((total, n) => total + n, 0);\nconsole.log(sum); // 10"
        },
        {
          type: "subheading",
          content: "Search Methods"
        },
        {
          type: "text",
          content: "Search methods help you find elements in an array by condition. find() returns the first element that meets the condition, findIndex() returns the position of that element. some() checks if at least one element meets the condition, while every() checks if all elements meet it."
        },
        {
          type: "code",
          language: "javascript",
          content: "const users = [\n  { id: 1, name: 'Luan' },\n  { id: 2, name: 'Nam' },\n  { id: 3, name: 'Hung' }\n];\n\n// find - find by condition\nconst user = users.find(u => u.id === 2);\nconsole.log(user); // { id: 2, name: 'Nam' }\n\n// findIndex - find position\nconst index = users.findIndex(u => u.name === 'Hung');\nconsole.log(index); // 2\n\n// some - at least one\nconst hasNam = users.some(u => u.name === 'Nam');\nconsole.log(hasNam); // true\n\n// every - all\nconst allHaveId = users.every(u => u.id > 0);\nconsole.log(allHaveId); // true"
        },
        {
          type: "subheading",
          content: "Other Useful Methods"
        },
        {
          type: "text",
          content: "Other useful methods include: includes() to check element existence, slice() to cut an array without changing the original, splice() to add/remove elements and modify the original array, and sort() to sort an array. Note that splice() and sort() will modify the original array, while other methods usually return a new array."
        },
        {
          type: "code",
          language: "javascript",
          content: "// includes - check existence\nconst arr = [1, 2, 3];\nconsole.log(arr.includes(2)); // true\n\n// slice - cut array (doesn't change original)\nconst sliced = arr.slice(1, 3);\nconsole.log(sliced); // [2, 3]\n\n// splice - changes original array\nconst fruits = ['apple', 'banana', 'orange'];\nfruits.splice(1, 1, 'grape'); // remove 1 element at position 1, add 'grape'\nconsole.log(fruits); // ['apple', 'grape', 'orange']\n\n// sort - sort\nconst unsorted = [3, 1, 4, 2];\nunsorted.sort((a, b) => a - b);\nconsole.log(unsorted); // [1, 2, 3, 4]"
        },
        {
          type: "heading",
          content: "When to Use What?"
        },
        {
          type: "list",
          content: "",
          items: [
            "Map: When you need non-string keys, or need to maintain order",
            "Set: When you need unique values, or fast existence checks",
            "Array: When you need ordered list, access by index"
          ]
        },
        {
          type: "code",
          language: "javascript",
          content: "// Practical examples\n\n// 1. Map for cache\nconst cache = new Map();\nfunction getUser(id) {\n  if (cache.has(id)) {\n    return cache.get(id);\n  }\n  // Fetch from API\n  const user = { id, name: 'User' + id };\n  cache.set(id, user);\n  return user;\n}\n\n// 2. Set for unique tags\nconst articleTags = ['js', 'html', 'js', 'css', 'react'];\nconst uniqueTags = [...new Set(articleTags)];\nconsole.log(uniqueTags); // ['js', 'html', 'css', 'react']\n\n// 3. Array methods for list processing\nconst products = [\n  { name: 'Laptop', price: 1000 },\n  { name: 'Mouse', price: 50 },\n  { name: 'Keyboard', price: 80 }\n];\n\n// Filter products > 100\nconst expensive = products.filter(p => p.price > 100);\nconsole.log(expensive); // [{ name: 'Laptop', price: 1000 }]\n\n// Total price\nconst total = products.reduce((sum, p) => sum + p.price, 0);\nconsole.log(total); // 1130"
        }
      ]
    },
    {
      id: 10,
      title: "Self-learning Programming Tips for IT Students",
      excerpt: "Sharing effective self-learning methods, reference materials, and advice for senior students.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      date: "Dec 01, 2025",
      category: "Chia sẻ",
      content: [
        { type: "heading", content: "1. Advice from Personal Experience" },
        { type: "text", content: "After nearly 4 years of studying and working with code, I want to share some experiences to help you self-learn programming more effectively." },
        {
          type: "list",
          content: "Most important things:",
          items: [
            "Practice daily, even if just 30 minutes",
            "Do real projects instead of just learning theory",
            "Read others' code on GitHub",
            "Join communities and Q&A",
            "Don't be afraid to start over when needed"
          ]
        },
        { type: "heading", content: "2. Learning Resources" },
        {
          type: "list",
          content: "Resources I frequently use:",
          items: [
            "Official documentation (Java Docs, MDN)",
            "YouTube: Traversy Media, Programming with Mosh",
            "Courses: Udemy, Cisco",
            "Practice: LeetCode, HackerRank",
            "Community: Stack Overflow, Reddit"
          ]
        },
        { type: "heading", content: "3. My Learning Path" },
        { type: "text", content: "Started with basic C to understand programming fundamentals. Then learned Java to master OOP. Next was JavaScript for web development. Finally, frameworks like Spring Boot, React." },
        { type: "heading", content: "4. Mistakes to Avoid" },
        {
          type: "list",
          content: "",
          items: [
            "Learning too many languages at once",
            "Only watching tutorials without coding",
            "Being afraid to try for fear of mistakes",
            "Copy-pasting code without understanding",
            "Skipping fundamental knowledge to learn frameworks"
          ]
        }
      ]
    },
    {
      id: 11,
      title: "TCP vs UDP – Quick Guide to Popular Data Transfer Protocols",
      excerpt: "Understanding the differences between TCP and UDP protocols, when to use each, and practical applications in network programming.",
      image: "https://image.vietnix.vn/wp-content/uploads/2022/07/UDP-va-TCP.webp",
      date: "Dec 15, 2025",
      category: "Java",
      content: [
        {
          type: "heading",
          content: "1. Introduction"
        },
        {
          type: "text",
          content: "When you send a message on Zalo or watch a YouTube video, data doesn't magically appear – it's transmitted through network protocols, with TCP and UDP being the most popular."
        },
        {
          type: "subheading",
          content: "What are TCP and UDP?"
        },
        {
          type: "text",
          content: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are two main protocols at the Transport layer (Layer 4) in the OSI model and TCP/IP model. They are responsible for transferring data between applications on the network."
        },
        {
          type: "subheading",
          content: "Why do we need multiple data transfer protocols?"
        },
        {
          type: "text",
          content: "Different applications have different requirements: some need accuracy (banking, email), others need speed (gaming, video calls). Therefore, having multiple protocols allows us to choose the most suitable one for each situation."
        },
        {
          type: "heading",
          content: "2. What is TCP Protocol?"
        },
        {
          type: "text",
          content: "TCP is a connection-oriented protocol, ensuring data is delivered completely and in the correct order."
        },
        {
          type: "subheading",
          content: "TCP Characteristics:"
        },
        {
          type: "list",
          content: "Key features of TCP:",
          items: [
            "Connection-oriented (3-way handshake)",
            "Guarantees complete data delivery in correct order",
            "Has error control and congestion control",
            "Slower than UDP due to checking mechanisms",
            "Uses acknowledgment (ACK) to confirm data receipt"
          ]
        },
        {
          type: "subheading",
          content: "TCP 3-Way Handshake:"
        },
        {
          type: "code",
          language: "text",
          content: "Step 1: Client → SYN (Synchronize)\nStep 2: Server → SYN-ACK (Synchronize-Acknowledge)\nStep 3: Client → ACK (Acknowledge)\n\n→ Connection established, can start sending data"
        },
        {
          type: "subheading",
          content: "Real-world Examples:"
        },
        {
          type: "list",
          content: "TCP is used in:",
          items: [
            "Web browsing (HTTP/HTTPS)",
            "Email (SMTP, IMAP, POP3)",
            "File transfer (FTP)",
            "Banking and payment transactions",
            "SSH remote connections"
          ]
        },
        {
          type: "heading",
          content: "3. What is UDP Protocol?"
        },
        {
          type: "text",
          content: "UDP is a connectionless protocol, not guaranteeing data delivery but very fast and low latency."
        },
        {
          type: "subheading",
          content: "UDP Characteristics:"
        },
        {
          type: "list",
          content: "Key features of UDP:",
          items: [
            "No connection establishment needed",
            "Does not guarantee complete data delivery",
            "Fast, low latency",
            "No error control",
            "Simpler and lighter than TCP"
          ]
        },
        {
          type: "text",
          content: "Easy analogy: UDP is like talking face-to-face – if you don't hear clearly, you skip it without asking to repeat."
        },
        {
          type: "subheading",
          content: "Real-world Examples:"
        },
        {
          type: "list",
          content: "UDP is used in:",
          items: [
            "Video calls (Zoom, Teams)",
            "Online gaming",
            "Livestreaming",
            "DNS queries",
            "VoIP (Voice over IP)"
          ]
        },
        {
          type: "heading",
          content: "4. TCP vs UDP Comparison Table"
        },
        {
          type: "table",
          content: "Key differences between TCP and UDP",
          columns: ["Criteria", "TCP", "UDP"],
          rows: [
            ["Connection", "Connection-oriented", "Connectionless"],
            ["Data Guarantee", "Guarantees delivery", "No guarantee"],
            ["Speed", "Slower", "Faster"],
            ["Error Control", "Yes", "No"],
            ["Order Guarantee", "Yes", "No"],
            ["Overhead", "High", "Low"],
            ["Use Cases", "Web, Email, File Transfer", "Gaming, Video, Streaming"]
          ]
        },
        {
          type: "heading",
          content: "5. When to Use TCP? When to Use UDP?"
        },
        {
          type: "subheading",
          content: "Use TCP when:"
        },
        {
          type: "list",
          content: "",
          items: [
            "Need accurate data",
            "Cannot afford packet loss",
            "Order of data matters",
            "Examples: login, payment, file download"
          ]
        },
        {
          type: "subheading",
          content: "Use UDP when:"
        },
        {
          type: "list",
          content: "",
          items: [
            "Need speed",
            "Can tolerate some data loss",
            "Real-time communication required",
            "Examples: video calls, gaming, livestreaming"
          ]
        },
        {
          type: "heading",
          content: "6. Simple Code Examples"
        },
        {
          type: "subheading",
          content: "1. TCP Server Example (Java)"
        },
        {
          type: "code",
          language: "java",
          content: "import java.io.*;\nimport java.net.*;\n\npublic class TCPServer {\n    public static void main(String[] args) {\n        try {\n            // Create server socket on port 8080\n            ServerSocket serverSocket = new ServerSocket(8080);\n            System.out.println(\"TCP Server started on port 8080\");\n            \n            // Wait for client connection\n            Socket clientSocket = serverSocket.accept();\n            System.out.println(\"Client connected!\");\n            \n            // Read data from client\n            BufferedReader in = new BufferedReader(\n                new InputStreamReader(clientSocket.getInputStream())\n            );\n            \n            // Send data to client\n            PrintWriter out = new PrintWriter(\n                clientSocket.getOutputStream(), true\n            );\n            \n            String message = in.readLine();\n            System.out.println(\"Received: \" + message);\n            \n            // Reply to client\n            out.println(\"Server received: \" + message);\n            \n            // Close connections\n            clientSocket.close();\n            serverSocket.close();\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n}"
        },
        {
          type: "subheading",
          content: "2. UDP Server Example (Java)"
        },
        {
          type: "code",
          language: "java",
          content: "import java.net.*;\n\npublic class UDPServer {\n    public static void main(String[] args) {\n        try {\n            // Create UDP socket on port 9090\n            DatagramSocket socket = new DatagramSocket(9090);\n            System.out.println(\"UDP Server started on port 9090\");\n            \n            byte[] buffer = new byte[1024];\n            \n            // Receive data\n            DatagramPacket receivePacket = new DatagramPacket(buffer, buffer.length);\n            socket.receive(receivePacket);\n            \n            String message = new String(receivePacket.getData(), 0, receivePacket.getLength());\n            System.out.println(\"Received: \" + message);\n            \n            // Send reply\n            String reply = \"Server received: \" + message;\n            byte[] sendData = reply.getBytes();\n            \n            DatagramPacket sendPacket = new DatagramPacket(\n                sendData, \n                sendData.length, \n                receivePacket.getAddress(), \n                receivePacket.getPort()\n            );\n            \n            socket.send(sendPacket);\n            socket.close();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n}"
        },
        {
          type: "heading",
          content: "Conclusion"
        },
        {
          type: "text",
          content: "Both TCP and UDP have their own strengths and use cases:"
        },
        {
          type: "list",
          content: "Summary:",
          items: [
            "TCP = accurate, safe, suitable for important data",
            "UDP = fast, flexible, suitable for real-time applications",
            "Choose the protocol based on your specific requirements",
            "In practice, many applications use both protocols simultaneously"
          ]
        },
        {
          type: "text",
          content: "Understanding TCP and UDP helps you design better network applications and choose the right protocol for each situation. This is fundamental knowledge for any software developer!"
        }
      ]
    },
    {
      id: 12,
      title: "Optimizing Network Performance with Java NIO (Non-blocking I/O)",
      excerpt:
        "Learn how to handle thousands of concurrent connections with Java NIO, Selector, and Non-blocking I/O to build high-performance servers.",
      image: "https://i.ytimg.com/vi/FRY9BjU2W5s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDU6kOPcqFngjUqGqf8f7PcJxv6ZQ",
      date: "Dec 20, 2025",
      category: "Java",
      content: [
        {
          type: "text",
          content: "In modern systems like chat servers, game servers, and realtime applications, handling thousands of concurrent connections is mandatory. Using traditional Socket (Blocking I/O), each connection typically binds to one thread, leading to excessive resource consumption. Java NIO (New I/O) was created to solve this problem with Non-blocking I/O mechanism."
        },
        {
          type: "heading",
          content: "1. Blocking I/O – Problems with Traditional Sockets"
        },
        {
          type: "text",
          content: "In traditional Java IO, each client corresponds to 1 thread. The thread is blocked when waiting for data or waiting for a connection. When the number of clients increases, the system will face many problems."
        },
        {
          type: "list",
          content: "Problems with Blocking I/O:",
          items: [
            "Each client requires a separate thread",
            "Thread is blocked when waiting for data",
            "Consumes RAM when client count increases",
            "Excessive context switching reduces performance",
            "Server easily overloaded: 5,000 clients → 5,000 threads"
          ]
        },
        {
          type: "heading",
          content: "2. What is Java NIO?"
        },
        {
          type: "text",
          content: "Java NIO (New I/O) is an API set that helps process I/O in Non-blocking and Event-driven style. Instead of 'waiting', the server will 'check which channel is ready and then process'."
        },
        {
          type: "list",
          content: "Main advantages:",
          items: [
            "Non-blocking: doesn't block threads",
            "Event-driven: only processes when events occur",
            "Few threads but handles many connections",
            "Saves system resources"
          ]
        },
        {
          type: "heading",
          content: "3. Three Core Components of Java NIO"
        },
        {
          type: "subheading",
          content: "Channel – Data Transfer Channel"
        },
        {
          type: "text",
          content: "Channel is like a 'pipeline' for bidirectional data transfer. Unlike traditional Socket, Channel can be non-blocking and works directly with Buffer."
        },
        {
          type: "list",
          content: "Common Channel types:",
          items: [
            "ServerSocketChannel: listens for connections",
            "SocketChannel: client connections",
            "DatagramChannel: UDP",
            "FileChannel: file I/O"
          ]
        },
        {
          type: "subheading",
          content: "Buffer – Data Buffer Area"
        },
        {
          type: "text",
          content: "Buffer is used to write data from Channel and read data from Buffer. Process: Channel reads → Buffer → Process → Buffer writes → Channel."
        },
        {
          type: "code",
          language: "java",
          content: "// Create buffer with size 1024 bytes\nByteBuffer buffer = ByteBuffer.allocate(1024);\n\n// Read data from channel into buffer\nchannel.read(buffer);\n\n// Switch to read mode\nbuffer.flip();\n\n// Read data from buffer\nbyte[] data = new byte[buffer.remaining()];\nbuffer.get(data);\n\n// Clear buffer for next use\nbuffer.clear();"
        },
        {
          type: "subheading",
          content: "Selector – The Heart of Non-blocking I/O"
        },
        {
          type: "text",
          content: "Selector allows 1 thread to monitor multiple Channels simultaneously. It knows which Channel is ready to accept, has data to read, or can write."
        },
        {
          type: "list",
          content: "Events (SelectionKey):",
          items: [
            "OP_ACCEPT: ready to accept new connection",
            "OP_CONNECT: connection completing",
            "OP_READ: has data to read",
            "OP_WRITE: ready to write data"
          ]
        },
        {
          type: "heading",
          content: "4. How Java NIO Handles Thousands of Connections"
        },
        {
          type: "text",
          content: "Operation model: 1 Thread → Selector → Multiple Channels (Clients). Thread is not blocked, only processes when events occur."
        },
        {
          type: "list",
          content: "Processing flow:",
          items: [
            "Client connects → OP_ACCEPT",
            "Client sends data → OP_READ",
            "Server responds → OP_WRITE",
            "Only 1 thread handles multiple clients"
          ]
        },
        {
          type: "heading",
          content: "5. Simple Example: Server Using Selector"
        },
        {
          type: "code",
          language: "java",
          content: "import java.nio.channels.*;\nimport java.nio.*;\nimport java.net.*;\nimport java.util.*;\n\npublic class NIOServer {\n    public static void main(String[] args) throws Exception {\n        // Create Selector\n        Selector selector = Selector.open();\n        \n        // Create ServerSocketChannel\n        ServerSocketChannel serverChannel = ServerSocketChannel.open();\n        serverChannel.bind(new InetSocketAddress(8080));\n        serverChannel.configureBlocking(false);\n        \n        // Register with Selector\n        serverChannel.register(selector, SelectionKey.OP_ACCEPT);\n        System.out.println(\"Server started on port 8080\");\n        \n        while (true) {\n            // Wait for events\n            selector.select();\n            \n            // Iterate events\n            Iterator<SelectionKey> keys = selector.selectedKeys().iterator();\n            \n            while (keys.hasNext()) {\n                SelectionKey key = keys.next();\n                keys.remove();\n                \n                // Handle new connections\n                if (key.isAcceptable()) {\n                    SocketChannel client = serverChannel.accept();\n                    client.configureBlocking(false);\n                    client.register(selector, SelectionKey.OP_READ);\n                    System.out.println(\"Client connected: \" + client.getRemoteAddress());\n                }\n                \n                // Handle reading data\n                if (key.isReadable()) {\n                    SocketChannel client = (SocketChannel) key.channel();\n                    ByteBuffer buffer = ByteBuffer.allocate(1024);\n                    \n                    int bytesRead = client.read(buffer);\n                    if (bytesRead == -1) {\n                        client.close();\n                    } else {\n                        buffer.flip();\n                        // Echo back to client\n                        client.write(buffer);\n                    }\n                }\n            }\n        }\n    }\n}"
        },
        {
          type: "text",
          content: "With just 1 thread, the server can efficiently handle thousands of clients simultaneously!"
        },
        {
          type: "heading",
          content: "6. Comparing Blocking I/O vs Java NIO"
        },
        {
          type: "table",
          content: "Differences between Blocking I/O and Java NIO",
          columns: ["Criteria", "Blocking I/O", "Java NIO"],
          rows: [
            ["Processing", "1 thread / 1 client", "1 thread / multiple clients"],
            ["Performance", "Low under high load", "High"],
            ["Scalability", "Poor", "Very good"],
            ["Complexity", "Easy", "More complex"],
            ["Resources", "Consumes much RAM", "Efficient"],
            ["Use Cases", "Small apps, few connections", "Large servers, many connections"]
          ]
        },
        {
          type: "heading",
          content: "7. When to Use Java NIO?"
        },
        {
          type: "subheading",
          content: "Use when:"
        },
        {
          type: "list",
          content: "",
          items: [
            "Server needs to handle many concurrent connections",
            "Realtime applications (chat, gaming, streaming)",
            "Building proxy, gateway, load balancer",
            "Microservices requiring high performance",
            "Distributed systems, event-driven architecture"
          ]
        },
        {
          type: "subheading",
          content: "Don't need when:"
        },
        {
          type: "list",
          content: "",
          items: [
            "Small applications, few connections",
            "Simple logic, no optimization needed",
            "Team lacks NIO experience",
            "Limited development time"
          ]
        },
        {
          type: "heading",
          content: "8. Java NIO in Practice"
        },
        {
          type: "text",
          content: "Many popular frameworks use Java NIO as foundation:"
        },
        {
          type: "list",
          content: "Frameworks using Java NIO:",
          items: [
            "Netty: async event-driven framework for network applications",
            "Spring WebFlux: reactive programming in Spring",
            "Vert.x: toolkit for building reactive applications",
            "Apache Kafka: high-performance message broker",
            "Elasticsearch: distributed search engine"
          ]
        },
        {
          type: "text",
          content: "Understanding Java NIO helps you grasp the fundamentals of modern backend frameworks and optimize systems better."
        },
        {
          type: "heading",
          content: "9. Conclusion"
        },
        {
          type: "list",
          content: "Summary:",
          items: [
            "Java NIO enables efficient and scalable I/O processing",
            "Selector is key to having 1 thread handle multiple connections",
            "Suitable for large systems with high load",
            "Essential knowledge for Backend Developers",
            "Java NIO = Non-blocking + Selector + Channel → High performance"
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
    { id: 1, value: "8+", label: "Completed Projects" },
    { id: 2, value: "6+", label: "Certificates" },
    { id: 3, value: "6+", label: "Technologies Used" },
  ],
};
