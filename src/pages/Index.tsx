import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import StartPage from "@/components/StartPage";
import WelcomePage from "@/components/WelcomePage";
import WarningPage from "@/components/WarningPage";
import VideoPage from "@/components/VideoPage";
import FinalPage from "@/components/FinalPage";
import FloatingHearts from "@/components/FloatingHearts";
import Sparkles from "@/components/Sparkles";
import { toast } from "@/hooks/use-toast";

type PageState = "start" | "welcome" | "warning" | "video" | "final";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<PageState>("start");

  const handleStart = () => {
    setCurrentPage("welcome");
  };

  const handleChooseO = () => {
    setCurrentPage("video");
  };

  const handleChooseX = () => {
    setCurrentPage("warning");
  };

  const handleGoBack = () => {
    setCurrentPage("welcome");
  };

  const handleVideoEnd = () => {
    setCurrentPage("final");
  };

  const handleNotify = () => {
    console.log("🎂 THÔNG BÁO: Video đã xem xong! Mang bánh kem vào!");
    
    toast({
      title: "🎉 Đã hoàn thành!",
      description: "Bé Én ơi, anh ấy đã xem xong video rồi! Mang bánh kem vào thôi! 🎂",
      duration: 10000,
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <FloatingHearts />
      <Sparkles />
      
      <AnimatePresence mode="wait">
        {currentPage === "start" && (
          <StartPage key="start" onStart={handleStart} />
        )}
        {currentPage === "welcome" && (
          <WelcomePage 
            key="welcome" 
            onChooseO={handleChooseO} 
            onChooseX={handleChooseX} 
          />
        )}
        {currentPage === "warning" && (
          <WarningPage key="warning" onGoBack={handleGoBack} />
        )}
        {currentPage === "video" && (
          <VideoPage key="video" onVideoEnd={handleVideoEnd} />
        )}
        {currentPage === "final" && (
          <FinalPage key="final" onNotify={handleNotify} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
