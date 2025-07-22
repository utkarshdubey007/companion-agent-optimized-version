import React, { useState } from "react";
import { MagicalCompanionPortal } from "../components/MagicalCompanionPortal";
import { Button } from "../components/ui/button";

export const MagicalPortalDemo: React.FC = () => {
  const [state, setState] = useState<"idle" | "thinking" | "speaking">("idle");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");

  // Using the provided image URL
  const companionImageUrl =
    "https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Fb1cb81f962884e8db61b8b2ee5ffa094?format=webp&width=800";

  const expressions = {
    idle: "😟",
    thinking: "🤔",
    speaking: "😊",
  };

  return (
    <div className="relative w-full h-screen bg-slate-900 overflow-hidden">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-20 space-y-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 space-y-3">
          <h3 className="text-white font-semibold text-sm">Portal State</h3>
          <div className="flex gap-2">
            {(["idle", "thinking", "speaking"] as const).map((s) => (
              <Button
                key={s}
                variant={state === s ? "default" : "outline"}
                size="sm"
                onClick={() => setState(s)}
                className="text-xs"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Button>
            ))}
          </div>

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
        </div>

        {/* Info panel */}
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-xs">
          <h3 className="text-white font-semibold text-sm mb-2">
            Current State: {state}
          </h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>
              <strong>Idle:</strong> Soft shimmer, gentle float
            </p>
            <p>
              <strong>Thinking:</strong> Floats up with swirling stars
            </p>
            <p>
              <strong>Speaking:</strong> Intense glow, sound waves
            </p>
          </div>
        </div>
      </div>

      {/* Main portal component */}
      <MagicalCompanionPortal
        companionImage={companionImageUrl}
        state={state}
        expression={expressions[state]}
        size={size}
        className="w-full h-full"
      />
    </div>
  );
};

export default MagicalPortalDemo;
