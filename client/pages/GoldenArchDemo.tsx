import React, { useState } from "react";
import { GoldenArchBackground } from "../components/GoldenArchBackground";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

export const GoldenArchDemo: React.FC = () => {
  const [intensity, setIntensity] = useState<"low" | "medium" | "high">(
    "medium",
  );
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-20 space-y-4">
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 space-y-3">
          <h3 className="text-white font-semibold text-sm">
            Particle Intensity
          </h3>
          <div className="flex gap-2">
            {(["low", "medium", "high"] as const).map((level) => (
              <Button
                key={level}
                variant={intensity === level ? "default" : "outline"}
                size="sm"
                onClick={() => setIntensity(level)}
                className="text-xs"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={showContent ? "default" : "outline"}
              size="sm"
              onClick={() => setShowContent(!showContent)}
              className="text-xs"
            >
              {showContent ? "Hide" : "Show"} Content
            </Button>
          </div>
        </div>

        {/* Info panel */}
        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 max-w-sm">
          <h3 className="text-white font-semibold text-sm mb-2">
            Golden Arch Background
          </h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>• Arched rectangular shape</p>
            <p>• Golden neon borders with bloom</p>
            <p>• Deep purple-black background</p>
            <p>• Floating particle stars</p>
            <p>• Glowing dust and starbursts</p>
            <p>• Perfect for web app backgrounds</p>
          </div>
        </div>
      </div>

      {/* Main background component */}
      <GoldenArchBackground intensity={intensity} className="w-full h-full">
        {showContent && (
          <Card className="bg-black/30 backdrop-blur-sm border-yellow-500/30 max-w-md">
            <CardHeader>
              <CardTitle className="text-yellow-100 text-center">
                Your Content Here
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-300 text-sm">
                This golden arch background provides a magical, futuristic frame
                for your web app content.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black">
                  Primary Action
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-100 hover:bg-yellow-500/10"
                >
                  Secondary Action
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </GoldenArchBackground>
    </div>
  );
};

export default GoldenArchDemo;
