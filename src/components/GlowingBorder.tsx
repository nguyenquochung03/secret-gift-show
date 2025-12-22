import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowingBorderProps {
  children: ReactNode;
  className?: string;
}

const GlowingBorder = ({ children, className = "" }: GlowingBorderProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Animated gradient border */}
      <motion.div
  className="absolute -inset-1 rounded-3xl pointer-events-none"
  style={{
    background:
      "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--gold)), hsl(var(--primary)))",
    backgroundSize: "300% 100%",
    padding: "7px",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    filter: "drop-shadow(0 0 8px hsl(var(--primary) / 0.4))",
  }}
  animate={{
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
  }}
  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
/>

      <div className="relative bg-transparent rounded-3xl">{children}</div>
    </motion.div>
  );
};

export default GlowingBorder;
