"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { BrainCircuit, Blocks, Server, Code, Terminal } from "lucide-react";

const architectures = [
  {
    title: "Web3 & Blockchain",
    desc: "Real-time payment streaming (Superfluid) & smart contract integration.",
    icon: <Blocks className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "AI-Powered Systems",
    desc: "RAG architectures and semantic search for legal tech applications.",
    icon: <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "Distributed Systems",
    desc: "Real-time collaborative editors utilizing WebSockets & CRDTs.",
    icon: <Server className="w-5 h-5 text-[#D4AF37]" />,
  },
];

const foundations = [
  "Java & ASP.NET Core",
  "SQL & Relational DBs",
  "DSA & Problem Solving",
  "Memory & Process Mgmt",
];

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-[80rem] mx-auto mt-32 mb-32 px-4 sm:px-8 scroll-mt-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center sm:items-start mb-16">
        <SectionHeading>About Me</SectionHeading>
        <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase mt-2 block">
          The Engineer Behind The Code
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
        
        {/* NARRATIVE SECTION (LEFT) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          
          <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            <p>
              I’m <span className="font-bold text-slate-900 dark:text-white">Abdul Rahman</span>. 
              While many focus purely on the frontend, my expertise lies in architecting the complete lifecycle of 
              <span className="font-semibold text-slate-900 dark:text-white"> real-world systems</span>—bridging scalable AI models, Web3 protocols, and resilient Web2 backends.
            </p>
          </div>

          {/* EDITORIAL BLOCKQUOTE */}
          <blockquote className="border-l-4 border-[#D4AF37] pl-8 py-3 my-4 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl">
            <p className="font-serif text-xl lg:text-2xl text-slate-800 dark:text-slate-200 italic leading-snug">
              &quot;I don’t just build user interfaces — I engineer the data pipelines, memory systems, and architectures that power them.&quot;
            </p>
          </blockquote>

          {/* SYSTEM ARCHITECTURES GRID */}
          <div className="mt-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Code className="w-4 h-4 text-slate-400" /> Core Architectures
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {architectures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 hover:shadow-xl hover:border-[#D4AF37]/50 transition-all duration-300 group"
                >
                  <div className="mb-4 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-md mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed pt-4">
            Beyond personal builds, I have delivered production-ready applications for freelance clients, managing the entire pipeline from technical requirements to deployment. Currently, I am seeking an environment where I can take ownership, ship rapidly, and scale meaningful products.
          </p>
        </div>

        {/* VISUAL & FOUNDATION SECTION (RIGHT) */}
        <div className="lg:col-span-5 flex flex-col gap-12 mt-8 lg:mt-0">
          
          {/* IMAGE WITH ARCHITECTURAL FRAME */}
          <div className="relative group mx-auto w-full max-w-[360px]">
            {/* Background offset square */}
            <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-2xl transform translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-7 group-hover:translate-y-7"></div>
            
            {/* Image Container - REMOVED GRAYSCALE, ADDED SUBTLE ZOOM */}
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-100 bg-slate-100 aspect-square">
              <Image
                src="/Abdul.png"
                fill
                alt="Abdul Rahman"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-5 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl z-20"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-4xl font-bold text-[#D4AF37]">900+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Hours CDAC</span>
              </div>
            </motion.div>
          </div>

          {/* ENGINEERING FOUNDATIONS LIST */}
          <div className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mt-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" /> Engineering Foundation
            </h3>
            <ul className="space-y-4">
              {foundations.map((skill, index) => (
                <li key={index} className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
}