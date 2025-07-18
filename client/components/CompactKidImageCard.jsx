import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function CompactKidImageCard({ images, className = "" }) {
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
      className={`bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg overflow-hidden max-w-xs ${className}`}
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "backOut" }}
    >
      {/* Compact Header */}
      <div className="flex items-center justify-between p-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4 text-blue-400" />
          <span className="text-white font-medium text-sm">My Pictures</span>
          <span className="text-xs text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded-full">
            {images.length}
          </span>
        </div>
      </div>

      {/* Compact Carousel */}
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="relative group">
                  <img
                    src={image}
                    alt={`Picture ${index + 1}`}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Image counter */}
                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                    {index + 1} / {images.length}
                  </div>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-2xl">✨</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Compact Navigation Buttons */}
        {images.length > 1 && (
          <>
            <motion.button
              onClick={scrollPrev}
              className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600/70 hover:bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={selectedIndex === 0}
              style={{
                opacity: selectedIndex === 0 ? 0.4 : 1,
              }}
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </motion.button>

            <motion.button
              onClick={scrollNext}
              className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600/70 hover:bg-blue-500/80 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={selectedIndex === images.length - 1}
              style={{
                opacity: selectedIndex === images.length - 1 ? 0.4 : 1,
              }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </motion.button>
          </>
        )}
      </div>

      {/* Compact Dots Indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 p-2">
          {images.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-blue-400 w-4"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      )}

      {/* Compact Footer with Motivational Text */}
      <motion.div
        className="px-3 pb-2"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-center text-xs text-blue-300">
          {images.length === 1
            ? "Amazing! 🌟"
            : images.length === 2
              ? "Great pair! ✨"
              : images.length === 3
                ? "Wonderful trio! 🎨"
                : `${images.length} fantastic pics! 🤩`}
        </p>
      </motion.div>
    </motion.div>
  );
}
