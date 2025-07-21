import React, { useState } from "react";
import { ExactPortalMatch } from "../components/ExactPortalMatch";
import { Button } from "../components/ui/button";

export const ExactPortalDemo: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Minimal controls */}
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

      {/* Info badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
          <div className="text-yellow-300 text-xs font-medium">
            ✨ Exact Reference Match
          </div>
        </div>
      </div>

      {/* Exact portal component */}
      <ExactPortalMatch className="w-full h-full">
        {showContent && (
          <div className="text-center space-y-4">
            <h2 className="text-yellow-100 text-xl font-semibold">
              Portal Content
            </h2>
            <p className="text-yellow-200/80 text-sm max-w-xs">
              This portal exactly matches the reference image with precise particle and star positions.
            </p>
          </div>
        )}
      </ExactPortalMatch>
    </div>
  );
};

export default ExactPortalDemo;
