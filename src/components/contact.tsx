"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/useInView";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("#contact");

  // State for form data
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Handle form submission
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
        throw new Error(data.message || "Something went wrong.");
      }

      setSuccess("Message sent successfully!");
      setEmail("");
      setMessage("");
    } catch (err: any) {
      setError(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{"Contact Me"}</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {"Feel free to contact me directly through this form"}
      </p>

      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg resize-none borderBlack p-4 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn text={loading ? "Sending..." : "Submit"} />
      </form>

      {/* Display Success or Error Messages */}
      {success && <p className="text-green-600 mt-4">{success}</p>}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </motion.section>
  );
}
