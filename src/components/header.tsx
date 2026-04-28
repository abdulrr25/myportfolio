"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import clsx from "clsx";
import { Link } from "@/lib/types";
import { useActiveSectionContext } from "@/container/active-section";
import { TerminalSquare } from "lucide-react";

type HeaderProps = { links: Link[] };

export default function Header({ links }: HeaderProps) {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [scrolled, setScrolled] = useState(false);

  // Add a subtle border when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="hidden md:flex items-center justify-center fixed top-0 left-0 right-0 z-[999] w-full">
      <motion.div
        className={clsx(
          "w-full flex items-center justify-between px-8 py-4 transition-all duration-300",
          {
            "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm": scrolled,
            "bg-transparent border-b border-transparent": !scrolled,
          }
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* LOGO AREA */}
        <NextLink 
          href="#home" 
          className="flex items-center gap-2 group cursor-pointer"
          onClick={() => {
            setActiveSection("#home");
            setTimeOfLastClick(Date.now());
          }}
        >
          <TerminalSquare className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
          <span className="font-serif font-bold text-slate-900 dark:text-white tracking-wide text-lg">
            A.R.
          </span>
        </NextLink>

        {/* NAVIGATION LINKS */}
        <nav>
          <ul className="flex items-center gap-2">
            {links.map((link) => (
              <li
                className="flex items-center justify-center relative"
                key={link.hash}
              >
                <NextLink
                  className={clsx(
                    "relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300",
                    {
                      "text-slate-900 dark:text-white": activeSection === link.hash,
                      "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white": activeSection !== link.hash,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.nameEng}
                  
                  {/* Underline Active State Indicator */}
                  {link.hash === activeSection && (
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#D4AF37]"
                      layoutId="activeSectionIndicator"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    ></motion.span>
                  )}
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* RIGHT SPACER (Keeps nav centered if you want, or holds a CTA later) */}
        <div className="w-[60px]"></div>
      </motion.div>
    </header>
  );
}