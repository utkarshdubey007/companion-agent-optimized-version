import React, { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import {
  Upload,
  X,
  Image as ImageIcon,
  Plus,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";

interface MultiImageUploadCardProps {
  initialImages?: string[];
  onChange?: (images: string[]) => void;
  onShareCreation?: (images: string[]) => void;
  maxImages?: number;
  className?: string;
  title?: string;
  theme?: "light" | "dark" | "auto";
}

export default function MultiImageUploadCard({
  initialImages = [],
  onChange = () => {},
  onShareCreation = () => {},
  maxImages = 10,
  className = "",
  title = "Upload Images",
  theme = "auto",
}: MultiImageUploadCardProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dragCounter, setDragCounter] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  // Detect theme based on background or use prop
  const isDarkTheme =
    theme === "auto"
      ? window.getComputedStyle(document.body).backgroundColor ===
          "rgb(6, 23, 61)" ||
        document.documentElement.classList.contains("dark")
      : theme === "dark";

  // Update parent when images change
  useEffect(() => {
    onChange(images);
  }, [images, onChange]);

  // Update selected index when embla API changes
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleFileUpload = useCallback(
    (files: FileList | null) => {
      if (!files) return;

      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(
        (file) => file.type.startsWith("image/") && images.length < maxImages,
      );

      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            const imageUrl = e.target.result as string;
            setImages((prev) => {
              const newImages = [...prev, imageUrl];
              return newImages.slice(0, maxImages);
            });
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [images.length, maxImages],
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter((prev) => prev + 1);
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter((prev) => {
      const newCounter = prev - 1;
      if (newCounter === 0) {
        setIsDragActive(false);
      }
      return newCounter;
    });
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      setDragCounter(0);

      const files = e.dataTransfer.files;
      handleFileUpload(files);
    },
    [handleFileUpload],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handleFileUpload(e.target.files);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    },
    [handleFileUpload],
  );

  const removeImage = useCallback(
    (indexToRemove: number) => {
      setImages((prev) => prev.filter((_, index) => index !== indexToRemove));

      // Adjust selected index if needed
      if (indexToRemove <= selectedIndex && selectedIndex > 0) {
        setSelectedIndex(selectedIndex - 1);
      }
    },
    [selectedIndex],
  );

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const canAddMore = images.length < maxImages;

  // Theme-based styles
  const themeStyles = {
    background: isDarkTheme
      ? "bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md"
      : "bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-md",
    border: isDarkTheme ? "border-white/20" : "border-gray-200",
    text: isDarkTheme ? "text-white" : "text-gray-900",
    textSecondary: isDarkTheme ? "text-gray-300" : "text-gray-600",
    dragArea: isDragActive
      ? isDarkTheme
        ? "border-blue-400 bg-blue-400/20"
        : "border-blue-500 bg-blue-50"
      : isDarkTheme
        ? "border-white/30 hover:border-white/50 bg-slate-700/30"
        : "border-gray-300 hover:border-gray-400 bg-gray-50",
    button: isDarkTheme
      ? "bg-blue-600/80 hover:bg-blue-500/90 border-white/20"
      : "bg-blue-500/90 hover:bg-blue-600 border-gray-200",
    removeButton: isDarkTheme
      ? "bg-red-500/90 hover:bg-red-600"
      : "bg-red-500 hover:bg-red-600",
  };

  return (
    <motion.div
      className={`${themeStyles.background} rounded-xl border ${themeStyles.border} shadow-xl p-4 max-w-2xl mx-auto ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-xl ${isDarkTheme ? "bg-blue-500/20" : "bg-blue-50"}`}
          >
            <Camera
              className={`w-6 h-6 ${isDarkTheme ? "text-blue-400" : "text-blue-600"}`}
            />
          </div>
          <div>
            <h3 className={`text-xl font-bold ${themeStyles.text}`}>{title}</h3>
            <p className={`text-sm ${themeStyles.textSecondary}`}>
              {images.length}/{maxImages} images
            </p>
          </div>
        </div>

        {canAddMore && (
          <motion.button
            onClick={openFileDialog}
            className={`w-10 h-10 rounded-xl transition-all duration-200 flex items-center justify-center ${themeStyles.button} text-white border`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      {/* Image Display Area */}
      {images.length > 0 ? (
        <div className="space-y-3">
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
              <div className="flex gap-3">
                {images.map((image, index) => (
                  <motion.div
                    key={`${image}-${index}`}
                    className="flex-[0_0_250px] min-w-0 relative group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <img
                        src={image}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                        loading="lazy"
                      />

                      {/* Remove Button */}
                      <motion.button
                        onClick={() => removeImage(index)}
                        className={`absolute top-3 right-3 w-8 h-8 ${themeStyles.removeButton} rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                      >
                        <X className="w-4 h-4 text-white" />
                      </motion.button>

                      {/* Image Index */}
                      <div
                        className={`absolute bottom-3 left-3 px-2 py-1 rounded-md text-xs font-medium text-white ${isDarkTheme ? "bg-black/60" : "bg-black/50"} backdrop-blur-sm`}
                      >
                        {index + 1} of {images.length}
                      </div>

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={scrollPrev}
                  className={`absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 ${themeStyles.button} backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-md border`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: isDarkTheme
                      ? "0 6px 20px rgba(59, 130, 246, 0.4)"
                      : "0 6px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </motion.button>

                <motion.button
                  onClick={scrollNext}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 ${themeStyles.button} backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-md border`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: isDarkTheme
                      ? "0 6px 20px rgba(59, 130, 246, 0.4)"
                      : "0 6px 20px rgba(59, 130, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </motion.button>
              </>
            )}
          </div>

          {/* Dot Indicators */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? isDarkTheme
                        ? "bg-blue-400 w-6"
                        : "bg-blue-500 w-6"
                      : isDarkTheme
                        ? "bg-white/30 hover:bg-white/50"
                        : "bg-gray-400 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Upload Area */
        <motion.div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${themeStyles.dragArea}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <div
              className={`w-12 h-12 mx-auto rounded-xl ${isDarkTheme ? "bg-blue-500/20" : "bg-blue-50"} flex items-center justify-center`}
            >
              <Upload
                className={`w-6 h-6 ${isDarkTheme ? "text-blue-400" : "text-blue-600"}`}
              />
            </div>

            <div>
              <h4 className={`text-lg font-semibold ${themeStyles.text} mb-1`}>
                {isDragActive ? "Drop your images here!" : "Upload your images"}
              </h4>
              <p className={`${themeStyles.textSecondary} mb-2`}>
                Drag and drop images here, or{" "}
                <button
                  onClick={openFileDialog}
                  className={`${isDarkTheme ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"} underline font-medium`}
                >
                  browse files
                </button>
              </p>
              <p className={`text-xs ${themeStyles.textSecondary}`}>
                Supports JPG, PNG, GIF • Max {maxImages} images
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Progress/Status Bar */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 space-y-2"
          >
            {/* Progress Bar */}
            <div
              className={`w-full ${isDarkTheme ? "bg-gray-700" : "bg-gray-200"} rounded-full h-1.5`}
            >
              <motion.div
                className={`h-1.5 rounded-full ${isDarkTheme ? "bg-blue-500" : "bg-blue-600"}`}
                initial={{ width: 0 }}
                animate={{ width: `${(images.length / maxImages) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Status Text */}
            <div className="flex justify-between items-center">
              <p className={`text-xs ${themeStyles.textSecondary}`}>
                {images.length === maxImages ? (
                  <span
                    className={
                      isDarkTheme ? "text-yellow-400" : "text-yellow-600"
                    }
                  >
                    Maximum images reached
                  </span>
                ) : (
                  `${maxImages - images.length} more images can be added`
                )}
              </p>

              {canAddMore && (
                <motion.button
                  onClick={openFileDialog}
                  className={`w-6 h-6 rounded-md ${isDarkTheme ? "bg-blue-600/20 text-blue-400 hover:bg-blue-600/30" : "bg-blue-50 text-blue-600 hover:bg-blue-100"} transition-colors duration-200 flex items-center justify-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Share My Creation Button */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.button
            onClick={() => onShareCreation(images)}
            className={`w-full mt-4 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg`}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 20px rgba(168, 85, 247, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="flex items-center justify-center gap-2">
              <span>🎨</span>
              <span>Share My Creation!</span>
              <span>✨</span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
