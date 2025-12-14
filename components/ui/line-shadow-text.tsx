import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface LineShadowTextProps {
  shadowColor?: string;
  as?: "span" | "div" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: string;
  className?: string;
  [key: string]: any;
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

  const baseProps = {
    style: { "--shadow-color": shadowColor } as React.CSSProperties,
    className: cn(
      "relative z-0 inline-flex",
      "after:absolute after:left-[0.04em] after:top-[0.04em] after:content-[attr(data-text)]",
      "after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)]",
      "after:-z-10 after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent",
      "after:animate-line-shadow",
      className,
    ),
    "data-text": content,
    ...props,
  };

  // Verwende motion.span direkt für bessere Typ-Sicherheit
  if (Component === "div") {
    return <motion.div {...baseProps}>{content}</motion.div>;
  }
  if (Component === "p") {
    return <motion.p {...baseProps}>{content}</motion.p>;
  }
  if (Component === "h1") {
    return <motion.h1 {...baseProps}>{content}</motion.h1>;
  }
  if (Component === "h2") {
    return <motion.h2 {...baseProps}>{content}</motion.h2>;
  }
  if (Component === "h3") {
    return <motion.h3 {...baseProps}>{content}</motion.h3>;
  }
  if (Component === "h4") {
    return <motion.h4 {...baseProps}>{content}</motion.h4>;
  }
  if (Component === "h5") {
    return <motion.h5 {...baseProps}>{content}</motion.h5>;
  }
  if (Component === "h6") {
    return <motion.h6 {...baseProps}>{content}</motion.h6>;
  }

  return <motion.span {...baseProps}>{content}</motion.span>;
}

