import { motion } from "framer-motion";
import { Headphones, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlowingBorder from "@/components/GlowingBorder";
import PulsingHeart from "@/components/PulsingHeart";
import TypewriterText from "@/components/TypewriterText";
import PulsingHand from "./PulsingHand";

interface StartPageProps {
  onStart: () => void;
}

const StartPage = ({ onStart }: StartPageProps) => {
  return (
    <motion.div
      className="min-h-screen min-h-[100dvh] w-full flex items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0"
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
      />

      {/* Overlay nhẹ để chữ nổi hơn */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 max-w-lg w-full text-center px-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Heart */}
        <PulsingHand size={72} className="sm:w-20 sm:h-20" />

        {/* HEADPHONES NOTICE */}
        <GlowingBorder>
          <motion.div
            className="flex flex-col items-center gap-5 p-6 sm:p-8 rounded-3xl backdrop-blur-md"
            whileHover={{ scale: 1.02 }}
          >
            {/* Icon */}
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center relative"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Headphones className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </motion.div>
            </motion.div>

            {/* TEXT – TO + NỔI */}
            <h1 className="font-quicksand text-center font-bold leading-snug overflow-visible">
              <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                              text-gradient-love drop-shadow-lg leading-[1.25] pb-1">
                <TypewriterText
                  text={`Vui\nlòng\nđeo\ntai\nnghe`}
                  delay={0.5}
                  speed={0.07}
                />
              </span>

              <span className="block mt-3 text-lg sm:text-xl md:text-2xl
                              text-white/90 drop-shadow-md leading-relaxed">
                trước khi bắt đầu
              </span>
          </h1>
          </motion.div>
        </GlowingBorder>

        {/* ROTATE SCREEN */}
        <motion.div
          className="flex flex-col items-center gap-3 p-5 rounded-2xl
                     bg-white/15 backdrop-blur-md
                     border border-white/20 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 flex items-center justify-center relative"
            animate={{ rotate: [0, -90, -90, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Smartphone className="w-10 h-10 text-white" />
            <motion.span
              className="absolute -right-3 text-white text-lg"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↻
            </motion.span>
          </motion.div>

          <p className="font-quicksand text-base sm:text-lg text-white/95 text-center drop-shadow-md">
            📱 Xoay ngang màn hình để có trải nghiệm tốt nhất
          </p>
        </motion.div>

        {/* START BUTTON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/40 blur-xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Button
            onClick={onStart}
            variant="love"
            size="lg"
            className="font-quicksand relative font-bold text-lg px-8 py-6"
          >
            ❤️ BẮT ĐẦU ❤️
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StartPage;
