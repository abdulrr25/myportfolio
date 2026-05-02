"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutTemplate,
  ServerCog,
  BrainCircuit,
  Blocks,
  Database,
  TerminalSquare,
  Wrench,
} from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-6 h-6" />,
    description: "Responsive, high-performance interfaces with pixel-perfect UI and seamless UX.",
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"],
  },
  {
    category: "Backend",
    icon: <ServerCog className="w-6 h-6" />,
    description: "Robust APIs, real-time systems, and scalable server architectures.",
    stack: ["Node.js", "FastAPI", "Java (Spring Boot)", "ASP.NET Core", "REST APIs", "SSE", "Rate Limiting"],
  },
  {
    category: "AI & LLM",
    icon: <BrainCircuit className="w-6 h-6" />,
    description: "Multi-model LLM platforms, RAG pipelines, AI agents, and semantic search.",
    stack: ["LangChain", "FAISS / ChromaDB", "Groq API", "Ollama", "RAG Pipeline", "ReAct Agents", "Embedding Models", "Prompt Engineering"],
  },
  {
    category: "Blockchain & Web3",
    icon: <Blocks className="w-6 h-6" />,
    description: "Decentralized applications, smart contracts, and on-chain payment protocols.",
    stack: ["Solidity", "Superfluid Protocol", "Chainlink CCIP", "Web3.js", "EVM", "IPFS"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    description: "Relational, document, and vector database design and query optimization.",
    stack: ["PostgreSQL", "MongoDB", "MySQL", "FAISS (Vector DB)", "ChromaDB", "LanceDB", "SQL Server"],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6" />,
    description: "Developer tooling, version control, containerization, and deployment.",
    stack: ["Git & GitHub", "Docker (basic)", "Postman", "AWS (basic)", "Uvicorn", "Linux / Ubuntu"],
  },
  {
    category: "Languages",
    icon: <TerminalSquare className="w-6 h-6" />,
    description: "Core programming languages used across the full stack.",
    stack: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "C++"],
  },
  {
    category: "Core CS",
    icon: <TerminalSquare className="w-6 h-6" />,
    description: "Computer science fundamentals sharpened over 900+ hours at CDAC Pune.",
    stack: ["Data Structures & Algorithms", "OOP Principles", "DBMS", "OS Fundamentals", "System Design"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("#skills", 0.3);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mb-32 max-w-[85rem] mx-auto scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* HEADER */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-2">
          <TerminalSquare className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
            Technical Arsenal
          </span>
        </div>
        <SectionHeading>What I Work With</SectionHeading>
        <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm text-center max-w-lg">
          Hover any card to see the full tech stack
        </p>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-7 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-xl transition-all duration-300 hover:border-[#D4AF37]/50 hover:shadow-lg min-h-[200px] overflow-hidden group cursor-default"
          >
            {/* Gold glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>

            <AnimatePresence mode="wait">
              {hoveredIndex === index ? (
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col h-full justify-center"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] mb-3">
                    {skill.category} Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="flex flex-col h-full"
                >
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block w-fit mb-5 text-slate-500 dark:text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 dark:text-white mb-2">
                    {skill.category}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
