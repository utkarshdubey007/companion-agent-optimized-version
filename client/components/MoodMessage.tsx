import React from "react";
import { motion } from "framer-motion";
import MoodSelector from "./MoodSelector";

interface MoodMessageProps {
  onMoodSubmit?: (mood: any) => void;
  timestamp?: Date;
  className?: string;
}

export default function MoodMessage({
  onMoodSubmit = () => {},
  timestamp = new Date(),
  className = "",
}: MoodMessageProps) {
  return (
    <div className={`flex justify-end mb-4 ${className}`}>
      <div className="flex items-end gap-3 max-w-md">
        {/* Message Content */}
        <motion.div
          className="max-w-xs"
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Mood Selector */}
          <MoodSelector
            onMoodSubmit={(mood) => {
              onMoodSubmit(mood);
            }}
            className="mb-2"
            title="How are you feeling?"
          />

          {/* Timestamp */}
          <div className="text-xs text-gray-400 mt-1 mr-2 text-right">
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </motion.div>

        {/* Kid Avatar */}
        <motion.div
          className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg"
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
        >
          <span className="text-white text-sm font-bold">😊</span>
        </motion.div>
      </div>
    </div>
  );
}
