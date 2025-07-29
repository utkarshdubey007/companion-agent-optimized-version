import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TaleTreeWheelModal } from "./TaleTreeWheelModal";
import { CompanionSelectionModal } from "./CompanionSelectionModal";

interface MenuItem {
  src: string;
  alt: string;
  delay: number;
}

interface SignupDualSidebarProps {
  topMenuItems?: MenuItem[];
  bottomMenuItems?: MenuItem[];
  onMenuItemClick?: (itemAlt: string, index: number) => void;
}

export function SignupDualSidebar({
  topMenuItems = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F616e1bb5209e4aa1a9344292cfe45f71?format=webp&width=800",
      alt: "Menu",
      delay: 100
    }
  ],
  bottomMenuItems,
  onMenuItemClick,
}: SignupDualSidebarProps) {
  const [topSidebarCollapsed, setTopSidebarCollapsed] = useState(false);
  const [bottomSidebarCollapsed, setBottomSidebarCollapsed] = useState(false);
  const [showTopWaveEffect, setShowTopWaveEffect] = useState(true);
  const [showBottomWaveEffect, setShowBottomWaveEffect] = useState(true);
  const [isWheelModalOpen, setIsWheelModalOpen] = useState(false);
  const [isCompanionModalOpen, setIsCompanionModalOpen] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState({
    id: "letsgo",
    name: "Letsgo",
    image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800"
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
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800"
    },
    rushmore: {
      name: "Rushmore",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F6b282f7859fa4a96aab4f5d21fe7d27d?format=webp&width=800"
    },
    uni: {
      name: "Uni",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Ff6c3edc98a444c79ba1188aeab1c17f6?format=webp&width=800"
    },
    cody: {
      name: "Cody",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F067d19c68a9149c6a32a29cf3f5ebb0d?format=webp&width=800"
    },
    doma: {
      name: "Doma",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F12511fbec0c84354b93ec8ca250c92b6?format=webp&width=800"
    },
    rooty: {
      name: "Rooty",
      image: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fc2faa21a880b45d9be3c40dddb0cd20f?format=webp&width=800"
    }
  };

  const handleCompanionSelect = (companionId: string) => {
    const companion = companionMapping[companionId as keyof typeof companionMapping];
    if (companion) {
      setSelectedCompanion({
        id: companionId,
        name: companion.name,
        image: companion.image
      });
    }
  };

  // Dynamic bottom menu items based on selected companion
  const dynamicBottomMenuItems = bottomMenuItems || [
    {
      src: selectedCompanion.image,
      alt: selectedCompanion.name,
      delay: 100
    }
  ];

  return (
    <div className="fixed left-0 top-0 z-30 flex flex-col h-screen w-auto">
      {/* Container with zero margin, aligned to left edge */}
      <div className="flex flex-col gap-3 py-4 h-screen max-h-screen overflow-hidden">
        {/* Top Sidebar Section */}
        <div className="flex items-center relative">
          {/* Top Section Content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              topSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] border border-white/20 border-l-0 shadow-2xl flex flex-col p-4"
              style={{
                borderRadius: "0 15px 15px 0",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(60vh)",
              }}
            >
              {/* Menu Items */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-3">
                  {topMenuItems.map((item, index) => (
                    <div
                      key={item.alt}
                      className="relative group"
                      style={{
                        animation: showTopWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showTopWaveEffect
                          ? "scale(1)"
                          : "scale(0)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        onClick={() => {
                          if (item.alt === "Menu") {
                            setIsWheelModalOpen(true);
                          } else {
                            onMenuItemClick?.(item.alt, index);
                          }
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:rotate-12"
                        />
                      </div>

                      {/* Tooltip */}
                      {!topSidebarCollapsed && (
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#1C2051] border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none">
                          {item.alt}
                          {/* Tooltip arrow */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1C2051]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Top Section Toggle Button */}
          <Button
            onClick={toggleTopSidebar}
            className="w-8 h-12 bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 flex-shrink-0 z-10 transition-all duration-500 ease-in-out"
            style={{
              borderRadius: "0 15px 15px 0",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginLeft: topSidebarCollapsed ? "0" : "-8px",
            }}
          >
            {topSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white transition-transform duration-300" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Bottom Sidebar Section */}
        <div className="flex items-center relative">
          {/* Bottom Section Content */}
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              bottomSidebarCollapsed ? "w-0 opacity-0" : "w-20 opacity-100"
            }`}
          >
            <div
              className="bg-[#1C2051] border border-white/20 border-l-0 shadow-2xl flex flex-col p-3"
              style={{
                borderRadius: "0 15px 15px 0",
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.4)",
                height: "auto",
                maxHeight: "calc(30vh)",
              }}
            >
              {/* Menu Items */}
              <div className="overflow-y-auto hide-scrollbar">
                <div className="flex flex-col items-center gap-2">
                  {dynamicBottomMenuItems.map((item, index) => (
                    <div
                      key={item.alt}
                      className="relative group"
                      style={{
                        animation: showBottomWaveEffect
                          ? `popIn 0.6s ease-out ${item.delay}ms both, wave 2s ease-in-out ${item.delay + 600}ms both`
                          : "none",
                        transform: showBottomWaveEffect
                          ? "scale(1)"
                          : "scale(0)",
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-white/30 bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 hover:border-white/30"
                        onClick={() => {
                          if (item.alt === selectedCompanion.name || item.alt === "Selected Companion") {
                            setIsCompanionModalOpen(true);
                          } else {
                            onMenuItemClick?.(item.alt, index);
                          }
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:rotate-12"
                        />
                      </div>

                      {/* Tooltip */}
                      {!bottomSidebarCollapsed && (
                        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-[#1C2051] border border-white/20 rounded-xl text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-40 pointer-events-none">
                          {item.alt}
                          {/* Tooltip arrow */}
                          <div className="absolute right-full top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-[#1C2051]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section Toggle Button */}
          <Button
            onClick={toggleBottomSidebar}
            className="w-8 h-12 bg-[#1C2051] hover:bg-[#252B5C] border border-white/20 border-l-0 p-0 flex-shrink-0 z-10 transition-all duration-500 ease-in-out"
            style={{
              borderRadius: "0 15px 15px 0",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginLeft: bottomSidebarCollapsed ? "0" : "-8px",
            }}
          >
            {bottomSidebarCollapsed ? (
              <ChevronRight className="w-4 h-4 text-white transition-transform duration-300" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-white transition-transform duration-300" />
            )}
          </Button>
        </div>
      </div>

      {/* TaleTree Wheel Modal */}
      <TaleTreeWheelModal
        isOpen={isWheelModalOpen}
        onClose={() => setIsWheelModalOpen(false)}
      />

      {/* Companion Selection Modal */}
      <CompanionSelectionModal
        isOpen={isCompanionModalOpen}
        onClose={() => setIsCompanionModalOpen(false)}
        onSelectCompanion={(companionId) => {
          handleCompanionSelect(companionId);
          console.log("Selected companion:", companionId);
        }}
      />
    </div>
  );
}
