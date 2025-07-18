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
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

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

              {/* Page Number */}
              <div className="absolute top-4 right-6">
                <motion.div
                  className="text-amber-700 text-sm font-bold opacity-60"
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
                  className="text-amber-600 text-lg opacity-40"
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
                  ❦
                </motion.div>
              </div>

              <div className="absolute bottom-6 right-8">
                <motion.div
                  className="text-amber-600 text-lg opacity-40"
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
                  ❦
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
                    className="text-xl font-bold text-amber-800 mb-2"
                    style={{
                      fontFamily: '"Kalam", "Comic Neue", cursive',
                      textShadow: "2px 2px 4px rgba(255,255,255,0.8)",
                      letterSpacing: "0.5px",
                    }}
                    animate={{
                      textShadow: [
                        "2px 2px 4px rgba(255,255,255,0.8)",
                        "2px 2px 8px rgba(255,215,0,0.3)",
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
                    className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"
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

              {/* AI Reflection Message */}
              <div className="px-6 pt-4">
                <motion.div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-purple-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  {/* AI Avatar & Header */}
                  <div className="flex items-center gap-3 mb-3">
                    {aiAvatarUrl && (
                      <motion.div
                        className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-200"
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
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
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-purple-600">
                        Your AI Buddy says:
                      </span>
                      {/* Voice playback button */}
                      <motion.button
                        onClick={handleAudioPlay}
                        className="p-1 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Volume2
                          className={`w-3 h-3 text-purple-600 ${
                            isAudioPlaying ? "animate-pulse" : ""
                          }`}
                        />
                      </motion.button>
                    </div>
                  </div>

                  {/* Reflection Text with Typewriter Effect */}
                  <motion.p
                    className="text-gray-700 text-sm leading-relaxed font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    {reflection}
                  </motion.p>
                </motion.div>
              </div>

              {/* Reaction Icons */}
              {reactionsEnabled && (
                <div className="px-6 py-4">
                  <motion.div
                    className="flex items-center justify-center gap-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    {reactions.map((reaction, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleReactionClick(reaction)}
                        className="relative p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
                        whileHover={{
                          scale: 1.2,
                          rotate: [0, -10, 10, 0],
                        }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          backgroundColor:
                            selectedReaction?.icon === reaction.icon
                              ? reaction.color + "20"
                              : "white",
                        }}
                      >
                        <span className="text-lg">{reaction.icon}</span>

                        {/* Reaction feedback */}
                        <AnimatePresence>
                          {selectedReaction?.icon === reaction.icon && (
                            <motion.div
                              className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap"
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

              {/* Page curl effect for storybook feel */}
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <motion.div
                  className="w-full h-full bg-gradient-to-tl from-gray-200 to-transparent rounded-tl-xl"
                  style={{
                    clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                  }}
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
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
