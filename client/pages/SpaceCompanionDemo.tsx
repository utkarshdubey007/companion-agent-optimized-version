import React from "react";
import { SpaceCompanion } from "../components/SpaceCompanion";

export const SpaceCompanionDemo: React.FC = () => {
  // Using the provided image URL
  const companionImageUrl =
    "https://cdn.builder.io/api/v1/image/assets%2Fda24af11bdbb4585b8e6eb6406b2daf9%2Fb1cb81f962884e8db61b8b2ee5ffa094?format=webp&width=800";

  return (
    <div className="w-full h-screen bg-slate-900 overflow-hidden">
      <SpaceCompanion
        companionImage={companionImageUrl}
        className="w-full h-full"
        size={250}
      />
    </div>
  );
};

export default SpaceCompanionDemo;
