"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectInfo } from "@/lib/types";

type ProjectProps = ProjectInfo;

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="w-full max-w-[40rem] bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition hover:scale-105"
    >
      {/* Clickable Project Container */}
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={450}
          className="w-full object-cover h-[220px]"
        />
      </a>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-400">{description}</p>

        {/* Tags */}
        <ul className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Button to Visit Project */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
}
