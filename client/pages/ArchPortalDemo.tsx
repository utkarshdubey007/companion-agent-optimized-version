import React, { useState } from "react";
import { ArchPortal } from "../components/ArchPortal";
import { Button } from "../components/ui/button";

export const ArchPortalDemo: React.FC = () => {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [showCompanion, setShowCompanion] = useState(false);
  
  // Using the provided image URL
  const companionImageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Fb1cb81f962884e8db61b8b2ee5ffa094?format=webp&width=800";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-20 space-y-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 space-y-3">
          <h3 className="text-white font-semibold text-sm">Portal Size</h3>
          <div className="flex gap-2">
            {(["sm", "md", "lg"] as const).map((s) => (
              <Button
                key={s}
                variant={size === s ? "default" : "outline"}
                size="sm"
                onClick={() => setSize(s)}
                className="text-xs"
              >
                {s.toUpperCase()}
              </Button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant={showCompanion ? "default" : "outline"}
              size="sm"
              onClick={() => setShowCompanion(!showCompanion)}
              className="text-xs"
            >
              {showCompanion ? "Hide" : "Show"} Companion
            </Button>
          </div>
        </div>

        {/* Info panel */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs">
          <h3 className="text-white font-semibold text-sm mb-2">Magical Arch Portal</h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>• Arch-shaped golden portal</p>
            <p>• Floating golden particles</p>
            <p>• Twinkling stars</p>
            <p>• Deep violet night sky</p>
            <p>• Pixar-style magical fantasy</p>
          </div>
        </div>
      </div>

      {/* Main arch portal component */}
      <ArchPortal
        companionImage={companionImageUrl}
        showCompanion={showCompanion}
        size={size}
        className="w-full h-full"
      />
    </div>
  );
};

export default ArchPortalDemo;
