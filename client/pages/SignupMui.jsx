import { useState } from "react";
import { Box, Container } from "@mui/material";
import MuiDecorativeStars from "@/components/signup-mui/MuiDecorativeStars.jsx";
import MuiHeroSection from "@/components/signup-mui/MuiHeroSection.jsx";
import MuiPlansStrip from "@/components/signup-mui/MuiPlansStrip.jsx";
import MuiCreativitySection from "@/components/signup-mui/MuiCreativitySection.jsx";
import MuiIntroducingSection from "@/components/signup-mui/MuiIntroducingSection.jsx";
import MuiLatestNewsSection from "@/components/signup-mui/MuiLatestNewsSection.jsx";
import MuiParentsSection from "@/components/signup-mui/MuiParentsSection.jsx";
import MuiEducatorsSection from "@/components/signup-mui/MuiEducatorsSection.jsx";
import MuiExpertsSection from "@/components/signup-mui/MuiExpertsSection.jsx";
import MuiSignupFooter from "@/components/signup-mui/MuiSignupFooter.jsx";
import Plans from "./Plans.jsx";
import RoleSelection from "@/components/signup-mui/RoleSelection.jsx";
import "../styles/signup-mui.css";

const SignupMui = () => {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    console.log('Selected role:', roleId);
  };

  if (showPlans) {
    return <Plans />;
  }

  return (
    <div className="signup-mui-page">
      {/* Hero Section - Full Viewport */}
      <div className="signup-hero-wrapper">
        {/* Stars/Decorative Elements */}
        <MuiDecorativeStars />

        {/* Main Hero Section */}
        <MuiHeroSection />
      </div>

      {/* Content Sections - Below Hero */}
      <div className="signup-content-wrapper">
        {/* Plans Strip - Inside content sections at top */}
        <MuiPlansStrip onShowPlans={() => setShowPlans(true)} />

        {/* Role Selection Component */}
        <Box sx={{ bgcolor: 'white', py: 4 }}>
          <RoleSelection onRoleSelect={handleRoleSelect} />
        </Box>

        <MuiCreativitySection />
        <MuiIntroducingSection />
        <MuiLatestNewsSection />
        <MuiParentsSection />
        <MuiEducatorsSection />
        <MuiExpertsSection />
      </div>

      {/* Footer */}
      <div className="signup-footer-wrapper">
        <MuiSignupFooter />
      </div>
    </div>
  );
};

export default SignupMui;
