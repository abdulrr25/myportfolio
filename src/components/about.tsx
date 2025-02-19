"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Fade } from "react-awesome-reveal";
import { useSectionInView } from "@/lib/useInView";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      className="max-w-4xl text-center mt-24 mb-20 scroll-mt-20 px-6 sm:px-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
      ref={ref}
      id="about"
    >
      <Fade direction="up" delay={300} cascade damping={0.1} triggerOnce={true}>
        <SectionHeading>About Me</SectionHeading>
      </Fade>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mt-8">
        {/* Left - Text Section */}
        <div className="text-gray-800 dark:text-white/70 text-lg leading-relaxed flex-1 text-justify">
          <Fade direction="up" delay={500} cascade damping={0.1} triggerOnce={true}>
            <p>
              Hi, I'm <span className="font-semibold text-black dark:text-white">Abdul Rahman</span>, a 
              <span className="font-semibold text-black dark:text-white"> Front-End Developer</span> passionate about building 
              <span className="text-blue-500 dark:text-blue-400"> intuitive</span> and <span className="text-blue-500 dark:text-blue-400">interactive</span> web applications.
            </p>
            <p className="mt-3">
              I specialize in <span className="font-semibold">Next.js, React, Tailwind CSS, and Web3</span>, with experience in
              crafting smooth user experiences and blockchain-based applications.
            </p>
            <p className="mt-3">
              Currently, I'm pursuing my <span className="font-semibold">B.Tech at ABES Engineering College</span>, while working on 
              freelance projects and personal experiments to push my skills further.
            </p>
          </Fade>
        </div>

        {/* Right - Image Section */}
        <Fade direction="right" delay={600} cascade damping={0.1} triggerOnce={true}>
          <div className="flex-1 flex justify-center">
            <Image
              src="/about.png"
              width="300"
              height="300"
              alt="Abdul Rahman"
              quality={100}
              priority={true}
              className="rounded-full shadow-lg border-4 border-gray-300 dark:border-gray-700"
            />
          </div>
        </Fade>
      </div>
    </motion.section>
  );
}
