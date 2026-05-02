"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("#about");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="max-w-[80rem] mx-auto mt-28 mb-28 px-4 sm:px-8 scroll-mt-28"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* TEXT */}
        <div className="lg:col-span-7 flex flex-col gap-7">

          <div>
            <span className="text-[#D4AF37] font-sans text-xs tracking-widest uppercase font-bold">
              About Me
            </span>
            <SectionHeading className="mt-2">
              The Engineer Behind the Code
            </SectionHeading>
          </div>

          <div className="space-y-5 text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[1.0625rem]">
            <p>
              I&apos;m <span className="font-semibold text-slate-900 dark:text-white">Abdul Rahman</span>, a software engineer who builds across the full stack — intelligent AI backends, clean React frontends, and on-chain architectures.
            </p>
            <p>
              My recent work includes a multi-model LLM chat platform with ReAct agents and FAISS-powered RAG, a blockchain education platform with Superfluid on-chain payments, and an AI legal research tool that competed at the{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">BNB Chainlink Hackathon 2025</span>. I completed 900+ hours of advanced computing at{" "}
              <span className="font-medium text-slate-800 dark:text-slate-200">CDAC Pune</span>, deepening my foundations in systems, distributed architectures, and real-time systems.
            </p>
            <p>
              I&apos;ve also delivered production websites for freelance clients end-to-end — from requirements to deployment. I&apos;m looking for a team where I can take ownership and ship things that matter.
            </p>
          </div>

          {/* Highlights row */}
          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "B.Tech CSE · ABES Engineering College",
              "PG Diploma · CDAC Pune",
              "BNB Chainlink Hackathon 2025",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-none bg-white dark:bg-slate-900/50"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="lg:col-span-5">
          <div className="relative group mx-auto w-full max-w-[340px]">
            <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-slate-900 dark:border-slate-100 bg-slate-100 aspect-square">
              <Image
                src="/Abdul.png"
                fill
                alt="Abdul Rahman"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 -left-5 bg-white dark:bg-slate-900 px-5 py-4 border border-slate-200 dark:border-slate-700 shadow-xl rounded-xl z-20"
            >
              <span className="font-serif text-3xl font-bold text-[#D4AF37] block leading-none">900+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1 block">Hours · CDAC</span>
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
