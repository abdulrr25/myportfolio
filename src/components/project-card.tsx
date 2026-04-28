"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";
import { ArrowUpRight, Layers } from "lucide-react";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Tuned the scroll animation to be much smoother and more subtle.
  // Shrinking/growing heavily can feel cheap; a slight scale and fade feels premium.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
    >
      {/* LEFT: IMAGE SECTION */}
      <div className="w-full lg:w-[60%] relative">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block relative">
          {/* Architectural Background Offset */}
          <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-xl transform translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          
          {/* Main Image Container */}
          <div className="relative z-10 rounded-xl overflow-hidden border-2 border-slate-900 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 aspect-[16/10] sm:aspect-video w-full shadow-xl">
            {/* Subtle overlay to make image blend better in dark mode, lifts on hover */}
            <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
            
            <Image
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              width={1000}
              height={600}
              quality={95}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </a>
      </div>

      {/* RIGHT: CONTENT SECTION */}
      <div className="w-full lg:w-[40%] flex flex-col justify-center">
        
        {/* Pre-heading Label */}
        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            System Architecture
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            Technical Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white tracking-widest uppercase pb-1 border-b-2 border-[#D4AF37] hover:text-[#D4AF37] transition-colors self-start"
        >
          Explore Deployment 
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}