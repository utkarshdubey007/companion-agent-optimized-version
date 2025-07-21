import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnhancedMagicalCompanion } from "./MagicalCompanion";

// Hook to detect when AI is typing/thinking
export const useAITypingState = () => {
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessage, setTypingMessage] = useState("");
  
  const startTyping = (message = "") => {
    setIsTyping(true);
    setTypingMessage(message);
  };
  
  const stopTyping = () => {
    setIsTyping(false);
    setTypingMessage("");
  };
  
  return { isTyping, typingMessage, startTyping, stopTyping };
};

// Companion that appears next to AI messages in speaking mode
export const MessageCompanion = ({ 
  messageRef, 
  companionColor = "#FFD700",
  imageUrl,
  onComplete 
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (messageRef?.current) {
      const messageRect = messageRef.current.getBoundingClientRect();
      const companionX = messageRect.left - 50; // Position to the left of message
      const companionY = messageRect.top + (messageRect.height / 2) - 20; // Center vertically
      
      setPosition({ x: companionX, y: companionY });
      setIsVisible(true);

      // Auto-hide after message is "spoken"
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 3000);

      return () => clearTimeout(hideTimer);
    }
  }, [messageRef, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          style={{
            left: position.x,
            top: position.y,
          }}
          initial={{ 
            scale: 0, 
            opacity: 0,
            rotate: -180,
            x: 100,
            y: 50,
          }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            rotate: 0,
            x: 0,
            y: 0,
          }}
          exit={{ 
            scale: 0, 
            opacity: 0,
            rotate: 180,
            transition: { duration: 0.4 }
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.8,
          }}
        >
          <div className="relative">
            {/* Sparkle trail effect */}
            <motion.div
              className="absolute -inset-2 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                    boxShadow: "0 0 6px #FFD700",
                  }}
                  animate={{
                    x: Math.cos((i * 45 * Math.PI) / 180) * 30,
                    y: Math.sin((i * 45 * Math.PI) / 180) * 30,
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Mini companion */}
            <motion.div
              className="w-10 h-10 rounded-full overflow-hidden relative"
              style={{
                backgroundColor: companionColor,
                boxShadow: `0 4px 15px ${companionColor}60`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={imageUrl}
                alt="Speaking Companion"
                className="w-full h-full object-cover"
              />
              
              {/* Speaking indicator */}
              <motion.div
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-white rounded-full"
                animate={{
                  scaleX: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Sound wave effect */}
            <motion.div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 bg-white rounded-full opacity-60"
                  style={{
                    left: `${i * 4}px`,
                    height: `${8 + i * 2}px`,
                    top: `${-4 - i}px`,
                  }}
                  animate={{
                    scaleY: [0.5, 1.5, 0.5],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Enhanced magical companion chat wrapper
export const MagicalCompanionChat = ({
  children,
  showCompanion = true,
  companionProps = {},
  alignment = "left",
  centerCompanion = true,
  isAIMessage = false,
  isThinking = false,
  messageId,
  onMessageComplete,
}) => {
  const [companionMode, setCompanionMode] = useState("idle");
  const [showMessageCompanion, setShowMessageCompanion] = useState(false);
  const messageRef = useRef(null);
  const chatRef = useRef(null);

  // Get companion color from selected companion or default
  const companionColor = companionProps.color || "#FFD700";
  const companionImage = companionProps.imageUrl || 
    "https://cdn.builder.io/api/v1/image/assets%2Fae5429317afa463b8668d5872bee2cf9%2F81f9377e132c48c0926c8ead2f63132b?format=webp&width=800";

  useEffect(() => {
    if (isThinking) {
      setCompanionMode("thinking");
    } else if (isAIMessage) {
      // Start speaking mode
      setCompanionMode("speaking");
      
      // Brief delay before showing message companion
      setTimeout(() => {
        setShowMessageCompanion(true);
      }, 600);
    } else {
      setCompanionMode("idle");
      setShowMessageCompanion(false);
    }
  }, [isThinking, isAIMessage]);

  const handleMessageCompanionComplete = () => {
    setShowMessageCompanion(false);
    setCompanionMode("idle");
    onMessageComplete?.(messageId);
  };

  const alignmentClasses = centerCompanion ? "items-center" : "items-start";

  const enhancedCompanionProps = {
    ...companionProps,
    chatContainerRef: chatRef,
    size: companionProps.size || "proportional",
    color: companionColor,
    imageUrl: companionImage,
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
          <div ref={messageRef}>
            {children}
          </div>
        </div>
        {showCompanion && (
          <div className="flex-shrink-0">
            <EnhancedMagicalCompanion
              mode={companionMode}
              imageUrl={companionImage}
              size={80}
              companionColor={companionColor}
              className="mr-1 sm:mr-2"
              isAITyping={isThinking}
              showMiniCompanion={showMessageCompanion}
            />
          </div>
        )}
        
        {/* Message companion for speaking mode */}
        {showMessageCompanion && (
          <MessageCompanion
            messageRef={messageRef}
            companionColor={companionColor}
            imageUrl={companionImage}
            onComplete={handleMessageCompanionComplete}
          />
        )}
      </div>
    );
  }

  return (
    <div className={`flex ${alignmentClasses} gap-2 sm:gap-3 md:gap-4 relative`}>
      {showCompanion && (
        <div className="flex-shrink-0">
          <EnhancedMagicalCompanion
            mode={companionMode}
            imageUrl={companionImage}
            size={80}
            companionColor={companionColor}
            isAITyping={isThinking}
            showMiniCompanion={false} // Main companion handles the transition
          />
        </div>
      )}
      
      <div
        ref={chatRef}
        className="flex-1 max-w-[75%] sm:max-w-[70%] md:max-w-[65%]"
      >
        <div ref={messageRef}>
          {children}
        </div>
      </div>

      {/* Message companion for speaking mode */}
      {showMessageCompanion && (
        <MessageCompanion
          messageRef={messageRef}
          companionColor={companionColor}
          imageUrl={companionImage}
          onComplete={handleMessageCompanionComplete}
        />
      )}
    </div>
  );
};

// Typing indicator for when AI is thinking
export const AITypingIndicator = ({ 
  companionColor = "#FFD700",
  className = "" 
}) => {
  return (
    <motion.div
      className={`flex items-center gap-3 p-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Thinking dots */}
      <div className="flex gap-1">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: companionColor }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
      
      <motion.span
        className="text-sm text-gray-500 italic"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Your companion is thinking...
      </motion.span>
    </motion.div>
  );
};

export default MagicalCompanionChat;
