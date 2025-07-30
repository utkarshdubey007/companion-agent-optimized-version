import { useState } from "react";
import {
  Box,
  Modal,
  IconButton,
  Chip,
  Typography,
  Tooltip,
} from "@mui/material";
import { Close } from "@mui/icons-material";

export function MuiCompanionSelectionModal({
  isOpen,
  onClose,
  onSelectCompanion,
}) {
  const [hoveredCompanion, setHoveredCompanion] = useState(null);

  // Calculate circular positions using trigonometry
  const radius = 150; // Radius of the circle
  const centerX = 0; // Center X (will be positioned relative to container center)
  const centerY = 0; // Center Y (will be positioned relative to container center)

  const companionActions = [
    {
      id: "letsgo",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800",
      label: "Letsgo",
      color: "#22c55e",
      description: "A friendly and energetic companion ready for adventures.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI / 2)}px)`, // -90° (top)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI / 2)}px)`,
      },
    },
    {
      id: "rushmore",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F6b282f7859fa4a96aab4f5d21fe7d27d?format=webp&width=800",
      label: "Rushmore",
      color: "#3b82f6",
      description:
        "A wise and thoughtful companion who loves to explore knowledge.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI / 6)}px)`, // -30° (top right)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI / 6)}px)`,
      },
    },
    {
      id: "uni",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Ff6c3edc98a444c79ba1188aeab1c17f6?format=webp&width=800",
      label: "Uni",
      color: "#ec4899",
      description:
        "A magical and creative companion with a love for imagination.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI / 6)}px)`, // 30° (bottom right)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI / 6)}px)`,
      },
    },
    {
      id: "cody",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F067d19c68a9149c6a32a29cf3f5ebb0d?format=webp&width=800",
      label: "Cody",
      color: "#ef4444",
      description: "A brave and determined companion ready for any challenge.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI / 2)}px)`, // 90° (bottom)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI / 2)}px)`,
      },
    },
    {
      id: "doma",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F12511fbec0c84354b93ec8ca250c92b6?format=webp&width=800",
      label: "Doma",
      color: "#06b6d4",
      description: "A calm and peaceful companion who brings tranquility.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin((5 * Math.PI) / 6)}px)`, // 150° (bottom left)
        left: `calc(50% + ${centerX + radius * Math.cos((5 * Math.PI) / 6)}px)`,
      },
    },
    {
      id: "rooty",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fc2faa21a880b45d9be3c40dddb0cd20f?format=webp&width=800",
      label: "Rooty",
      color: "#f97316",
      description: "A grounded and nurturing companion connected to nature.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin((-5 * Math.PI) / 6)}px)`, // -150° (top left)
        left: `calc(50% + ${centerX + radius * Math.cos((-5 * Math.PI) / 6)}px)`,
      },
    },
  ];

  const getHoveredCompanion = () => {
    return companionActions.find(
      (companion) => companion.id === hoveredCompanion,
    );
  };

  const handleCompanionSelect = (companionId) => {
    onSelectCompanion?.(companionId);
    onClose();
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Chip
            label="TaleTree Friends"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              color: "white",
              backdropFilter: "blur(8px)",
              fontSize: "12px",
            }}
          />
        </Box>

        {/* Wheel Container */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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

          {/* Companion Items - Circular Layout */}
          {companionActions.map((companion) => (
            <Box
              key={companion.id}
              sx={{
                position: "absolute",
                cursor: "pointer",
                top: companion.position.top,
                left: companion.position.left,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredCompanion(companion.id)}
              onMouseLeave={() => setHoveredCompanion(null)}
              onClick={() => handleCompanionSelect(companion.id)}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {/* Companion Icon */}
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
                    src={companion.icon}
                    alt={companion.label}
                    sx={{
                      width: 64,
                      height: 64,
                      objectFit: "contain",
                    }}
                  />
                </Box>
                {/* Label */}
                <Chip
                  label={companion.label}
                  sx={{
                    bgcolor: companion.color,
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
          {hoveredCompanion && (
            <Box
              sx={{
                position: "absolute",
                zIndex: 30,
                transition: "opacity 0.15s ease-in-out",
                opacity: 1,
                top: `calc(${getHoveredCompanion()?.position.top} - 80px)`,
                left: getHoveredCompanion()?.position.left,
                transform: "translate(-50%, 0)",
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  bgcolor: getHoveredCompanion()?.color,
                  color: "white",
                  p: 1.5,
                  borderRadius: "8px",
                  maxWidth: "300px",
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
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
                  {getHoveredCompanion()?.description}
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
                    borderTop: `12px solid ${getHoveredCompanion()?.color}`,
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
