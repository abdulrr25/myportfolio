import React from "react";
import clsx from "clsx";

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2
      className={clsx(
        "text-4xl sm:text-5xl font-serif font-bold text-slate-900 dark:text-white leading-tight tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}