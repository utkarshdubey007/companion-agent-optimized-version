import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip, Fade, Box } from '@mui/material';
import { Image } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { motion } from 'framer-motion';
import { companionAgentDataAtom } from '../atoms/companionAgent.atom';
import { getMoodIcon } from '../utils/mood.utils';
import { getKidsCompanionImg } from '../utils/companion.utils';
import TaleTreeIcon from '../assets/icon/header/City_active.svg';

const SidebarItem = ({ 
  icon, 
  tooltip, 
  type, 
  onClick, 
  collapsed, 
  delay, 
  onPageLoad, 
  setOnPageLoad, 
  isLastMenuOption, 
  isChatApiCalling, 
  taleTreeWheelAction,
  characterAnimationMode 
}) => {
  const { currentMood, currentCompanion } = useRecoilValue(companionAgentDataAtom);
  const [animate, setAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (onPageLoad) {
      const timeout = setTimeout(() => {
        setAnimate(true);
        if (isLastMenuOption) setOnPageLoad(false);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [delay, onPageLoad, isLastMenuOption, setOnPageLoad]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
    if (onClick) onClick();
  };

  const renderContent = () => {
    if (type === 'mood') {
      return currentMood?.length > 0 ? (
        <Image 
          src={getMoodIcon(currentMood[0]?.mood)} 
          className="sidebar-image-icon kids-mood-companion" 
          width={40} 
          height={40} 
        />
      ) : icon;
    }
    if (type === 'friends') {
      return currentCompanion ? (
        <Image 
          src={getKidsCompanionImg(currentCompanion)} 
          className="sidebar-image-icon" 
          width={40} 
          height={40} 
        />
      ) : icon;
    }
    if (type === 'taletree') {
      return (
        <Image 
          src={TaleTreeIcon} 
          className="sidebar-image-icon companion-taletree-img" 
          width={40} 
          height={40} 
        />
      );
    }
    return icon;
  };

  const isDisabled = ["typing", "thinking"].includes(characterAnimationMode);
  const isActive = isChatApiCalling && taleTreeWheelAction === type;

  // Special animations only for companion (friends type)
  const isCompanion = type === 'friends';
  const shouldShowSpecialAnimations = isCompanion && (isHovered || isActive);

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

  const companionName = getCompanionName();
  const companionColor = '#a855f7'; // Default purple for companion animations

  return (
    <Tooltip
      title={tooltip}
      placement="right"
      disableHoverListener={!collapsed}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 300 }}
      sx={{
        '& .MuiTooltip-tooltip': {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          color: 'white',
          fontSize: '12px',
          borderRadius: '8px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '& .MuiTooltip-arrow': {
          color: 'rgba(0, 0, 0, 0.9)',
        }
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {/* Magical glow effect - Only for companion */}
        {shouldShowSpecialAnimations && (
          <Box
            sx={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)',
              filter: 'blur(8px)',
              opacity: 1,
              transition: 'all 0.3s ease',
              animation: isActive ? 'pulseGlow 2s ease-in-out infinite' : 'none',
              '@keyframes pulseGlow': {
                '0%, 100%': {
                  opacity: 0.6,
                  transform: 'scale(1)',
                },
                '50%': {
                  opacity: 1,
                  transform: 'scale(1.1)',
                },
              },
            }}
          />
        )}

        {/* Character-specific animations - Only for companion */}
        {shouldShowSpecialAnimations && companionName && (
          <CharacterHoverAnimations companion={{ name: companionName, color: companionColor }} isHovered={true} />
        )}

        {/* Floating particles effect - Only for companion */}
        {shouldShowSpecialAnimations && (
          <>
            <Box
              sx={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: '#a855f7',
                borderRadius: '50%',
                top: '10%',
                left: '20%',
                animation: 'floatUp 2s ease-in-out infinite',
                '@keyframes floatUp': {
                  '0%': {
                    opacity: 0,
                    transform: 'translateY(0px) scale(0)',
                  },
                  '50%': {
                    opacity: 1,
                    transform: 'translateY(-20px) scale(1)',
                  },
                  '100%': {
                    opacity: 0,
                    transform: 'translateY(-40px) scale(0)',
                  },
                },
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                backgroundColor: '#ec4899',
                borderRadius: '50%',
                top: '30%',
                right: '15%',
                animation: 'floatUp 2s ease-in-out infinite 0.5s',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                backgroundColor: '#f59e0b',
                borderRadius: '50%',
                bottom: '20%',
                left: '70%',
                animation: 'floatUp 2s ease-in-out infinite 1s',
              }}
            />
          </>
        )}

        <IconButton
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          disabled={isDisabled}
          sx={{
            position: 'relative',
            zIndex: 2,
            width: 56,
            height: 56,
            borderRadius: '16px',
            background: (isCompanion && (isHovered || isActive))
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)'
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: isCompanion ? 'blur(10px)' : 'none',
            border: '1px solid',
            borderColor: (isCompanion && (isHovered || isActive))
              ? 'rgba(168, 85, 247, 0.5)'
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: (isCompanion && (isHovered || isActive))
              ? '0 8px 32px rgba(168, 85, 247, 0.3)'
              : '0 4px 16px rgba(0, 0, 0, 0.1)',
            transform: animate 
              ? isClicked 
                ? 'scale(0.95) rotateZ(-5deg)'
                : (isCompanion && (isHovered || isActive))
                ? 'scale(1.1) rotateZ(0deg)'
                : 'scale(1) rotateZ(0deg)'
              : 'scale(0) rotateZ(-180deg)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            opacity: isDisabled ? 0.5 : 1,
            animation: animate ? (
              isActive && isCompanion
                ? 'breathe 2s ease-in-out infinite, gentleFloat 4s ease-in-out infinite'
                : (isHovered && isCompanion)
                ? 'gentleFloat 4s ease-in-out infinite'
                : 'menuIconAnimate 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            ) : 'none',
            animationDelay: `${delay}ms`,
            '&:hover': {
              '& .icon-content': {
                transform: isCompanion ? 'scale(1.1)' : 'scale(1)',
              }
            },
            '&:active': {
              transform: 'scale(0.95)',
            },
            '@keyframes menuIconAnimate': {
              '0%': {
                opacity: 0,
                transform: 'scale(0) rotateZ(-180deg)',
              },
              '60%': {
                opacity: 1,
                transform: 'scale(1.2) rotateZ(10deg)',
              },
              '100%': {
                opacity: 1,
                transform: 'scale(1) rotateZ(0deg)',
              },
            },
            '@keyframes breathe': {
              '0%, 100%': {
                transform: 'scale(1)',
              },
              '50%': {
                transform: 'scale(1.05)',
              },
            },
            '@keyframes gentleFloat': {
              '0%, 100%': {
                transform: 'translateY(0px)',
              },
              '25%': {
                transform: 'translateY(-3px)',
              },
              '50%': {
                transform: 'translateY(-6px)',
              },
              '75%': {
                transform: 'translateY(-3px)',
              },
            },
          }}
        >
          <Box
            className="icon-content"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              transition: isCompanion ? 'transform 0.2s ease' : 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              filter: isActive ? 'brightness(1.2)' : 'brightness(1)',
            }}
          >
            {renderContent()}
          </Box>
        </IconButton>

        {/* Ripple effect on click - Only for companion */}
        {isClicked && isCompanion && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0px',
              height: '0px',
              borderRadius: '50%',
              backgroundColor: 'rgba(168, 85, 247, 0.3)',
              transform: 'translate(-50%, -50%)',
              animation: 'ripple 0.6s ease-out',
              '@keyframes ripple': {
                '0%': {
                  width: '0px',
                  height: '0px',
                  opacity: 1,
                },
                '100%': {
                  width: '120px',
                  height: '120px',
                  opacity: 0,
                },
              },
            }}
          />
        )}

        {/* Status indicator for active state */}
        {isActive && (
          <Box
            sx={{
              position: 'absolute',
              top: -2,
              right: -2,
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': {
                  opacity: 1,
                  transform: 'scale(1)',
                },
                '50%': {
                  opacity: 0.7,
                  transform: 'scale(1.2)',
                },
              },
            }}
          />
        )}
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
