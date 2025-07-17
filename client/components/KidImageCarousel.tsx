import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Image as ImageIcon, X } from "lucide-react";

interface KidImageCarouselProps {
  images: string[];
  className?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function KidImageCarousel({
  images,
  className = "",
  onClose = () => {},
  showCloseButton = true,
}: KidImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

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

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <motion.div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 w-80 max-w-[calc(100vw-2rem)] lg:w-96 ${className}`}
      initial={{ opacity: 0, x: 100, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "backOut" }}
    >
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-blue-400" />
            <h3 className="text-white font-semibold text-lg">My Pictures</h3>
            <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-1 rounded-full">
              {images.length}
            </span>
          </div>
          {showCloseButton && (
            <motion.button
              onClick={onClose}
              className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 rounded-full flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-red-400" />
            </motion.button>
          )}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative group">
                    <img
                      src={image}
                      alt={`Picture ${index + 1}`}
                      className="w-full h-64 sm:h-72 object-cover"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                    {/* Image counter */}
                    <div className="absolute bottom-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
                      {index + 1} of {images.length}
                    </div>

                    {/* Fun emoji overlay on hover */}
                    <motion.div
                      className="absolute inset-0 bg-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-4xl">✨</span>
                    </motion.div>
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
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600/80 hover:bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.9 }}
                disabled={selectedIndex === 0}
                style={{
                  opacity: selectedIndex === 0 ? 0.5 : 1,
                }}
              >
                <ChevronLeft className="w-5 h-5 text-white drop-shadow-sm" />
              </motion.button>

              <motion.button
                onClick={scrollNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-blue-600/80 hover:bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-lg border border-white/20"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 8px 20px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.9 }}
                disabled={selectedIndex === images.length - 1}
                style={{
                  opacity: selectedIndex === images.length - 1 ? 0.5 : 1,
                }}
              >
                <ChevronRight className="w-5 h-5 text-white drop-shadow-sm" />
              </motion.button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 p-4">
            {images.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-blue-400 w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        )}

        {/* Fun Footer Message */}
        <motion.div
          className="px-4 pb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-center text-sm text-blue-300">
            {images.length === 1
              ? "Amazing picture! 🌟"
              : images.length === 2
                ? "Two beautiful creations! ✨"
                : images.length === 3
                  ? "What a wonderful gallery! 🎨"
                  : `${images.length} fantastic pictures! 🤩`}
          </p>
        </motion.div>
      </div>

      {/* Mobile responsive adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .w-80 {
            width: calc(100vw - 2rem);
            max-width: 320px;
          }
        }

        @media (max-width: 480px) {
          .w-80 {
            width: calc(100vw - 1rem);
            max-width: 280px;
          }
        }
      `}</style>
    </motion.div>
  );
}
