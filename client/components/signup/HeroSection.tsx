import BunnyCharacter from "./BunnyCharacter";
import SpeechBubble from "./SpeechBubble";
import SearchSection from "./SearchSection";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[70vh] px-4">
      {/* Background Landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-green-400 via-yellow-300 to-transparent rounded-t-full transform scale-150 origin-bottom"></div>

      {/* Mountains/Hills */}
      <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-4">
        <div className="w-32 h-24 bg-green-500 rounded-t-full"></div>
        <div className="w-40 h-32 bg-green-600 rounded-t-full"></div>
        <div className="w-28 h-20 bg-green-400 rounded-t-full"></div>
      </div>

      {/* Character - Green Bunny */}
      <BunnyCharacter />

      {/* Speech Bubble */}
      <SpeechBubble message="It's time to start. Share the beautiful, magical stories and stories." />

      {/* Search Input and Support Text */}
      <SearchSection />
    </div>
  );
};

export default HeroSection;
