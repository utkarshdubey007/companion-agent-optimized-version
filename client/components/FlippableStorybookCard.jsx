import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Volume2, Star, Award } from "lucide-react";

// Custom StorybookPage component with fixed layout
const StorybookPage = ({
  imageUrl,
  reflection,
  badgeTitle,
  aiAvatarUrl,
  currentTheme,
}) => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const reactions = [
    { icon: "🥰", label: "Super cute!", color: "#ff69b4" },
    { icon: "🤩", label: "So cool!", color: "#00bcd4" },
    { icon: "✨", label: "Magical!", color: "#9c27b0" },
    { icon: "🌈", label: "Amazing!", color: "#ff9800" },
    { icon: "🎉", label: "Awesome!", color: "#4caf50" },
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
    <div className="w-full">
      <div className="max-w-full w-full">
        {/* Storybook Page Container */}
        <motion.div
          className={`relative bg-gradient-to-br ${currentTheme.background} rounded-2xl shadow-2xl overflow-hidden z-40`}
          style={{
            fontFamily: '"Kalam", "Comic Neue", cursive, sans-serif',
            backgroundImage: `
              radial-gradient(circle at 20% 20%, ${currentTheme.patternColors[0]}60 0%, ${currentTheme.buttonBg} 50%),
              radial-gradient(circle at 80% 30%, ${currentTheme.patternColors[1]}40 0%, ${currentTheme.buttonBg} 50%),
              radial-gradient(circle at 40% 80%, ${currentTheme.patternColors[2]}30 0%, ${currentTheme.buttonBg} 50%),
              linear-gradient(135deg, ${currentTheme.patternColors[0]}20 0%, ${currentTheme.buttonBg} 30%)
            `,
            boxShadow: `
              0 0 0 2px ${currentTheme.borderColor}40,
              0 8px 32px ${currentTheme.shadowColor}20,
              0 4px 16px ${currentTheme.shadowColor}15,
              inset 0 1px 4px rgba(255,255,255,0.6)
            `,
            minHeight: "300px",
            maxHeight: "320px",
            aspectRatio: "3/4",
            border: `3px solid ${currentTheme.borderColor}90`,
            zIndex: 40,
            position: "relative",
          }}
        >
          {/* Book Binding Edge */}
          <div
            className={`absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-b ${currentTheme.binding}`}
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  ${currentTheme.buttonBg},
                  ${currentTheme.buttonBg} 10px,
                  ${currentTheme.borderColor}40 11px,
                  ${currentTheme.borderColor}40 13px
                ),
                linear-gradient(90deg, ${currentTheme.patternColors[0]}40 0%, transparent 100%)
              `,
              boxShadow: `inset 2px 0 6px ${currentTheme.shadowColor}30, inset -1px 0 3px ${currentTheme.borderColor}50`,
              border: `1px solid ${currentTheme.borderColor}60`,
              borderLeft: "none",
            }}
          />

          {/* AI Avatar - positioned at top-left */}
          {aiAvatarUrl && (
            <div className="absolute top-4 left-8 z-20">
              <motion.button
                className="w-12 h-12 rounded-full overflow-hidden shadow-lg cursor-pointer relative"
                style={{
                  border: `3px solid ${currentTheme.borderColor}`,
                  background: `linear-gradient(135deg, ${currentTheme.buttonBg}, ${currentTheme.patternColors[0]}50)`,
                  boxShadow: `0 4px 15px ${currentTheme.shadowColor}40, 0 0 0 1px ${currentTheme.borderColor}20, inset 0 1px 3px rgba(255,255,255,0.6)`,
                }}
                animate={{
                  scale: [1, 1.08, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  boxShadow: `0 6px 20px ${currentTheme.shadowColor}60, 0 0 0 2px ${currentTheme.borderColor}40`,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  console.log("AI Avatar clicked!");
                  // Add avatar interaction here
                }}
              >
                <div className="w-full h-full p-0.5">
                  <img
                    src={aiAvatarUrl}
                    alt="AI Companion"
                    className="w-full h-full object-cover rounded-full"
                    style={{
                      filter: "brightness(1.1) saturate(1.2)",
                    }}
                  />
                </div>
                {/* Sparkle effect */}
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
                  style={{
                    background: `radial-gradient(circle, ${currentTheme.accent}, ${currentTheme.borderColor})`,
                    boxShadow: `0 0 8px ${currentTheme.accent}80`,
                  }}
                />
              </motion.button>
            </div>
          )}

          {/* Content Container */}
          <div className="relative flex flex-col h-full pt-8 px-8 pb-8">
            {/* Badge Title - positioned with proper spacing */}
            <div className="relative mb-6 z-20">
              <motion.button
                className="text-center w-full cursor-pointer group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  console.log("Badge clicked:", badgeTitle);
                  // Add badge interaction here
                }}
              >
                <h2
                  className={`text-lg font-bold ${currentTheme.textPrimary} mb-2 transition-colors`}
                  style={{
                    fontFamily: '"Kalam", cursive',
                    textShadow: `2px 2px 4px rgba(255,255,255,0.9), 0 0 10px ${currentTheme.accent}30`,
                    fontSize: "18px",
                    lineHeight: "1.2",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                  }}
                >
                  ✨ "{badgeTitle || "Amazing Creation!"}" ✨
                </h2>
                <motion.div
                  className="w-16 h-1 mx-auto rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${currentTheme.buttonBg}, ${currentTheme.accent}, ${currentTheme.borderColor}, ${currentTheme.accent}, ${currentTheme.buttonBg})`,
                    boxShadow: `0 0 8px ${currentTheme.accent}50`,
                  }}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.button>
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
                  className="relative rounded-xl overflow-hidden"
                  style={{
                    border: `4px solid ${currentTheme.borderColor}`,
                    padding: "8px",
                    background: `linear-gradient(135deg, ${currentTheme.patternColors[0]}60, ${currentTheme.patternColors[1]}40, ${currentTheme.patternColors[2]}60)`,
                    boxShadow: `
                      inset 0 0 12px ${currentTheme.accent}30,
                      0 6px 20px ${currentTheme.shadowColor}40,
                      0 2px 8px ${currentTheme.shadowColor}20
                    `,
                  }}
                >
                  <div
                    className="relative rounded-lg overflow-hidden p-2"
                    style={{
                      background: `linear-gradient(45deg, ${currentTheme.buttonBg}, rgba(255,255,255,0.9))`,
                      border: `2px solid ${currentTheme.patternColors[0]}80`,
                    }}
                  >
                    <img
                      src={imageUrl}
                      alt="A magical illustration"
                      className="w-full h-24 object-cover rounded"
                      style={{
                        filter:
                          "contrast(1.1) saturate(1.2) brightness(1.05) hue-rotate(1deg)",
                        boxShadow: `inset 0 0 6px rgba(0,0,0,0.08)`,
                      }}
                    />
                    {/* Fun decorative corners */}
                    <div
                      className="absolute top-2 left-2 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: currentTheme.accent }}
                    />
                    <div
                      className="absolute top-2 right-2 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: currentTheme.borderColor }}
                    />
                    <div
                      className="absolute bottom-2 left-2 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: currentTheme.patternColors[2] }}
                    />
                    <div
                      className="absolute bottom-2 right-2 w-3 h-3 rounded-full opacity-60"
                      style={{ backgroundColor: currentTheme.patternColors[1] }}
                    />
                    {/* Sparkle overlay */}
                    <div className="absolute top-1 right-1 text-xs opacity-80 animate-pulse">
                      ✨
                    </div>
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
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold ${currentTheme.textPrimary} shadow-lg`}
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.patternColors[0]}, ${currentTheme.patternColors[1]}, ${currentTheme.patternColors[2]})`,
                      fontFamily: '"Kalam", cursive',
                      textShadow: `2px 2px 4px rgba(255,255,255,0.9), 0 0 8px ${currentTheme.accent}40`,
                      border: `3px solid ${currentTheme.borderColor}`,
                      boxShadow: `0 4px 12px ${currentTheme.shadowColor}40, inset 0 1px 3px rgba(255,255,255,0.6)`,
                    }}
                  >
                    {reflection.charAt(0).toUpperCase()}
                  </div>
                </motion.div>

                {/* Scrollable text container */}
                <div
                  className="leading-relaxed overflow-y-auto text-gray-800"
                  style={{
                    fontFamily: '"Kalam", cursive',
                    fontSize: "14px",
                    textAlign: "justify",
                    textShadow: "1px 1px 2px rgba(255,255,255,0.9)",
                    lineHeight: "1.4",
                    maxHeight: "80px",
                    paddingRight: "4px",
                    color: "#1f2937", // Ensure dark text color
                    fontWeight: "500",
                  }}
                >
                  <div
                    style={{
                      // Hide scrollbar for WebKit browsers
                      scrollbarWidth: "none", // Firefox
                      msOverflowStyle: "none", // IE/Edge
                      WebkitScrollbar: "none", // WebKit
                    }}
                    className="pr-2 scrollbar-hide"
                  >
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
                    className={`text-xs ${currentTheme.textSecondary} italic font-medium`}
                    style={{
                      fontFamily: '"Kalam", cursive',
                      textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                    }}
                  >
                    🌟 Your Magical Friend 🌟
                  </span>
                  {/* Voice playback button */}
                  <motion.button
                    onClick={handleAudioPlay}
                    className="p-1.5 rounded-full transition-all opacity-70 hover:opacity-100"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.buttonBg}, ${currentTheme.patternColors[0]}60)`,
                      border: `2px solid ${currentTheme.borderColor}60`,
                      boxShadow: `0 2px 8px ${currentTheme.shadowColor}30`,
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow: `0 4px 12px ${currentTheme.shadowColor}50`,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Volume2
                      className={`w-3 h-3 ${currentTheme.textSecondary} ${
                        isAudioPlaying ? "animate-pulse" : ""
                      }`}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>

            {/* Emoji Reactions - properly positioned at bottom */}
            <div className="relative z-20">
              <motion.div
                className="flex justify-center items-center gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <div
                  className={`text-xs ${currentTheme.textSecondary} opacity-70 font-medium mr-2`}
                >
                  🎭 How does this make you feel? 🎭
                </div>
                {reactions.map((reaction, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => handleReactionClick(reaction)}
                    className="relative rounded-full transition-all duration-300"
                    style={{
                      background:
                        selectedReaction?.icon === reaction.icon
                          ? `linear-gradient(135deg, ${reaction.color}40, ${reaction.color}20)`
                          : `linear-gradient(135deg, ${currentTheme.buttonBg}, ${currentTheme.patternColors[0]}60)`,
                      border: `2px solid ${selectedReaction?.icon === reaction.icon ? reaction.color : currentTheme.borderColor}80`,
                      boxShadow:
                        selectedReaction?.icon === reaction.icon
                          ? `0 6px 16px ${reaction.color}50, inset 0 2px 4px rgba(255,255,255,0.8)`
                          : `0 3px 10px ${currentTheme.shadowColor}30, inset 0 1px 3px rgba(255,255,255,0.8)`,
                      width: "46px",
                      height: "46px",
                      minWidth: "46px",
                      minHeight: "46px",
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      rotate: 5,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    animate={{
                      rotate:
                        selectedReaction?.icon === reaction.icon
                          ? [0, 10, -10, 0]
                          : 0,
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: selectedReaction?.icon === reaction.icon ? 3 : 0,
                    }}
                  >
                    <span className="text-lg drop-shadow-sm">
                      {reaction.icon}
                    </span>

                    {/* Reaction feedback */}
                    <AnimatePresence>
                      {selectedReaction?.icon === reaction.icon && (
                        <motion.div
                          className={`absolute -top-12 left-1/2 transform -translate-x-1/2 ${currentTheme.textPrimary} text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap font-medium`}
                          style={{
                            background: `linear-gradient(135deg, ${currentTheme.accent}, ${currentTheme.borderColor})`,
                            boxShadow: `0 6px 16px ${currentTheme.shadowColor}50`,
                            border: `1px solid ${currentTheme.borderColor}80`,
                          }}
                          initial={{
                            opacity: 0,
                            y: 10,
                            scale: 0.5,
                            rotate: -10,
                          }}
                          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                          exit={{ opacity: 0, y: -10, scale: 0.5, rotate: 10 }}
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

  // Enhanced magical theme for all pages
  const companionTheme = {
    name: "Magical Emerald",
    background: "from-emerald-100 via-green-50 to-teal-100",
    binding: "from-emerald-400 via-green-400 to-teal-500",
    shadowColor: "#059669",
    borderColor: "#10b981",
    textPrimary: "text-emerald-900",
    textSecondary: "text-emerald-700",
    decorative: "text-emerald-600",
    accent: "#34d399",
    buttonBg: "#f0fdf4",
    patternColors: ["#dcfce7", "#bbf7d0", "#86efac"],
  };

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
    <div className="w-full relative z-20">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative w-full max-w-sm z-30"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 20,
            }}
            style={{
              perspective: "1200px",
              zIndex: 30,
            }}
          >
            {/* Book Container with Navigation */}
            <div className="relative">
              {/* Navigation Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30 pointer-events-none">
                <motion.button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.9), ${companionTheme.buttonBg})`,
                    border: `3px solid ${companionTheme.borderColor}`,
                    boxShadow: `0 4px 15px ${companionTheme.shadowColor}40`,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: -5,
                    boxShadow: `0 6px 20px ${companionTheme.shadowColor}60`,
                  }}
                  whileTap={{ scale: 0.9, rotate: 5 }}
                >
                  <ChevronLeft
                    className={`w-5 h-5 ${companionTheme.textPrimary}`}
                  />
                </motion.button>

                <motion.button
                  onClick={nextPage}
                  disabled={currentPage === pages.length - 1}
                  className="w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  style={{
                    background: `linear-gradient(135deg, rgba(255,255,255,0.9), ${companionTheme.buttonBg})`,
                    border: `3px solid ${companionTheme.borderColor}`,
                    boxShadow: `0 4px 15px ${companionTheme.shadowColor}40`,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow: `0 6px 20px ${companionTheme.shadowColor}60`,
                  }}
                  whileTap={{ scale: 0.9, rotate: -5 }}
                >
                  <ChevronRight
                    className={`w-5 h-5 ${companionTheme.textPrimary}`}
                  />
                </motion.button>
              </div>

              {/* Page Dots Indicator - moved above page number */}
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
                <div className="flex gap-2">
                  {pages.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToPage(idx)}
                      className="w-3 h-3 rounded-full transition-all duration-300 pointer-events-auto relative"
                      style={{
                        background:
                          idx === currentPage
                            ? `linear-gradient(135deg, ${companionTheme.accent}, ${companionTheme.borderColor})`
                            : `${companionTheme.buttonBg}`,
                        border: `2px solid ${companionTheme.borderColor}`,
                        boxShadow:
                          idx === currentPage
                            ? `0 0 12px ${companionTheme.accent}80, 0 2px 6px ${companionTheme.shadowColor}40`
                            : `0 1px 3px ${companionTheme.shadowColor}20`,
                      }}
                      whileHover={{
                        scale: 1.4,
                        rotate: 180,
                        boxShadow: `0 0 16px ${companionTheme.accent}90, 0 4px 8px ${companionTheme.shadowColor}60`,
                      }}
                      whileTap={{ scale: 0.8 }}
                      animate={{
                        scale: idx === currentPage ? [1, 1.2, 1] : 1,
                        rotate: idx === currentPage ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: idx === currentPage ? 2 : 0.3,
                        repeat: idx === currentPage ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    >
                      {idx === currentPage && (
                        <div
                          className="absolute inset-0 rounded-full animate-ping"
                          style={{
                            background: `radial-gradient(circle, ${companionTheme.accent}60, transparent 70%)`,
                          }}
                        />
                      )}
                    </motion.button>
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
                        currentTheme={companionTheme}
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

              {/* Swipe gesture area for mobile - only on sides */}
              <div
                className="absolute inset-y-0 left-0 w-16 z-5 pointer-events-auto"
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
                      }
                    }

                    document.removeEventListener("touchend", handleTouchEnd);
                  };

                  document.addEventListener("touchend", handleTouchEnd);
                }}
              />
              <div
                className="absolute inset-y-0 right-0 w-16 z-5 pointer-events-auto"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const startX = touch.clientX;

                  const handleTouchEnd = (endEvent) => {
                    const endTouch = endEvent.changedTouches[0];
                    const endX = endTouch.clientX;
                    const deltaX = endX - startX;

                    if (Math.abs(deltaX) > 50) {
                      // Minimum swipe distance
                      if (deltaX < 0 && currentPage < pages.length - 1) {
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
