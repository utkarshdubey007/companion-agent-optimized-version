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
} from "lucide-react";

interface MultiImageUploadCardProps {
  initialImages?: string[];
  onImagesUpdate?: (images: string[]) => void;
  maxImages?: number;
  className?: string;
}

export default function MultiImageUploadCard({
  initialImages = [],
  onImagesUpdate = () => {},
  maxImages = 10,
  className = "",
}: MultiImageUploadCardProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

  // Update parent when images change
  useEffect(() => {
    onImagesUpdate(images);
  }, [images, onImagesUpdate]);

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

      const newImages: string[] = [];
      const fileArray = Array.from(files);

      fileArray.forEach((file) => {
        if (
          file.type.startsWith("image/") &&
          images.length + newImages.length < maxImages
        ) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (e.target?.result) {
              const imageUrl = e.target.result as string;
              setImages((prev) => {
                const updated = [...prev, imageUrl];
                return updated;
              });
            }
          };
          reader.readAsDataURL(file);
        }
      });
    },
    [images.length, maxImages],
  );

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
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
      setImages((prev) => {
        const updated = prev.filter((_, index) => index !== indexToRemove);
        return updated;
      });

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

  return (
    <motion.div
      className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-semibold text-white">My Pictures</h3>
        </div>
        <div className="text-sm text-gray-300">
          {images.length}/{maxImages}
        </div>
      </div>

      {/* Image Carousel or Upload Area */}
      {images.length > 0 ? (
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-xl" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`Uploaded ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl"
                    />

                    {/* Remove Button */}
                    <motion.button
                      onClick={() => removeImage(index)}
                      className="absolute top-3 right-3 w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-4 h-4 text-white" />
                    </motion.button>

                    {/* Image Number Badge */}
                    <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                      {index + 1} of {images.length}
                    </div>
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
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600/80 hover:bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border-2 border-white/20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6 text-white drop-shadow-sm" />
              </motion.button>

              <motion.button
                onClick={scrollNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600/80 hover:bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border-2 border-white/20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6 text-white drop-shadow-sm" />
              </motion.button>
            </>
          )}

          {/* Dots Indicator */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === selectedIndex ? "bg-blue-400" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Empty State - Upload Area */
        <motion.div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors duration-200 ${
            isDragActive
              ? "border-blue-400 bg-blue-400/10"
              : "border-white/30 hover:border-white/50"
          }`}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={isDragActive ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-white mb-2">
              {isDragActive
                ? "Drop your pictures here!"
                : "Upload your pictures"}
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Drag and drop images here, or{" "}
              <button
                onClick={openFileDialog}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                browse files
              </button>
            </p>
            <p className="text-xs text-gray-400">
              Supports JPG, PNG, GIF • Max {maxImages} images
            </p>
          </motion.div>
        </motion.div>
      )}

      {/* Add More Button (when images exist and can add more) */}
      {images.length > 0 && canAddMore && (
        <motion.button
          onClick={openFileDialog}
          className="w-full mt-4 py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="w-4 h-4" />
          Add More Pictures ({images.length}/{maxImages})
        </motion.button>
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

      {/* Fun Motivational Message */}
      <AnimatePresence>
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-center"
          >
            <p className="text-sm text-blue-300">
              {images.length === 1
                ? "Great start! 🌟 Add more pictures to tell your story!"
                : images.length < 3
                  ? "Looking good! ✨ Keep adding more amazing pictures!"
                  : images.length < 5
                    ? "Awesome collection! 🎨 You're creating something special!"
                    : "Wow! 🤩 You've got an amazing gallery going!"}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
