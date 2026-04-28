"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutTemplate, ServerCog, BrainCircuit, Blocks, Database, TerminalSquare } from "lucide-react";

const skillsData = [
  {
    category: "Frontend",
    icon: <LayoutTemplate className="w-6 h-6" />,
    description: "Responsive, high-performance interfaces with seamless UX.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <ServerCog className="w-6 h-6" />,
    description: "Robust APIs, real-time systems, and scalable architectures.",
    stack: ["Node.js", "Express", "Java (Spring Boot)", "ASP.NET Core"],
  },
  {
    category: "AI Systems",
    icon: <BrainCircuit className="w-6 h-6" />,
    description: "RAG, semantic search, and prompt engineering applications.",
    stack: ["OpenAI APIs", "Vector Databases", "LangChain", "Python"],
  },
  {
    category: "Blockchain",
    icon: <Blocks className="w-6 h-6" />,
    description: "Decentralized applications and smart contract integrations.",
    stack: ["Solidity", "Chainlink", "Solana", "Superfluid", "Web3.js"],
  },
  {
    category: "Databases",
    icon: <Database className="w-6 h-6" />,
    description: "Relational/NoSQL schema design and query optimization.",
    stack: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM", "Redis"],
  },
  {
    category: "Core Engineering",
    icon: <TerminalSquare className="w-6 h-6" />,
    description: "Foundation applied during 900hr CDAC training.",
    stack: ["Data Structures", "Algorithms", "Operating Systems", "OOP"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("#skills", 0.5);
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
      {/* HEADER SECTION */}
      <div className="flex flex-col items-center mb-16">
        <div className="flex items-center gap-2 mb-2">
          <TerminalSquare className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
            Technical Arsenal
          </span>
        </div>
        <SectionHeading>What I Work With</SectionHeading>
      </div>

      {/* SKILLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 rounded-xl transition-all duration-300 hover:border-[#D4AF37]/50 h-[220px] overflow-hidden group cursor-default"
          >
            {/* Background Accent on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <AnimatePresence mode="wait">
              {hoveredIndex === index ? (
                // HOVER STATE: Show specific tech stack
                <motion.div
                  key="stack"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-center"
                >
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-4">
                    {skill.category} Stack
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skill.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // DEFAULT STATE: Show Icon, Category, and Description
                <motion.div
                  key="info"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block w-fit mb-6 text-slate-600 dark:text-slate-400 group-hover:text-[#D4AF37] transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white mb-2">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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