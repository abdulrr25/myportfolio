"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ArrowRight, Code2 } from "lucide-react";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <section
      ref={ref}
      id="projects"
      className="scroll-mt-28 mb-32 px-4 sm:px-8 max-w-[85rem] mx-auto"
    >
      {/* HEADER SECTION (Architectural Alignment) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 border-b border-slate-200 dark:border-slate-800 pb-8"
      >
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-2">
            <Code2 className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
              Case Studies
            </span>
          </div>
          <SectionHeading>Selected Work</SectionHeading>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl font-sans leading-relaxed">
          Real-world architectures I’ve engineered—merging high-performance backend systems with elegant, user-centric interfaces.
        </p>
      </motion.div>

      {/* PROJECT GALLERY */}
      {/* Using gap-24 to give massive breathing room to each case study */}
      <div className="flex flex-col gap-24 lg:gap-32 w-full">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>

      {/* GITHUB ARCHIVE CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-32 flex flex-col items-center justify-center border-t border-slate-200 dark:border-slate-800 pt-16"
      >
        <span className="font-serif text-2xl text-slate-900 dark:text-white mb-6">
          Looking for more code?
        </span>
        <a
          href="https://github.com/abdulrr25"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore more projects on GitHub"
          className="group bg-slate-900 text-white px-8 py-4 text-lg rounded-none border border-slate-900 flex items-center gap-3 hover:bg-transparent hover:text-slate-900 transition-all dark:bg-white dark:text-slate-900 dark:border-white dark:hover:bg-transparent dark:hover:text-white"
        >
          <FaGithub className="text-xl" />
          <span>Explore The GitHub Archive</span>
          <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}