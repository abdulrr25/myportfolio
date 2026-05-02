"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { BrainCircuit, Blocks, Server, Code, Terminal, Cpu } from "lucide-react";

const architectures = [
  {
    title: "AI & LLM Systems",
    desc: "Multi-model inference, RAG pipelines, ReAct agents with tool-use and streaming SSE responses.",
    icon: <BrainCircuit className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "Web3 & Blockchain",
    desc: "On-chain payment streaming (Superfluid), smart contracts, Chainlink CCIP cross-chain ops.",
    icon: <Blocks className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "Real-time Systems",
    desc: "Collaborative editors with SignalR, WebSocket sync, conflict-free multi-user state.",
    icon: <Server className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "Full-Stack Delivery",
    desc: "End-to-end ownership — architecture decisions, API design, frontend polish, and deployment.",
    icon: <Cpu className="w-5 h-5 text-[#D4AF37]" />,
  },
];

const foundations = [
  "Java & Python (backend systems)",
  "ASP.NET Core & Spring Boot",
  "DSA & Problem Solving",
  "SQL, Relational & Vector DBs",
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

        {/* NARRATIVE (LEFT) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">

          <div className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-lg">
            <p>
              I&apos;m{" "}
              <span className="font-bold text-slate-900 dark:text-white">Abdul Rahman</span>, a software engineer who builds across the full stack — from intelligent AI backends to polished React frontends and on-chain architectures.
            </p>
          </div>

          <blockquote className="border-l-4 border-[#D4AF37] pl-8 py-3 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl">
            <p className="font-serif text-xl lg:text-2xl text-slate-800 dark:text-slate-200 italic leading-snug">
              &ldquo;I don&apos;t just build interfaces — I engineer the data pipelines, memory systems, and multi-model architectures that power them.&rdquo;
            </p>
          </blockquote>

          <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed">
            My recent work spans a multi-model LLM chat platform with ReAct agents and FAISS-powered RAG, a blockchain education platform with Superfluid on-chain payments, and an AI legal research tool that competed at the{" "}
            <span className="font-semibold text-slate-900 dark:text-white">BNB Chainlink Hackathon 2025</span>. I completed a 900-hour advanced computing program at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">CDAC Pune</span>, sharpening my depth across systems programming, distributed architectures, and real-time collaboration tools.
          </p>

          {/* ARCHITECTURES GRID */}
          <div className="mt-2">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6 flex items-center gap-2">
              <Code className="w-4 h-4 text-slate-400" /> Core Domains
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {architectures.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 hover:shadow-lg hover:border-[#D4AF37]/50 transition-all duration-300 group"
                >
                  <div className="mb-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-lg inline-block group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5">{item.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed pt-2">
            Beyond personal builds, I&apos;ve delivered production-ready websites for freelance clients, managing everything from technical requirements to deployment. I&apos;m seeking a team where I can take ownership, ship fast, and build products that matter.
          </p>
        </div>

        {/* VISUAL + FOUNDATIONS (RIGHT) */}
        <div className="lg:col-span-5 flex flex-col gap-10 mt-8 lg:mt-0">

          {/* IMAGE WITH FRAME */}
          <div className="relative group mx-auto w-full max-w-[360px]">
            <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-2xl transform translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-7 group-hover:translate-y-7"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-100 bg-slate-100 aspect-square">
              <Image
                src="/Abdul.png"
                fill
                alt="Abdul Rahman"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-4 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-xl z-20"
            >
              <div className="flex flex-col items-center justify-center">
                <span className="font-serif text-3xl font-bold text-[#D4AF37]">900+</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Hours · CDAC</span>
              </div>
            </motion.div>
          </div>

          {/* ENGINEERING FOUNDATIONS */}
          <div className="bg-slate-50 dark:bg-slate-800/30 border border-slate-200 dark:border-slate-800 rounded-2xl p-7 mt-4">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" /> Engineering Foundation
            </h3>
            <ul className="space-y-3.5">
              {foundations.map((item, index) => (
                <li key={index} className="flex items-center gap-3.5 text-sm text-slate-600 dark:text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
