"use client";
import { useActiveSectionContext } from "@/container/active-section";
import { useSectionInView } from "@/lib/useInView";
import ArrowDownTrayIcon from "@heroicons/react/24/solid/ArrowDownTrayIcon";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[75rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            <Image
              src="/boy.png"
              width="480"
              height="480"
              alt="portrait"
              quality="100"
              priority={true}
              className="rounded-full object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="text-6xl absolute bottom-8 right-12"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 10,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <Fade direction="up" delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className="mb-10 mt-4 px-4 text-2xl sm:text-4xl">
          <span className="font-medium !leading-[1.5] ">Welcome to My Portfolio</span>{" "}
          <p className="text-[14px]">
I'm Abdul Rahman, a passionate full-stack developer dedicated to building modern, scalable, and user-friendly web applications. Let's turn your vision into powerful digital experiences!          </p>
        </h1>
      </Fade>

      <motion.div
  className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.1,
  }}
>
  <Link
    href="#contact"
    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
    onClick={() => {
      setActiveSection("#contact");
      setTimeOfLastClick(Date.now());
    }}
  >
    Get in Touch <Mail color={"#9ca3af"} />
  </Link>

  <a
    className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href="https://www.linkedin.com/in/abdulrr25/"
    target="_blank"
  >
    <BsLinkedin />
  </a>

  <a
    className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
    href="https://github.com/abdulrr25"
    target="_blank"
  >
    <FaGithubSquare />
  </a>

  {/* Resume Button */}
  <a
    href="https://drive.google.com/file/d/1Rtz7E_Gmwgb8MMqdmaAb7QAjSe2VOsXQ/view?usp=drivesdk"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
  >
    <ArrowDownTrayIcon className="h-5 w-5" />
    <span className="hidden sm:inline">Resume</span>
  </a>
</motion.div>
    </section>
  );
}
