import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlowingBorder from "@/components/GlowingBorder";
import TypewriterText from "@/components/TypewriterText";
import PulsingHeart from "@/components/PulsingHeart";
import { toast } from "sonner";

interface WelcomePageProps {
  onChooseO: () => void;
  onChooseX: () => void;
}

const WelcomePage = ({ onChooseO, onChooseX }: WelcomePageProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showTransition, setShowTransition] = useState(false);
  const [audioGuideText, setAudioGuideText] = useState("");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }

  }, []);

  const handleChooseO = () => {
    setShowTransition(true);
    toast.success("💕 Bây giờ cùng tận hưởng nào!", {
      duration: 2000,
      position: "top-center",
    });
    setTimeout(() => {
      onChooseO();
    }, 2500);
  };

  return (
    <motion.div
      className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center bg-romantic p-3 sm:p-4 md:p-6 relative overflow-hidden"
      style={{
          backgroundImage: "url('/background.jpg')",
          backgroundSize: "120% 120%",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
        }}
        animate={{
          backgroundPosition: [
            "30% 30%",
            "70% 70%",
            "30% 70%",
            "70% 30%",
            "30% 30%",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <audio ref={audioRef} loop>
        <source
          src="/Model Taxi (모범택시).mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* Transition overlay */}
      <AnimatePresence>
        {showTransition && (
          <motion.div
            className="absolute inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="text-6xl sm:text-7xl md:text-8xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                💕
              </motion.div>
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl font-dancing text-primary font-bold"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Bây giờ cùng tận hưởng nào!
              </motion.h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio guide banner */}
      <AnimatePresence>
        {audioGuideText && (
          <motion.div
            className="absolute top-2 sm:top-4 left-2 right-2 sm:left-4 sm:right-4 z-20"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
          >
            <div className="bg-card/95 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-romantic border border-primary/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  🎵
                </motion.div>
                <p className="text-xs sm:text-sm md:text-base text-foreground font-quicksand">
                  {audioGuideText}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 z-10 max-w-5xl w-full px-2"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {/* Character with animated border */}
        <motion.div
          className="relative flex-shrink-0"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        >
          {/* Orbiting hearts - hidden on small screens */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-xl sm:text-2xl hidden sm:block"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: [0, 60 * Math.cos((i * 120 * Math.PI) / 180), 0],
                y: [0, 60 * Math.sin((i * 120 * Math.PI) / 180), 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              💕
            </motion.div>
          ))}
          
          <motion.div
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden relative"
            style={{
              boxShadow: "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)",
                "0 0 50px hsl(var(--primary) / 0.6), 0 0 80px hsl(var(--primary) / 0.3)",
                "0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/avatar.jpg"
              alt="Character"
              className="
                w-full h-full
                object-cover object-center
                scale-[1.05]
                rounded-full
              "
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Message box */}
        <motion.div
            className="z-10 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* MAIN TITLE */}
            <motion.h1
            className="
                mt-4 sm:mt-5
                font-dancing font-black
                text-2xl sm:text-5xl
                leading-[1.4]
                pb-[0.3em]

                text-[#e11d48]

                drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                drop-shadow-[0_8px_25px_rgba(255,0,85,1)]
              "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
          >
            CHÀO MỪNG ANH ĐÃ ĐẾN VỚI DỊCH VỤ
          </motion.h1>  


            {/* SERVICE NAME */}
            <motion.h2
              className="
                mt-4 sm:mt-5
                font-dancing font-black
                text-2xl sm:text-3xl
                leading-[1.4]
                pb-[0.3em]

                text-[#ff0055]

                drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]
                drop-shadow-[0_8px_25px_rgba(255,0,85,1)]
              "
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              “CHỈ YÊU MÌNH ANH<br />CỦA ÉN TRẦN SG”
            </motion.h2>


            {/* DESCRIPTION */}
            <motion.p
              className="
                mt-5 sm:mt-6 max-w-3xl
                font-quicksand font-bold
                text-sm sm:text-base md:text-lg
                text-white/90
                leading-relaxed
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              NƠI CHUYÊN CUNG CẤP NHỮNG DỊCH VỤ YÊU THƯƠNG, CHĂM SÓC,
              TẠO RA TIẾNG CƯỜI
            </motion.p>

            <motion.p
              className="
                mt-3
                font-quicksand font-bold
                text-sm sm:text-base md:text-lg
                text-white
                drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
            >
              ĐẶC BIỆT HƠN HẾT — CHỈ PHỤC VỤ DỊCH VỤ NÀY
              <br />
              CHO ANH{" "}
              <span className="text-[#ff0055] text-lg sm:text-xl font-black">
                NGUYỄN ĐỨC HIẾU
              </span>
            </motion.p>

            {/* CTA */}
            <motion.p
              className="
                mt-6 sm:mt-8
                font-quicksand font-bold
                text-xs sm:text-sm md:text-base
                text-white/80
                drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              NẾU MUỐN CHƯƠNG TRÌNH TIẾP TỤC,
              HÃY BẤM <span className="text-[#e11d48]">“O”</span>
              <br />
              KHÔNG THÍCH THÌ BẤM{" "}
              <span className="text-[#e11d48]">“X”</span>
            </motion.p>
          </motion.div>
      </motion.div>

      {/* Enhanced choice buttons */}
      <motion.div
        className="flex items-center gap-6 sm:gap-8 md:gap-12 mt-6 sm:mt-8 md:mt-12 z-10"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        {/* O Button */}
        <motion.button
          onClick={handleChooseO}
          className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden group"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Spinning ring */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full border-2 sm:border-4 border-dashed border-primary/50" />
          </motion.div>
          
          {/* Inner ring */}
          <motion.div
            className="absolute inset-1 sm:inset-2"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-full border sm:border-2 border-dotted border-accent/50" />
          </motion.div>

          {/* Center */}
          <div className="
            absolute inset-2 sm:inset-4
            rounded-full
            overflow-hidden
            bg-gradient-to-br from-primary/20 to-accent/20
            backdrop-blur-sm
            flex items-center justify-center
          ">
          <motion.img
              src="/O.jpg"
              alt="O choice"
              className="w-12 sm:w-16 md:w-20 lg:w-24 object-contain drop-shadow-[0_0_20px_hsl(var(--primary)/0.7)]"
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))",
                  "drop-shadow(0 0 30px hsl(var(--primary) / 0.9))",
                  "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Label */}
          <motion.div
            className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm text-primary font-quicksand font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Xem bất ngờ 💕
          </motion.div>
        </motion.button>

        {/* X Button */}
        <motion.button
          onClick={onChooseX}
          className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden group"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            x: [0, -3, 3, -3, 3, 0],
          }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        >
          {/* Warning rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 sm:border-4 border-destructive/30"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Center */}
          <div className="
            absolute inset-2 sm:inset-4
            rounded-full
            overflow-hidden
            bg-gradient-to-br from-primary/20 to-accent/20
            backdrop-blur-sm
            flex items-center justify-center
          ">
            <motion.img
              src="/X.jpg"
              alt="X choice"
              className="w-12 sm:w-16 md:w-20 lg:w-24 object-contain drop-shadow-[0_0_20px_hsl(var(--primary)/0.7)]"
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))",
                  "drop-shadow(0 0 30px hsl(var(--primary) / 0.9))",
                  "drop-shadow(0 0 10px hsl(var(--primary) / 0.5))",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Warning icon */}
          <motion.div 
            className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-lg sm:text-2xl"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            ⚠️
          </motion.div>

          {/* Label */}
          <motion.div
            className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm text-destructive font-quicksand font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Chắc không? 😏
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Floating emojis - hidden on very small screens */}
      {["💕", "💖", "💗", "💘", "💝"].map((emoji, i) => (
        <motion.div
          key={i}
          className="absolute text-lg sm:text-2xl hidden sm:block"
          style={{
            left: `${10 + i * 20}%`,
            bottom: "5%",
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default WelcomePage;
