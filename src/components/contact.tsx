"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import {
  Send,
  Calendar,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Loader2
} from "lucide-react";

export default function Contact() {
  const { ref } = useSectionInView("#contact", 0.5);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderEmail: email,
          message: message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to establish connection.");
      }

      setSuccess("Message received. I will be in touch shortly.");
      setEmail("");
      setMessage("");
      
      // Clear success message after 5 seconds for a clean UI
      setTimeout(() => setSuccess(null), 5000);
      
    } catch (err: any) {
      setError(err.message || "Transmission failed. Please try emailing directly.");
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(null), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-32 max-w-[85rem] mx-auto scroll-mt-28 px-4 sm:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* LEFT COLUMN: Copy & Calendly */}
        <div className="lg:col-span-5 flex flex-col pt-4">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-[#D4AF37] font-sans text-sm tracking-widest uppercase">
              Initiate Contact
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight mb-6">
            Let&apos;s build something meaningful.
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 font-sans leading-relaxed mb-10">
            I am currently open to joining ambitious startups, freelance contracts, and team collaborations. Whether you need a full-stack architecture or a Web3 integration, let&apos;s discuss your idea.
          </p>

          {/* PREMIUM CALENDLY BLOCK */}
          <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 p-6 rounded-xl mb-8 group hover:border-[#D4AF37]/50 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                <Calendar className="w-6 h-6 text-slate-900 dark:text-white group-hover:text-[#D4AF37] transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Book a Discovery Call
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  Find a time on my calendar to discuss your technical requirements.
                </p>
                <a
                  href="https://calendly.com/abdulrr25"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#D4AF37] uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  View Schedule <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Direct Email Fallback */}
          <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>Or email me directly at</span>
            <a href="mailto:abdulr6503@gmail.com" className="font-medium text-slate-900 dark:text-white hover:text-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors border-b border-transparent hover:border-[#D4AF37]">
              abdulr6503@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Form */}
        <div className="lg:col-span-7 relative mt-8 lg:mt-0">
          <div className="absolute inset-0 bg-slate-900 dark:bg-slate-100 rounded-xl transform translate-x-4 translate-y-4"></div>
          
          <div className="relative z-10 bg-white dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-100 rounded-xl p-8 sm:p-12 shadow-xl">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="senderEmail" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="senderEmail"
                  name="senderEmail"
                  type="email"
                  required
                  pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                  title="Please enter a valid email address (e.g., name@domain.com)"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="h-14 px-5 rounded-none border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell me about the architecture, stack, or problem you're solving..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={loading}
                  className="h-48 p-5 resize-none rounded-none border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative mt-4 w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 overflow-hidden transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:bg-slate-800 dark:hover:bg-gray-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Initialize Sequence
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            {/* FEEDBACK MESSAGES (Animated) */}
            <AnimatePresence mode="wait">
              {success && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-[-80px] left-0 right-0 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3 text-green-700 dark:text-green-400 text-sm font-medium rounded-lg shadow-lg"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  {success}
                </motion.div>
              )}
              {error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-[-80px] left-0 right-0 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3 text-red-700 dark:text-red-400 text-sm font-medium rounded-lg shadow-lg"
                >
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </motion.section>
  );
}