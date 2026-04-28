"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/lib/types";
import clsx from "clsx";
import NextLink from "next/link";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/container/active-section";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Soft Glass Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-[998] bg-slate-900/10 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      <div className="md:hidden fixed top-5 right-5 z-[999] flex flex-col items-end gap-3">
        
        {/* Sleek Circular Menu Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-12 h-12 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-lg rounded-full flex items-center justify-center text-slate-900 dark:text-white hover:scale-105 transition-transform"
        >
          <Hamburger 
            toggled={isOpen} 
            toggle={setIsOpen} 
            size={20} 
            duration={0.3}
            color="currentColor"
          />
        </motion.button>

        {/* Premium Floating Dropdown Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden flex flex-col py-2"
            >
              {links.map((link) => (
                <NextLink
                  key={link.hash}
                  href={link.hash}
                  className={clsx(
                    "flex w-full items-center px-5 py-3.5 text-sm font-medium transition-colors",
                    {
                      "text-[#D4AF37] bg-slate-50 dark:bg-slate-800/50": activeSection === link.hash,
                      "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800/50": activeSection !== link.hash,
                    }
                  )}
                  onClick={() => {
                    setActiveSection(link.hash);
                    setTimeOfLastClick(Date.now());
                    setIsOpen(false);
                  }}
                >
                  {link.nameEng}
                </NextLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default HamburgerMenu;