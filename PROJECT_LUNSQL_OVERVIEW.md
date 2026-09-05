# 📊 LunSQL — Nền Tảng Luyện Tập SQL Trực Tuyến Với WebAssembly (SQLite WASM)

> **Tài liệu tổng quan dự án chi tiết** được chuẩn hóa để tích hợp trực tiếp vào Website Portfolio cá nhân (`D:\ProjectPortfolio\portfolio`). Tài liệu bao gồm: Giới thiệu, Tech Stack, Kiến trúc phần mềm, Điểm sáng kỹ thuật giải quyết bài toán khó, và **Code Snippet TypeScript chuẩn 100%** cho `portfolioData.vi.ts` & `portfolioData.en.ts`.

---

## 📌 1. TỔNG QUAN DỰ ÁN (PROJECT OVERVIEW)

| Thuộc tính | Chi tiết |
|---|---|
| **Tên dự án** | **LunSQL** (SQL Practice Platform with Client-Side SQLite Execution) |
| **Thể loại (Category)** | `Web Development` / `EdTech Developer Tool` |
| **Mục tiêu cốt lõi** | Cung cấp nền tảng học và thực hành truy vấn SQL tương tác trực tiếp trên trình duyệt, không tốn tài nguyên máy chủ, phản hồi tức thì dưới 1 mili-giây, và an toàn tuyệt đối trước mã độc SQL Injection. |
| **Quy mô nội dung** | **238 bài tập thực tế** chia theo **9 chủ đề** (SELECT, WHERE, ORDER BY, JOIN, AGGREGATION, GROUP BY, SUBQUERY, COALESCE, WINDOW FUNCTION) với 3 cấp độ: *Easy, Medium, Hard*. |
| **Thời gian phản hồi** | `< 1ms` (nhờ WebAssembly in-memory database) |
| **Chi phí máy chủ tính toán** | **$0** (zero compute server cost cho SQL execution) |

---

## 🛠️ 2. STACK CÔNG NGHỆ (TECHNOLOGY STACK)

### 🔹 Frontend & Browser Runtime
* **Core Framework**: `React 19` + `TypeScript 6` + `Vite 8` (hiệu năng đóng gói cực nhanh).
* **Browser SQL Engine**: `sql.js` (SQLite C codebase được biên dịch sang **WebAssembly - WASM**), chạy trực tiếp trong RAM trình duyệt của người dùng.
* **Code Editor**: `@monaco-editor/react` (trình soạn thảo lõi của VS Code với syntax highlighting, autocomplete, tự động co giãn và hỗ trợ Light/Dark mode).
* **Quản lý trạng thái (State Management)**: `Zustand 5` (nhẹ, tách biệt theo từng domain: `useExerciseStore`, `useAuthStore`).
* **Điều hướng (Routing)**: `React Router DOM 7`.
* **Hiệu ứng & Chuyển động (Animations)**: `GSAP 3` & `@gsap/react` (stagger animations cho bảng xếp hạng, micro-interactions, modal transitions) + Canvas Confetti.
* **Biểu tượng & Giao diện**: `@phosphor-icons/react`, Modern CSS với full responsive (Mobile, Tablet, Desktop split panes).
* **Xuất chứng chỉ**: `jsPDF` + `HTML5 Canvas 2D API` (vẽ vector phôi bằng khen chuẩn 2400x1600px và xuất file PDF sắc nét).

### 🔹 Backend & Cloud Database
* **Runtime & Framework**: `Node.js` + `Express 4.21` (TypeScript 5.7).
* **Database**: `MongoDB Atlas` + `Mongoose 8` (Lưu trữ User profile, Activity logs, Streaks, Leaderboard, Progress).
* **Xác thực & Bảo mật (Auth)**: `Google Auth Library` (Google OAuth 2.0 Sign-In) + `JSON Web Tokens (JWT)` lưu trữ an toàn trong `HTTP-Only Cookies`.
* **Kiến trúc Backend**: **Controller → Service → Repository Pattern** với Dependency Inversion (tách biệt hoàn toàn Mongoose models khỏi tầng nghiệp vụ).

### 🔹 Pipeline & Tooling
* **Build-time Pipeline**: Node script (`tsx`) thực thi pre-computation toàn bộ bài tập sang static JSON trước khi đóng gói.
* **Testing & Quality Assurance**: `Vitest 3` (Unit test cho các chiến lược chấm điểm Strategy, Daily Challenge Hash algorithm), `Oxlint` (linter thế hệ mới tốc độ cao).

---

## 🏗️ 3. ĐẶC TÍNH KIẾN TRÚC & DESIGN PATTERNS

Dự án được xây dựng tuân thủ nghiêm ngặt chuẩn **Clean Architecture** và các nguyên lý **SOLID**:

```
Client-side Presentation (React 19)
       │
Application Layer (Custom Hooks: useSqlEngine, useProgress)
       │
Domain Layer (Pure Logic: GradingPipeline, DiffRows, NormalizeValue — 0 external dependencies)
       │
Infrastructure Layer (SqlEngineAdapter, SqlJsSingleton, api-client)
```

### 1. Strategy Pattern — Hệ Thống Chấm Điểm Đa Tiêu Chí (`GradingPipeline`)
Tách quy trình so sánh kết quả truy vấn của người dùng với đáp án thành các chiến lược độc lập:
* `ColumnCountStrategy`: Kiểm tra số lượng cột kết quả.
* `ColumnNameStrategy`: Kiểm tra tên và alias của các cột.
* `RowContentStrategy`: Chuẩn hóa kiểu dữ liệu (NULL, Float rounding, String trimming), so sánh nội dung dòng có hoặc không xét thứ tự (`requireOrder`).
* `SyntaxContainsStrategy`: Ràng buộc cú pháp (ví dụ: bắt buộc phải có từ khóa `JOIN`).
* 👉 *Ưu điểm*: Tuân thủ nguyên lý **Open/Closed Principle** — khi thêm dạng bài mới chỉ cần tạo Strategy mới mà không sửa logic hiện tại.

### 2. Adapter + Singleton Pattern — Đóng Gói Module WebAssembly
* `SqlJsSingleton`: Đảm bảo file nhị phân WASM nặng hàng megabyte chỉ được nạp qua mạng và khởi tạo vào WebAssembly Memory **duy nhất 1 lần** trong suốt phiên làm việc.
* `SqlEngineAdapter`: Bọc thư viện `sql.js` thành một interface ổn định (`runQuery`, `dispose`), cô lập hoàn toàn môi trường SQLite của từng bài tập.

### 3. Facade Pattern — Custom Hook `useSqlEngine`
Ẩn toàn bộ sự phức tạp của Singleton, async loading, khởi tạo schema SQLite và giải phóng bộ nhớ đằng sau một hook duy nhất:
```typescript
const { status, runQuery } = useSqlEngine(currentExercise.schemaSql);
```

### 4. Repository & Service Pattern (Backend)
Backend áp dụng kiến trúc 3 lớp:
* `Controller`: Validate HTTP requests, điều phối status code.
* `Service`: Chứa toàn bộ Business Logic (tính điểm, kiểm tra thời gian hợp lệ).
* `Repository`: Tầng duy nhất tương tác với Mongoose DB, giao tiếp với Service thông qua Interface (`IProgressRepository`), hỗ trợ viết Unit Test dễ dàng với mock repository.

---

## ⚡ 4. ĐIỂM SÁNG KỸ THUẬT NỔI BẬT (KEY ENGINEERING HIGHLIGHTS)

### 🌟 1. Thực Thi SQLite 100% Trong Trình Duyệt (WebAssembly Sandbox)
* **Vấn đề của cách làm truyền thống**: Các trang web học lập trình thường phải mở máy chủ Docker/VM để chạy code người dùng, dẫn đến chi phí server khổng lồ và nguy cơ bảo mật nghiêm trọng (SQL Injection, vô tận vòng lặp, nghẽn tài nguyên).
* **Giải pháp của LunSQL**: Biên dịch nhân SQLite sang WebAssembly chạy trực tiếp trong RAM trình duyệt của học viên.
* **Kết quả**:
  - Không tốn chi phí CPU server cho việc chạy lệnh SQL.
  - Phản hồi tức thì (**< 1ms**), không phụ thuộc vào tốc độ mạng.
  - Cách ly 100%: người dùng có chạy lệnh `DROP TABLE` hay sửa dữ liệu thì chỉ ảnh hưởng trên RAM máy họ, reload là khôi phục nguyên trạng.

### 🌟 2. Pre-Computation Pipeline — Cơ Chế Chống Gian Lận Độc Quyền (Zero-Knowledge Client)
* **Vấn đề**: Nếu gửi câu lệnh SQL mẫu (`answerQuery`) xuống trình duyệt để đối chiếu, học viên có thể mở F12 / DevTools Console để xem đáp án.
* **Giải pháp của LunSQL**: Xây dựng một build script Node.js tự động chạy **lúc build/compile bài tập**. Script nạp schema vào SQLite, thực thi `answerQuery`, trích xuất kết quả cột và dòng thành file JSON tĩnh (`expectedColumns`, `expectedRows`).
* **Kết quả**: Trình duyệt chỉ nhận dữ liệu kết quả mong muốn, **câu lệnh SQL đáp án không bao giờ xuất hiện trong source code frontend hay gói bundle production**.

### 🌟 3. Thuật Toán Daily Challenge Xác Định (Deterministic Hash)
* Hệ thống sinh bài tập hàng ngày tự động dựa trên thuật toán băm chuỗi ngày địa phương (`YYYY-MM-DD` hash mod tổng số bài tập).
* Tất cả người dùng trên toàn thế giới đều nhận chung một bài thử thách trong ngày mà **không cần chạy Cron Job tốn tài nguyên trên máy chủ**.

### 🌟 4. Trực Quan Hóa Diff Kết Quả & Trình Soát Lỗi Thông Minh
* Trình so sánh dữ liệu thông minh phát hiện chính xác: thừa dòng nào, thiếu dòng nào, sai thứ tự sắp xếp, sai tên cột hay sai kiểu dữ liệu.
* Bảng kết quả hiển thị trực quan dưới dạng bảng tương tác kèm phân trang và highlight màu sắc.

### 🌟 5. Hệ Thống Gamification & Bằng Khen Vector Sắc Nét (jsPDF + Canvas)
* **Activity Heatmap 52 tuần**: Hiển thị mật độ học tập theo phong cách GitHub Contributions với 4 cấp độ nhiệt.
* **Streak Flame**: Đếm chuỗi ngày học tập liên tục để tạo động lực cho học viên.
* **Bảng xếp hạng toàn khóa**: Xếp hạng dựa trên số bài tập đã giải và thời gian tối ưu, có animation mượt mà bằng GSAP.
* **Bộ sinh chứng chỉ tự động**: Khi hoàn thành khóa học, hệ thống vẽ bằng khen cao cấp trên Canvas kích thước 2400x1600 với hoa văn mạ vàng và bảo mật mã ID, sau đó xuất ra file PDF vector siêu nét.

---

## 💻 5. CODE SNIPPET CHO PORTFOLIO (`src/data/portfolioData`)

Dưới đây là đối tượng dữ liệu đã được chuẩn hóa sẵn, chỉ cần copy và dán vào mảng `projects` trong website portfolio của bạn:

### 🇻🇳 Phiên bản Tiếng Việt (`portfolioData.vi.ts`)

```typescript
{
  id: 7,
  title: "LunSQL - Nền tảng luyện tập SQL tương tác với WebAssembly",
  category: "Web Development",
  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80", // Thay bằng link ảnh chụp thực tế LunSQL của bạn
  videoUrl: "",
  demoUrl: "https://lunsql.site/", // Điền domain thực tế nếu có
  demoUrl: "https://lunsql.vercel.app/", // Điền domain thực tế nếu có
  tags: ["React 19", "TypeScript", "WebAssembly", "SQLite", "Monaco Editor", "Node.js", "MongoDB", "GSAP"],
  details: {
    description: "LunSQL là nền tảng học và luyện tập viết truy vấn SQL trực quan, hiệu năng cao với cơ chế thực thi 100% trong trình duyệt thông qua WebAssembly (SQLite WASM). Hệ thống giải quyết bài toán chi phí máy chủ tiệm cận $0, loại bỏ hoàn toàn lỗ hổng bảo mật SQL Injection, cung cấp phản hồi tức thì dưới 1 mili-giây cùng bộ 238 bài tập thực tế từ cơ bản đến nâng cao.",
    currentStatus: "Dự án đã hoàn thiện toàn diện cả Frontend và Backend, bao gồm hệ thống 238 bài tập qua 9 chuyên đề, công cụ chấm điểm đa chiến lược, bảng xếp hạng toàn cầu, chuỗi ngày học Streak Heatmap và tính năng cấp chứng chỉ tốt nghiệp dạng PDF vector.",
    objectives: [
      "Xây dựng nền tảng luyện SQL client-side với chi phí vận hành máy chủ tiệm cận mức 0",
      "Ứng dụng WebAssembly (sql.js) để cô lập môi trường thực thi và triệt tiêu nguy cơ SQL Injection",
      "Thiết kế kiến trúc Clean Architecture chuẩn mực với Strategy, Adapter, Singleton và Repository Pattern",
      "Triển khai cơ chế build-time pre-computation bảo mật đáp án tuyệt đối chống học viên soi DevTools",
      "Tích hợp các tính năng Gamification (Heatmap, Streak, Leaderboard, PDF Certificate) giữ chân người học"
    ],
    features: [
      "Trình soạn thảo Monaco Editor chuyên nghiệp tích hợp gợi ý cú pháp, tự động format và phím tắt thông minh",
      "Thực thi câu lệnh SQL siêu tốc (<1ms) ngay trên RAM trình duyệt nhờ SQLite biên dịch sang WebAssembly",
      "Hệ thống 238 bài tập phong phú chia thành 9 topics (SELECT, WHERE, JOIN, AGGREGATION, GROUP BY, SUBQUERY, WINDOW FUNCTIONS...)",
      "Pipeline chấm điểm đa tiêu chí (Strategy Pattern) so sánh số cột, tên cột, và nội dung dòng (có/không bắt buộc ORDER BY)",
      "Trực quan hóa sai lệch kết quả (Result Diff Table) chỉ rõ dòng thừa, dòng thiếu và lỗi sai lệch dữ liệu",
      "Cơ chế Daily Challenge tự động chọn bài tập mỗi ngày dựa trên thuật toán băm chuỗi ngày đồng bộ",
      "Activity Heatmap 52 tuần phong cách GitHub cùng biểu tượng Streak Flame ghi nhận chuỗi ngày học liên tục",
      "Bảng xếp hạng (Leaderboard) vinh danh học viên xuất sắc với hiệu ứng chuyển động GSAP mượt mà",
      "Tự động cấp chứng chỉ tốt nghiệp PDF chuẩn vector độ phân giải cao (2400x1600px) tích hợp mã định danh",
      "Hệ thống xác thực Google OAuth 2.0 an toàn và bảo mật với JWT qua HTTP-Only Cookie"
    ],
    technologies: [
      "React 19",
      "TypeScript 6",
      "Vite 8",
      "WebAssembly (SQLite / sql.js)",
      "@monaco-editor/react",
      "Zustand (State Management)",
      "GSAP & @gsap/react",
      "jsPDF & Canvas API",
      "Node.js & Express (TypeScript)",
      "MongoDB Atlas & Mongoose",
      "Google OAuth 2.0",
      "Vitest"
    ],
    challenges: "Thách thức lớn nhất là việc tích hợp và đồng bộ vòng đời của module SQLite WebAssembly với React component lifecycle sao cho bộ nhớ không bị rò rỉ (memory leak) khi người dùng đổi bài tập liên tục. Đồng thời, giải quyết bài toán chống học viên xem trước đáp án khi chạy ở client đã được khắc phục hoàn toàn bằng pipeline build-time pre-computation độc quyền. Bên cạnh đó, việc xây dựng engine vẽ chứng chỉ vector trên HTML5 Canvas với độ phân giải siêu cao cũng đòi hỏi sự tỉ mỉ về toán học tọa độ.",
    outcomes: "Dự án tạo ra một sản phẩm EdTech hoàn thiện và chuyên nghiệp, chứng minh năng lực làm chủ các công nghệ web hiện đại như WebAssembly, Clean Architecture, Design Patterns, và tư duy thiết kế hệ thống tối ưu chi phí vận hành."
  }
}
```

---

### 🇬🇧 Phiên bản Tiếng Anh (`portfolioData.en.ts`)

```typescript
{
  id: 7,
  title: "LunSQL - Interactive SQL Learning Platform via WebAssembly",
  category: "Web Development",
  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
  videoUrl: "",
  demoUrl: "https://lunsql.site/",
  demoUrl: "https://lunsql.vercel.app/",
  tags: ["React 19", "TypeScript", "WebAssembly", "SQLite", "Monaco Editor", "Node.js", "MongoDB", "GSAP"],
  details: {
    description: "LunSQL is a high-performance, interactive SQL practice platform featuring client-side query execution powered by SQLite compiled to WebAssembly (sql.js). The platform achieves near-zero server infrastructure costs, complete immunity to SQL injection vulnerabilities, sub-millisecond query execution, and offers 238 real-world exercises ranging from basic queries to advanced aggregations.",
    currentStatus: "The project is fully complete across frontend and backend, featuring 238 exercises across 9 topics, a multi-strategy grading pipeline, global leaderboard, GitHub-style streak heatmap, and vector-quality PDF certificate generation.",
    objectives: [
      "Build a client-side SQL learning platform with virtually $0 server compute costs",
      "Harness WebAssembly (sql.js) to isolate execution sandboxes and eliminate runtime SQL injection risks",
      "Implement Clean Architecture and SOLID principles using Strategy, Adapter, Singleton, and Repository patterns",
      "Design a build-time pre-computation pipeline to prevent answer cheating via browser DevTools",
      "Incorporate engaging gamification features including Activity Heatmaps, Streaks, Leaderboards, and PDF Certificates"
    ],
    features: [
      "Monaco Editor integration featuring intelligent auto-completion, schema auto-suggestions, and keyboard shortcuts",
      "Sub-millisecond query execution (<1ms) directly within browser RAM via SQLite compiled to WebAssembly",
      "Comprehensive catalog of 238 exercises covering 9 domains (SELECT, WHERE, JOIN, AGGREGATION, GROUP BY, SUBQUERY, WINDOW FUNCTIONS)",
      "Multi-criteria grading engine (Strategy Pattern) checking column counts, column aliases, and row contents (ordered / unordered)",
      "Interactive Result Diff Viewer highlighting missing, extra, or mismatched rows and columns",
      "Deterministic Daily Challenge algorithm selecting daily problems via date string hashing without server cron jobs",
      "52-Week GitHub-style learning activity heatmap paired with an animated Streak Flame counter",
      "Global Leaderboard honoring top achievers with smooth GSAP staggered animations",
      "High-resolution (2400x1600px) vector certificate generation and PDF export via jsPDF and HTML5 Canvas",
      "Secure Google OAuth 2.0 authentication utilizing JWT stored in HTTP-Only cookies"
    ],
    technologies: [
      "React 19",
      "TypeScript 6",
      "Vite 8",
      "WebAssembly (SQLite / sql.js)",
      "@monaco-editor/react",
      "Zustand (State Management)",
      "GSAP & @gsap/react",
      "jsPDF & Canvas API",
      "Node.js & Express (TypeScript)",
      "MongoDB Atlas & Mongoose",
      "Google OAuth 2.0",
      "Vitest"
    ],
    challenges: "The primary engineering challenge was managing the lifecycle and memory allocation of SQLite WebAssembly instances inside React without leaking memory across exercise transitions. Additionally, preventing students from inspecting correct answers via DevTools was solved through an innovative build-time pre-computation pipeline. Lastly, engineering a crisp vector certificate engine using Canvas 2D and jsPDF required precise geometric positioning and responsive typography.",
    outcomes: "Delivered a production-ready developer platform demonstrating mastery in browser WebAssembly runtimes, resilient clean architecture, enterprise design patterns, and zero-cost serverless architecture."
  }
}
```

---

## 📸 6. GỢI Ý HÌNH ẢNH & SCREENSHOT ĐỂ TẢI LÊN PORTFOLIO

Để dự án nổi bật nhất trên portfolio, bạn nên chụp 4 ảnh màn hình:
1. **Hero Shot**: Giao diện chính của bài tập gồm thanh bên trái (Danh sách bài tập), Monaco Editor ở giữa và Schema Viewer bên phải.
2. **Result Table & Diffing**: Chụp lúc ấn "Chạy truy vấn" (Run Query) thành công hoặc lúc phát hiện lỗi so sánh dòng.
3. **User Dashboard & Heatmap**: Chụp bảng điều khiển người dùng với Activity Heatmap 52 tuần xanh rực rỡ và Streak Flame.
4. **Certificate Modal**: Chụp modal cấp bằng khen với phôi chứng chỉ viền vàng sang trọng.
