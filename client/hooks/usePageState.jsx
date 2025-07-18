import { useState } from "react";

export function usePageState() {
  const [topSidebarCollapsed, setTopSidebarCollapsed] = useState(true);
  const [bottomSidebarCollapsed, setBottomSidebarCollapsed] = useState(true);
  const [showTopWaveEffect, setShowTopWaveEffect] = useState(false);
  const [showBottomWaveEffect, setShowBottomWaveEffect] = useState(false);
  const [showAcceptedChallenges, setShowAcceptedChallenges] = useState(false);
  const [showCreationsPanel, setShowCreationsPanel] = useState(false);
  const [showMagicalCard, setShowMagicalCard] = useState(false);

  return {
    topSidebarCollapsed,
    setTopSidebarCollapsed,
    bottomSidebarCollapsed,
    setBottomSidebarCollapsed,
    showTopWaveEffect,
    setShowTopWaveEffect,
    showBottomWaveEffect,
    setShowBottomWaveEffect,
    showAcceptedChallenges,
    setShowAcceptedChallenges,
    showCreationsPanel,
    setShowCreationsPanel,
    showMagicalCard,
    setShowMagicalCard,
  };
}
