import { Box } from "@mui/material";

const AISpeechBubble = ({ message, isVisible = true }) => {
  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: { xs: "180px", sm: "220px", md: "260px", lg: "300px" }, // Companion mouth level
        left: { xs: "10%", sm: "15%", md: "20%", lg: "25%" },
        zIndex: 15,
        animation: "slideInLeft 0.6s ease-out",
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
            {message}
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
