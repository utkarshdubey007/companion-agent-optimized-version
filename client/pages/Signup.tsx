import DecorativeStars from "@/components/signup/DecorativeStars";
import HeroSection from "@/components/signup/HeroSection";
import CreativitySection from "@/components/signup/CreativitySection";
import IntroducingSection from "@/components/signup/IntroducingSection";
import LatestNewsSection from "@/components/signup/LatestNewsSection";
import ParentsSection from "@/components/signup/ParentsSection";
import EducatorsSection from "@/components/signup/EducatorsSection";
import ExpertsSection from "@/components/signup/ExpertsSection";
import SignupFooter from "@/components/signup/SignupFooter";

const Signup = () => {
  return (
    <div className="relative">
      {/* Hero Section - Full Viewport */}
      <div className="relative z-0">
        {/* Stars/Decorative Elements */}
        <DecorativeStars />

        {/* Main Hero Section */}
        <HeroSection />
      </div>

      {/* Content Sections - Below Hero */}
      <div className="relative z-10 bg-white">
        <CreativitySection />
        <IntroducingSection />
        <LatestNewsSection />
        <ParentsSection />
        <EducatorsSection />
        <ExpertsSection />
      </div>

      {/* Footer */}
      <div className="relative z-10">
        <SignupFooter />
      </div>
    </div>
  );
};

export default Signup;
