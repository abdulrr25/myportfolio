// lib/data.ts

// ======================
// NAVBAR LINKS
// ======================
export const links = [
  { nameEng: "Home", hash: "#home" },
  { nameEng: "About", hash: "#about" },
  { nameEng: "Projects", hash: "#projects" },
  { nameEng: "Skills", hash: "#skills" },
  { nameEng: "Experience", hash: "#experience" },
  { nameEng: "Achievements", hash: "#achievements" },
  { nameEng: "Contact", hash: "#contact" },
];

// ======================
// PROJECTS DATA
// ======================
export const projectsData = [
  {
    title: "LLM Chat – Multi-Model AI Platform",
    description:
      "Full-stack AI chat platform with multi-model inference (LLaMA 3.3, Mixtral, Gemma), real-time SSE streaming, and a RAG pipeline using FAISS for semantic search over PDFs and URLs. Includes a ReAct-pattern AI Agent with six tools: weather, web search, document retrieval, calculator, datetime, and Python REPL.",
    tags: ["FastAPI", "React", "Groq API", "LangChain", "FAISS", "Python", "SSE", "RAG"],
    imageUrl: "/llm-chat.png",
    link: "https://github.com/abdulrr25",
  },
  {
    title: "TEACHO – Decentralized Teaching Platform",
    description:
      "Decentralized online education platform with pay-per-second video streaming using Superfluid Protocol. Features on-chain continuous tuition payment flows, gig-based class purchases, Huddle video meetings, and a modular Next.js + TypeScript frontend.",
    tags: ["Next.js", "TypeScript", "Solidity", "Superfluid", "Blockchain", "WebRTC"],
    imageUrl: "/teacho.png",
    link: "https://github.com/abdulrr25",
  },
  {
    title: "LegalLama – AI Legal Research Assistant",
    description:
      "AI-powered legal research platform using RAG over structured legal datasets for accurate, context-aware query responses. Integrates OpenAI API for semantic understanding of legal contracts. Anchors AI response hashes to a Solidity smart contract for tamper-proof on-chain auditability.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "OpenAI", "RAG", "Solidity", "Chainlink"],
    imageUrl: "/legal.png",
    link: "https://github.com/abdulrr25",
  },
  {
    title: "Smart Documentation Hub",
    description:
      "Real-time collaborative document editing platform with multi-user support built during CDAC. Features simultaneous editing, live synchronization via SignalR, and conflict-free collaboration. React frontend with ASP.NET Core backend.",
    tags: ["React", "ASP.NET Core", "SignalR", "SQL Server", "Real-time"],
    imageUrl: "/smart-doc.png",
    link: "https://github.com/abdulrr25",
  },
  {
    title: "Interior Designer Website (Freelance)",
    description:
      "Production-ready client website delivered end-to-end — from requirement gathering to deployment. Mobile-optimized with scroll animations, clean visual hierarchy, and modern UI/UX practices. Live at newrangolibuilders.in.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive"],
    imageUrl: "/interior.png",
    link: "https://www.newrangolibuilders.in",
  },
];

// ======================
// SKILLS DATA (icon grid, legacy)
// ======================
export const skillsData = [
  { name: "Next.js", icon: "/nextjs.png" },
  { name: "React", icon: "/react.png" },
  { name: "Node.js", icon: "/node.png" },
  { name: "Java", icon: "/java.png" },
  { name: "ASP.NET", icon: "/dotnet.png" },
  { name: "PostgreSQL", icon: "/sql.png" },
  { name: "MongoDB", icon: "/mongo.png" },
  { name: "Solidity", icon: "/solidity.png" },
];
