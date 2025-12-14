import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface LineShadowTextProps extends Omit<HTMLMotionProps<"span">, "children"> {
  shadowColor?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  as: Component = "span",
  ...props
}: LineShadowTextProps) {
  const content = typeof children === "string" ? children : null;

  if (!content) {
    throw new Error("LineShadowText only accepts string content");
  }

  // Verwende motion.span direkt für bessere Typ-Sicherheit
  const MotionSpan = motion.span;
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const MotionH1 = motion.h1;
  const MotionH2 = motion.h2;
  const MotionH3 = motion.h3;
  const MotionH4 = motion.h4;
  const MotionH5 = motion.h5;
  const MotionH6 = motion.h6;

  const MotionComponent = 
    Component === "div" ? MotionDiv :
    Component === "p" ? MotionP :
    Component === "h1" ? MotionH1 :
    Component === "h2" ? MotionH2 :
    Component === "h3" ? MotionH3 :
    Component === "h4" ? MotionH4 :
    Component === "h5" ? MotionH5 :
    Component === "h6" ? MotionH6 :
    MotionSpan;

  return (
    <MotionComponent
      style={{ "--shadow-color": shadowColor } as React.CSSProperties}
      className={cn(
        "relative z-0 inline-flex",
        "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
        "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
        "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
        "after:animate-line-shadow",
        className,
      )}
      data-text={content}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}

