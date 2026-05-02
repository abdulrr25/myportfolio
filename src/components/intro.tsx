"use client";

import { useActiveSectionContext } from "@/container/active-section";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="order-first lg:order-last flex-1 w-full flex justify-center lg:justify-end mb-6 lg:mb-0"
      >
        <div className="relative shrink-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-[420px] lg:h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-slate-100 dark:from-[#D4AF37]/5 dark:to-slate-900 rounded-full blur-3xl opacity-70" />
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
        </div>
      </motion.div>

      {/* TEXT */}
      <div className="order-last lg:order-first flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center lg:justify-start gap-3 mb-5"
        >
          <span className="hidden lg:block h-px w-8 bg-[#D4AF37]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl lg:text-[4.25rem] font-serif font-bold leading-[1.12] text-slate-900 dark:text-white tracking-tight"
        >
          Abdul Rahman
          <br />
          <span className="text-slate-400 dark:text-slate-500">
            builds intelligent
          </span>
          <br />
          <span className="text-slate-400 dark:text-slate-500">
            full-stack systems.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-md font-sans leading-relaxed"
        >
          AI pipelines · Blockchain dApps · Production web apps.
          <br className="hidden sm:block" />
          Currently open to full-time roles.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-10 w-full sm:w-auto"
        >
          <Link
            href="#projects"
            className="group w-full sm:w-auto justify-center bg-slate-900 text-white px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-none border border-slate-900 flex items-center gap-3 hover:bg-transparent hover:text-slate-900 transition-all dark:bg-white dark:text-slate-900 dark:border-white dark:hover:bg-transparent dark:hover:text-white"
            onClick={() => {
              setActiveSection("#projects");
              setTimeOfLastClick(Date.now());
            }}
          >
            View Work
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#contact"
            className="group w-full sm:w-auto justify-center border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 px-8 py-3.5 text-sm font-bold uppercase tracking-widest rounded-none flex items-center gap-3 hover:border-slate-900 hover:text-slate-900 dark:hover:border-white dark:hover:text-white transition-all"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Socials + email */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-8 flex items-center justify-center lg:justify-start gap-5"
        >
          <a
            href="https://github.com/abdulrr25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <FaGithubSquare size={24} />
          </a>
          <a
            href="https://linkedin.com/in/abdulrr25"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <BsLinkedin size={21} />
          </a>
          <span className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
          <a
            href="mailto:abdulr6503@gmail.com"
            className="text-xs text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors font-medium tracking-wide"
          >
            abdulr6503@gmail.com
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14 flex items-stretch divide-x divide-slate-200 dark:divide-slate-800"
        >
          {[
            { num: "6+", label: "Projects shipped" },
            { num: "900h", label: "CDAC training" },
            { num: "AI · Web3", label: "Core domains" },
          ].map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center lg:items-start gap-1 px-6 first:pl-0 last:pr-0"
            >
              <span className="font-serif font-bold text-slate-900 dark:text-white text-xl">
                {m.num}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                {m.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
