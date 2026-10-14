"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

/**
 * LazyMotion with `domAnimation` ships only the features the site uses (in-view animations),
 * keeping Motion's footprint small. MotionConfig honors the visitor's reduced-motion setting.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
