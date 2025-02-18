import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
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

export const projectsData: ProjectInfo[] = [
  {
    title: "New Rangoli Builders Website",
    description:
      "Designed and developed a fully responsive website for an interior designing company. This was my first freelancing project, where I implemented interactive UI components using Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/image1.png",
    link: "https://www.newrangolibuilders.in",
  },
  {
    title: "Tesla Clone",
    description:
      "Recreated Tesla's official website as part of a self-learning challenge. Built from scratch using Next.js and Tailwind CSS, focusing on modern UI design and performance optimization.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    imageUrl: "/image2.png",
    link: "https://tesla-clone-flax-kappa.vercel.app/",
  },
  {
    title: "Shopify Website Clone",
    description:
      "Developed a front-end replica of a Shopify-based clothing store using React and Next.js. Implemented dynamic product displays and a sleek, user-friendly design.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Node.js"],
    imageUrl: "/image3.png",
    link: "https://clothing-website-zeta.vercel.app/",
  },
  {
    title: "Legal-Llama",
    description:
      "Built an AI-powered legal case validator using a Python RAG model. The model was trained on legal data and integrated with blockchain validation via smart contracts. Submitted for the BNB Chainlink Hackathon.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "SuperFluid", "Smart Contracts"],
    imageUrl: "/image4.png",
    link: "https://github.com/abdulrr25/legal-llama",
  },
];

// Skill Set
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Python",
  "C/C++",
  "MongoDB",
  "Express",
  "Framer Motion",
];

// Button to view more projects on GitHub
export const moreProjectsButton = {
  text: "View More on GitHub",
  link: "https://github.com/abdulrr25?tab=repositories",
};
