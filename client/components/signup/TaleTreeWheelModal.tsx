import { useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface WheelAction {
  id: string;
  icon: string;
  label: string;
  color: string;
  description: string;
  position: { top: string; left: string };
}

interface TaleTreeWheelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TaleTreeWheelModal({ isOpen, onClose }: TaleTreeWheelModalProps) {
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  // Calculate circular positions using trigonometry
  const radius = 150; // Radius of the circle
  const centerX = 0; // Center X (will be positioned relative to container center)
  const centerY = 0; // Center Y (will be positioned relative to container center)

  const wheelActions: WheelAction[] = [
    {
      id: "imagine",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fbe8068e94c034f37b80ff496f9836079?format=webp&width=800",
      label: "Imagine",
      color: "bg-orange-500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet vel lectus sed varius.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI/2)}px)`, // -90° (top)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI/2)}px)`
      }
    },
    {
      id: "play",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F392f37f775f74478ab0ebdf2db3f8b18?format=webp&width=800",
      label: "Play",
      color: "bg-blue-500",
      description: "Engage in interactive storytelling and creative play activities.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-Math.PI/6)}px)`, // -30° (top right)
        left: `calc(50% + ${centerX + radius * Math.cos(-Math.PI/6)}px)`
      }
    },
    {
      id: "create",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F084deab3e0e14195a8bd0e2f6adf11a8?format=webp&width=800",
      label: "Create",
      color: "bg-cyan-500",
      description: "Build and craft your own stories and creative content.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI/6)}px)`, // 30° (bottom right)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI/6)}px)`
      }
    },
    {
      id: "store",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Ff5ca235dac1145ad9e9f34e3ffb685b1?format=webp&width=800",
      label: "Store",
      color: "bg-green-500",
      description: "Save and organize your creative works and stories.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(Math.PI/2)}px)`, // 90° (bottom)
        left: `calc(50% + ${centerX + radius * Math.cos(Math.PI/2)}px)`
      }
    },
    {
      id: "reflect",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F84bf40f92efe4b4ea397148088e0ce03?format=webp&width=800",
      label: "Reflect",
      color: "bg-purple-500",
      description: "Think about your learning journey and growth.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(5*Math.PI/6)}px)`, // 150° (bottom left)
        left: `calc(50% + ${centerX + radius * Math.cos(5*Math.PI/6)}px)`
      }
    },
    {
      id: "reward",
      icon: "https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F2728d898d1bb4efabee72f00d281e7cf?format=webp&width=800",
      label: "Reward",
      color: "bg-pink-500",
      description: "Celebrate achievements and milestones in your journey.",
      position: {
        top: `calc(50% + ${centerY + radius * Math.sin(-5*Math.PI/6)}px)`, // -150° (top left)
        left: `calc(50% + ${centerX + radius * Math.cos(-5*Math.PI/6)}px)`
      }
    }
  ];

  const getHoveredAction = () => {
    return wheelActions.find(action => action.id === hoveredAction);
  };

  const handleMouseEnter = (actionId: string) => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }

    setHoveredAction(actionId);
    // Show tooltip after a small delay
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // Clear timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }

    // Hide tooltip immediately but keep hovered action for a moment
    setShowTooltip(false);
    setTimeout(() => {
      setHoveredAction(null);
    }, 150);
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
              The TaleTree Method
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
                transform: "translate(-50%, -50%)"
              }}
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Action Items - Circular Layout */}
            {wheelActions.map((action) => (
              <div
                key={action.id}
                className="absolute cursor-pointer"
                style={{
                  top: action.position.top,
                  left: action.position.left,
                  transform: "translate(-50%, -50%)"
                }}
                onMouseEnter={() => handleMouseEnter(action.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-col items-center">
                  {/* Action Icon */}
                  <div className="flex items-center justify-center hover:scale-110 transition-transform duration-200">
                    <img
                      src={action.icon}
                      alt={action.label}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  {/* Label */}
                  <span className={`text-white text-sm font-medium mt-2 ${action.color} px-3 py-1 rounded-full`}>
                    {action.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Hover Description */}
            {hoveredAction && (
              <div
                className={`absolute z-30 transition-all duration-300 ease-in-out ${
                  showTooltip ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{
                  top: `calc(${getHoveredAction()?.position.top} - 80px)`,
                  left: getHoveredAction()?.position.left,
                  transform: "translate(-50%, 0)",
                  pointerEvents: 'none' // Prevent tooltip from interfering with mouse events
                }}
              >
                <div className={`${getHoveredAction()?.color} text-white p-3 rounded-lg max-w-xs shadow-xl`}>
                  <p className="text-xs leading-relaxed">
                    {getHoveredAction()?.description}
                  </p>
                  {/* Tooltip arrow with matching color */}
                  <div
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent`}
                    style={{
                      borderTopColor: getHoveredAction()?.color === 'bg-orange-500' ? '#f97316' :
                                    getHoveredAction()?.color === 'bg-blue-500' ? '#3b82f6' :
                                    getHoveredAction()?.color === 'bg-cyan-500' ? '#06b6d4' :
                                    getHoveredAction()?.color === 'bg-green-500' ? '#22c55e' :
                                    getHoveredAction()?.color === 'bg-purple-500' ? '#a855f7' :
                                    getHoveredAction()?.color === 'bg-pink-500' ? '#ec4899' : '#ec4899'
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
