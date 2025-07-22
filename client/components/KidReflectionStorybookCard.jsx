import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Smile, Sparkles, Volume2, Star, Award } from "lucide-react";

const KidReflectionStorybookCard = ({
  imageUrl,
  reflection,
  badgeTitle = "Amazing Creation!",
  reactionsEnabled = true,
  aiAvatarUrl,
  index = 0,
  theme = "rainbow", // Default theme
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Theme configurations
  const themeConfig = {
    rainbow: {
      background: "from-pink-100 via-purple-50 to-blue-100",
      binding: "from-pink-200 via-purple-200 to-blue-300",
      border: "#d946ef", // Purple-pink
      text: "text-purple-800",
      accent: "text-purple-600",
      decorative: "text-pink-500",
      frame: "#e879f9", // Bright pink
      buttonBg: "rgba(217, 70, 239, 0.1)",
      buttonBorder: "rgba(217, 70, 239, 0.3)",
    },
    sunset: {
      background: "from-orange-100 via-red-50 to-pink-100",
      binding: "from-orange-200 via-red-200 to-pink-300",
      border: "#f97316", // Orange
      text: "text-orange-800",
      accent: "text-red-600",
      decorative: "text-orange-500",
      frame: "#fb923c", // Bright orange
      buttonBg: "rgba(249, 115, 22, 0.1)",
      buttonBorder: "rgba(249, 115, 22, 0.3)",
    },
    forest: {
      background: "from-green-100 via-emerald-50 to-teal-100",
      binding: "from-green-200 via-emerald-200 to-teal-300",
      border: "#10b981", // Emerald
      text: "text-green-800",
      accent: "text-emerald-600",
      decorative: "text-green-500",
      frame: "#34d399", // Bright emerald
      buttonBg: "rgba(16, 185, 129, 0.1)",
      buttonBorder: "rgba(16, 185, 129, 0.3)",
    },
    ocean: {
      background: "from-blue-100 via-cyan-50 to-indigo-100",
      binding: "from-blue-200 via-cyan-200 to-indigo-300",
      border: "#0ea5e9", // Sky blue
      text: "text-blue-800",
      accent: "text-cyan-600",
      decorative: "text-blue-500",
      frame: "#38bdf8", // Bright blue
      buttonBg: "rgba(14, 165, 233, 0.1)",
      buttonBorder: "rgba(14, 165, 233, 0.3)",
    },
    vintage: {
      background: "from-amber-50 via-orange-50 to-yellow-100",
      binding: "from-amber-200 via-orange-200 to-amber-300",
      border: "#d4af37", // Gold
      text: "text-amber-800",
      accent: "text-amber-600",
      decorative: "text-amber-600",
      frame: "#d4af37", // Gold
      buttonBg: "rgba(212, 175, 55, 0.1)",
      buttonBorder: "rgba(212, 175, 55, 0.3)",
    },
  };

  const currentTheme = themeConfig[theme] || themeConfig.rainbow;

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
    // Add sparkle animation effect
    setTimeout(() => setSelectedReaction(null), 2000);
  };

  const handleAudioPlay = () => {
    setIsAudioPlaying(true);
    // Simulate audio playback
    setTimeout(() => setIsAudioPlaying(false), 3000);
  };

  return (
    <div className="flex justify-end w-full mb-8 px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="max-w-md w-full"
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

            {/* Storybook Page Container */}
            <motion.div
              className={`relative bg-gradient-to-br ${currentTheme.background} rounded-r-2xl shadow-2xl overflow-hidden`}
              style={{
                fontFamily:
                  '"Kalam", "Comic Neue", "Fredoka One", cursive, sans-serif',
                backgroundImage: theme === 'rainbow' ? `
                  radial-gradient(circle at 25% 25%, rgba(217, 70, 239, 0.08) 0%, transparent 50%),
                  radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
                  radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
                  radial-gradient(circle at 25% 75%, rgba(249, 115, 22, 0.04) 0%, transparent 50%),
                  linear-gradient(90deg, rgba(217, 70, 239, 0.05) 0%, transparent 2%),
                  repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(217, 70, 239, 0.02) 21px, rgba(217, 70, 239, 0.02) 22px)
                ` : `
                  radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
                  linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, transparent 2%),
                  repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 0, 0, 0.01) 21px, rgba(0, 0, 0, 0.01) 22px)
                `,
                boxShadow: `
                  inset 4px 0 8px rgba(0, 0, 0, 0.1),
                  0 0 0 1px ${currentTheme.border}40,
                  0 8px 32px rgba(0, 0, 0, 0.15),
                  0 4px 16px rgba(0, 0, 0, 0.1)
                `,
                minHeight: "420px",
                aspectRatio: "3/4",
              }}
              whileHover={{
                rotateY: -5,
                rotateX: 2,
                transition: { duration: 0.4 },
              }}
              layout
            >
              {/* Book Binding Edge */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-b ${currentTheme.binding}`}
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 8px,
                      ${currentTheme.border}20 8px,
                      ${currentTheme.border}20 10px
                    )
                  `,
                  boxShadow: `inset -2px 0 4px ${currentTheme.border}40`,
                }}
              />

              {/* Page Number */}
              <div className="absolute top-4 right-6">
                <motion.div
                  className={`${currentTheme.text} text-sm font-bold opacity-60`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.8 }}
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                  }}
                >
                  {Math.floor(Math.random() * 50) + 12}
                </motion.div>
              </div>

              {/* Decorative corner flourishes */}
              <div className="absolute top-6 left-8">
                <motion.div
                  className={`${currentTheme.decorative} text-lg opacity-40`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {theme === 'rainbow' ? '🌈' : theme === 'forest' ? '🌿' : theme === 'ocean' ? '🌊' : theme === 'sunset' ? '🌅' : '❦'}
                </motion.div>
              </div>

              <div className="absolute bottom-6 right-8">
                <motion.div
                  className={`${currentTheme.decorative} text-lg opacity-40`}
                  animate={{
                    rotate: [0, -5, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                >
                  {theme === 'rainbow' ? '⭐' : theme === 'forest' ? '🍃' : theme === 'ocean' ? '🐚' : theme === 'sunset' ? '🦋' : '❦'}
                </motion.div>
              </div>

              {/* Storybook Title */}
              <div className="relative pt-8 px-8">
                <motion.div
                  className="text-center mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <motion.h2
                    className={`text-xl font-bold ${currentTheme.text} mb-2`}
                    style={{
                      fontFamily: '"Kalam", "Comic Neue", cursive',
                      textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
                      letterSpacing: "0.5px",
                    }}
                    animate={{
                      textShadow: [
                        "2px 2px 4px rgba(255,255,255,0.8)",
                        `2px 2px 8px ${currentTheme.border}50`,
                        "2px 2px 4px rgba(255,255,255,0.8)",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    "{badgeTitle}"
                  </motion.h2>
                  <motion.div
                    className="w-16 h-0.5 mx-auto"
                    style={{
                      background: `linear-gradient(to right, transparent, ${currentTheme.border}, transparent)`
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  />
                </motion.div>
              </div>

              {/* Storybook Illustration */}
              <div className="px-8 pt-2">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
                  animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {/* Illustration Frame */}
                  <div
                    className="relative rounded-lg overflow-hidden"
                    style={{
                      border: "3px solid #d4af37",
                      backgroundImage: `
                        linear-gradient(45deg, rgba(212, 175, 55, 0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(212, 175, 55, 0.1) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(212, 175, 55, 0.1) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(212, 175, 55, 0.1) 75%)
                      `,
                      backgroundSize: "12px 12px",
                      backgroundPosition: "0 0, 0 6px, 6px -6px, -6px 0px",
                      padding: "8px",
                      boxShadow: `
                        inset 0 0 0 1px rgba(212, 175, 55, 0.3),
                        inset 0 0 8px rgba(255, 215, 0, 0.2),
                        0 4px 16px rgba(0, 0, 0, 0.1)
                      `,
                    }}
                  >
                    <div className="relative rounded-md overflow-hidden bg-white p-2">
                      <img
                        src={imageUrl}
                        alt="A magical illustration"
                        className="w-full h-40 object-cover rounded-sm"
                        style={{
                          filter:
                            "contrast(1.1) saturate(1.2) brightness(1.05)",
                        }}
                      />

                      {/* Vintage photo corners */}
                      <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-amber-700 opacity-30" />
                      <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-amber-700 opacity-30" />
                      <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-amber-700 opacity-30" />
                      <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-amber-700 opacity-30" />

                      {/* Subtle shimmer effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"
                        animate={{
                          x: [-50, 50],
                          opacity: [0, 0.3, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 4,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Illustration Caption */}
                  <motion.p
                    className="text-center text-xs text-amber-700 mt-2 italic font-medium opacity-70"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1, duration: 0.6 }}
                    style={{
                      fontFamily: '"Times New Roman", serif',
                      textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                    }}
                  >
                    "A wonderful creation by our young artist"
                  </motion.p>
                </motion.div>
              </div>

              {/* Storybook Text */}
              <div className="px-8 pt-6 pb-4">
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {/* Decorative initial letter */}
                  <motion.div
                    className="float-left mr-3 mb-1"
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  >
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded-lg flex items-center justify-center text-2xl font-bold text-amber-800 shadow-lg"
                      style={{
                        fontFamily: '"Times New Roman", serif',
                        textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
                        border: "2px solid #d4af37",
                      }}
                    >
                      {reflection.charAt(0).toUpperCase()}
                    </div>
                  </motion.div>

                  {/* Story Text */}
                  <motion.div
                    className="text-amber-900 leading-relaxed"
                    style={{
                      fontFamily: '"Kalam", "Comic Neue", cursive',
                      fontSize: "15px",
                      textAlign: "justify",
                      textShadow: "1px 1px 2px rgba(255,255,255,0.5)",
                      lineHeight: "1.6",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 1.2 }}
                  >
                    {reflection.substring(1)}
                  </motion.div>

                  {/* AI Companion signature */}
                  <motion.div
                    className="flex items-center justify-end gap-2 mt-4 opacity-70"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 0.7, x: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    {aiAvatarUrl && (
                      <motion.div
                        className="w-6 h-6 rounded-full overflow-hidden border border-amber-400"
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
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
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

              {/* Storybook Reactions */}
              {reactionsEnabled && (
                <div className="px-8 pb-6">
                  <motion.div
                    className="flex items-center justify-center gap-4 pt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <div className="text-xs text-amber-700 opacity-60 font-medium mr-2">
                      How does this make you feel?
                    </div>
                    {reactions.map((reaction, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleReactionClick(reaction)}
                        className="relative p-2 rounded-full transition-all duration-300"
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
                        }}
                        whileHover={{
                          scale: 1.2,
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
                              className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-amber-800 text-yellow-100 text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium"
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
              )}

              {/* Magical sparkle effects */}
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

              {/* Realistic Page Curl */}
              <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Main curl */}
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12"
                    style={{
                      background: `
                        linear-gradient(
                          135deg,
                          rgba(139, 69, 19, 0.1) 0%,
                          rgba(160, 82, 45, 0.15) 25%,
                          rgba(210, 180, 140, 0.2) 50%,
                          rgba(245, 245, 220, 0.8) 75%,
                          rgba(255, 248, 220, 0.9) 100%
                        )
                      `,
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                      transform: "rotateX(15deg) rotateY(-15deg)",
                      transformOrigin: "bottom right",
                      filter:
                        "drop-shadow(-2px -2px 4px rgba(139, 69, 19, 0.2))",
                    }}
                  />

                  {/* Under page shadow */}
                  <div
                    className="absolute bottom-0 right-0 w-12 h-12"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,0,0,0.1) 0%, transparent 70%)",
                      clipPath: "polygon(70% 0, 0 70%, 100% 100%)",
                    }}
                  />

                  {/* Curl highlight */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.6) 0%, transparent 50%)",
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                    }}
                    animate={{
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Floating hearts animation on reaction */}
            <AnimatePresence>
              {selectedReaction && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl"
                      style={{
                        left: `${50 + (Math.random() - 0.5) * 40}%`,
                        top: `${50 + (Math.random() - 0.5) * 40}%`,
                      }}
                      initial={{ scale: 0, opacity: 0, y: 0 }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -100],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {selectedReaction.icon}
                    </motion.div>
                  ))}
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KidReflectionStorybookCard;
