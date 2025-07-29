import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface CompanionAction {
  id: string;
  icon: string;
  label: string;
  color: string;
  description: string;
  position: { top: string; left: string };
}

interface CompanionSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCompanion?: (companionId: string) => void;
}

export function CompanionSelectionModal({
  isOpen,
  onClose,
  onSelectCompanion,
}: CompanionSelectionModalProps) {
  const [hoveredCompanion, setHoveredCompanion] = useState<string | null>(null);

  // Calculate circular positions using trigonometry
  const radius = 150; // Radius of the circle
  const centerX = 0; // Center X (will be positioned relative to container center)
  const centerY = 0; // Center Y (will be positioned relative to container center)

  const companionActions: CompanionAction[] = [
    {
      id: "letsgo",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F5524e36757e049b29b018c866cb3f01e?format=webp&width=800",
      label: "Letsgo",
      color: "bg-green-500",
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
      color: "bg-blue-500",
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
      color: "bg-pink-500",
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
      color: "bg-red-500",
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
      color: "bg-cyan-500",
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
      color: "bg-orange-500",
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

  const handleCompanionSelect = (companionId: string) => {
    onSelectCompanion?.(companionId);
    onClose();
  };

  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed top-0 left-0 w-full h-full z-[99999] flex items-center justify-center backdrop-blur-md bg-black/40"
      onClick={onClose}
      style={{ zIndex: 99999 }}
    >
      {/* Modal Content */}
      <div
        className="w-full max-w-5xl h-full max-h-[90vh] flex flex-col p-4 relative z-[99999]"
        onClick={(e) => e.stopPropagation()}
        style={{ zIndex: 99999 }}
      >
        {/* Header */}
        <div className="flex justify-center items-center mb-6">
          <span className="text-white text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            TaleTree Friends
          </span>
        </div>

        {/* Wheel Container */}
        <div className="flex-1 relative flex items-center justify-center">
          {/* Center Close Button */}
          <button
            onClick={onClose}
            className="absolute w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg z-20"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Companion Items - Circular Layout */}
          {companionActions.map((companion) => (
            <div
              key={companion.id}
              className="absolute cursor-pointer"
              style={{
                top: companion.position.top,
                left: companion.position.left,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredCompanion(companion.id)}
              onMouseLeave={() => setHoveredCompanion(null)}
              onClick={() => handleCompanionSelect(companion.id)}
            >
              <div className="flex flex-col items-center">
                {/* Companion Icon */}
                <div className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                  <img
                    src={companion.icon}
                    alt={companion.label}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                {/* Label */}
                <span
                  className={`text-white text-sm font-medium mt-2 ${companion.color} px-3 py-1 rounded-full`}
                >
                  {companion.label}
                </span>
              </div>
            </div>
          ))}

          {/* Hover Description */}
          {hoveredCompanion && (
            <div
              className="absolute z-30 transition-opacity duration-150 ease-in-out opacity-100"
              style={{
                top: `calc(${getHoveredCompanion()?.position.top} - 80px)`,
                left: getHoveredCompanion()?.position.left,
                transform: "translate(-50%, 0)",
                pointerEvents: "none",
              }}
            >
              <div
                className={`${getHoveredCompanion()?.color} text-white p-3 rounded-lg max-w-xs shadow-xl`}
              >
                <p className="text-xs leading-relaxed">
                  {getHoveredCompanion()?.description}
                </p>
                {/* Tooltip arrow with matching color */}
                <div
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent`}
                  style={{
                    borderTopColor:
                      getHoveredCompanion()?.color === "bg-orange-500"
                        ? "#f97316"
                        : getHoveredCompanion()?.color === "bg-blue-500"
                          ? "#3b82f6"
                          : getHoveredCompanion()?.color === "bg-cyan-500"
                            ? "#06b6d4"
                            : getHoveredCompanion()?.color === "bg-green-500"
                              ? "#22c55e"
                              : getHoveredCompanion()?.color === "bg-red-500"
                                ? "#ef4444"
                                : getHoveredCompanion()?.color === "bg-pink-500"
                                  ? "#ec4899"
                                  : "#ec4899",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
