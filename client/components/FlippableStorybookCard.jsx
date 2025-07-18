import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import KidReflectionStorybookCard from "./KidReflectionStorybookCard";

const FlippableStorybookCard = ({ pages = [], index = 0 }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0);

  // Stagger animation entrance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 300);
    return () => clearTimeout(timer);
  }, [index]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageIndex) => {
    setDirection(pageIndex > currentPage ? 1 : -1);
    setCurrentPage(pageIndex);
  };

  if (pages.length === 0) return null;

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction > 0 ? "left center" : "right center",
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
    },
    exit: (direction) => ({
      rotateY: direction < 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8,
      transformOrigin: direction < 0 ? "left center" : "right center",
    }),
  };

  return (
    <div className="flex justify-end w-full mb-8 px-4">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative max-w-md w-full"
            initial={{ opacity: 0, x: 100, rotateY: -15, rotateX: 10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
            exit={{ opacity: 0, x: 100, rotateY: 15, rotateX: -10 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 25,
            }}
            style={{
              perspective: "1200px",
            }}
          >
            {/* Book Container with Navigation */}
            <div className="relative">
              {/* Navigation Overlay */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-30 pointer-events-none">
                <motion.button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <ChevronLeft className="w-5 h-5 text-amber-800" />
                </motion.button>

                <motion.button
                  onClick={nextPage}
                  disabled={currentPage === pages.length - 1}
                  className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg disabled:opacity-30 disabled:cursor-not-allowed pointer-events-auto"
                  whileHover={{
                    scale: 1.1,
                    backgroundColor: "rgba(255,255,255,0.9)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    border: "2px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <ChevronRight className="w-5 h-5 text-amber-800" />
                </motion.button>
              </div>

              {/* Page Number Overlay */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
                <div
                  className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-amber-800 text-sm font-medium shadow-md"
                  style={{
                    fontFamily: '"Times New Roman", serif',
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                  }}
                >
                  Page {currentPage + 1} of {pages.length}
                </div>
              </div>

              {/* Page Dots Indicator */}
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
                <div className="flex gap-2">
                  {pages.map((_, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => goToPage(idx)}
                      className="w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto"
                      style={{
                        backgroundColor:
                          idx === currentPage
                            ? "#d4af37"
                            : "rgba(212, 175, 55, 0.3)",
                        boxShadow:
                          idx === currentPage
                            ? "0 0 8px rgba(212, 175, 55, 0.6)"
                            : "none",
                      }}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
              </div>

              {/* Flippable Pages Container */}
              <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateY: {
                        duration: 0.8,
                        ease: [0.4, 0.0, 0.2, 1],
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.6 },
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Reuse KidReflectionStorybookCard for exact same design */}
                    <div className="transform-gpu">
                      <KidReflectionStorybookCard
                        imageUrl={pages[currentPage].imageUrl}
                        reflection={pages[currentPage].reflection}
                        badgeTitle={pages[currentPage].badgeTitle}
                        aiAvatarUrl={pages[currentPage].aiAvatarUrl}
                        reactionsEnabled={true}
                        index={0} // Always 0 since we control the animation at this level
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Page flip shadow effect */}
              <AnimatePresence>
                {direction !== 0 && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-20"
                      style={{
                        background:
                          direction > 0
                            ? "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)"
                            : "linear-gradient(-90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                      }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Swipe gesture area for mobile */}
              <div
                className="absolute inset-0 z-10 pointer-events-auto"
                onTouchStart={(e) => {
                  const touch = e.touches[0];
                  const startX = touch.clientX;

                  const handleTouchEnd = (endEvent) => {
                    const endTouch = endEvent.changedTouches[0];
                    const endX = endTouch.clientX;
                    const deltaX = endX - startX;

                    if (Math.abs(deltaX) > 50) {
                      // Minimum swipe distance
                      if (deltaX > 0 && currentPage > 0) {
                        prevPage(); // Swipe right = previous page
                      } else if (deltaX < 0 && currentPage < pages.length - 1) {
                        nextPage(); // Swipe left = next page
                      }
                    }

                    document.removeEventListener("touchend", handleTouchEnd);
                  };

                  document.addEventListener("touchend", handleTouchEnd);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlippableStorybookCard;
