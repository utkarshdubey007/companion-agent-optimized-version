import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";

interface ChatMessage {
  id: string;
  type: "text" | "system";
  sender: "AI" | "Kid";
  content?: string;
  timestamp: Date;
}

interface MuiSignupChatContainerProps {
  messages: ChatMessage[];
  isAIThinking?: boolean;
}

export function MuiSignupChatContainer({
  messages,
  isAIThinking = false,
}: MuiSignupChatContainerProps) {
  // State for Lottie animation data
  const [animationData, setAnimationData] = useState(null);

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

  // Get the latest AI and Kid messages separately
  const getLatestMessages = () => {
    let latestAI = null;
    let latestKid = null;

    // Find the most recent AI and Kid messages
    for (let i = messages.length - 1; i >= 0; i--) {
      const message = messages[i];
      if (message.sender === "AI" && !latestAI) {
        latestAI = message;
      }
      if (message.sender === "Kid" && !latestKid) {
        latestKid = message;
      }
      if (latestAI && latestKid) break;
    }

    return { latestAI, latestKid };
  };

  const { latestAI, latestKid } = getLatestMessages();

  const renderMessage = (message: ChatMessage) => {
    // AI text messages - positioned at companion mouth level
    if (message.sender === "AI") {
      return (
        <Box
          key={message.id}
          sx={{
            position: "absolute",
            bottom: { xs: "280px", sm: "350px", md: "400px", lg: "450px" },
            left: { xs: "35%", sm: "40%", md: "42%", lg: "44%" },
            transform: "translateX(-50%)",
            zIndex: 10,
            animation: "slideInLeft 0.6s ease-out",
            "@keyframes slideInLeft": {
              "0%": {
                opacity: 0,
                transform: "translateX(-70px) scale(0.95)",
              },
              "100%": {
                opacity: 1,
                transform: "translateX(-50%) scale(1)",
              },
            },
          }}
        >
          <Box sx={{ maxWidth: { xs: "300px", sm: "384px", md: "448px" } }}>
            <Box
              sx={{
                bgcolor: "#3b82f6",
                color: "white",
                p: { xs: 1, sm: 1.5 },
                borderRadius: "16px",
                borderBottomLeftRadius: "4px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                position: "relative",
              }}
            >
              <Box
                component="p"
                sx={{
                  fontSize: { xs: "12px", sm: "14px" },
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {message.content}
              </Box>
              {/* Speech bubble tail pointing to companion */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: { xs: "16px", sm: "24px" },
                  width: 0,
                  height: 0,
                  borderLeft: { xs: "4px solid transparent", sm: "8px solid transparent" },
                  borderRight: { xs: "4px solid transparent", sm: "8px solid transparent" },
                  borderTop: { xs: "4px solid #3b82f6", sm: "8px solid #3b82f6" },
                  transform: "translateY(100%)",
                }}
              />
            </Box>
          </Box>
        </Box>
      );
    }

    // Kid messages - positioned below AI message on the right
    return (
      <Box
        key={message.id}
        sx={{
          position: "absolute",
          bottom: "112px",
          right: "32px",
          animation: "slideInRight 0.6s ease-out",
          "@keyframes slideInRight": {
            "0%": {
              opacity: 0,
              transform: "translateX(20px) scale(0.95)",
            },
            "100%": {
              opacity: 1,
              transform: "translateX(0) scale(1)",
            },
          },
        }}
      >
        <Box sx={{ maxWidth: "300px" }}>
          <Box
            sx={{
              bgcolor: "#22c55e",
              color: "white",
              p: 1.5,
              borderRadius: "16px",
              borderBottomRightRadius: "4px",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
          >
            <Box
              component="p"
              sx={{
                fontSize: "14px",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {message.content}
            </Box>
            {/* Speech bubble tail */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                right: "16px",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderTop: "8px solid #22c55e",
                transform: "translateY(100%)",
              }}
            />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
      {/* Fixed Companion Character on left side above chat input and on ground - responsive */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 64, sm: 80, md: 96 },
          left: { xs: "15%", sm: "18%", md: "20%", lg: "22%" },
          transform: "translateX(-50%)",
          zIndex: 10,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateX(-50%) scale(1.05)",
          },
        }}
      >
        <Box
          sx={{
            width: { xs: 192, sm: 256, md: 320, lg: 384 },
            height: { xs: 192, sm: 256, md: 320, lg: 384 },
            position: "relative",
          }}
        >
          {/* Magical glow effect */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
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

      {/* Messages Container - positioned absolutely for precise placement */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Latest AI Message - above companion */}
        {latestAI && renderMessage(latestAI)}

        {/* Latest Kid Message - on the right */}
        {latestKid && renderMessage(latestKid)}

        {/* Default state when no messages */}
        {!latestAI && !latestKid && (
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "224px", sm: "288px", md: "320px", lg: "384px" },
              left: { xs: "60%", sm: "66.67%", md: "60%", lg: "60%" },
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            <Box sx={{ maxWidth: { xs: "300px", sm: "384px", md: "448px" } }}>
              <Box
                sx={{
                  bgcolor: "#3b82f6",
                  color: "white",
                  p: { xs: 1, sm: 1.5 },
                  borderRadius: "16px",
                  borderBottomLeftRadius: "4px",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                }}
              >
                <Box
                  component="p"
                  sx={{
                    fontSize: { xs: "12px", sm: "14px" },
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Hello, brave explorer! 🌟
                  <br />
                  Welcome to TaleTree! Share your magical stories and ideas with
                  me.
                  <br />
                  <br />
                  Let's create something amazing together!
                </Box>
                {/* Speech bubble tail pointing to companion */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: { xs: "16px", sm: "24px" },
                    width: 0,
                    height: 0,
                    borderLeft: { xs: "4px solid transparent", sm: "8px solid transparent" },
                    borderRight: { xs: "4px solid transparent", sm: "8px solid transparent" },
                    borderTop: { xs: "4px solid #3b82f6", sm: "8px solid #3b82f6" },
                    transform: "translateY(100%)",
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export type { ChatMessage };
