import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  { nameEng: "Home", hash: "#home" },
  { nameEng: "About", hash: "#about" },
  { nameEng: "Projects", hash: "#projects" },
  { nameEng: "Skills", hash: "#skills" },
  { nameEng: "Contact", hash: "#contact" },
] as const;

export const projectsData: ProjectInfo[] = [
  {
    title: "New Rangoli Builders Website",
    description:
      "Freelance project for an interior designing firm. Built using Next.js, Tailwind CSS, and Framer Motion.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    imageUrl: "/image1.png",
    link: "https://www.newrangolibuilders.in",
  },
  {
    title: "Tesla Clone",
    description:
      "A self-learning project replicating Tesla's website UI with Next.js and Tailwind CSS.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/image2.png",
    link: "https://tesla-clone-flax-kappa.vercel.app/",
  },
  {
    title: "Shopify Website Clone",
    description:
      "Built a front-end for a Shopify-like clothing store using Next.js and Tailwind CSS.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "Node.js",
      "Express",
    ],
    imageUrl: "/image3.png",
    link: "https://shopifyy-tau.vercel.app/",
  },
  {
    title: "Legal-Llama",
    description:
      "AI-powered legal case validator with blockchain verification. Built for BNB Chainlink Hackathon.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Express",
      "SuperFluid",
      "Smart Contracts",
    ],
    imageUrl: "/image4.png",
    link: "https://github.com/abdulrr25/legal-llama",
  },
  {
    title: "Teacho - An Online Teaching Platform",
    description:
      "Designed and implemented a blockchain-based pay-per-second video streaming solution for online education.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind",
      "Node.js",
      "Express",
      "SuperFluid",
      "Smart Contracts",
    ],
    imageUrl: "/image5.png",
    link: "https://github.com/abdulrr25/Major-Project",
  },
];

// Skill Set with Icons
export const skillsData = [
  // Web Technologies & Frontend
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

  // Programming Languages & Frameworks
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" }, // Using the general Spring icon
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },

  // Databases & Backend (Basic/Learned)
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js (Basic)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  // Testing & DevOps
  { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];



// Button to view more projects on GitHub
export const moreProjectsButton = {
  text: "View More on GitHub",
  link: "https://github.com/abdulrr25?tab=repositories",
};
