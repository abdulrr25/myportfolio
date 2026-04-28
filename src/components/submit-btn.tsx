"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Send } from "lucide-react"; 
import clsx from "clsx";

type SubmitBtnProps = {
  text: string;
  className?: string;
};

export default function SubmitBtn({ text, className }: SubmitBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx(
        "group relative flex items-center justify-center gap-3 h-14 w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold uppercase tracking-widest text-sm transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-slate-800 dark:hover:bg-slate-100",
        className
      )}
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Transmitting...
        </span>
      ) : (
        <>
          {text}
          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </button>
  );
}