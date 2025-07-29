import { useState } from "react";
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

  // Calculate circular positions using trigonometry
  const radius = 150; // Radius of the circle
  const centerX = 0; // Center X (will be positioned relative to container center)
  const centerY = 0; // Center Y (will be positioned relative to container center)

  const wheelActions: WheelAction[] = [
    {
      id: "imagine",
      icon: "💡",
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
      icon: "🎮",
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
      icon: "✨",
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
      icon: "📚",
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
      icon: "🧠",
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
      icon: "❤️",
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop with hero background blurred */}
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
        style={{
          backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2Fdb72aca99fd341bf810b2c50e7d6006a?format=webp&width=800')`,
          filter: 'blur(8px)'
        }}
        onClick={onClose}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Modal Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <div className="w-full max-w-5xl h-full max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F956eb6364f77469eb6b19c2791e6b43a?format=webp&width=800"
                  alt="TaleTree Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                The TaleTree Method
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Main Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Welcome to TaleTree
            </h1>
          </div>

          {/* Wheel Container */}
          <div className="flex-1 relative">
            {/* Action Items */}
            {wheelActions.map((action) => (
              <div
                key={action.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  top: action.position.top,
                  left: action.position.left
                }}
                onMouseEnter={() => setHoveredAction(action.id)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                <div className="flex flex-col items-center">
                  {/* Action Circle */}
                  <div className={`w-16 h-16 ${action.color} rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    {action.icon}
                  </div>
                  {/* Label */}
                  <span className="text-white text-sm font-medium mt-2 bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm">
                    {action.label}
                  </span>
                </div>
              </div>
            ))}

            {/* Hover Description */}
            {hoveredAction && (
              <div className="absolute top-20 left-12">
                <div className="bg-pink-500 text-white p-3 rounded-lg max-w-xs shadow-xl">
                  <p className="text-xs leading-relaxed">
                    {getHoveredAction()?.description}
                  </p>
                  {/* Tooltip arrow */}
                  <div className="absolute top-full left-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-pink-500"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
