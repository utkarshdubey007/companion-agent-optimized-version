import { useEffect, useRef, useState } from "react";

export function CompanionCharacter({
  size = "proportional",
  position = "auto",
  className = "",
  animated = true,
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F81f9377e132c48c0926c8ead2f63132b?format=webp&width=800",
  alt = "Companion character",
  maxWidthPercent = 15,
  maintainAspectRatio = true,
  chatContainerRef,
}) {
  const containerRef = useRef(null);
  const [proportionalSize, setProportionalSize] = useState(64);

  // Calculate proportional size based on chat container or viewport
  useEffect(() => {
    const calculateSize = () => {
      if (size === "proportional") {
        let targetHeight = 0;

        if (chatContainerRef?.current) {
          // Match chat container height proportionally
          targetHeight = chatContainerRef.current.offsetHeight * 0.6; // 60% of chat height
        } else {
          // Fallback to viewport-based calculation
          const viewportHeight = window.innerHeight;
          targetHeight = Math.min(viewportHeight * 0.08, 80); // 8% of viewport, max 80px
        }

        // Ensure size stays within reasonable bounds
        const calculatedSize = Math.max(48, Math.min(targetHeight, 120));
        setProportionalSize(calculatedSize);
      }
    };

    calculateSize();
    window.addEventListener("resize", calculateSize);

    // Observe chat container changes if provided
    if (chatContainerRef?.current) {
      const resizeObserver = new ResizeObserver(calculateSize);
      resizeObserver.observe(chatContainerRef.current);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener("resize", calculateSize);
      };
    }

    return () => window.removeEventListener("resize", calculateSize);
  }, [size, chatContainerRef]);

  // Size configurations
  const getSizeStyles = () => {
    if (typeof size === "number") {
      return {
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${maxWidthPercent}vw`,
      };
    }

    if (size === "proportional") {
      return {
        width: `${proportionalSize}px`,
        height: `${proportionalSize}px`,
        maxWidth: `${maxWidthPercent}vw`,
      };
    }

    // Fallback to CSS classes for predefined sizes
    return {};
  };

  const getSizeClasses = () => {
    if (typeof size === "number" || size === "proportional") {
      return ""; // Use inline styles
    }

    switch (size) {
      case "small":
        return "w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14";
      case "large":
        return "w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24";
      case "medium":
      default:
        return "w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18";
    }
  };

  // Position configurations with responsive spacing
  const getPositionClasses = () => {
    switch (position) {
      case "near":
        return "ml-1 sm:ml-2";
      case "far":
        return "ml-4 sm:ml-6 md:ml-8";
      case "auto":
      default:
        return "ml-2 sm:ml-3 md:ml-4";
    }
  };

  const sizeStyles = getSizeStyles();
  const sizeClasses = getSizeClasses();
  const positionClasses = getPositionClasses();

  return (
    <div
      ref={containerRef}
      className={`
        flex-shrink-0 
        ${sizeClasses}
        ${positionClasses}
        ${animated ? "transition-all duration-300 hover:scale-105" : ""}
        ${className}
      `}
      style={{
        ...sizeStyles,
        aspectRatio: maintainAspectRatio ? "1" : "auto",
      }}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={`
          w-full h-full 
          ${maintainAspectRatio ? "object-contain" : "object-cover"}
          ${animated ? "transition-transform duration-300" : ""}
          filter drop-shadow-sm
        `}
        style={{
          aspectRatio: maintainAspectRatio ? "1" : "auto",
        }}
        loading="lazy"
      />
    </div>
  );
}

// Enhanced companion wrapper for chat messages with smart layout
export function CompanionChatWrapper({
  children,
  showCompanion = true,
  companionProps = {},
  alignment = "left",
  autoAdjustLayout = true,
  minChatWidth = "60%",
}) {
  const [availableSpace, setAvailableSpace] = useState(100);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateAvailableSpace = () => {
      if (containerRef.current && autoAdjustLayout) {
        const containerWidth = containerRef.current.offsetWidth;
        const companionMaxWidth = parseFloat(
          companionProps.maxWidthPercent?.toString() || "15",
        );
        const availableForChat = 100 - companionMaxWidth - 5; // 5% buffer
        setAvailableSpace(Math.max(60, availableForChat)); // Minimum 60%
      }
    };

    updateAvailableSpace();
    window.addEventListener("resize", updateAvailableSpace);
    return () => window.removeEventListener("resize", updateAvailableSpace);
  }, [autoAdjustLayout, companionProps.maxWidthPercent]);

  const chatContentStyles = autoAdjustLayout
    ? { maxWidth: `${availableSpace}%` }
    : { maxWidth: "80%" };

  if (alignment === "right") {
    return (
      <div
        ref={containerRef}
        className="flex items-start gap-2 sm:gap-3 md:gap-4 justify-end"
      >
        <div
          className="flex-1"
          style={{
            ...chatContentStyles,
            minWidth: minChatWidth,
          }}
        >
          {children}
        </div>
        {showCompanion && (
          <CompanionCharacter
            {...companionProps}
            className={`mr-1 sm:mr-2 md:mr-3 ${companionProps.className || ""}`}
          />
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="flex items-start gap-2 sm:gap-3 md:gap-4"
    >
      {showCompanion && <CompanionCharacter {...companionProps} />}
      <div
        className="flex-1"
        style={{
          ...chatContentStyles,
          minWidth: minChatWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Specialized wrapper for chat messages that centers companion vertically with chat content
export function CompanionChatMessage({
  children,
  showCompanion = true,
  companionProps = {},
  alignment = "left",
  centerCompanion = true,
}) {
  const chatRef = useRef(null);

  const alignmentClasses = centerCompanion ? "items-center" : "items-start";

  const enhancedCompanionProps = {
    ...companionProps,
    chatContainerRef: chatRef,
    size: companionProps.size || "proportional",
  };

  if (alignment === "right") {
    return (
      <div
        className={`flex ${alignmentClasses} gap-2 sm:gap-3 md:gap-4 justify-end`}
      >
        <div
          ref={chatRef}
          className="flex-1 max-w-[75%] sm:max-w-[70%] md:max-w-[65%]"
        >
          {children}
        </div>
        {showCompanion && (
          <CompanionCharacter
            {...enhancedCompanionProps}
            className={`mr-1 sm:mr-2 ${enhancedCompanionProps.className || ""}`}
          />
        )}
      </div>
    );
  }

  return (
    <div className={`flex ${alignmentClasses} gap-2 sm:gap-3 md:gap-4`}>
      {showCompanion && <CompanionCharacter {...enhancedCompanionProps} />}
      <div
        ref={chatRef}
        className="flex-1 max-w-[75%] sm:max-w-[70%] md:max-w-[65%]"
      >
        {children}
      </div>
    </div>
  );
}
