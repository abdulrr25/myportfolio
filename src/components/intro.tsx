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
      
      {/* RIGHT COLUMN (IMAGE): Moves to TOP on mobile, RIGHT on desktop */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="order-first lg:order-last flex-1 w-full flex justify-center lg:justify-end mb-6 lg:mb-0"
      >
        {/* Scaled perfectly for mobile, massive on desktop */}
        <div className="relative shrink-0 w-44 h-44 sm:w-56 sm:h-56 lg:w-[450px] lg:h-[450px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 rounded-full blur-2xl lg:blur-3xl opacity-50"></div>
          
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl lg:shadow-2xl bg-slate-50 dark:bg-slate-900"
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

      {/* LEFT COLUMN (TEXT): Moves BELOW image on mobile, LEFT on desktop */}
      <div className="order-last lg:order-first flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full">
        
        {/* Minimalist Intro Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center lg:justify-start gap-3 mb-6"
        >
          <span className="hidden lg:block h-px w-10 bg-[#D4AF37]"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            Abdul Rahman
          </span>
        </motion.div>

        {/* High-Impact Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-[1.15] text-slate-900 dark:text-white tracking-tight"
        >
          Engineering robust <br className="hidden sm:block" />
          <span className="text-slate-500 dark:text-slate-400">
            full-stack systems.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-6 lg:mt-8 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-sans leading-relaxed px-2 lg:px-0"
        >
          I build scalable, high-performance applications — from resilient Java microservices to immersive Next.js frontends and Web3 architectures.
        </motion.p>

        {/* CTA BUTTONS & SOCIALS */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mt-8 lg:mt-12 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="#contact"
            className="group w-full sm:w-auto justify-center bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-none border border-slate-900 flex items-center gap-3 hover:bg-transparent hover:text-slate-900 transition-all dark:bg-white dark:text-slate-900 dark:border-white dark:hover:bg-transparent dark:hover:text-white"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let&apos;s Talk 
            <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <div className="flex items-center gap-6 sm:gap-4 mt-2 sm:mt-0">
            <a
              href="https://github.com/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-[#D4AF37] transition-colors"
            >
              <FaGithubSquare size={32} className="lg:w-7 lg:h-7" />
            </a>

            <a
              href="https://linkedin.com/in/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-slate-400 hover:text-[#D4AF37] transition-colors"
            >
              <BsLinkedin size={28} className="lg:w-6 lg:h-6" />
            </a>
          </div>
        </motion.div>

        {/* PROOF METRICS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:mt-16 flex items-center justify-center lg:justify-start gap-6 lg:gap-8 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 divide-x divide-slate-200 dark:divide-slate-800"
        >
          <div className="flex flex-col items-center lg:items-start gap-1">
            <span className="font-serif font-bold text-slate-900 dark:text-white text-2xl normal-case">5+</span>
            <span>Production Apps</span>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-1 pl-6 lg:pl-8">
            <span className="font-serif font-bold text-slate-900 dark:text-white text-2xl normal-case">900h</span>
            <span>CDAC Engineering</span>
          </div>
        </motion.div>
      </div>

    </section>
  );
}