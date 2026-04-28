"use client";

import { useActiveSectionContext } from "@/container/active-section";
import { useSectionInView } from "@/lib/useInView";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// --- 3D Skill Orb Component ---
function AnimatedOrb() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={2.2}>
      <MeshDistortMaterial
        color="#1e293b" // Deep navy
        attach="material"
        distort={0.4}
        speed={1.2}
        roughness={0.2}
        metalness={0.8}
        emissive="#D4AF37" // Subtle gold accent
        emissiveIntensity={0.1}
      />
    </Sphere>
  );
}

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="relative max-w-[85rem] mx-auto scroll-mt-[100rem] min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 px-4 sm:px-8 py-32 lg:py-0"
    >
      {/* LEFT COLUMN: Typography & CTA */}
      <div className="flex-1 text-left z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-4 mb-8"
        >
          <span className="h-[1px] w-16 bg-[#D4AF37]"></span>
          <span className="text-sm font-semibold tracking-widest uppercase text-[#D4AF37]">
            Abdul Rahman
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl lg:text-7xl font-serif font-bold leading-[1.15] text-slate-900 dark:text-white tracking-tight"
        >
          Engineering robust <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900 dark:from-gray-300 dark:to-white">
            full-stack systems.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-2xl font-sans leading-relaxed"
        >
          I build scalable, high-performance applications — from resilient Java/Node.js microservices to immersive Next.js frontends and Web3 architectures.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="flex flex-wrap items-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="#contact"
            className="group bg-slate-900 text-white px-8 py-4 text-lg rounded-none border border-slate-900 flex items-center gap-3 hover:bg-transparent hover:text-slate-900 transition-all dark:bg-white dark:text-slate-900 dark:border-white dark:hover:bg-transparent dark:hover:text-white"
            onClick={() => {
              setActiveSection("#contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Let&apos;s Talk <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
          </Link>

          <div className="flex gap-4 ml-2">
            <a
              href="https://github.com/abdulrr25"
              target="_blank"
              aria-label="GitHub Profile"
              className="p-3 text-slate-500 hover:text-[#D4AF37] dark:text-slate-400 dark:hover:text-[#D4AF37] transition-all hover:scale-110"
            >
              <FaGithubSquare size={32} />
            </a>

            <a
              href="https://linkedin.com/in/abdulrr25"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="p-3 text-slate-500 hover:text-[#D4AF37] dark:text-slate-400 dark:hover:text-[#D4AF37] transition-all hover:scale-110"
            >
              <BsLinkedin size={28} />
            </a>
          </div>
        </motion.div>

        {/* PROOF METRICS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex items-center gap-8 text-sm font-sans text-slate-500 dark:text-slate-400 divide-x divide-gray-300 dark:divide-gray-700"
        >
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 dark:text-white text-xl">5+</span>
            <span className="mt-1">Production Apps</span>
          </div>
          <div className="flex flex-col pl-8">
            <span className="font-bold text-slate-900 dark:text-white text-xl">900h</span>
            <span className="mt-1">CDAC Engineering</span>
          </div>
          <div className="flex flex-col pl-8">
            <span className="font-bold text-slate-900 dark:text-white text-xl">2025</span>
            <span className="mt-1">B.Tech CS</span>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: 3D Orb & Profile Image Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 relative w-full h-[500px] lg:h-[700px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedOrb />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>

        {/* Floating Profile Image */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative z-10 w-40 h-40 lg:w-56 lg:h-56"
        >
          <Image
            src="/boy.png"
            alt="Abdul Rahman"
            fill
            quality={100}
            priority
            className="rounded-full object-cover shadow-2xl border-4 border-white/20 backdrop-blur-sm bg-white/10 dark:border-gray-800/50"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}