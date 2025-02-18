"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project-card";
import { useSectionInView } from "@/lib/useInView";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.1);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 px-4 sm:px-0">
      <SectionHeading>My Works</SectionHeading>

      <div className="flex flex-col gap-16 items-center">
        {projectsData.map((project, index) => (
          <Project {...project} key={index} />
        ))}
      </div>

      {/* GitHub Button */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/abdulrr25"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <FaGithub className="text-2xl" />
          View More on GitHub
        </a>
      </div>
    </section>
  );
}
