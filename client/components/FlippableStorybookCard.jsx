import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, Star, Award } from "lucide-react";

// Custom StorybookPage component with fixed layout
const StorybookPage = ({ imageUrl, reflection, badgeTitle, aiAvatarUrl }) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const reactions = [
    { icon: "❤️", label: "Love it!", color: "#FF6B6B" },
    { icon: "😃", label: "So fun!", color: "#4ECDC4" },
    { icon: "✨", label: "Magical!", color: "#9333EA" },
    { icon: "🌟", label: "Amazing!", color: "#F39C12" },
  ];

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setTimeout(() => setSelectedReaction(null), 2000);
  };

  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
    setTimeout(() => setIsAudioPlaying(false), 3000);
  };

  return (
    <div className="flex justify-end w-full mb-8 px-4">
      <div className="max-w-md w-full">
        {/* Storybook Page Container */}
        <motion.div
          className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 rounded-r-2xl shadow-2xl overflow-hidden"
          style={{
            fontFamily: '"Kalam", "Comic Neue", cursive, sans-serif',
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(160, 82, 45, 0.02) 0%, transparent 50%),
              linear-gradient(90deg, rgba(139, 69, 19, 0.05) 0%, transparent 2%),
              repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(139, 69, 19, 0.01) 21px, rgba(139, 69, 19, 0.01) 22px)
            `,
            boxShadow: `
              inset 4px 0 8px rgba(139, 69, 19, 0.1),
              0 0 0 1px rgba(139, 69, 19, 0.1),
              0 8px 32px rgba(0, 0, 0, 0.15),
              0 4px 16px rgba(0, 0, 0, 0.1)
            `,
            minHeight: "520px",
            aspectRatio: "3/4",
          }}
        >
          {/* Book Binding Edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b from-amber-200 via-orange-200 to-amber-300"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 8px,
                  rgba(139, 69, 19, 0.1) 8px,
                  rgba(139, 69, 19, 0.1) 10px
                )
              `,
              boxShadow: "inset -2px 0 4px rgba(139, 69, 19, 0.2)",
            }}
          />

          {/* AI Avatar - positioned at top-left */}
          {aiAvatarUrl && (
            <div className="absolute top-4 left-8 z-10">
              <motion.div
                className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-md bg-white p-0.5"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={aiAvatarUrl}
                  alt="AI Companion"
                  className="w-full h-full object-cover rounded-full"
                />
              </motion.div>
            </div>
          )}

          {/* Content Container */}
          <div className="relative flex flex-col h-full pt-8 px-8 pb-8">
            {/* Badge Title - positioned with proper spacing */}
            <div className="relative mb-6">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2
                  className="text-lg font-bold text-amber-800 mb-2"
                  style={{
                    fontFamily: '"Kalam", cursive',
                    textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
                    fontSize: "18px",
                    lineHeight: "1.2",
                  }}
                >
                  "{badgeTitle || "Amazing Creation!"}"
                </h2>
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
              </motion.div>
            </div>

            {/* Image Section - with proper spacing */}
            <div className="relative mb-4">
              <motion.div
                className="relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{
                    border: "3px solid #d4af37",
                    padding: "6px",
                    boxShadow:
                      "inset 0 0 8px rgba(255, 215, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="relative rounded-md overflow-hidden bg-white p-2">
                    <img
                      src={imageUrl}
                      alt="A magical illustration"
                      className="w-full h-40 object-cover rounded-sm"
                      style={{
                        filter: "contrast(1.1) saturate(1.2) brightness(1.05)",
                      }}
                    />
                    {/* Vintage photo corners */}
                    <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-amber-700 opacity-30" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-amber-700 opacity-30" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-amber-700 opacity-30" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-amber-700 opacity-30" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Story Text - with scrollable description */}
            <div className="flex-1 mb-6">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Decorative initial letter */}
                <motion.div
                  className="float-left mr-3 mb-1"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <div
                    className="w-10 h-10 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg flex items-center justify-center text-xl font-bold text-amber-800 shadow-lg"
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                      border: "2px solid #d4af37",
                    }}
                  >
                    {reflection.charAt(0).toUpperCase()}
                  </div>
                </motion.div>

                {/* Scrollable text container */}
                <div
                  className="text-amber-900 leading-relaxed overflow-y-auto"
                  style={{
                    fontFamily: '"Kalam", cursive',
                    fontSize: "14px",
                    textAlign: "justify",
                    textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
                    lineHeight: "1.5",
                    maxHeight: "120px",
                    paddingRight: "4px",
                  }}
                >
                  <div
                    style={{
                      // Hide scrollbar for WebKit browsers
                      scrollbarWidth: "none", // Firefox
                      msOverflowStyle: "none", // IE/Edge
                    }}
                    className="pr-2"
                  >
                    <style jsx>{`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    {reflection.substring(1)}
                  </div>
                </div>

                {/* AI Companion signature */}
                <motion.div
                  className="flex items-center justify-end gap-2 mt-3 opacity-70"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <span
                    className="text-xs text-amber-700 italic font-medium"
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                    }}
                  >
                    - Your Magical Friend
                  </span>
                  {/* Voice playback button */}
                  <motion.button
                    onClick={handleAudioPlay}
                    className="p-1 rounded-full bg-amber-100 hover:bg-amber-200 transition-colors opacity-60 hover:opacity-100"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Volume2
                      className={`w-3 h-3 text-amber-700 ${
                        isAudioPlaying ? "animate-pulse" : ""
                      }`}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Emoji Reactions - properly positioned at bottom */}
            <div className="relative">
              <motion.div
                className="flex justify-center items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div className="text-xs text-amber-700 opacity-60 font-medium mr-2">
                  How does this make you feel?
                </div>
                {reactions.map((reaction, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleReactionClick(reaction)}
                    className="relative rounded-full transition-all duration-300"
                    style={{
                      background:
                        selectedReaction?.icon === reaction.icon
                          ? `linear-gradient(135deg, ${reaction.color}20, ${reaction.color}10)`
                          : "linear-gradient(135deg, rgba(245, 245, 220, 0.8), rgba(255, 248, 220, 0.9))",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      boxShadow:
                        selectedReaction?.icon === reaction.icon
                          ? `0 4px 12px ${reaction.color}40, inset 0 1px 2px rgba(255,255,255,0.8)`
                          : "0 2px 8px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.8)",
                      width: "44px", // Minimum 40px + padding
                      height: "44px",
                      minWidth: "44px",
                      minHeight: "44px",
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="text-lg">{reaction.icon}</span>

                    {/* Reaction feedback */}
                    <AnimatePresence>
                      {selectedReaction?.icon === reaction.icon && (
                        <motion.div
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-800 text-yellow-100 text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium"
                          style={{
                            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                            border: "1px solid rgba(212, 175, 55, 0.5)",
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.5 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.5 }}
                        >
                          {reaction.label}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Realistic Page Curl */}
          <div className="absolute bottom-0 right-0 w-10 h-10 pointer-events-none">
            <div
              className="absolute bottom-0 right-0 w-10 h-10"
              style={{
                background: `linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(245, 245, 220, 0.8) 75%, rgba(255, 248, 220, 0.9) 100%)`,
                clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                transform: "rotateX(15deg) rotateY(-15deg)",
                transformOrigin: "bottom right",
                filter: "drop-shadow(-2px -2px 4px rgba(139, 69, 19, 0.2))",
              }}
            />
          </div>

          {/* Sparkle effects */}
          <AnimatePresence>
            {selectedReaction && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: selectedReaction.color,
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      y: [0, -50],
                      x: [0, (Math.random() - 0.5) * 50],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const FlippableStorybookCard = ({ pages = [], index = 0 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0);

  // Stagger animation entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  if (pages.length === 0) return null;

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction > 0 ? "left center" : "right center",
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction < 0 ? "left center" : "right center",
    }),
  };

  return (
    <div className="flex justify-end w-full mb-8 px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative max-w-md w-full"
            initial={{ opacity: 0, x: 100, rotateY: -15, rotateX: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
            exit={{ opacity: 0, x: 100, rotateY: 15, rotateX: -10 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            style={{
              perspective: "1200px",
            }}
          >
            {/* Book Container with Navigation */}
            <div className="relative">
              {/* Navigation Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30 pointer-events-none">
                <motion.button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <ChevronLeft className="w-5 h-5 text-amber-800" />
                </motion.button>

                <motion.button
                  onClick={nextPage}
                  disabled={currentPage === pages.length - 1}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-amber-800" />
                </motion.button>
              </div>

              {/* Page Dots Indicator - moved above page number */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
                <div className="flex gap-2">
                  {pages.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToPage(idx)}
                      className="w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto"
                      style={{
                        backgroundColor:
                          idx === currentPage
                            ? "#d4af37"
                            : "rgba(212, 175, 55, 0.3)",
                        boxShadow:
                          idx === currentPage
                            ? "0 0 8px rgba(212, 175, 55, 0.6)"
                            : "none",
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
              </div>

              {/* Page Number - positioned at bottom-right corner */}
              <div className="absolute bottom-2 right-4 z-30 pointer-events-none">
                <div
                  className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-amber-800 text-xs font-medium shadow-sm"
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                  }}
                >
                  {currentPage + 1} / {pages.length}
                </div>
              </div>

              {/* Flippable Pages Container */}
              <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateY: {
                        duration: 0.8,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.6 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Custom storybook page layout */}
                    <div className="transform-gpu">
                      <StorybookPage
                        imageUrl={pages[currentPage].imageUrl}
                        reflection={pages[currentPage].reflection}
                        badgeTitle={pages[currentPage].badgeTitle}
                        aiAvatarUrl={pages[currentPage].aiAvatarUrl}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page flip shadow effect */}
              <AnimatePresence>
                {direction !== 0 && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-20"
                      style={{
                        background:
                          direction > 0
                            ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                            : "linear-gradient(-90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Swipe gesture area for mobile */}
              <div
                className="absolute inset-0 z-10 pointer-events-auto"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const startX = touch.clientX;

                  const handleTouchEnd = (endEvent) => {
                    const endTouch = endEvent.changedTouches[0];
                    const endX = endTouch.clientX;
                    const deltaX = endX - startX;

                    if (Math.abs(deltaX) > 50) {
                      // Minimum swipe distance
                      if (deltaX > 0 && currentPage > 0) {
                        prevPage(); // Swipe right = previous page
                      } else if (deltaX < 0 && currentPage < pages.length - 1) {
                        nextPage(); // Swipe left = next page
                      }
                    }

                    document.removeEventListener("touchend", handleTouchEnd);
                  };

                  document.addEventListener("touchend", handleTouchEnd);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlippableStorybookCard;
