import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Lottie from "lottie-react";

export function MuiSignupChatContainer({ messages, isAIThinking = false }) {
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

      {/* Simple Message Container */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* AI Message - At companion's mouth vertical level */}
        {(latestAI || (!latestAI && !latestKid)) && (
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "180px", sm: "220px", md: "260px", lg: "300px" }, // Companion mouth level
              left: { xs: "10%", sm: "15%", md: "20%", lg: "25%" },
              zIndex: 15,
              animation: latestAI ? "slideInLeft 0.6s ease-out" : "none",
              "@keyframes slideInLeft": {
                "0%": {
                  opacity: 0,
                  transform: "translateX(-30px) scale(0.95)",
                },
                "100%": {
                  opacity: 1,
                  transform: "translateX(0) scale(1)",
                },
              },
            }}
          >
            <Box sx={{ maxWidth: { xs: "280px", sm: "320px", md: "360px" } }}>
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
                  }}
                >
                  {latestAI ? latestAI.content : 
                    `Hello, brave explorer! 🌟\nWelcome to TaleTree! Share your magical stories and ideas with me.\n\nLet's create something amazing together!`}
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
        )}

        {/* Kid Message - Below AI message and slightly to the right */}
        {latestKid && (
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: "100px", sm: "120px", md: "140px", lg: "160px" }, // Below AI message
              left: { xs: "25%", sm: "30%", md: "35%", lg: "40%" }, // Slightly to the right
              zIndex: 15,
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
            <Box sx={{ maxWidth: { xs: "260px", sm: "300px" } }}>
              <Box
                sx={{
                  bgcolor: "#22c55e",
                  color: "white",
                  p: { xs: 1.5, sm: 2 },
                  borderRadius: "16px",
                  borderBottomRightRadius: "4px",
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
                  }}
                >
                  {latestKid.content}
                </Box>
                {/* Speech bubble tail */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: { xs: "12px", sm: "16px" },
                    width: 0,
                    height: 0,
                    borderLeft: { xs: "6px solid transparent", sm: "8px solid transparent" },
                    borderRight: { xs: "6px solid transparent", sm: "8px solid transparent" },
                    borderTop: { xs: "6px solid #22c55e", sm: "8px solid #22c55e" },
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
