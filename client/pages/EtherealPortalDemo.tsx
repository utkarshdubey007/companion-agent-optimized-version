import React, { useState } from "react";
import { EtherealPortal } from "../components/EtherealPortal";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const EtherealPortalDemo: React.FC = () => {
  const [animated, setAnimated] = useState(true);
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-20 space-y-4">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 space-y-3">
          <h3 className="text-white font-semibold text-sm">Portal Controls</h3>
          
          <div className="flex items-center gap-2">
            <Button
              variant={animated ? "default" : "outline"}
              size="sm"
              onClick={() => setAnimated(!animated)}
              className="text-xs"
            >
              {animated ? "Disable" : "Enable"} Animations
            </Button>
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
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-sm">
          <h3 className="text-white font-semibold text-sm mb-2">Ethereal Portal</h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>✨ Glowing yellow outline</p>
            <p>🌙 Smooth arch with curved edges</p>
            <p>🔥 Fading bottom that blends seamlessly</p>
            <p>⭐ Floating particles and ethereal dust</p>
            <p>🎨 Yellow, orange, and purple tones</p>
            <p>📏 Sized at 35% width × 55% height</p>
            <p>🌟 Soft, warm, and inviting atmosphere</p>
          </div>
        </div>
      </div>

      {/* Main ethereal portal component */}
      <EtherealPortal animated={animated} className="w-full h-full">
        {showContent && (
          <Card className="bg-black/20 backdrop-blur-sm border-yellow-400/40 max-w-xs">
            <CardHeader>
              <CardTitle className="text-yellow-100 text-center text-lg">
                Ethereal Gateway
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <p className="text-yellow-200/80 text-sm">
                Step through this magical portal into a world of wonder and possibility.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium">
                  Enter Portal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-400/60 text-yellow-200 hover:bg-yellow-400/10 hover:border-yellow-300"
                >
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </EtherealPortal>
    </div>
  );
};

export default EtherealPortalDemo;
