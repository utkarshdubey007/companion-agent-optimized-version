import React, { useState } from "react";
import { VerticalArchPortal } from "../components/VerticalArchPortal";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const VerticalArchDemo: React.FC = () => {
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

      {/* Feature info */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 max-w-xs">
          <h3 className="text-yellow-300 text-sm font-semibold mb-2">Vertical Arch Portal</h3>
          <div className="text-gray-300 text-xs space-y-1">
            <p>✨ Thick glowing golden border</p>
            <p>🏛️ Vertical arch (rounded top, flat bottom)</p>
            <p>🌟 Inner & outer glow effects</p>
            <p>⚫ Dark center for content</p>
            <p>🌌 Golden sparkling particles</p>
            <p>🎭 Magical sci-fi atmosphere</p>
          </div>
        </div>
      </div>

      {/* Main vertical arch portal component */}
      <VerticalArchPortal className="w-full h-full">
        {showContent && (
          <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/30 max-w-xs">
            <CardHeader>
              <CardTitle className="text-yellow-100 text-center text-lg">
                Sci-Fi Portal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-yellow-200/80 text-sm">
                A magical gateway to other dimensions with thick glowing borders and mystical effects.
              </p>
              <div className="space-y-2">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-medium">
                  Activate Portal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-400/60 text-yellow-200 hover:bg-yellow-400/10 hover:border-yellow-300"
                >
                  Scan Portal
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </VerticalArchPortal>
    </div>
  );
};

export default VerticalArchDemo;
