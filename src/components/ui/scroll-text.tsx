"use client";

import { useRef } from "react";
import * as m from "motion/react-m";
import { useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

type ScrollTextProps = { text: string; className?: string };

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  // Interpolate between two accessible colors (muted → fg), so every state passes contrast.
  const color = useTransform(progress, range, ["var(--muted)", "var(--fg)"]);
  return <m.span style={{ color }}>{children}</m.span>;
}

/** Paragraph whose words light up in reading order as it scrolls through the viewport. */
export function ScrollText({ text, className }: ScrollTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = text.split(" ");

  // Keep the ref attached in both branches: useScroll above always tracks this element.
  if (reduce)
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          {i > 0 ? " " : null}
          <Word progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
            {word}
          </Word>
        </span>
      ))}
    </p>
  );
}
