import React, { useEffect, useState } from 'react';
import { IconButton, Tooltip, Fade, Box } from '@mui/material';
import { Image } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { companionAgentDataAtom } from '../atoms/companionAgent.atom';
import { getMoodIcon } from '../utils/mood.utils';
import { getKidsCompanionImg } from '../utils/companion.utils';
import TaleTreeIcon from '../assets/icon/header/City_active.svg';

const EnhancedSidebarItem = ({ 
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
        {/* Magical glow effect */}
        <Box
          sx={{
            position: 'absolute',
            inset: '-10px',
            borderRadius: '50%',
            background: isHovered || isActive
              ? type === 'friends' 
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 70%)'
                : type === 'mood'
                ? 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(16, 185, 129, 0.2) 50%, transparent 70%)'
                : 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 70%)'
              : 'transparent',
            filter: 'blur(8px)',
            opacity: isHovered || isActive ? 1 : 0,
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

        {/* Floating particles effect */}
        {(isHovered || isActive) && (
          <>
            <Box
              sx={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                backgroundColor: type === 'friends' ? '#a855f7' : type === 'mood' ? '#22c55e' : '#3b82f6',
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
                backgroundColor: type === 'friends' ? '#ec4899' : type === 'mood' ? '#10b981' : '#8b5cf6',
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
                backgroundColor: type === 'friends' ? '#f59e0b' : type === 'mood' ? '#06d6a0' : '#06b6d4',
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
            background: isHovered || isActive
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.05) 100%)'
              : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid',
            borderColor: isHovered || isActive
              ? type === 'friends' 
                ? 'rgba(168, 85, 247, 0.5)'
                : type === 'mood'
                ? 'rgba(34, 197, 94, 0.5)'
                : 'rgba(59, 130, 246, 0.5)'
              : 'rgba(255, 255, 255, 0.1)',
            boxShadow: isHovered || isActive
              ? `0 8px 32px ${
                  type === 'friends' 
                    ? 'rgba(168, 85, 247, 0.3)'
                    : type === 'mood'
                    ? 'rgba(34, 197, 94, 0.3)'
                    : 'rgba(59, 130, 246, 0.3)'
                }`
              : '0 4px 16px rgba(0, 0, 0, 0.1)',
            transform: animate 
              ? isClicked 
                ? 'scale(0.95) rotateZ(-5deg)'
                : isHovered || isActive
                ? 'scale(1.1) rotateZ(0deg)'
                : 'scale(1) rotateZ(0deg)'
              : 'scale(0) rotateZ(-180deg)',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            opacity: isDisabled ? 0.5 : 1,
            animation: animate ? (
              isActive 
                ? 'breathe 2s ease-in-out infinite, gentleFloat 4s ease-in-out infinite'
                : isHovered 
                ? 'gentleFloat 4s ease-in-out infinite'
                : 'menuIconAnimate 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            ) : 'none',
            animationDelay: `${delay}ms`,
            '&:hover': {
              '& .icon-content': {
                transform: 'scale(1.1) rotateY(10deg)',
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
              transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              filter: isActive ? 'brightness(1.2)' : 'brightness(1)',
            }}
          >
            {renderContent()}
          </Box>
        </IconButton>

        {/* Ripple effect on click */}
        {isClicked && (
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '0px',
              height: '0px',
              borderRadius: '50%',
              backgroundColor: type === 'friends' 
                ? 'rgba(168, 85, 247, 0.3)'
                : type === 'mood'
                ? 'rgba(34, 197, 94, 0.3)'
                : 'rgba(59, 130, 246, 0.3)',
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

export default EnhancedSidebarItem;
