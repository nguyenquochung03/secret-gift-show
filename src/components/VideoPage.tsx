import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Heart, Maximize2, Minimize2 } from "lucide-react";

interface VideoPageProps {
  onVideoEnd: () => void;
}

const VideoPage = ({ onVideoEnd }: VideoPageProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        setHasStarted(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <motion.div
      className="min-h-screen min-h-[100dvh] w-full flex flex-col items-center justify-center p-2 sm:p-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(350 30% 10%) 0%, hsl(350 40% 5%) 100%)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Ambient light effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] md:w-[800px] md:h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating hearts in background - reduced on mobile */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            fontSize: 15 + Math.random() * 20,
          }}
          initial={{ y: "100vh" }}
          animate={{ y: "-100vh" }}
          transition={{
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Video container with glow */}
      <motion.div
        className="relative w-full max-w-6xl h-[80vh] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden mx-2 flex items-center justify-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        style={{
          boxShadow: "0 0 40px hsl(var(--primary) / 0.3), 0 0 80px hsl(var(--primary) / 0.1)",
        }}
      >
        {/* Animated border */}
        <motion.div
          className="absolute -inset-0.5 sm:-inset-1 rounded-xl sm:rounded-2xl md:rounded-3xl z-0"
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--gold)), hsl(var(--primary)))",
            backgroundSize: "300% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="relative w-full h-full flex items-center justify-center bg-black rounded-xl">
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            onEnded={onVideoEnd}
            playsInline
            poster="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800"
          >
            <source src="./video.mp4" type="video/mp4" />
          </video>

          {/* Play overlay */}
          {!hasStarted && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/60 backdrop-blur-sm cursor-pointer"
              onClick={handlePlayPause}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {/* Pulsing play button */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Ripple effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2 border-primary"
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.6,
                      repeat: Infinity,
                    }}
                  />
                ))}
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow-pink relative z-10"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      "0 0 20px hsl(var(--primary) / 0.5)",
                      "0 0 40px hsl(var(--primary) / 0.8)",
                      "0 0 20px hsl(var(--primary) / 0.5)",
                    ],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-foreground ml-1 sm:ml-2" />
                </motion.div>
              </motion.div>
              
              <motion.p 
                className="mt-4 sm:mt-6 text-primary-foreground text-base sm:text-lg md:text-xl font-quicksand flex items-center gap-2"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-center">Nhấn để xem bất ngờ</span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </motion.p>
            </motion.div>
          )}

          {/* Controls */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 bg-gradient-to-t from-foreground/90 to-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <motion.button
                onClick={handlePlayPause}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center hover:scale-105 transition-transform"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
                ) : (
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground ml-0.5 sm:ml-1" />
                )}
              </motion.button>
              <motion.button
                onClick={toggleMute}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-card/50 flex items-center justify-center hover:bg-card/70 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {isMuted ? (
                  <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-foreground" />
                ) : (
                  <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-foreground" />
                )}
              </motion.button>
              <div className="flex-1" />
              <motion.span 
                className="text-primary-foreground/70 text-xs sm:text-sm font-quicksand items-center gap-1 sm:gap-2 hidden sm:flex"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-base sm:text-lg">🎬</span> Video bất ngờ
              </motion.span>
              <motion.button
                onClick={toggleFullscreen}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-card/50 flex items-center justify-center hover:bg-card/70 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-foreground" />
                ) : (
                  <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary-foreground" />
                )}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative hearts around video - hidden on mobile */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-primary text-lg sm:text-xl md:text-2xl hidden sm:block"
          style={{
            left: `${10 + (i % 4) * 20}%`,
            top: i < 4 ? "8%" : "88%",
          }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            repeat: Infinity,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Sparkle effects - reduced on mobile */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute text-sm sm:text-base"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VideoPage;
