import React from "react";
import { MagicalPortal } from "../components/MagicalPortal";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export const MagicalPortalNewDemo: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Main magical portal component */}
      <MagicalPortal className="w-full h-full">
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
      </MagicalPortal>
    </div>
  );
};

export default MagicalPortalNewDemo;
