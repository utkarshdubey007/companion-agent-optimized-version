/**
 * Companion mapping based on character_type
 */
export const companionMapping = {
  rooty: {
    name: "Rooty",
    icon: "🌳",
    color: "#FF9500"
  },
  uni: {
    name: "Uni",
    icon: "🦄", 
    color: "#FF4757"
  },
  rushmore: {
    name: "Rushmore",
    icon: "🏔️",
    color: "#FF6B9D"
  },
  letsgo: {
    name: "LetsGo",
    icon: "🚀",
    color: "#2ECC71"
  },
  default: {
    name: "Friend",
    icon: "🌟",
    color: "#3498DB"
  }
};

/**
 * Get companion info by character type
 * @param {string} characterType - The character type from API
 * @returns {object} Companion info with name, icon, and color
 */
export const getCompanionInfo = (characterType) => {
  return companionMapping[characterType] || companionMapping.default;
};
