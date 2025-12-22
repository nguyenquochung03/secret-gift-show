import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
  shape: "circle" | "square" | "heart" | "star";
}

const shapes = {
  circle: "rounded-full",
  square: "rounded-sm",
  heart: "",
  star: "",
};

const colors = [
  "hsl(var(--primary))",
  "hsl(var(--accent))",
  "hsl(var(--gold))",
  "#FF69B4",
  "#FFD700",
  "#FF6B6B",
  "#4ECDC4",
  "#A855F7",
];

const Confetti = () => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      rotation: Math.random() * 720 - 360,
      size: 8 + Math.random() * 12,
      shape: (["circle", "square", "heart", "star"] as const)[Math.floor(Math.random() * 4)],
    }));
    setPieces(newPieces);
  }, []);

  const renderShape = (piece: ConfettiPiece) => {
    if (piece.shape === "heart") {
      return (
        <span style={{ color: piece.color, fontSize: piece.size }}>❤️</span>
      );
    }
    if (piece.shape === "star") {
      return (
        <span style={{ color: piece.color, fontSize: piece.size }}>⭐</span>
      );
    }
    return (
      <div
        className={shapes[piece.shape]}
        style={{
          width: piece.size,
          height: piece.size,
          backgroundColor: piece.color,
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: "-5%",
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(piece.id) * 100],
            rotate: [0, piece.rotation],
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {renderShape(piece)}
        </motion.div>
      ))}
    </div>
  );
};

export default Confetti;
