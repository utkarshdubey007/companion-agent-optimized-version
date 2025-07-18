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

export default function MultiImageUploadCard({
  initialImages = [],
  onChange = () => {},
  onShareCreation = () => {},
  maxImages = 10,
  className = "",
  title = "Upload Images",
  theme = "auto",
}) {
  const [images, setImages] = useState(initialImages);
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dragCounter, setDragCounter] = useState(0);
  const fileInputRef = useRef(null);

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
    (files) => {
      if (!files) return;

      const fileArray = Array.from(files);
      const validFiles = fileArray.filter(
        (file) => file.type.startsWith("image/") && images.length < maxImages,
      );

      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            const imageUrl = e.target.result;
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

  const handleDragEnter = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter((prev) => prev + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setIsDragActive(true);
    }
  }, []);

  const handleDragLeave = useCallback((e) => {
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

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragActive(false);
      setDragCounter(0);

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileUpload(e.dataTransfer.files);
      }
    },
    [handleFileUpload],
  );

  const removeImage = useCallback(
    (index) => {
      setImages((prev) => prev.filter((_, i) => i !== index));
      if (selectedIndex >= index && selectedIndex > 0) {
        setSelectedIndex((prev) => prev - 1);
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

  const handleShareCreation = useCallback(() => {
    if (images.length > 0) {
      onShareCreation(images);
    }
  }, [images, onShareCreation]);

  const cardClasses = isDarkTheme
    ? "bg-slate-800/90 border-slate-600/40 text-white"
    : "bg-white border-gray-200 text-gray-900";

  const dragClasses = isDarkTheme
    ? "border-blue-400 bg-blue-500/10"
    : "border-blue-500 bg-blue-50";

  return (
    <motion.div
      className={`rounded-lg border-2 border-dashed p-4 ${cardClasses} ${
        isDragActive ? dragClasses : ""
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => handleFileUpload(e.target.files)}
        className="hidden"
      />

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4" />
          <h3 className="font-semibold text-sm">{title}</h3>
        </div>
        <span className="text-xs opacity-70">
          {images.length}/{maxImages}
        </span>
      </div>

      {/* Images Display */}
      {images.length > 0 ? (
        <div className="mb-3">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                  <motion.div
                    className="relative aspect-video rounded-md overflow-hidden bg-gray-100"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation and Controls */}
          {images.length > 1 && (
            <div className="flex items-center justify-between mt-2">
              <button
                onClick={scrollPrev}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="flex gap-1">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === selectedIndex
                        ? "bg-blue-500 w-4"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Empty State */
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <ImageIcon className="w-6 h-6 text-gray-400" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {isDragActive ? "Drop images here" : "No images yet"}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Drag & drop or click to upload
          </p>
        </motion.div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2">
        {/* Add More Button */}
        {images.length < maxImages && (
          <button
            onClick={openFileDialog}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            {images.length === 0 ? "Add Images" : "Add More"}
          </button>
        )}

        {/* Share Creation Button */}
        {images.length > 0 && (
          <button
            onClick={handleShareCreation}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium rounded-md transition-all"
          >
            <Upload className="w-4 h-4" />
            Share My Creation
          </button>
        )}
      </div>

      {/* Progress Indicator */}
      {images.length > 0 && (
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
            <span>Images uploaded</span>
            <span>{Math.round((images.length / maxImages) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <motion.div
              className="bg-blue-500 h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(images.length / maxImages) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}

      {/* Drag Overlay */}
      <AnimatePresence>
        {isDragActive && (
          <motion.div
            className="absolute inset-0 rounded-lg bg-blue-500/20 border-2 border-blue-500 border-dashed flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-2 text-blue-500" />
              <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Drop your images here
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
