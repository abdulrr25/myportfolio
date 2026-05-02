"use client";

import { useActiveSectionContext } from "@/container/active-section";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-[85rem] mx-auto scroll-mt-[100rem] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-20 px-4 sm:px-8 pt-32 pb-16 lg:py-0 lg:min-h-[100svh]"
    >
      {/* RIGHT COLUMN: IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="order-first lg:order-last flex-1 w-full flex justify-center lg:justify-end mb-6 lg:mb-0"
      >
        <div className="relative shrink-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-[440px] lg:h-[440px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 to-slate-100 dark:from-[#D4AF37]/10 dark:to-slate-900 rounded-full blur-3xl opacity-60"></div>
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-50 dark:bg-slate-900"
          >
            <Image
              src="/boy.png"
              alt="Abdul Rahman"
              fill
              quality={100}
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Floating badge — AI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute top-8 -right-4 lg:-right-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-4 py-3 flex items-center gap-2 z-20"
          >
            <span className="text-lg">🤖</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Specialty</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">AI Systems</p>
            </div>
          </motion.div>

          {/* Floating badge — Web3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-10 -left-4 lg:-left-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl px-4 py-3 flex items-center gap-2 z-20"
          >
            <span className="text-lg">⛓️</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Also</p>
              <p className="text-xs font-bold text-slate-900 dark:text-white">Web3 & Blockchain</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* LEFT COLUMN: TEXT */}
      <div className="order-last lg:order-first flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">

        {/* Name label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-start gap-3 mb-6"
        >
          <span className="hidden lg:block h-px w-10 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            Abdul Rahman · Software Engineer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-[4.25rem] font-serif font-bold leading-[1.1] text-slate-900 dark:text-white tracking-tight"
        >
          Building{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#D4AF37]">AI-Native</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              className="absolute bottom-1 left-0 right-0 h-[3px] bg-[#D4AF37]/30 origin-left"
            />
          </span>
          <br className="hidden sm:block" />
          Apps &{" "}
          <span className="text-slate-500 dark:text-slate-400">
            Full-Stack
          </span>{" "}
          Systems.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-6 lg:mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-sans leading-relaxed px-2 lg:px-0"
        >
          I craft intelligent systems — from multi-model LLM platforms with RAG pipelines to blockchain-powered dApps and real-time collaborative tools.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-4 mt-8 lg:mt-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="#projects"
            className="group w-full sm:w-auto justify-center bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-none border border-slate-900 flex items-center gap-3 hover:bg-transparent hover:text-slate-900 transition-all dark:bg-white dark:text-slate-900 dark:border-white dark:hover:bg-transparent dark:hover:text-white"
            onClick={() => {
              setActiveSection("#projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="group w-full sm:w-auto justify-center border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-none flex items-center gap-3 hover:border-[#D4AF37] hover:text-[#D4AF37] dark:hover:border-[#D4AF37] dark:hover:text-[#D4AF37] transition-all"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let&apos;s Talk
          </Link>

          <div className="flex items-center gap-5 mt-2 sm:mt-0 sm:ml-2">
            <a
              href="https://github.com/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-slate-400 hover:text-[#D4AF37] transition-colors"
            >
              <FaGithubSquare size={28} />
            </a>
            <a
              href="https://linkedin.com/in/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-slate-400 hover:text-[#D4AF37] transition-colors"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        {/* Proof Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 lg:mt-16 flex items-center justify-center lg:justify-start gap-0 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 divide-x divide-slate-200 dark:divide-slate-800"
        >
          <div className="flex flex-col items-center lg:items-start gap-1 pr-6 lg:pr-8">
            <span className="font-serif font-bold text-slate-900 dark:text-white text-2xl normal-case">6+</span>
            <span>Projects Built</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 px-6 lg:px-8">
            <span className="font-serif font-bold text-slate-900 dark:text-white text-2xl normal-case">900h</span>
            <span>CDAC Training</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 pl-6 lg:pl-8">
            <span className="font-serif font-bold text-[#D4AF37] text-2xl normal-case">AI</span>
            <span>× Web3 × Full-Stack</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
