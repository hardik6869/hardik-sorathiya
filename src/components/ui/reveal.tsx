"use client";

import * as m from "motion/react-m";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

/** Fades and rises content once as it scrolls into view. Transform and opacity only. */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "li" ? m.li : m.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
