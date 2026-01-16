import { motion } from "framer-motion";

interface EclipseCircleProps {
  size?: number;
  className?: string;
}

export default function EclipseCircle({ size = 500, className = "" }: EclipseCircleProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`absolute rounded-full animate-pulse-glow ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, 
          hsl(0 80% 45% / 1) 0%, 
          hsl(0 80% 35% / 0.8) 30%, 
          hsl(0 80% 25% / 0.4) 60%, 
          transparent 80%)`,
      }}
    />
  );
}
