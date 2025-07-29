import { useState } from "react";
import { Box, Container } from "@mui/material";
import MuiDecorativeStars from "@/components/signup-mui/MuiDecorativeStars";
import MuiHeroSection from "@/components/signup-mui/MuiHeroSection";
import MuiPlansStrip from "@/components/signup-mui/MuiPlansStrip";
import MuiCreativitySection from "@/components/signup-mui/MuiCreativitySection";
import MuiIntroducingSection from "@/components/signup-mui/MuiIntroducingSection";
import MuiLatestNewsSection from "@/components/signup-mui/MuiLatestNewsSection";
import MuiParentsSection from "@/components/signup-mui/MuiParentsSection";
import MuiEducatorsSection from "@/components/signup-mui/MuiEducatorsSection";
import MuiExpertsSection from "@/components/signup-mui/MuiExpertsSection";
import MuiSignupFooter from "@/components/signup-mui/MuiSignupFooter";
import Plans from "./Plans";

const SignupMui = () => {
  const [showPlans, setShowPlans] = useState(false);

  if (showPlans) {
    return <Plans />;
  }

  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero Section - Full Viewport */}
      <Box sx={{ position: "relative", zIndex: 0 }}>
        {/* Stars/Decorative Elements */}
        <MuiDecorativeStars />

        {/* Main Hero Section */}
        <MuiHeroSection />
      </Box>

      {/* Content Sections - Below Hero */}
      <Box sx={{ position: "relative", zIndex: 10, bgcolor: "white" }}>
        {/* Plans Strip - Inside content sections at top */}
        <MuiPlansStrip onShowPlans={() => setShowPlans(true)} />
        <MuiCreativitySection />
        <MuiIntroducingSection />
        <MuiLatestNewsSection />
        <MuiParentsSection />
        <MuiEducatorsSection />
        <MuiExpertsSection />
      </Box>

      {/* Footer */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <MuiSignupFooter />
      </Box>
    </Box>
  );
};

export default SignupMui;
