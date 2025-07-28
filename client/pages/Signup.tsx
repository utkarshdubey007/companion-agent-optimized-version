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
    <div className="min-h-screen overflow-x-hidden">
      {/* Stars/Decorative Elements */}
      <DecorativeStars />

      {/* Main Hero Section */}
      <HeroSection />

      {/* Content Sections */}
      <div className="relative z-10 bg-white mt-8">
        <CreativitySection />
        <IntroducingSection />
        <LatestNewsSection />
        <ParentsSection />
        <EducatorsSection />
        <ExpertsSection />
      </div>

      {/* Footer */}
      <SignupFooter />
    </div>
  );
};

export default Signup;
