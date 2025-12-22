import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, PartyPopper, Cake, Star } from "lucide-react";
import Confetti from "@/components/Confetti";
import GlowingBorder from "@/components/GlowingBorder";
import TypewriterText from "@/components/TypewriterText";

interface FinalPageProps {
  onNotify: () => void;
}

const FinalPage = ({ onNotify }: FinalPageProps) => {
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNotify();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleNotify = () => {
    if (!notified) {
      setNotified(true);
      onNotify();
    }
  };

  return (
    <motion.div
      className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center bg-romantic p-3 sm:p-4 md:p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Enhanced confetti */}
      <Confetti />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "conic-gradient(from 0deg at 50% 50%, hsl(var(--primary) / 0.1) 0%, hsl(var(--accent) / 0.1) 25%, hsl(var(--gold) / 0.1) 50%, hsl(var(--primary) / 0.1) 75%, hsl(var(--accent) / 0.1) 100%)",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      {/* Firework effects - reduced on mobile */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`firework-${i}`}
          className="absolute hidden sm:block"
          style={{
            left: `${20 + i * 25}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        >
          {[...Array(8)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"
              initial={{ x: 0, y: 0, opacity: 0 }}
              animate={{
                x: [0, 25 * Math.cos((j * 45 * Math.PI) / 180)],
                y: [0, 25 * Math.sin((j * 45 * Math.PI) / 180)],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.8,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="z-10 text-center max-w-2xl w-full px-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      >
        {/* Bouncing emoji */}
        <motion.div
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 relative inline-block"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          🥳
          {/* Sparkles around emoji - hidden on mobile */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-lg sm:text-xl md:text-2xl hidden sm:block"
              style={{
                left: `${50 + 50 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                top: `${50 + 50 * Math.sin((i * 60 * Math.PI) / 180)}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                delay: i * 0.15,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.span>
          ))}
        </motion.div>

        {/* Message card */}
        <GlowingBorder>
          <motion.div
            className="bg-card/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-dancing text-primary mb-4 sm:mb-6"
              animate={{ 
                scale: [1, 1.03, 1],
                textShadow: [
                  "0 0 10px hsl(var(--primary) / 0.3)",
                  "0 0 30px hsl(var(--primary) / 0.6)",
                  "0 0 10px hsl(var(--primary) / 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <TypewriterText text="Hé hé đủ quao chưa?" speed={0.1} />
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-quicksand mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Nhưng chưa dừng ở đóa đâu....
            </motion.p>

            {/* Animated icons row */}
            <motion.div
              className="flex items-center justify-center gap-4 sm:gap-6 text-4xl sm:text-5xl md:text-6xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2, type: "spring" }}
            >
              <motion.span
                animate={{ 
                  rotate: [-15, 15, -15],
                  y: [0, -8, 0],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                🎂
              </motion.span>
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-primary fill-primary" />
              </motion.div>
              <motion.span
                animate={{ 
                  rotate: [15, -15, 15],
                  y: [0, -8, 0],
                }}
                transition={{ duration: 0.8, repeat: Infinity, delay: 0.2 }}
              >
                🎁
              </motion.span>
            </motion.div>

            {/* More decorative elements */}
            <motion.div
              className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {["🎉", "💕", "🎊", "💖", "🎈"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-xl sm:text-2xl md:text-3xl"
                  animate={{
                    y: [0, -12, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            {/* Notification status */}
            <motion.div
              className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
            >
              {notified ? (
                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-3 text-primary bg-primary/10 rounded-full py-2 sm:py-3 px-4 sm:px-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  <motion.div animate={{ rotate: [0, 20, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                  <span className="font-quicksand font-medium text-xs sm:text-sm md:text-base text-center">
                    Đã thông báo cho bé Én rồi nha! Đợi tí...
                  </span>
                  <motion.div animate={{ rotate: [0, -20, 0] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    <Cake className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center justify-center gap-2 sm:gap-3 text-muted-foreground"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </motion.div>
                  <span className="font-quicksand text-xs sm:text-sm md:text-base">Đang chuẩn bị bất ngờ tiếp theo...</span>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </GlowingBorder>
      </motion.div>

      {/* Floating hearts - reduced on mobile */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-5%",
            fontSize: 12 + Math.random() * 18,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, 360],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FinalPage;
