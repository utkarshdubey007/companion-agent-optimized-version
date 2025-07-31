import { Box } from "@mui/material";

const KidSpeechBubble = ({ message, isVisible = false }) => {
  if (!isVisible || !message) return null;

  return (
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
            {message}
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
  );
};

export default KidSpeechBubble;
