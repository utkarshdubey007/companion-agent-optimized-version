import React from "react";
import { motion } from "framer-motion";
import MultiImageUploadCard from "./MultiImageUploadCard";
import CompactKidImageCard from "./CompactKidImageCard";

export default function KidMediaMessage({
  images = [],
  onImagesUpdate = () => {},
  onShareCreation = () => {},
  timestamp = new Date(),
  className = "",
  mode = "upload", // New prop to control display mode
  align = "right", // New prop to control alignment: "left" for AI, "right" for Kid
}) {
  const isLeftAlign = align === "left";

  return (
    <div className={`flex ${isLeftAlign ? 'justify-start' : 'justify-end'} ${isLeftAlign ? 'mb-0' : 'mb-4'} ${className}`}>
      <div className={`flex items-end gap-2 max-w-sm ${isLeftAlign ? 'flex-row' : 'flex-row'}`}>
        {/* No avatar for AI messages since companion represents AI */}

        {/* Message Content */}
        <motion.div
          className="max-w-xs"
          initial={{ opacity: 0, x: isLeftAlign ? -20 : 20, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 0.85 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Conditional rendering based on mode */}
          {mode === "upload" ? (
            <MultiImageUploadCard
              initialImages={images}
              onImagesUpdate={onImagesUpdate}
              onShareCreation={onShareCreation}
              maxImages={6}
              className="mb-2"
            />
          ) : (
            <CompactKidImageCard images={images} className="mb-2" />
          )}

          {/* Timestamp */}
          <div className={`text-xs text-gray-400 mt-1 ${isLeftAlign ? 'ml-2 text-left' : 'mr-2 text-right'}`}>
            {timestamp.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </motion.div>

        {/* Kid Avatar - show last for right align */}
        {!isLeftAlign && (
          <motion.div
            className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <span className="text-white text-sm font-bold">😊</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
