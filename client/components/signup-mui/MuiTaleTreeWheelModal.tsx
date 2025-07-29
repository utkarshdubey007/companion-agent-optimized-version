import { useState } from "react";
import { Box, Modal, IconButton, Chip, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

interface WheelAction {
  id: string;
  icon: string;
  label: string;
  color: string;
  description: string;
  position: { top: string; left: string };
}

interface MuiTaleTreeWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MuiTaleTreeWheelModal({
  isOpen,
  onClose,
}: MuiTaleTreeWheelModalProps) {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  // Calculate circular positions using trigonometry
  const radius = 150; // Radius of the circle
  const centerX = 0; // Center X (will be positioned relative to container center)
  const centerY = 0; // Center Y (will be positioned relative to container center)

  const wheelActions: WheelAction[] = [
    {
      id: "imagine",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fbe8068e94c034f37b80ff496f9836079?format=webp&width=800",
      label: "Imagine",
      color: "#f97316",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet vel lectus sed varius.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI / 2)}px)`, // -90° (top)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI / 2)}px)`,
      },
    },
    {
      id: "play",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F392f37f775f74478ab0ebdf2db3f8b18?format=webp&width=800",
      label: "Play",
      color: "#3b82f6",
      description:
        "Engage in interactive storytelling and creative play activities.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI / 6)}px)`, // -30° (top right)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI / 6)}px)`,
      },
    },
    {
      id: "create",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F084deab3e0e14195a8bd0e2f6adf11a8?format=webp&width=800",
      label: "Create",
      color: "#06b6d4",
      description: "Build and craft your own stories and creative content.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI / 6)}px)`, // 30° (bottom right)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI / 6)}px)`,
      },
    },
    {
      id: "store",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Ff5ca235dac1145ad9e9f34e3ffb685b1?format=webp&width=800",
      label: "Store",
      color: "#22c55e",
      description: "Save and organize your creative works and stories.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI / 2)}px)`, // 90° (bottom)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI / 2)}px)`,
      },
    },
    {
      id: "reflect",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F84bf40f92efe4b4ea397148088e0ce03?format=webp&width=800",
      label: "Reflect",
      color: "#a855f7",
      description: "Think about your learning journey and growth.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin((5 * Math.PI) / 6)}px)`, // 150° (bottom left)
        left: `calc(50% + ${centerX + radius * Math.cos((5 * Math.PI) / 6)}px)`,
      },
    },
    {
      id: "reward",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F2728d898d1bb4efabee72f00d281e7cf?format=webp&width=800",
      label: "Reward",
      color: "#ec4899",
      description: "Celebrate achievements and milestones in your journey.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin((-5 * Math.PI) / 6)}px)`, // -150° (top left)
        left: `calc(50% + ${centerX + radius * Math.cos((-5 * Math.PI) / 6)}px)`,
      },
    },
  ];

  const getHoveredAction = () => {
    return wheelActions.find((action) => action.id === hoveredAction);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(8px)",
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "80rem",
          height: "100%",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          p: 2,
          position: "relative",
          outline: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 3 }}>
          <Chip
            label="The TaleTree Method"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(8px)",
              fontSize: "12px",
            }}
          />
        </Box>

        {/* Wheel Container */}
        <Box sx={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Center Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: "absolute",
              width: 64,
              height: 64,
              bgcolor: "#ef4444",
              "&:hover": {
                bgcolor: "#dc2626",
              },
              borderRadius: "50%",
              zIndex: 20,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              transition: "background-color 0.2s ease",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Close sx={{ width: 32, height: 32, color: "white" }} />
          </IconButton>

          {/* Action Items - Circular Layout */}
          {wheelActions.map((action) => (
            <Box
              key={action.id}
              sx={{
                position: "absolute",
                cursor: "pointer",
                top: action.position.top,
                left: action.position.left,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredAction(action.id)}
              onMouseLeave={() => setHoveredAction(null)}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Action Icon */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.2s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={action.icon}
                    alt={action.label}
                    sx={{
                      width: 64,
                      height: 64,
                      objectFit: "contain",
                    }}
                  />
                </Box>
                {/* Label */}
                <Chip
                  label={action.label}
                  sx={{
                    bgcolor: action.color,
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 500,
                    mt: 1,
                  }}
                />
              </Box>
            </Box>
          ))}

          {/* Hover Description */}
          {hoveredAction && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 30,
                transition: "opacity 0.15s ease-in-out",
                opacity: 1,
                top: `calc(${getHoveredAction()?.position.top} - 80px)`,
                left: getHoveredAction()?.position.left,
                transform: "translate(-50%, 0)",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  bgcolor: getHoveredAction()?.color,
                  color: "white",
                  p: 1.5,
                  borderRadius: "8px",
                  maxWidth: "300px",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  position: "relative",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    lineHeight: 1.6,
                  }}
                >
                  {getHoveredAction()?.description}
                </Typography>
                {/* Tooltip arrow */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "12px solid transparent",
                    borderRight: "12px solid transparent",
                    borderTop: `12px solid ${getHoveredAction()?.color}`,
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
