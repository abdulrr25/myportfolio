"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Moon, Sun, TerminalSquare } from "lucide-react";
import { useTheme } from "next-themes";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted to avoid hydration mismatch with next-themes
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-32 w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-10 sm:py-12"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT SECTION: Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2">
            <TerminalSquare className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-serif text-xl font-bold text-slate-900 dark:text-white tracking-wide">
              Abdul Rahman
            </span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-sans mt-1">
            Engineering robust full-stack architectures.
          </p>
        </div>

        {/* CENTER SECTION: Copyright & Tech */}
        <div className="flex flex-col items-center gap-1 order-3 md:order-none">
          <small className="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-wider uppercase">
            &copy; {new Date().getFullYear()} Abdul Rahman. All rights reserved.
          </small>
          <p className="text-[10px] text-slate-400/80 dark:text-slate-500/80 tracking-widest uppercase mt-1">
            Built with Next.js • Tailwind • Framer
          </p>
        </div>

        {/* RIGHT SECTION: Socials & Theme Toggle */}
        <div className="flex items-center gap-6">
          

          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-slate-500 hover:text-[#D4AF37] dark:text-slate-400 dark:hover:text-[#D4AF37] transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/abdulrr25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-slate-500 hover:text-[#D4AF37] dark:text-slate-400 dark:hover:text-[#D4AF37] transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}