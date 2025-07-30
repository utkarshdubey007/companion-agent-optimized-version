import { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import { MuiTaleTreeWheelModal } from "./MuiTaleTreeWheelModal.jsx";
import { MuiCompanionSelectionModal } from "./MuiCompanionSelectionModal.jsx";

export function MuiSignupDualSidebar({
  topMenuItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fcb34a17284254803ab9d0f3977ab5c38?format=webp&width=800",
      alt: "Menu",
      delay: 100,
    },
  ],
  bottomMenuItems,
  onMenuItemClick,
}) {
  const [topSidebarCollapsed, setTopSidebarCollapsed] = useState(false);
  const [bottomSidebarCollapsed, setBottomSidebarCollapsed] = useState(false);
  const [showTopWaveEffect, setShowTopWaveEffect] = useState(true);
  const [showBottomWaveEffect, setShowBottomWaveEffect] = useState(true);
  const [isWheelModalOpen, setIsWheelModalOpen] = useState(false);
  const [isCompanionModalOpen, setIsCompanionModalOpen] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState({
    id: "letsgo",
    name: "Letsgo",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800",
  });

  const toggleTopSidebar = () => {
    setTopSidebarCollapsed(!topSidebarCollapsed);
  };

  const toggleBottomSidebar = () => {
    setBottomSidebarCollapsed(!bottomSidebarCollapsed);
  };

  // Companion mapping
  const companionMapping = {
    letsgo: {
      name: "Letsgo",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800",
    },
    rushmore: {
      name: "Rushmore",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F6b282f7859fa4a96aab4f5d21fe7d27d?format=webp&width=800",
    },
    uni: {
      name: "Uni",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Ff6c3edc98a444c79ba1188aeab1c17f6?format=webp&width=800",
    },
    cody: {
      name: "Cody",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F067d19c68a9149c6a32a29cf3f5ebb0d?format=webp&width=800",
    },
    doma: {
      name: "Doma",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F12511fbec0c84354b93ec8ca250c92b6?format=webp&width=800",
    },
    rooty: {
      name: "Rooty",
      image:
        "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fc2faa21a880b45d9be3c40dddb0cd20f?format=webp&width=800",
    },
  };

  const handleCompanionSelect = (companionId) => {
    const companion = companionMapping[companionId];
    if (companion) {
      setSelectedCompanion({
        id: companionId,
        name: companion.name,
        image: companion.image,
      });
    }
  };

  // Dynamic bottom menu items based on selected companion
  const dynamicBottomMenuItems = bottomMenuItems || [
    {
      src: selectedCompanion.image,
      alt: selectedCompanion.name,
      delay: 100,
    },
  ];

  const sidebarStyle = {
    bgcolor: "#1C2051",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderLeft: "none",
    borderRadius: "0 15px 15px 0",
    boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
    transition: "all 0.5s ease-in-out",
    position: "relative",
  };

  const menuItemStyle = {
    width: 48,
    height: 48,
    borderRadius: "16px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.3s ease",
    bgcolor: "rgba(255, 255, 255, 0.05)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      bgcolor: "rgba(255, 255, 255, 0.15)",
      borderColor: "rgba(255, 255, 255, 0.3)",
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        left: 0,
        top: 128,
        zIndex: 30,
        display: "flex",
        flexDirection: "column",
        width: "auto",
      }}
    >
      {/* Container with zero margin, aligned to left edge */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          py: 2,
          overflow: "hidden",
        }}
      >
        {/* Top Sidebar Section */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              ...sidebarStyle,
              width: 80,
              height: "auto",
              maxHeight: "calc(60vh)",
            }}
          >
            {/* Menu Items */}
            <Box
              sx={{
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
                width: 64,
                opacity: 1,
                p: 2,
              }}
            >
              <Box sx={{ overflowY: "auto", maxHeight: "calc(60vh - 32px)" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                  }}
                >
                  {topMenuItems.map((item, index) => (
                    <Box
                      key={item.alt}
                      sx={{
                        position: "relative",
                        animation: showTopWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showTopWaveEffect ? "scale(1)" : "scale(0)",
                        "@keyframes popIn": {
                          "0%": {
                            transform: "scale(0) rotate(0deg)",
                            opacity: 0,
                          },
                          "50%": {
                            transform: "scale(1.2) rotate(5deg)",
                          },
                          "100%": {
                            transform: "scale(1) rotate(0deg)",
                            opacity: 1,
                          },
                        },
                        "@keyframes wave": {
                          "0%, 100%": {
                            transform: "scale(1) translateY(0px)",
                          },
                          "25%": {
                            transform: "scale(1.05) translateY(-2px)",
                          },
                          "50%": {
                            transform: "scale(1) translateY(0px)",
                          },
                          "75%": {
                            transform: "scale(1.05) translateY(2px)",
                          },
                        },
                      }}
                    >
                      <Tooltip
                        title={item.alt}
                        placement="right"
                        arrow
                        sx={{
                          "& .MuiTooltip-tooltip": {
                            bgcolor: "#1C2051",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            color: "white",
                            fontSize: "12px",
                            fontWeight: 500,
                          },
                          "& .MuiTooltip-arrow": {
                            color: "#1C2051",
                          },
                        }}
                      >
                        <Box
                          sx={menuItemStyle}
                          onClick={() => {
                            if (item.alt === "Menu") {
                              setIsWheelModalOpen(true);
                            } else {
                              onMenuItemClick?.(item.alt, index);
                            }
                          }}
                        >
                          <Box
                            component="img"
                            src={item.src}
                            alt={item.alt}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                              "&:hover": {
                                transform: "rotate(12deg)",
                              },
                            }}
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom Sidebar Section */}
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              ...sidebarStyle,
              width: 80,
              height: "auto",
              maxHeight: "calc(30vh)",
            }}
          >
            {/* Menu Items */}
            <Box
              sx={{
                transition: "all 0.5s ease-in-out",
                overflow: "hidden",
                width: 64,
                opacity: 1,
                p: 1.5,
              }}
            >
              <Box sx={{ overflowY: "auto", maxHeight: "calc(30vh - 24px)" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  {dynamicBottomMenuItems.map((item, index) => (
                    <Box
                      key={item.alt}
                      sx={{
                        position: "relative",
                        animation: showBottomWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showBottomWaveEffect
                          ? "scale(1)"
                          : "scale(0)",
                      }}
                    >
                      <Tooltip
                        title={item.alt}
                        placement="right"
                        arrow
                        sx={{
                          "& .MuiTooltip-tooltip": {
                            bgcolor: "#1C2051",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            borderRadius: "12px",
                            color: "white",
                            fontSize: "12px",
                            fontWeight: 500,
                          },
                          "& .MuiTooltip-arrow": {
                            color: "#1C2051",
                          },
                        }}
                      >
                        <Box
                          sx={menuItemStyle}
                          onClick={() => {
                            if (
                              item.alt === selectedCompanion.name ||
                              item.alt === "Selected Companion"
                            ) {
                              setIsCompanionModalOpen(true);
                            } else {
                              onMenuItemClick?.(item.alt, index);
                            }
                          }}
                        >
                          <Box
                            component="img"
                            src={item.src}
                            alt={item.alt}
                            sx={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "transform 0.3s ease",
                              "&:hover": {
                                transform: "rotate(12deg)",
                              },
                            }}
                          />
                        </Box>
                      </Tooltip>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* TaleTree Wheel Modal */}
      <MuiTaleTreeWheelModal
        isOpen={isWheelModalOpen}
        onClose={() => setIsWheelModalOpen(false)}
      />

      {/* Companion Selection Modal */}
      <MuiCompanionSelectionModal
        isOpen={isCompanionModalOpen}
        onClose={() => setIsCompanionModalOpen(false)}
        onSelectCompanion={(companionId) => {
          handleCompanionSelect(companionId);
          console.log("Selected companion:", companionId);
        }}
      />
    </Box>
  );
}
