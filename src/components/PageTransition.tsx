import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants: Variants = {
  initial: {
    x: "100%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      duration: 0.6,
    },
  },
  exit: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      duration: 0.6,
    },
  },
};

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      className="page-transition"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}
