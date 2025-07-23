import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Camera, Plus, Upload } from "lucide-react";
import MultiImageUploadCard from "./MultiImageUploadCard";
import CompactKidImageCard from "./CompactKidImageCard";

interface KidMediaMessageProps {
  images?: string[];
  onImagesUpdate?: (images: string[]) => void;
  onShareCreation?: (images: string[]) => void;
  timestamp?: Date;
  className?: string;
  mode?: "upload" | "display"; // New prop to control display mode
  isCompact?: boolean; // New prop for compact layout
}

export default function KidMediaMessage({
  images = [],
  onImagesUpdate = () => {},
  onShareCreation = () => {},
  timestamp = new Date(),
  className = "",
  mode = "upload",
  isCompact = false,
}: KidMediaMessageProps) {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));

    if (imageFiles.length > 0) {
      const urls = imageFiles.map(file => URL.createObjectURL(file));
      onImagesUpdate?.(urls);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls = files.map(file => URL.createObjectURL(file));
    onImagesUpdate?.(urls);
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  if (isCompact) {
    // New dark-themed design matching the provided image
    return (
      <div className={`flex justify-end mb-4 ${className}`}>
        <div className="flex items-end gap-3 max-w-md">
          <motion.div
            className="w-80"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Dark-themed upload card */}
            <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl border border-slate-700">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold">Upload Images</h3>
                    <p className="text-slate-400 text-sm">{images.length}/6 images</p>
                  </div>
                </div>
                <button
                  onClick={openFileDialog}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Plus className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Upload area */}
              <div
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-colors text-center ${
                  dragActive
                    ? 'border-blue-400 bg-blue-500/10'
                    : 'border-slate-600 bg-slate-700/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={openFileDialog}
              >
                <div className="flex flex-col items-center gap-4 cursor-pointer">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center">
                    <Upload className="w-6 h-6 text-slate-300" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg mb-1">Upload your images</p>
                    <p className="text-slate-400 text-sm">
                      Drag and drop images here, or{" "}
                      <span className="text-blue-400 underline">browse files</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* File info */}
              <p className="text-slate-400 text-xs mt-3 text-center">
                Supports JPG, PNG, GIF • Max 6 images
              </p>

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
              />

              {/* Share button if images exist */}
              {images.length > 0 && (
                <button
                  onClick={() => onShareCreation?.(images)}
                  className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  Share Creation ({images.length} image{images.length !== 1 ? 's' : ''})
                </button>
              )}
            </div>

            {/* Timestamp */}
            <div className="text-xs text-gray-400 mt-2 text-right">
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
