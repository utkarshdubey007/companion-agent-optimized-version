import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AIChallengeMessageProps {
  title?: string;
  description?: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  onAccept?: () => void;
  onRegenerate?: () => void;
  onChatMore?: () => void;
}

export default function AIChallengeMessage({
  title = "Today's Challenge!",
  description = "Help the forest creatures clean their magical village!",
  mediaUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop",
  mediaType = "image",
  onAccept = () => console.log("Challenge accepted!"),
  onRegenerate = () => console.log("Regenerating challenge..."),
  onChatMore = () => console.log("Chat more about this..."),
}: AIChallengeMessageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);

  useEffect(() => {
    // First show sparkles, then the card
    const sparkleTimer = setTimeout(() => setShowSparkles(true), 200);
    const cardTimer = setTimeout(() => setIsVisible(true), 800);
    return () => {
      clearTimeout(sparkleTimer);
      clearTimeout(cardTimer);
    };
  }, []);

  return (
    <div className="flex justify-start mb-4">
      {/* AI Avatar */}
      <motion.div
        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-lg"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <div className="sparkle-container">
          <span className="text-white font-bold text-xs">AI</span>
          <div className="absolute inset-0 sparkle-animation"></div>
        </div>
      </motion.div>

      {/* Magical Sparkles Formation */}
      <AnimatePresence>
        {showSparkles && (
          <div className="absolute">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                initial={{
                  x: Math.random() * 300 + 50,
                  y: Math.random() * 200 + 50,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  x: 150 + (i % 4) * 60,
                  y: 80 + Math.floor(i / 4) * 40,
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Challenge Card */}
      <motion.div
        className="max-w-sm"
        initial={{
          y: 50,
          opacity: 0,
          scale: 0.8,
          rotateX: -30,
        }}
        animate={
          isVisible
            ? {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateX: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.3,
        }}
        whileHover={{
          scale: 1.02,
          y: -2,
          transition: { duration: 0.2 },
        }}
      >
        <motion.div
          className="magical-challenge-card bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 rounded-2xl p-4 shadow-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden"
          initial={{ borderRadius: "50%" }}
          animate={{ borderRadius: "1rem" }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${15 + i * 12}%`,
                  left: `${10 + (i % 3) * 30}%`,
                }}
                animate={{
                  y: [-5, -15, -5],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Magical Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 via-pink-200/20 to-blue-200/20 rounded-2xl blur-xl"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Title Section */}
          <div className="relative z-10 text-center mb-3">
            <motion.h3
              className="text-lg font-bold text-white mb-1 drop-shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
            >
              {title}
            </motion.h3>
            <div className="flex justify-center space-x-1">
              {["✨", "🌟", "✨"].map((emoji, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-300 text-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Media Section */}
          <motion.div
            className="relative z-10 mb-3 rounded-xl overflow-hidden shadow-xl"
            initial={{ scale: 0, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="relative group">
              {mediaType === "image" ? (
                <motion.img
                  src={mediaUrl}
                  alt="Challenge visual"
                  className="w-full h-32 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <video
                  src={mediaUrl}
                  className="w-full h-32 object-cover"
                  autoPlay
                  loop
                  muted
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/10 transition-all duration-300"></div>
              <div className="absolute inset-0 border-2 border-white/20 rounded-xl shadow-inner"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="relative z-10 text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
              {description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="relative z-10 flex flex-col space-y-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            {/* Accept Challenge Button */}
            <motion.button
              onClick={onAccept}
              className="magical-button accept-button w-full py-2 px-4 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold text-sm shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>🏆</span>
                <span>Accept Challenge</span>
                <span>⚡</span>
              </span>
            </motion.button>

            <div className="flex space-x-2">
              {/* Regenerate Button */}
              <motion.button
                onClick={onRegenerate}
                className="magical-button regenerate-button flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-xs shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(249, 115, 22, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center justify-center space-x-1">
                  <span>🔄</span>
                  <span>Regenerate</span>
                </span>
              </motion.button>

              {/* Chat More Button */}
              <motion.button
                onClick={onChatMore}
                className="magical-button chat-button flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white font-semibold text-xs shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="flex items-center justify-center space-x-1">
                  <span>💬</span>
                  <span>Chat More</span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
