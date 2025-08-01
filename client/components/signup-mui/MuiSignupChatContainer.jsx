import { useState, useEffect, useRef } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";
import AISpeechBubble from "./AISpeechBubble.jsx";
import KidSpeechBubble from "./KidSpeechBubble.jsx";

// Companion modes
const COMPANION_MODES = {
  IDLE: 'idle',
  THINKING: 'thinking', 
  SPEAKING: 'speaking'
};

// Animation URLs for different modes
const ANIMATION_URLS = {
  [COMPANION_MODES.IDLE]: "https://cdn.builder.io/o/assets%2F70505802e34346039d2fb8ec7db34579%2Fd3de7a1f70314ece91b83ffa492726dc?alt=media&token=6a4db52f-cb36-4d59-9db0-04bf4ebde8b0&apiKey=70505802e34346039d2fb8ec7db34579",
  [COMPANION_MODES.THINKING]: "https://cdn.builder.io/o/assets%2F70505802e34346039d2fb8ec7db34579%2F322903f820a3472f99f5610e686798b8?alt=media&token=8d3bff41-2cfc-4da3-a209-989b58fafca7&apiKey=70505802e34346039d2fb8ec7db34579",
  [COMPANION_MODES.SPEAKING]: "https://cdn.builder.io/o/assets%2F70505802e34346039d2fb8ec7db34579%2F0e5d3949846142b48fd890c6fe184726?alt=media&token=f8505765-0507-4655-b8f1-a4e983c0271f&apiKey=70505802e34346039d2fb8ec7db34579"
};

// Conversation API simulation
const conversationAPI = async (message) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
  
  // Simulate AI responses
  const responses = [
    "That's a wonderful idea! Let me help you explore this magical world further.",
    "Interesting! Tell me more about what you're thinking. I'm here to guide you through your journey.",
    "Fantastic! Your creativity is amazing. Let's continue building this story together.",
    "I love your imagination! What happens next in our adventure?",
    "Great question! Let me share some magical insights with you."
  ];
  
  return responses[Math.floor(Math.random() * responses.length)];
};

export function MuiSignupChatContainer({ onSendMessage }) {
  // Animation data states for each mode
  const [animations, setAnimations] = useState({
    [COMPANION_MODES.IDLE]: null,
    [COMPANION_MODES.THINKING]: null,
    [COMPANION_MODES.SPEAKING]: null
  });

  // Companion state management
  const [companionMode, setCompanionMode] = useState(COMPANION_MODES.IDLE);
  const [currentAnimation, setCurrentAnimation] = useState(null);

  // Chat state management
  const [aiMessage, setAiMessage] = useState("It's free to start. Enter the Emerald Forest and begin your journey.");
  const [kidMessage, setKidMessage] = useState("");
  const [showKidMessage, setShowKidMessage] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [userInput, setUserInput] = useState("");

  // Typewriter control
  const [shouldStartTyping, setShouldStartTyping] = useState(false);
  const [pendingMessage, setPendingMessage] = useState("");

  // Load all Lottie animations
  useEffect(() => {
    const loadAnimations = async () => {
      try {
        const animationPromises = Object.entries(ANIMATION_URLS).map(async ([mode, url]) => {
          const response = await fetch(url);
          const data = await response.json();
          return [mode, data];
        });

        const loadedAnimations = await Promise.all(animationPromises);
        const animationsMap = Object.fromEntries(loadedAnimations);
        
        setAnimations(animationsMap);
        setCurrentAnimation(animationsMap[COMPANION_MODES.IDLE]);
      } catch (error) {
        console.error("Failed to load animations:", error);
        // Fallback to default animation
        setCurrentAnimation(null);
      }
    };

    loadAnimations();
  }, []);

  // Update current animation when companion mode changes
  useEffect(() => {
    if (animations[companionMode]) {
      setCurrentAnimation(animations[companionMode]);
    }
  }, [companionMode, animations]);

  // Handle user message submission
  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    setKidMessage(userMessage);
    setShowKidMessage(true);
    setUserInput("");

    // Switch to thinking mode
    setCompanionMode(COMPANION_MODES.THINKING);

    try {
      // Call conversation API
      const response = await conversationAPI(userMessage);
      
      // Switch to speaking mode and start typing
      setCompanionMode(COMPANION_MODES.SPEAKING);
      setPendingMessage(response);
      setShouldStartTyping(true);
      setIsTyping(true);

      // Call parent callback if provided
      if (onSendMessage) {
        onSendMessage(userMessage);
      }
    } catch (error) {
      console.error("Conversation API error:", error);
      // Switch back to idle on error
      setCompanionMode(COMPANION_MODES.IDLE);
      setIsTyping(false);
    }
  };

  // Handle typing completion
  const handleTypingComplete = () => {
    setIsTyping(false);
    setShouldStartTyping(false);
    setCompanionMode(COMPANION_MODES.IDLE);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {/* Companion Character with Mode-based Animation */}
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
              background: companionMode === COMPANION_MODES.THINKING 
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3))"
                : companionMode === COMPANION_MODES.SPEAKING
                ? "radial-gradient(circle, rgba(34, 197, 94, 0.3), rgba(16, 185, 129, 0.3))"
                : "radial-gradient(circle, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))",
              filter: "blur(40px)",
              animation: companionMode === COMPANION_MODES.THINKING ? "pulse 1s infinite" : "pulse 2s infinite",
            }}
          />
          
          {currentAnimation ? (
            <Lottie
              animationData={currentAnimation}
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

        {/* Mode indicator */}
        <Box
          sx={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "10px",
            fontWeight: 600,
            color: "white",
            bgcolor: companionMode === COMPANION_MODES.THINKING 
              ? "#3b82f6" 
              : companionMode === COMPANION_MODES.SPEAKING 
              ? "#22c55e" 
              : "#8b5cf6",
            opacity: companionMode === COMPANION_MODES.IDLE ? 0 : 1,
            transition: "all 0.3s ease",
          }}
        >
          {companionMode === COMPANION_MODES.THINKING && "Thinking..."}
          {companionMode === COMPANION_MODES.SPEAKING && "Speaking..."}
        </Box>
      </Box>

      {/* Speech Bubbles Container */}
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* AI Speech Bubble with Typewriter Effect */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "180px", sm: "220px", md: "260px", lg: "300px" },
            left: { xs: "10%", sm: "15%", md: "20%", lg: "25%" },
            zIndex: 15,
            opacity: 1,
            transform: "translateX(0) scale(1)",
            transition: "opacity 0.3s ease",
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
                {shouldStartTyping && pendingMessage ? (
                  <Typewriter
                    options={{
                      strings: [pendingMessage],
                      autoStart: true,
                      loop: false,
                      delay: 50,
                      deleteSpeed: Infinity,
                      cursor: "",
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(pendingMessage)
                        .callFunction(() => {
                          setAiMessage(pendingMessage);
                          handleTypingComplete();
                        })
                        .start();
                    }}
                  />
                ) : (
                  aiMessage
                )}
              </Box>
              {/* Speech bubble tail */}
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

        {/* Kid Speech Bubble */}
        <KidSpeechBubble message={kidMessage} isVisible={showKidMessage} />
      </Box>

      {/* User Input */}
      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 30,
          width: "100%",
          maxWidth: "32rem",
          px: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "flex-end",
            bgcolor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "24px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(10px)",
            p: 1,
          }}
        >
          <TextField
            fullWidth
            multiline
            maxRows={3}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={companionMode === COMPANION_MODES.THINKING || isTyping}
            placeholder={
              companionMode === COMPANION_MODES.THINKING 
                ? "AI is thinking..." 
                : isTyping 
                ? "AI is responding..." 
                : "Ask me anything..."
            }
            variant="standard"
            sx={{
              "& .MuiInput-underline:before": { display: "none" },
              "& .MuiInput-underline:after": { display: "none" },
              "& .MuiInputBase-input": {
                fontSize: "14px",
                py: 1,
                px: 2,
              },
            }}
          />
          <IconButton
            onClick={handleSendMessage}
            disabled={!userInput.trim() || companionMode === COMPANION_MODES.THINKING || isTyping}
            sx={{
              bgcolor: userInput.trim() && companionMode === COMPANION_MODES.IDLE && !isTyping ? "#3b82f6" : "#e5e7eb",
              color: userInput.trim() && companionMode === COMPANION_MODES.IDLE && !isTyping ? "white" : "#9ca3af",
              width: 40,
              height: 40,
              "&:hover": {
                bgcolor: userInput.trim() && companionMode === COMPANION_MODES.IDLE && !isTyping ? "#2563eb" : "#d1d5db",
              },
              transition: "all 0.2s ease",
            }}
          >
            <Send sx={{ fontSize: 18 }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
