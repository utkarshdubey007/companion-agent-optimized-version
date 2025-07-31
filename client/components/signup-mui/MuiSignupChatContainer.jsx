import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";
import AISpeechBubble from "./AISpeechBubble.jsx";
import KidSpeechBubble from "./KidSpeechBubble.jsx";

export function MuiSignupChatContainer({ messages, isAIThinking = false }) {
  // State for Lottie animation data
  const [animationData, setAnimationData] = useState(null);
  
  // Simple state management for speech bubbles
  const [aiMessage, setAiMessage] = useState("It's free to start. Enter the Emerald Forest and begin your journey.");
  const [kidMessage, setKidMessage] = useState("");
  const [showKidMessage, setShowKidMessage] = useState(false);

  // Load Lottie animation data
  useEffect(() => {
    const loadAnimation = async () => {
      try {
        const response = await fetch(
          "https://cdn.builder.io/o/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Faf1bb45b193d45099ddf3851679da168?alt=media&token=e1de5c73-b4dc-4ba8-add2-191d7b69446e&apiKey=da24af11bdbb4585b8e6eb6406b2daf9",
        );
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load Lottie animation:", error);
      }
    };

    loadAnimation();
  }, []);

  // Update messages based on incoming messages array
  useEffect(() => {
    if (messages && messages.length > 0) {
      // Find latest AI message
      const latestAI = messages.filter(msg => msg.sender === "AI").pop();
      if (latestAI) {
        setAiMessage(latestAI.content);
      }

      // Find latest Kid message
      const latestKid = messages.filter(msg => msg.sender === "Kid").pop();
      if (latestKid) {
        setKidMessage(latestKid.content);
        setShowKidMessage(true);
      }
    }
  }, [messages]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Companion Character on the ground center-right */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 40, sm: 60, md: 80 },
          right: { xs: "35%", sm: "40%", md: "45%", lg: "50%" },
          transform: "translateX(0)",
          zIndex: 10,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 200, sm: 250, md: 300, lg: 350 },
            height: { xs: 200, sm: 250, md: 300, lg: 350 },
            position: "relative",
          }}
        >
          {/* Magical glow effect */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
              filter: "blur(40px)",
              animation: "pulse 2s infinite",
            }}
          />
          {animationData ? (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                position: "relative",
                zIndex: 10,
              }}
            />
          ) : (
            // Fallback image while loading
            <Box
              component="img"
              src="https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2F39f348f7483547d18b45c8bfcdc8ad42?format=webp&width=800"
              alt="AI Companion"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))",
                position: "relative",
                zIndex: 10,
                animation: "gentleFloat 4s ease-in-out infinite",
                "@keyframes gentleFloat": {
                  "0%, 100%": {
                    transform: "translateY(0px) rotate(0deg)",
                  },
                  "25%": {
                    transform: "translateY(-10px) rotate(1deg)",
                  },
                  "50%": {
                    transform: "translateY(-15px) rotate(0deg)",
                  },
                  "75%": {
                    transform: "translateY(-5px) rotate(-1deg)",
                  },
                },
              }}
            />
          )}
        </Box>
        {isAIThinking && (
          <Box
            sx={{
              position: "absolute",
              top: -48,
              left: "50%",
              transform: "translateX(-50%)",
              animation: "bounce 1s infinite",
            }}
          >
            <Box
              sx={{
                bgcolor: "#3b82f6",
                color: "white",
                px: 2,
                py: 1,
                borderRadius: "20px",
                fontSize: "14px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    borderRadius: "50%",
                    animation: "pulse 1.5s infinite",
                  }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    borderRadius: "50%",
                    animation: "pulse 1.5s infinite 0.2s",
                  }}
                />
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    borderRadius: "50%",
                    animation: "pulse 1.5s infinite 0.4s",
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>

      {/* Speech Bubbles Container */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* AI Speech Bubble - Always visible with current AI message */}
        <AISpeechBubble message={aiMessage} isVisible={true} />

        {/* Kid Speech Bubble - Only visible when user has replied */}
        <KidSpeechBubble message={kidMessage} isVisible={showKidMessage} />
      </Box>
    </Box>
  );
}

// Export functions to control speech bubbles from parent components
export const updateAIMessage = (newMessage) => {
  // This will be used by parent components to update AI message
  return newMessage;
};

export const updateKidMessage = (newMessage) => {
  // This will be used by parent components to update Kid message
  return newMessage;
};
