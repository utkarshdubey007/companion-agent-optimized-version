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
  isCompact = false, // New prop for compact layout
}) {
  if (isCompact) {
    // Compact version for chat flow
    return (
      <div className={`flex justify-end mb-2 ${className}`}>
        <div className="flex items-end gap-2 max-w-xs">
          {/* Message Content - Compact */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Conditional rendering based on mode */}
            {mode === "upload" ? (
              <div className="bg-white rounded-2xl p-2 shadow-md border border-gray-100 max-w-xs">
                <div className="compact-upload-wrapper">
                  <MultiImageUploadCard
                    initialImages={images}
                    onChange={onImagesUpdate}
                    onShareCreation={onShareCreation}
                    maxImages={4}
                    className="compact-upload"
                    title="Upload Images"
                  />
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-2 shadow-md border border-gray-100 max-w-xs">
                <CompactKidImageCard images={images} className="compact-display" />
              </div>
            )}

            {/* Timestamp - Compact */}
            <div className="text-xs text-gray-400 mt-1 text-right">
              {timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </motion.div>

          {/* Kid Avatar - Smaller */}
          <motion.div
            className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-md"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <span className="text-white text-xs">😊</span>
          </motion.div>
        </div>
      </div>
    );
  }

  // Regular version (unchanged)
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
          {/* Conditional rendering based on mode */}
          {mode === "upload" ? (
            <MultiImageUploadCard
              initialImages={images}
              onChange={onImagesUpdate}
              onShareCreation={onShareCreation}
              maxImages={6}
              className="mb-2"
            />
          ) : (
            <CompactKidImageCard images={images} className="mb-2" />
          )}

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
