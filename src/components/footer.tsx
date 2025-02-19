import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 mb-5 px-4 text-center text-gray-500 dark:text-gray-400">
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Abdul Rahman. All rights reserved.
      </small>

      <div className="mt-3 flex justify-center gap-4 text-xl">
        <a 
          href="https://github.com/abdulrr25" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/abdulrr25" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
