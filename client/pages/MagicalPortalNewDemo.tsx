import React from "react";
import { MagicalPortal } from "../components/MagicalPortal";

export const MagicalPortalNewDemo: React.FC = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Main magical portal component */}
      <MagicalPortal className="w-full h-full" />
    </div>
  );
};

export default MagicalPortalNewDemo;
