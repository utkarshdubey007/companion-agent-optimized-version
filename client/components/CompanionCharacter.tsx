import React from "react";

interface CompanionCharacterProps {
  /** Size of the companion character - controls both width and height */
  size?: "small" | "medium" | "large" | number;
  /** Position adjustment from the left edge */
  position?: "near" | "far" | "auto";
  /** Custom className for additional styling */
  className?: string;
  /** Whether the character should be animated */
  animated?: boolean;
  /** Custom image URL - defaults to the provided companion character */
  imageUrl?: string;
  /** Alt text for accessibility */
  alt?: string;
}

export function CompanionCharacter({
  size = "medium",
  position = "auto",
  className = "",
  animated = true,
  imageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F81f9377e132c48c0926c8ead2f63132b?format=webp&width=800",
  alt = "Companion character",
}: CompanionCharacterProps) {
  // Size configurations
  const getSizeClasses = () => {
    if (typeof size === "number") {
      return {
        width: `${size}px`,
        height: `${size}px`,
      };
    }

    switch (size) {
      case "small":
        return "w-12 h-12 sm:w-14 sm:h-14";
      case "large":
        return "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28";
      case "medium":
      default:
        return "w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20";
    }
  };

  // Position configurations
  const getPositionClasses = () => {
    switch (position) {
      case "near":
        return "ml-2 sm:ml-3";
      case "far":
        return "ml-6 sm:ml-8 md:ml-10";
      case "auto":
      default:
        return "ml-3 sm:ml-4 md:ml-6";
    }
  };

  const sizeClasses = getSizeClasses();
  const positionClasses = getPositionClasses();

  return (
    <div
      className={`
        flex-shrink-0 
        ${typeof size === "number" ? "" : sizeClasses}
        ${positionClasses}
        ${animated ? "transition-all duration-300 hover:scale-105" : ""}
        ${className}
      `}
      style={typeof size === "number" ? sizeClasses : undefined}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={`
          w-full h-full object-contain rounded-full
          ${animated ? "transition-transform duration-300" : ""}
          filter drop-shadow-sm
        `}
        loading="lazy"
      />
    </div>
  );
}

// Companion wrapper for chat messages
interface CompanionChatWrapperProps {
  children: React.ReactNode;
  showCompanion?: boolean;
  companionProps?: CompanionCharacterProps;
  alignment?: "left" | "right";
}

export function CompanionChatWrapper({
  children,
  showCompanion = true,
  companionProps = {},
  alignment = "left",
}: CompanionChatWrapperProps) {
  if (alignment === "right") {
    return (
      <div className="flex items-start gap-2 sm:gap-3 md:gap-4 justify-end">
        <div className="flex-1 max-w-[80%] sm:max-w-[70%] md:max-w-[60%]">
          {children}
        </div>
        {showCompanion && (
          <CompanionCharacter
            {...companionProps}
            className={`mr-3 sm:mr-4 md:mr-6 ${companionProps.className || ""}`}
          />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
      {showCompanion && <CompanionCharacter {...companionProps} />}
      <div className="flex-1 max-w-[80%] sm:max-w-[70%] md:max-w-[60%]">
        {children}
      </div>
    </div>
  );
}
