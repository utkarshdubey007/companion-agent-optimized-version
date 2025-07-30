import { Box } from "@mui/material";

const MuiDecorativeStars = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 80,
          left: 40,
          width: 8,
          height: 8,
          bgcolor: "#f472b6",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 128,
          right: 80,
          width: 4,
          height: 4,
          bgcolor: "#facc15",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.8,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 64,
          right: 128,
          width: 12,
          height: 12,
          bgcolor: "#fb923c",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.6,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 160,
          left: 128,
          width: 8,
          height: 8,
          bgcolor: "#c084fc",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.75,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 96,
          left: "33.33%",
          width: 4,
          height: 4,
          bgcolor: "#22d3ee",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.9,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 112,
          right: "25%",
          width: 8,
          height: 8,
          bgcolor: "#fbb6ce",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.65,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 240,
          left: "25%",
          width: 4,
          height: 4,
          bgcolor: "#60a5fa",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.8,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 48,
          left: "50%",
          width: 8,
          height: 8,
          bgcolor: "#4ade80",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.7,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 192,
          right: "33.33%",
          width: 4,
          height: 4,
          bgcolor: "#f87171",
          borderRadius: "50%",
          animation: "pulse 2s infinite",
          opacity: 0.85,
        }}
      />
    </Box>
  );
};

export default MuiDecorativeStars;
