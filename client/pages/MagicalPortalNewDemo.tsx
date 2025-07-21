import React, { useState } from "react";
import { MagicalPortal } from "../components/MagicalPortal";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const MagicalPortalNewDemo: React.FC = () => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className="relative w-full h-screen">
      {/* Controls overlay */}
      <div className="absolute top-4 left-4 z-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
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
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-sm">
          <h3 className="text-yellow-300 text-sm font-semibold mb-2">MagicalPortal Specs</h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>🔶 Vertical arch (rounded top, flat bottom)</p>
            <p>✨ Golden glowing border with inner shadows</p>
            <p>🌌 Dark semi-transparent interior</p>
            <p>⭐ Scattered magical dust particles</p>
            <p>🌟 Two 4-pointed glowing stars</p>
            <p>🎨 Colors: #FFD700, #FFB800, #FECF4D</p>
            <p>💫 Soft pulsing animation</p>
            <p>📦 Accepts children props</p>
          </div>
        </div>
      </div>

      {/* Main magical portal component */}
      <MagicalPortal className="w-full h-full">
        {showContent && (
          <Card className="bg-black/30 backdrop-blur-sm border-yellow-400/30 max-w-xs">
            <CardHeader>
              <CardTitle className="text-yellow-100 text-center text-lg">
                Magical Gateway
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-yellow-200/80 text-sm">
                A mystical portal crafted with Tailwind CSS, featuring glowing borders, magical dust, and four-pointed stars.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium">
                  Enter Portal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-400/60 text-yellow-200 hover:bg-yellow-400/10 hover:border-yellow-300"
                >
                  Study Magic
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </MagicalPortal>
    </div>
  );
};

export default MagicalPortalNewDemo;
