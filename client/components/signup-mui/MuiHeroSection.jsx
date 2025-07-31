import { useState } from "react";
import { Box } from "@mui/material";
import { MuiSignupChatContainer } from "./MuiSignupChatContainer.jsx";
import { MuiSignupChatInput } from "./MuiSignupChatInput.jsx";
import { MuiHeaderActions } from "./MuiHeaderActions.jsx";
import { MuiSignupDualSidebar } from "./MuiSignupDualSidebar.jsx";

const MuiHeroSection = () => {
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      type: "text",
      sender: "AI",
      content:
        "It's free to start. Enter the Emerald Forest and begin your journey.",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = (message) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      type: "text",
      sender: "Kid",
      content: message,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, userMessage]);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        type: "text",
        sender: "AI",
        content: `Thanks for sharing: "${message}". Let's explore this together!`,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1500);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fdb72aca99fd341bf810b2c50e7d6006a?format=webp&width=800')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* Dual Sidebar */}
      <MuiSignupDualSidebar />

      {/* Header Actions - Search and Login */}
      <MuiHeaderActions />

      {/* TaleTree Logo and Title */}
      <Box
        sx={{
          position: "absolute",
          top: 48,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 40,
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ width: 64, height: 64, mb: 2 }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F956eb6364f77469eb6b19c2791e6b43a?format=webp&width=800"
              alt="TaleTree Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
          {/* Subtitle */}
          <Box
            component="p"
            sx={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: { xs: "16px", md: "18px" },
              maxWidth: "24rem",
              margin: 0,
            }}
          >
            A New Kind of Curriculum
          </Box>
        </Box>
      </Box>

      {/* SignupChatContainer with companion centered */}
      <Box
        sx={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MuiSignupChatContainer messages={chatMessages} isAIThinking={false} />
      </Box>

      {/* SignupChatInput for chatting */}
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
        <MuiSignupChatInput
          onSendMessage={handleSendMessage}
          placeholder="Ask me anything..."
        />
      </Box>

      {/* Scroll Indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "rgba(255, 255, 255, 0.8)",
          animation: "bounce 1s infinite",
          "@keyframes bounce": {
            "0%, 100%": {
              transform: "translateX(-50%) translateY(0)",
            },
            "50%": {
              transform: "translateX(-50%) translateY(-10px)",
            },
          },
        }}
      >
        <Box
          sx={{
            width: 24,
            height: 40,
            border: "2px solid rgba(255, 255, 255, 0.6)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 12,
              bgcolor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "2px",
              mt: 1,
              animation: "pulse 2s infinite",
            }}
          />
        </Box>
        <Box
          component="svg"
          sx={{ width: 16, height: 16, mt: 0.5 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MuiHeroSection;
