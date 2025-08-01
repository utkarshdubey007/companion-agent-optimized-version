import React, { useRef, useEffect } from "react";
import { Box } from "@mui/material";
import Typed from "typed.js";

const AISpeechBubble = ({ message, isVisible = true, onTypingStart, onTypingComplete }) => {
  if (!isVisible) return null;
  
  const textElement = useRef(null);

  useEffect(() => {
    if (message && textElement.current) {
      onTypingStart?.();
      
      const speechString = message;
      const typed = new Typed(textElement.current, {
        strings: [speechString],
        typeSpeed: 60,            // ⬅️ slower = more natural (60-80 ms is good)
        startDelay: 0,            // delay before typing starts
        backSpeed: 40,            // (in case you use backspacing later)
        smartBackspace: true,     // optimize backspacing
        showCursor: false,
        onComplete: () => {
          // 🔥 Add realistic delay (800–1200ms) before switching to idle
          const delay = Math.floor(Math.random() * 400) + 800; // random between 800–1200ms
          setTimeout(() => {
            let action = null;
            let existingData = localStorage.getItem("landingPageUserDetails");
            let parsedData = existingData ? JSON.parse(existingData) : {};
            if (!parsedData?.userRole)
              action = "askForUserRole";
              
            onTypingComplete?.(action);
          }, delay);
        },
      });

      // Cleanup on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, [message, onTypingStart, onTypingComplete]);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "180px", sm: "220px", md: "260px", lg: "300px" }, // Companion mouth level
        left: { xs: "10%", sm: "15%", md: "20%", lg: "25%" },
        zIndex: 15,
        opacity: 1,
        transform: "translateX(0) scale(1)",
        transition: "opacity 0.3s ease",
        // Remove animation to prevent upward movement
        // animation: "slideInLeft 0.6s ease-out",
      }}
    >
      <Box sx={{ 
        maxWidth: { xs: "280px", sm: "320px", md: "360px" },
        minWidth: { xs: "200px", sm: "240px", md: "280px" },
      }}>
        <Box
          sx={{
            bgcolor: "#3b82f6",
            color: "white",
            p: { xs: 1.5, sm: 2 },
            borderRadius: "16px",
            borderBottomLeftRadius: "4px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            position: "relative",
          }}
        >
          <Box
            component="p"
            sx={{
              fontSize: { xs: "13px", sm: "14px" },
              lineHeight: 1.6,
              margin: 0,
              minHeight: { xs: "40px", sm: "45px" },
              display: "flex",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <span 
              ref={textElement}
              style={{ 
                width: "100%", 
                wordWrap: "break-word",
                display: "block"
              }}
            ></span>
          </Box>
          {/* Speech bubble tail pointing to companion */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: { xs: "12px", sm: "16px" },
              width: 0,
              height: 0,
              borderLeft: { xs: "6px solid transparent", sm: "8px solid transparent" },
              borderRight: { xs: "6px solid transparent", sm: "8px solid transparent" },
              borderTop: { xs: "6px solid #3b82f6", sm: "8px solid #3b82f6" },
              transform: "translateY(100%)",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AISpeechBubble;
