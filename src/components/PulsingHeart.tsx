import { motion } from "framer-motion";

interface PulsingHeartProps {
  size?: number;
  className?: string;
}

const PulsingHeart = ({ size = 60, className = "" }: PulsingHeartProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/30 blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Heart */}
      <motion.div
        className="relative flex items-center justify-center"
        animate={{
          scale: [1, 1.2, 1, 1.2, 1],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ fontSize: size * 0.8 }}
      >
        ❤️
      </motion.div>
    </motion.div>
  );
};

export default PulsingHeart;
