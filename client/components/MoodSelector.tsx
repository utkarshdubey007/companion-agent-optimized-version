import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Heart } from "lucide-react";

interface Mood {
  id: string;
  name: string;
  imageUrl: string;
  color: string;
  bgColor: string;
  description: string;
}

interface MoodSelectorProps {
  onMoodSubmit?: (mood: Mood) => void;
  className?: string;
  title?: string;
}

const moods: Mood[] = [
  {
    id: "angry",
    name: "Angry",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Ff3cb3591e2a347f58a4d5dca3a13351c?format=webp&width=800",
    color: "text-red-200",
    bgColor: "from-red-400 to-orange-500",
    description: "I feel frustrated or mad",
  },
  {
    id: "happy",
    name: "Happy",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F1c6fdb5e02c84fe893f529ad90437063?format=webp&width=800",
    color: "text-pink-200",
    bgColor: "from-pink-400 to-rose-400",
    description: "I feel joyful and bright!",
  },
  {
    id: "surprised",
    name: "Surprised",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F3abc6628aec348ca8e062de7621d55f9?format=webp&width=800",
    color: "text-yellow-200",
    bgColor: "from-yellow-400 to-orange-400",
    description: "Something unexpected happened!",
  },
  {
    id: "excited",
    name: "Excited",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2Fa25ed776d6464c63aec93966911c95c4?format=webp&width=800",
    color: "text-green-200",
    bgColor: "from-green-400 to-emerald-500",
    description: "I'm bursting with energy!",
  },
  {
    id: "neutral",
    name: "Neutral",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F8e8ffac16f0a4646983afbc85070eab6?format=webp&width=800",
    color: "text-gray-200",
    bgColor: "from-gray-400 to-slate-500",
    description: "I feel okay, nothing special",
  },
  {
    id: "sad",
    name: "Sad",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F644ed687041142b1b691d3c35be3faac?format=webp&width=800",
    color: "text-blue-200",
    bgColor: "from-blue-400 to-blue-600",
    description: "I feel a little down",
  },
  {
    id: "calm",
    name: "Calm",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F9b3911846f5341d7aaee4b8f3bcb0f85?format=webp&width=800",
    color: "text-teal-200",
    bgColor: "from-teal-400 to-cyan-500",
    description: "I feel peaceful and relaxed",
  },
  {
    id: "worried",
    name: "Worried",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F77bf7cdabcfb4d41af9ba5c34bff080f?format=webp&width=800",
    color: "text-orange-200",
    bgColor: "from-orange-400 to-amber-500",
    description: "Something is on my mind",
  },
];

export default function MoodSelector({
  onMoodSubmit = () => {},
  className = "",
  title = "How are you feeling?",
}: MoodSelectorProps) {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleMoodSelect = (mood: Mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    if (selectedMood) {
      setIsSubmitted(true);
      onMoodSubmit(selectedMood);

      // Reset after a short delay for feedback
      setTimeout(() => {
        setIsSubmitted(false);
        setSelectedMood(null);
      }, 2000);
    }
  };

  return (
    <motion.div
      className={`bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-4 max-w-sm mx-auto ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      {/* Compact Header */}
      <motion.div
        className="text-center mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-center gap-2 mb-1">
          <Heart className="w-4 h-4 text-pink-400" />
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <Heart className="w-4 h-4 text-pink-400" />
        </div>
        <p className="text-xs text-gray-300">Tap your mood! ✨</p>
      </motion.div>

      {/* Compact Mood Grid - 4 columns */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {moods.map((mood, index) => (
          <motion.button
            key={mood.id}
            onClick={() => handleMoodSelect(mood)}
            className={`relative p-2 rounded-xl border-2 transition-all duration-300 aspect-square ${
              selectedMood?.id === mood.id
                ? "border-white scale-110 shadow-lg"
                : "border-white/20 hover:border-white/40 hover:scale-105"
            }`}
            style={{
              background:
                selectedMood?.id === mood.id
                  ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                  : "rgba(255, 255, 255, 0.05)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
              ease: "backOut",
            }}
            whileHover={{
              scale: selectedMood?.id === mood.id ? 1.1 : 1.05,
              transition: { duration: 0.15 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Selection Indicator */}
            <AnimatePresence>
              {selectedMood?.id === mood.id && (
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-2.5 h-2.5 text-green-600" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mood SVG Image */}
            <div className="flex flex-col items-center justify-center h-full">
              <motion.img
                src={mood.imageUrl}
                alt={mood.name}
                className="w-8 h-8 object-contain"
                animate={
                  selectedMood?.id === mood.id
                    ? {
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }
                    : {}
                }
                transition={{ duration: 0.4 }}
              />
              <span
                className={`font-medium text-xs mt-1 ${
                  selectedMood?.id === mood.id ? "text-white" : mood.color
                }`}
              >
                {mood.name}
              </span>
            </div>

            {/* Background gradient for selected mood */}
            {selectedMood?.id === mood.id && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${mood.bgColor} opacity-80 rounded-xl -z-10`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Selected Mood Display */}
      <AnimatePresence>
        {selectedMood && !isSubmitted && (
          <motion.div
            className="text-center mb-4 p-4 bg-white/10 rounded-xl border border-white/20"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl">{selectedMood.emoji}</span>
              <span className="text-lg font-semibold text-white">
                Feeling {selectedMood.name}
              </span>
              <span className="text-2xl">{selectedMood.emoji}</span>
            </div>
            <p className="text-sm text-gray-300">{selectedMood.description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      <motion.button
        onClick={handleSubmit}
        disabled={!selectedMood || isSubmitted}
        className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 ${
          selectedMood && !isSubmitted
            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg"
            : "bg-gray-600 text-gray-400 cursor-not-allowed"
        }`}
        whileHover={
          selectedMood && !isSubmitted
            ? {
                scale: 1.02,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.4)",
              }
            : {}
        }
        whileTap={selectedMood && !isSubmitted ? { scale: 0.98 } : {}}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {isSubmitted ? (
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
            <span>Thank you!</span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 0.5 }}
            >
              ✨
            </motion.div>
          </motion.div>
        ) : selectedMood ? (
          <span>Share My Mood! 🚀</span>
        ) : (
          <span>Pick a mood first! 👆</span>
        )}
      </motion.button>

      {/* Success Animation */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-green-500/20 rounded-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-6xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
            >
              🎉
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
