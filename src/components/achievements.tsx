"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Trophy, Award, Users, ExternalLink, Star } from "lucide-react";

const hackathons = [
  {
    title: "BNB Chainlink Hackathon 2025",
    project: "LegalLama – AI-Powered Legal Assistant",
    description:
      "Built a decentralized legal case management platform with RAG-based AI for legal document processing, Chainlink CCIP for cross-chain operations, and Solidity smart contracts for tamper-proof auditability.",
    tags: ["Chainlink", "Solidity", "RAG", "AI/LLM", "Cross-chain CCIP"],
    badge: "Hackathon Entry",
  },
];

const certifications = [
  {
    name: "JavaScript Intermediate",
    issuer: "HackerRank",
    icon: "🟡",
  },
  {
    name: "Problem Solving Intermediate",
    issuer: "HackerRank",
    icon: "🟢",
  },
  {
    name: "Java Basic",
    issuer: "HackerRank",
    icon: "🟠",
  },
  {
    name: "SQL Basic",
    issuer: "HackerRank",
    icon: "🔵",
  },
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    icon: "🔒",
  },
  {
    name: "Bitcoin for Developers I",
    issuer: "Saylor Academy",
    icon: "₿",
  },
  {
    name: "Blockchain 101",
    issuer: "Infosys SpringBoard",
    icon: "⛓️",
  },
];

const leadership = [
  {
    title: "Promotion Lead",
    org: "Newton School Coding Club",
    period: "2023 – 2024",
    desc: "Led marketing and promotion initiatives for a college coding club, growing community engagement and event attendance.",
    icon: <Star className="w-5 h-5 text-[#D4AF37]" />,
  },
  {
    title: "Event Coordinator",
    org: "ABES Tech Fest",
    period: "2023",
    desc: "Coordinated a large-scale technical event managing 500+ attendees, speakers, and logistics end-to-end.",
    icon: <Users className="w-5 h-5 text-[#D4AF37]" />,
  },
];

export default function Achievements() {
  const { ref } = useSectionInView("#achievements", 0.3);

  return (
    <motion.section
      ref={ref}
      id="achievements"
      className="mb-32 max-w-[85rem] mx-auto scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* HEADER */}
      <div className="flex flex-col items-center sm:items-start mb-16">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
            Beyond the Code
          </span>
        </div>
        <SectionHeading>Achievements & Certifications</SectionHeading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

        {/* LEFT: Hackathon + Leadership */}
        <div className="lg:col-span-6 flex flex-col gap-8">

          {/* HACKATHON */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
              Hackathons
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
            </h3>
            {hackathons.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative p-6 border-2 border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/5 to-transparent dark:from-[#D4AF37]/5 rounded-xl hover:border-[#D4AF37]/60 hover:shadow-lg transition-all duration-300"
              >
                {/* Badge */}
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                  {h.badge}
                </span>

                <div className="flex items-center gap-2 mb-3">
                  <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  <h4 className="font-bold text-slate-900 dark:text-white">{h.title}</h4>
                </div>
                <p className="text-sm font-semibold text-[#D4AF37] mb-2">{h.project}</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {h.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {h.tags.map((tag, j) => (
                    <span key={j} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* LEADERSHIP */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
              Leadership
              <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
            </h3>
            <div className="flex flex-col gap-4">
              {leadership.map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.15 }}
                  className="flex items-start gap-4 p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-lg shrink-0">
                    {l.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{l.title}</h4>
                      <span className="text-xs text-slate-400">·</span>
                      <span className="text-xs font-semibold text-[#D4AF37]">{l.org}</span>
                      <span className="text-[10px] text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-0.5">{l.period}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5">
                      {l.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Certifications */}
        <div className="lg:col-span-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6 flex items-center gap-2">
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
            Certifications
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.1 }}
                className="flex items-center gap-3.5 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 hover:border-[#D4AF37]/50 hover:shadow-md transition-all duration-300 group"
              >
                <span className="text-2xl shrink-0">{cert.icon}</span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1">
                    <Award className="w-3 h-3 text-[#D4AF37]" />
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 grid grid-cols-3 gap-4"
          >
            {[
              { num: "7", label: "Certifications" },
              { num: "1", label: "Hackathon" },
              { num: "2", label: "Leadership Roles" },
            ].map((stat, i) => (
              <div key={i} className="text-center p-4 bg-slate-50 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="font-serif text-3xl font-bold text-[#D4AF37]">{stat.num}</p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
