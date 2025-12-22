import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowingBorder from "@/components/GlowingBorder";
import TypewriterText from "@/components/TypewriterText";
import { useEffect, useRef } from "react";

interface WarningPageProps {
  onGoBack: () => void;
}

const WarningPage = ({ onGoBack }: WarningPageProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.35;
      audioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <motion.div
      className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(
            135deg,
            #fff1e6 0%,
            #ffd6c9 25%,
            #ff9f80 55%,
            #ff5a5f 85%,
            #ff2d55 100%
          )
        `,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <audio ref={audioRef} loop>
        <source src="./warning.mp3" type="audio/mpeg" />
      </audio>
      {/* Dramatic background effects */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, hsl(0 80% 90% / 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, hsl(0 80% 90% / 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, hsl(0 80% 90% / 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 50%, hsl(0 80% 90% / 0.5) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Shaking screen effect overlay */}
      <motion.div
        className="absolute inset-0 border-2 sm:border-4 border-destructive/20 pointer-events-none"
        animate={{
          x: [0, -2, 2, -2, 0],
          y: [0, 1, -1, 1, 0],
        }}
        transition={{ duration: 0.1, repeat: Infinity }}
      />
      
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 z-10 max-w-4xl w-full px-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Character with baseball bat */}
        <motion.div
          className="relative flex-shrink-0"
          animate={{ 
            x: [0, -10, 10, -10, 10, 0],
            rotate: [0, -2, 2, -2, 0],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          {/* Danger aura */}
          <motion.div
            className="absolute -inset-2 sm:-inset-4 rounded-2xl sm:rounded-3xl"
            style={{
              background: "radial-gradient(circle, hsl(0 80% 60% / 0.2) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          
          <motion.div
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden relative"
            style={{
              boxShadow: "0 0 30px hsl(0 80% 60% / 0.3)",
            }}
          >
            <img
              src="./avatar_2.jpg"
              alt="Angry character"
              className="w-full h-full object-cover"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-destructive/40 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Floating angry emojis around character - hidden on mobile */}
          {["⚡", "🔥", "😠", "👊", "💥"].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-xl sm:text-2xl md:text-3xl hidden sm:block"
              style={{
                left: `${-5 + (i % 2) * 100}%`,
                top: `${20 + i * 18}%`,
              }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 20, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Warning message */}
        <motion.div
          className="
            z-10 w-full flex flex-col items-center justify-center
            text-center px-4 sm:px-6
          "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ICON TỨC GIẬN */}
          <motion.div
            className="text-5xl sm:text-6xl md:text-7xl mb-4"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          >
            🔥
          </motion.div>

          {/* MAIN WARNING TEXT */}
          <motion.h1
            className="
              font-quicksand font-black
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              leading-[1.5]
              text-[#e11d48]
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]
              drop-shadow-[0_8px_30px_rgba(225,29,72,1)]
            "
            animate={{
              x: [0, -2, 2, -2, 0],
            }}
            transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 1 }}
          >
            <TypewriterText
              text='Anh muốn tự giác quay lại bấm "O" hay muốn em ra đập cho trận hả?'
              speed={0.04}
            />
          </motion.h1>

          {/* SUB WARNING */}
          <motion.p
            className="
              mt-4 sm:mt-5
              font-quicksand font-bold
              text-base sm:text-lg md:text-xl
              text-red-900
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Nghĩ kỹ đi nha... 🌋
          </motion.p>

          {/* CTA */}
          <motion.button
            onClick={onGoBack}
            className="
              mt-8 sm:mt-10
              font-quicksand font-black
              text-sm sm:text-base md:text-lg
              text-white
              px-6 sm:px-8 py-3 sm:py-4
              rounded-full
              bg-gradient-to-r from-red-700 via-red-600 to-red-700
              shadow-[0_0_30px_rgba(225,29,72,0.9)]
            "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(225,29,72,0.6)",
                "0 0 40px rgba(225,29,72,1)",
                "0 0 20px rgba(225,29,72,0.6)",
              ],
            }}
            transition={{ duration: 1.2, repeat: Infinity }}
          >
            😅 Anh xin lỗi, để anh quay lại bấm O
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Flying angry emojis - reduced on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl sm:text-2xl md:text-3xl"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-100vh",
            opacity: [0, 1, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        >
          {["😠", "💢", "🔥", "💥", "⚡"][Math.floor(Math.random() * 5)]}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WarningPage;
