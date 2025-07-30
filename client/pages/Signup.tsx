import { useState } from "react";
import DecorativeStars from "@/components/signup/DecorativeStars";
import HeroSection from "@/components/signup/HeroSection";
import PlansStrip from "@/components/signup/PlansStrip";
import CreativitySection from "@/components/signup/CreativitySection";
import IntroducingSection from "@/components/signup/IntroducingSection";
import LatestNewsSection from "@/components/signup/LatestNewsSection";
import ParentsSection from "@/components/signup/ParentsSection";
import EducatorsSection from "@/components/signup/EducatorsSection";
import ExpertsSection from "@/components/signup/ExpertsSection";
import SignupFooter from "@/components/signup/SignupFooter";
import Plans from "./Plans";
import "../styles/signup.css";

const Signup = () => {
  const [showPlans, setShowPlans] = useState(false);

  if (showPlans) {
    return <Plans />;
  }
  return (
    <div className="signup-page">
      {/* Hero Section - Full Viewport */}
      <div className="signup-hero-container">
        {/* Stars/Decorative Elements */}
        <DecorativeStars />

        {/* Main Hero Section */}
        <HeroSection />
      </div>

      {/* Content Sections - Below Hero */}
      <div className="signup-content-container">
        {/* Plans Strip - Inside content sections at top */}
        <PlansStrip onShowPlans={() => setShowPlans(true)} />
        <CreativitySection />
        <IntroducingSection />
        <LatestNewsSection />
        <ParentsSection />
        <EducatorsSection />
        <ExpertsSection />
      </div>

      {/* Footer */}
      <div className="signup-footer-container">
        <SignupFooter />
      </div>
    </div>
  );
};

export default Signup;
