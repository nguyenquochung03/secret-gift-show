import { motion } from "framer-motion";

interface PulsingHandProps {
  size?: number;
  className?: string;
}

const PulsingHand = ({ size = 60, className = "" }: PulsingHandProps) => {
  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hand icon */}
      <motion.div
        className="relative flex items-center justify-center select-none"
        animate={{
          scale: [1, 1.25, 1],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ fontSize: size * 0.8 }}
      >
        👇🏻
      </motion.div>
    </motion.div>
  );
};

export default PulsingHand;
