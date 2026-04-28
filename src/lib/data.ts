// lib/data.ts

// ======================
// NAVBAR LINKS
// ======================
export const links = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

// ======================
// PROJECTS DATA
// ======================
export const projectsData = [
  {
    title: "TEACHO – Blockchain Learning Platform",
    description:
      "Built a decentralized online learning platform with pay-per-second video streaming using Superfluid. Designed a full-stack system enabling real-time payments, teacher-student marketplace, and seamless video interaction.",
    tags: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Superfluid",
      "WebRTC",
      "Blockchain",
    ],
    imageUrl: "/teacho.png",
    link: "https://github.com/Teacho",
  },

  // {
  //   title: "Smart Documentation Hub",
  //   description:
  //     "Engineered a real-time collaborative document editor supporting multi-user editing with instant synchronization. Built backend using ASP.NET Core and SignalR to handle concurrent updates and ensure conflict-free collaboration.",
  //   tags: [
  //     "React",
  //     "ASP.NET Core",
  //     "SignalR",
  //     "SQL Server",
  //     "Real-time Systems",
  //   ],
  //   imageUrl: "/projects/smart-doc.png",
  //   link: "https://github.com/abdulrr25",
  // },

  {
    title: "LegalLama – AI Legal Assistant",
    description:
      "Developed a full-stack AI platform using Retrieval-Augmented Generation (RAG) to generate legal responses. Integrated semantic search over legal datasets and stored response hashes on blockchain for data integrity.",
    tags: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "OpenAI",
      "RAG",
      "Blockchain",
    ],
    imageUrl: "/legal.png",
    link: "https://github.com/abdulrr25",
  },

  {
    title: "Interior Designer Website (Freelance)",
    description:
      "Delivered a production-ready website for a real client, focusing on performance, modern UI, and smooth animations. Handled end-to-end development from requirement gathering to deployment.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],
    imageUrl: "/interior.png",
    link: "https://www.newrangolibuilders.in",
  },

  {
    title: "Shopify Clone",
    description:
      "Recreated Shopify-style UI with responsive layouts and dynamic components. Focused on frontend architecture, reusable components, and user experience.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    imageUrl: "/shopify.png",
    link: "https://github.com/abdulrr25",
  },
];

// ======================
// SKILLS DATA (for compatibility)
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