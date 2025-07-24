import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Smile,
  Sparkles,
  Volume2,
  Star,
  Award,
} from "lucide-react";

const StorybookReflectionCard = ({
  reflections = [],
  onReactionClick,
  index = 0,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [direction, setDirection] = useState(0);

  // Stagger animation entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const reactions = [
    { icon: "❤️", label: "Love it!", color: "#FF6B6B" },
    { icon: "😃", label: "So fun!", color: "#4ECDC4" },
    { icon: "✨", label: "Magical!", color: "#9333EA" },
    { icon: "🌟", label: "Amazing!", color: "#F39C12" },
  ];

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    onReactionClick?.(reaction, reflections[currentPage]);
    setTimeout(() => setSelectedReaction(null), 2000);
  };

  const nextPage = () => {
    if (currentPage < reflections.length - 1) {
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

  if (reflections.length === 0) return null;

  const currentReflection = reflections[currentPage];

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <div className="flex justify-end w-full mb-8 px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="max-w-lg w-full"
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
              perspective: "1000px",
            }}
          >
            {/* Book Shadow Base */}
            <motion.div
              className="absolute inset-0 bg-gray-800 rounded-r-lg opacity-20"
              style={{
                transform: "translateX(8px) translateY(8px)",
                filter: "blur(12px)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.3 }}
            />

            {/* Storybook Container */}
            <motion.div
              className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 rounded-r-2xl shadow-2xl overflow-hidden"
              style={{
                fontFamily:
                  '"Kalam", "Comic Neue", "Fredoka One", cursive, sans-serif',
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
                minHeight: "320px",
                aspectRatio: "3/4",
              }}
              whileHover={{
                rotateY: -3,
                rotateX: 1,
                transition: { duration: 0.4 },
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

              {/* Navigation Buttons */}
              <div className="absolute top-4 left-8 right-8 flex justify-between items-center z-20">
                <motion.button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "1px solid rgba(139, 69, 19, 0.2)",
                  }}
                >
                  <ChevronLeft className="w-4 h-4 text-amber-800" />
                </motion.button>

                <motion.button
                  onClick={nextPage}
                  disabled={currentPage === reflections.length - 1}
                  className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center shadow-md disabled:opacity-30 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "1px solid rgba(139, 69, 19, 0.2)",
                  }}
                >
                  <ChevronRight className="w-4 h-4 text-amber-800" />
                </motion.button>
              </div>

              {/* Page Content */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateY: { duration: 0.6, ease: "easeInOut" },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 },
                    }}
                    className="absolute inset-0 flex flex-col"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Page Header */}
                    <div className="px-8 pt-12 pb-4">
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
                          }}
                        >
                          "{currentReflection.badgeTitle || "Amazing Creation!"}
                          "
                        </h2>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
                      </motion.div>
                    </div>

                    {/* Image Section */}
                    <div className="px-8 flex-1 flex flex-col">
                      <motion.div
                        className="relative mb-4"
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
                              src={currentReflection.imageUrl}
                              alt="A magical illustration"
                              className="w-full h-32 object-cover rounded-sm"
                              style={{
                                filter:
                                  "contrast(1.1) saturate(1.2) brightness(1.05)",
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

                      {/* Story Text */}
                      <motion.div
                        className="flex-1 mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <div
                          className="text-amber-900 leading-relaxed text-sm"
                          style={{
                            fontFamily: '"Kalam", cursive',
                            textAlign: "justify",
                            textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
                            lineHeight: "1.5",
                          }}
                        >
                          {currentReflection.reflection}
                        </div>

                        {/* AI Companion signature */}
                        <motion.div
                          className="flex items-center justify-end gap-2 mt-3 opacity-70"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.7 }}
                          transition={{ delay: 0.8 }}
                        >
                          {currentReflection.aiAvatarUrl && (
                            <div className="w-5 h-5 rounded-full overflow-hidden border border-amber-400">
                              <img
                                src={currentReflection.aiAvatarUrl}
                                alt="AI Companion"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                          <span
                            className="text-xs text-amber-700 italic"
                            style={{ fontFamily: '"Times New Roman", serif' }}
                          >
                            - Your Magical Friend
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Reactions */}
                      <motion.div
                        className="flex items-center justify-center gap-3 pb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        {reactions.map((reaction, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => handleReactionClick(reaction)}
                            className="relative p-1.5 rounded-full transition-all duration-300"
                            style={{
                              background:
                                selectedReaction?.icon === reaction.icon
                                  ? `linear-gradient(135deg, ${reaction.color}20, ${reaction.color}10)`
                                  : "linear-gradient(135deg, rgba(245, 245, 220, 0.8), rgba(255, 248, 220, 0.9))",
                              border: "1px solid rgba(212, 175, 55, 0.3)",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                            }}
                            whileHover={{ scale: 1.1, y: -1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <span className="text-sm">{reaction.icon}</span>
                          </motion.button>
                        ))}
                      </motion.div>
                    </div>

                    {/* Page Number */}
                    <div className="absolute bottom-4 right-8">
                      <div
                        className="text-amber-700 text-xs opacity-60"
                        style={{ fontFamily: '"Times New Roman", serif' }}
                      >
                        Page {currentPage + 1} of {reflections.length}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex gap-1">
                  {reflections.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToPage(idx)}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          idx === currentPage
                            ? "#d4af37"
                            : "rgba(212, 175, 55, 0.3)",
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StorybookReflectionCard;
