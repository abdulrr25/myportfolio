"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/lib/types";
import clsx from "clsx";
import NextLink from "next/link";
import { Menu } from "lucide-react";
import Hamburger from "hamburger-react";
import { useActiveSectionContext } from "@/container/active-section";

type HamburgerMenuProps = { links: Link[] };

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <div className="md:hidden fixed top-5 right-5 z-[999] flex flex-col items-end gap-2">
      {/* Menu Button */}
      <button
        className="bg-white w-[3rem] h-[3rem] drop-shadow-lg border border-slate-400 dark:border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center dark:bg-gray-950"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Hamburger toggled={isOpen} toggle={setIsOpen} size={20} />
      </button>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-56 bg-white drop-shadow-lg border border-slate-400 dark:border-white border-opacity-60 shadow-2xl rounded-2xl flex flex-col items-center justify-center dark:bg-gray-950 p-2"
          >
            {links.map((link, index) => (
              <NextLink
                key={link.hash}
                href={link.hash}
                className={clsx(
                  "flex w-full items-center justify-center px-4 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 cursor-pointer",
                  {
                    "text-gray-950 bg-slate-200 dark:text-gray-200 dark:bg-gray-700 rounded": activeSection === link.hash,
                    "rounded-t-xl": index === 0,
                    "rounded-b-xl": index === links.length - 1,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.hash);
                  setTimeOfLastClick(Date.now());
                  setIsOpen(false); // Close menu on click
                }}
              >
                {link.nameEng}
              </NextLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
