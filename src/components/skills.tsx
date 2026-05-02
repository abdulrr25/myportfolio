"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    stack: ["Node.js", "FastAPI", "Spring Boot", "ASP.NET Core", "REST APIs"],
  },
  {
    category: "AI & LLM",
    stack: ["LangChain", "FAISS", "Groq API", "Ollama", "RAG", "ReAct Agents", "Prompt Engineering"],
  },
  {
    category: "Blockchain",
    stack: ["Solidity", "Superfluid", "Chainlink CCIP", "Web3.js", "EVM"],
  },
  {
    category: "Databases & Tools",
    stack: ["PostgreSQL", "MongoDB", "MySQL", "ChromaDB", "Docker", "Git"],
  },
];

export default function Skills() {
  const { ref } = useSectionInView("#skills", 0.3);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[85rem] mx-auto scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center sm:items-start mb-12">
        <span className="text-[#D4AF37] font-sans text-xs tracking-widest uppercase font-bold mb-2">
          Technical Skills
        </span>
        <SectionHeading>What I Work With</SectionHeading>
      </div>

      <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 group"
          >
            <span className="shrink-0 w-36 text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 group-hover:text-[#D4AF37] transition-colors duration-300">
              {group.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-md hover:border-[#D4AF37]/50 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
