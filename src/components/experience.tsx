"use client";

import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const experienceData = [
  {
    role: "Web Developer Intern",
    company: "Prasunet Company",
    type: "Internship · Remote",
    period: "July 2024 – September 2024",
    location: "Remote, India",
    bullets: [
      "Developed production-ready web applications using React.js, JavaScript, HTML5, and CSS3 with responsive and reusable UI components.",
      "Integrated third-party APIs to implement content assistance and basic automation features.",
      "Collaborated in an Agile environment, participated in sprint reviews and code reviews, and managed version control using Git and GitHub.",
    ],
    tags: ["React.js", "JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
    link: null,
  },
  {
    role: "Freelance Frontend Developer",
    company: "Independent Client Work",
    type: "Freelance · Remote",
    period: "January 2025 – Present",
    location: "Remote",
    bullets: [
      "Delivered a production-ready interior design website (newrangolibuilders.in) from scratch, handling client requirements, development, and deployment end-to-end.",
      "Implemented scroll-based animations, mobile-optimized layouts, and clean visual hierarchy using Next.js, Tailwind CSS, and Framer Motion.",
      "Improved brand visibility and mobile performance through modern UI/UX practices and performance optimization.",
    ],
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "JavaScript", "Responsive Design"],
    link: "https://www.newrangolibuilders.in",
  },
];

const educationData = [
  {
    degree: "Post Graduation Diploma in Advanced Computing",
    institution: "CDAC Pune",
    period: "Aug 2025 – Feb 2026",
    location: "Pune, India",
    note: "900+ hours of intensive training in systems, networks, distributed computing, and full-stack development.",
  },
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "ABES Engineering College",
    period: "Nov 2021 – Jul 2025",
    location: "Ghaziabad, India",
    note: "Final year project: TEACHO — a blockchain-based decentralized online teaching platform.",
  },
  {
    degree: "Indian School Certificate (ISC) — PCM",
    institution: "Boys' High School and College",
    period: "Mar 2021",
    location: "Prayagraj, India",
    note: "92.7% in PCM — Physics, Chemistry, Mathematics.",
  },
];

export default function Experience() {
  const { ref } = useSectionInView("#experience", 0.3);

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="mb-32 max-w-[85rem] mx-auto scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* HEADER */}
      <div className="flex flex-col items-center sm:items-start mb-16">
        <div className="flex items-center gap-2 mb-2">
          <Briefcase className="w-5 h-5 text-[#D4AF37]" />
          <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
            Professional Journey
          </span>
        </div>
        <SectionHeading>Experience & Education</SectionHeading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

        {/* WORK EXPERIENCE */}
        <div className="lg:col-span-7">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8 flex items-center gap-2">
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
            Work Experience
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
          </h3>

          <div className="relative flex flex-col gap-0">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-slate-200 dark:bg-slate-800"></div>

            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#D4AF37] bg-white dark:bg-slate-950 z-10"></div>

                <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-6 hover:border-[#D4AF37]/40 hover:shadow-lg transition-all duration-300 group">

                  {/* Role + period */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-semibold text-[#D4AF37]">{exp.company}</span>
                        <span className="text-xs text-slate-400">·</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{exp.type}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-[#D4AF37] shrink-0"></span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* External link */}
                  {exp.link && (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs font-bold text-[#D4AF37] uppercase tracking-wider hover:gap-2.5 transition-all"
                    >
                      View Live Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="lg:col-span-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8 flex items-center gap-2">
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
            Education
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></span>
          </h3>

          <div className="flex flex-col gap-4">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 + 0.1, duration: 0.5 }}
                className="p-5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50 hover:border-[#D4AF37]/40 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-[#D4AF37] font-semibold text-sm mt-0.5">{edu.institution}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 mt-0.5">
                    {edu.period.split("–")[0].trim()}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{edu.location}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {edu.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}
