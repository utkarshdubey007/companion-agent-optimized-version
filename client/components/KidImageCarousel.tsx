import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface KidImageCarouselProps {
  images: string[];
  className?: string;
  theme?: "light" | "dark" | "auto";
  timestamp?: Date;
}

export default function KidImageCarousel({
  images,
  className = "",
  theme = "auto",
  timestamp = new Date(),
}: KidImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

  // Handle window resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-detect theme
  const isDarkTheme =
    theme === "auto"
      ? window.getComputedStyle(document.body).backgroundColor ===
          "rgb(6, 23, 61)" ||
        document.documentElement.classList.contains("dark")
      : theme === "dark";

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

  // Scoped theme styles to avoid conflicts
  const carouselStyles = {
    container: {
      background: isDarkTheme
        ? "linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.95))"
        : "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95))",
      backdropFilter: "blur(12px)",
      border: isDarkTheme
        ? "1px solid rgba(255, 255, 255, 0.15)"
        : "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: isDarkTheme
        ? "0 10px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)"
        : "0 10px 25px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05)",
      color: isDarkTheme ? "#ffffff" : "#1f2937",
    },
    header: {
      background: isDarkTheme
        ? "rgba(59, 130, 246, 0.15)"
        : "rgba(59, 130, 246, 0.1)",
      borderBottom: isDarkTheme
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(0, 0, 0, 0.1)",
    },
    navButton: {
      background: isDarkTheme
        ? "rgba(59, 130, 246, 0.7)"
        : "rgba(59, 130, 246, 0.8)",
      border: isDarkTheme
        ? "1px solid rgba(255, 255, 255, 0.2)"
        : "1px solid rgba(255, 255, 255, 0.3)",
      color: "#ffffff",
    },
    dots: {
      active: isDarkTheme ? "#60a5fa" : "#3b82f6",
      inactive: isDarkTheme ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
    },
  };

  // Responsive styles based on window width
  const getResponsiveStyles = () => {
    if (windowWidth <= 480) {
      return {
        width: "calc(100vw - 16px)",
        maxWidth: "280px",
        right: "8px",
      };
    } else if (windowWidth <= 768) {
      return {
        width: "calc(100vw - 32px)",
        maxWidth: "320px",
        right: "16px",
      };
    } else {
      return {
        width: "280px",
        maxWidth: "90vw",
        right: "16px",
      };
    }
  };

  const responsiveStyles = getResponsiveStyles();

  return (
    <motion.div
      className={className}
      style={{
        position: "fixed",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 30,
        borderRadius: "16px",
        overflow: "hidden",
        ...carouselStyles.container,
        ...responsiveStyles,
      }}
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "backOut" }}
    >
      {/* Compact Header */}
      <div
        style={{
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          ...carouselStyles.header,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ImageIcon
            size={16}
            style={{ color: isDarkTheme ? "#60a5fa" : "#3b82f6" }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: carouselStyles.container.color,
            }}
          >
            Gallery
          </span>
        </div>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: isDarkTheme
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(0, 0, 0, 0.6)",
            background: isDarkTheme
              ? "rgba(59, 130, 246, 0.2)"
              : "rgba(59, 130, 246, 0.15)",
            padding: "2px 8px",
            borderRadius: "12px",
          }}
        >
          {images.length}
        </span>
      </div>

      {/* Carousel Content */}
      <div style={{ position: "relative" }}>
        <div
          ref={emblaRef}
          style={{
            overflow: "hidden",
            cursor: "grab",
          }}
        >
          <div style={{ display: "flex" }}>
            {images.map((image, index) => (
              <motion.div
                key={`kid-carousel-${index}`}
                style={{
                  flex: "0 0 100%",
                  minWidth: 0,
                  position: "relative",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div style={{ position: "relative", paddingBottom: "75%" }}>
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1} of ${images.length}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                  />

                  {/* Image overlay with info */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "8px",
                      left: "8px",
                      background: "rgba(0, 0, 0, 0.6)",
                      color: "#ffffff",
                      fontSize: "12px",
                      fontWeight: 500,
                      padding: "4px 8px",
                      borderRadius: "8px",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {index + 1} / {images.length}
                  </div>

                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                      pointerEvents: "none",
                    }}
                  />
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
              style={{
                position: "absolute",
                left: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                opacity: selectedIndex === 0 ? 0.5 : 1,
                ...carouselStyles.navButton,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={selectedIndex === 0}
            >
              <ChevronLeft size={16} />
            </motion.button>

            <motion.button
              onClick={scrollNext}
              style={{
                position: "absolute",
                right: "8px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                opacity: selectedIndex === images.length - 1 ? 0.5 : 1,
                ...carouselStyles.navButton,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={selectedIndex === images.length - 1}
            >
              <ChevronRight size={16} />
            </motion.button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            padding: "12px 16px",
          }}
        >
          {images.map((_, index) => (
            <motion.button
              key={`dot-${index}`}
              onClick={() => emblaApi?.scrollTo(index)}
              style={{
                width: index === selectedIndex ? "20px" : "6px",
                height: "6px",
                borderRadius: "3px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                background:
                  index === selectedIndex
                    ? carouselStyles.dots.active
                    : carouselStyles.dots.inactive,
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
