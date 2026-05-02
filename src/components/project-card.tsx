"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";
import { ArrowUpRight, Layers, Code2 } from "lucide-react";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.97, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group relative w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
    >
      {/* IMAGE */}
      <div className="w-full lg:w-[58%] relative">
        <a href={link} target="_blank" rel="noopener noreferrer" className="block relative">
          <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-xl transform translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative z-10 rounded-xl overflow-hidden border-2 border-slate-900 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 aspect-[16/10] sm:aspect-video w-full shadow-xl">
            <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none"></div>
            {!imgError ? (
              <Image
                src={imageUrl}
                alt={`Screenshot of ${title}`}
                width={1000}
                height={600}
                quality={95}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              /* Gradient fallback when image is missing */
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950">
                <Code2 className="w-12 h-12 text-[#D4AF37]/60 mb-3" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  {title.split("–")[0].trim()}
                </span>
              </div>
            )}
          </div>
        </a>
      </div>

      {/* CONTENT */}
      <div className="w-full lg:w-[42%] flex flex-col justify-center">

        <div className="flex items-center gap-2 mb-4">
          <Layers className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">
            System Architecture
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-7">
          {description}
        </p>

        <div className="mb-7">
          <h4 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
            Tech Stack
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

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white tracking-widest uppercase pb-1 border-b-2 border-[#D4AF37] hover:text-[#D4AF37] transition-colors self-start"
        >
          View Project
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
}
