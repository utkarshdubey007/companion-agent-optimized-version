import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip, Fade, Box } from '@mui/material';
import { Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './style.css';
import TaleTreeIcon from '../../../../../assets/icon/header/City_active.svg';
import { useRecoilValue } from 'recoil';
import { companionAgentDataAtom } from '../../../../../atoms/companionAgent.atom';
import { getMoodIcon } from '../../../../../utils/mood.utils';
import { getKidsCompanionImg } from '../../../../../utils/companion.utils';

const SidebarItem = ({ icon, tooltip, type, onClick, collapsed, delay, onPageLoad, setOnPageLoad, isLastMenuOption, isChatApiCalling, taleTreeWheelAction, characterAnimationMode }) => {
  const { currentMood, currentCompanion } = useRecoilValue(companionAgentDataAtom);
  const [animate, setAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (onPageLoad) {
      const timeout = setTimeout(() => {
        setAnimate(true);
        if (isLastMenuOption)
          setOnPageLoad(false)
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay, onPageLoad]);

  // Get companion name for character-specific animations
  const getCompanionName = () => {
    if (!currentCompanion) return null;
    // Map the currentCompanion to character names
    const companionNameMap = {
      'Rooty': 'Rooty',
      'rooty': 'Rooty', 
      'Uni': 'Uni',
      'uni': 'Uni',
      'Rushmore': 'Rushmore', 
      'rushmore': 'Rushmore',
      'LetsGo': 'Letsgo',
      'letsgo': 'Letsgo',
      'Cody': 'Cody',
      'cody': 'Cody',
      'Doma': 'Doma',
      'doma': 'Doma'
    };
    return companionNameMap[currentCompanion] || null;
  };

  const renderContent = () => {
    if (type === 'mood') {
      return currentMood?.length > 0
        ? <Image src={getMoodIcon(currentMood[0]?.mood)} className="sidebar-image-icon kids-mood-companion" width={40} height={40} />
        : icon;
    }
    if (type === 'friends') {
      return currentCompanion
        ? <Image src={getKidsCompanionImg(currentCompanion)} className="sidebar-image-icon" width={40} height={40} />
        : icon;
    }
    if (type === 'taletree') {
      return <Image src={TaleTreeIcon} className="sidebar-image-icon companion-taletree-img" width={40} height={40} />;
    }
    return icon;
  };

  const companionName = getCompanionName();
  const companionColor = '#a855f7'; // Default purple for companion animations
  const isCompanion = type === 'friends';
  const shouldShowCharacterAnimations = isCompanion && isHovered && companionName;

  console.log(type, taleTreeWheelAction, "sjfhsdjfhjshfjsf")

  return (
    <Tooltip
      className="my-tooltip"
      title={tooltip}
      placement="right"
      disableHoverListener={!collapsed}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {/* Character-specific animations - Only for companion */}
        {shouldShowCharacterAnimations && (
          <CharacterHoverAnimations companion={{ name: companionName, color: companionColor }} isHovered={true} />
        )}

        <IconButton
          className={`sidebar-icon-button ${animate ? 'menu-icon-animate' : ''} ${isChatApiCalling ? (taleTreeWheelAction === type ? 'active-bright' : 'inactive-dim') : ''}`}
          onClick={onClick}
          disabled={["typing", "thinking"].includes(characterAnimationMode)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            transition: isCompanion ? 'transform 0.2s ease' : 'none',
            '&:hover': {
              transform: isCompanion ? 'scale(1.1)' : 'scale(1)',
            }
          }}
        >
          {renderContent()}
        </IconButton>
      </Box>
    </Tooltip>
  );
};

// Character-specific hover animations component
const CharacterHoverAnimations = ({ companion, isHovered }) => {
  const { name, color } = companion;

  if (!isHovered) return null;

  // Cody - Red fox coder (Digital glitch effect)
  if (name === "Cody") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Digital matrix effect */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs text-green-400 font-mono opacity-70"
            style={{
              left: `${Math.random() * 60 + 20}%`,
              top: `${Math.random() * 60 + 20}%`,
              fontSize: '8px'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              y: [0, -15],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            {["01", "10", "11", "00"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Doma - Speedy lizard (Dash effect)
  if (name === "Doma") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Dash streak effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
          }}
          animate={{
            x: [-30, 30, -30],
            opacity: [0, 1, 0],
            scaleX: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.4,
            ease: "easeInOut",
          }}
        />
        {/* Speed lines */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-0.5 rounded-full"
            style={{
              backgroundColor: color,
              left: "15%",
              top: `${35 + i * 15}%`,
            }}
            animate={{
              x: [0, 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.6,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Letsgo - Energetic bunny (Bounce effect)
  if (name === "Letsgo") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {/* Main bounce indicator */}
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: color,
          }}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -4, 0],
            borderWidth: ["2px", "3px", "2px"],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        {/* Bounce trail particles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: color,
              left: "50%",
              top: "50%",
              boxShadow: `0 0 6px ${color}`,
            }}
            animate={{
              y: [0, -12, -20],
              x: [(i - 1) * 3, (i - 1) * 6],
              scale: [1, 0.5, 0],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.1,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Rooty - Wise bear (Tool particles)
  if (name === "Rooty") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {["⚙️", "🔧"].map((tool, i) => (
          <motion.div
            key={i}
            className="absolute text-xs"
            style={{
              left: `${25 + i * 30}%`,
              top: `${25 + i * 30}%`,
              fontSize: '10px'
            }}
            animate={{
              rotate: [0, 360],
              y: [0, -8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {tool}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Rushmore - Clumsy cat chef (Cooking smoke)
  if (name === "Rushmore") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full opacity-40"
            style={{
              left: `${45 + i * 5}%`,
              top: `${35 + i * 5}%`,
            }}
            animate={{
              y: [0, -20],
              x: [0, (Math.random() - 0.5) * 10],
              scale: [0.5, 1.2, 0],
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 0.8,
            }}
          />
        ))}
      </motion.div>
    );
  }

  // Uni - Space explorer (Floating stars)
  if (name === "Uni") {
    return (
      <motion.div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              left: `${25 + i * 15}%`,
              top: `${30 + i * 10}%`,
              fontSize: "8px",
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            ⭐
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return null;
};

export default SidebarItem;
