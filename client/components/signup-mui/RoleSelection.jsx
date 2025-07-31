import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Box,
  Card,
  Typography,
  Avatar,
  Container,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  ChildCare,
  FamilyRestroom,
  School,
  HelpOutline
} from '@mui/icons-material';

const RoleSelection = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [badgePos, setBadgePos] = useState({ left: 0, top: 1 });
  const [showBadge, setShowBadge] = useState(true);

  const containerRef = useRef(null);
  const cardRefs = useRef({});

  const roles = [
    {
      value: 'kid',
      label: 'kid',
      caption: 'Child',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800'
    },
    {
      value: 'guardian',
      label: 'guardian',
      caption: 'Parent',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800'
    },
    {
      value: 'educator',
      label: 'educator',
      caption: 'Partner',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800'
    }
  ];

  const updateBadgePosition = useCallback((role) => {
    const el = cardRefs.current[role];
    const container = containerRef.current;
    if (!el || !container) return;

    const cardRect = el.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const badgeLeft = cardRect.left + cardRect.width / 2 - containerRect.left;
    const badgeTop = cardRect.top - containerRect.top + 1; // Perfectly flush with card's top border

    setBadgePos({ left: badgeLeft, top: badgeTop });
    setShowBadge(true);
  }, []);

  const handleRoleClick = (roleValue) => {
    setSelectedRole(roleValue);
    updateBadgePosition(roleValue);
    if (onRoleSelect) {
      onRoleSelect(roleValue);
    }
  };

  const handleMouseEnter = (roleValue) => {
    setHoveredRole(roleValue);
    updateBadgePosition(roleValue);
  };

  const handleMouseLeave = () => {
    setHoveredRole(null);
    // Keep badge on selected card when mouse leaves
    if (selectedRole) {
      updateBadgePosition(selectedRole);
    }
  };

  // Initialize badge position on selected card
  useEffect(() => {
    if (selectedRole) {
      // Small delay to ensure DOM is rendered
      setTimeout(() => updateBadgePosition(selectedRole), 100);
    }
  }, [selectedRole, updateBadgePosition]);

  // Handle window resize to recompute badge position
  useEffect(() => {
    const handleResize = () => {
      const activeRole = hoveredRole || selectedRole;
      if (activeRole) {
        updateBadgePosition(activeRole);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [hoveredRole, selectedRole, updateBadgePosition]);

  const activeRole = hoveredRole || selectedRole;

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        ref={containerRef}
        sx={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        {/* Dynamic "I'm a" Badge */}
        <Box
          sx={{
            position: 'absolute',
            zIndex: 3,
            transform: 'translateX(-50%) translateY(-50%)',
            top: `${badgePos.top}px`,
            left: `${badgePos.left}px`,
            backgroundColor: '#A020F0',
            color: 'white',
            px: 1.5,
            py: 0.25,
            borderRadius: '12px',
            fontWeight: 600,
            fontSize: 12,
            border: '2px solid #A020F0',
            transition: 'top 0.25s ease, left 0.25s ease, opacity 0.25s ease',
            pointerEvents: 'none',
            opacity: showBadge && activeRole ? 1 : 0,
            boxShadow: '0 2px 8px rgba(160, 32, 240, 0.3)',
          }}
        >
          I'm a
        </Box>

        {/* Optional Tooltip Icon */}
        <Tooltip title="Select your role to get personalized content" placement="top">
          <IconButton
            sx={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              width: '24px',
              height: '24px',
              color: '#A020F0',
              '&:hover': {
                backgroundColor: 'rgba(160, 32, 240, 0.1)',
              }
            }}
          >
            <HelpOutline sx={{ fontSize: '16px' }} />
          </IconButton>
        </Tooltip>

        {/* Role Cards Container */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            alignItems: 'center',
            mt: 1,
            flexWrap: { xs: 'wrap', sm: 'nowrap' }, // Mobile-friendly wrapping
          }}
        >
          {roles.map((role) => {
            const isSelected = selectedRole === role.value;
            const isHovered = hoveredRole === role.value;
            const isActive = isSelected || isHovered;
            
            return (
              <Card
                key={role.value}
                ref={(el) => (cardRefs.current[role.value] = el)}
                onMouseEnter={() => handleMouseEnter(role.value)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleRoleClick(role.value)}
                sx={{
                  p: 1.5,
                  borderRadius: '12px',
                  border: '2px solid',
                  borderColor: isActive ? '#A020F0' : 'transparent',
                  boxShadow: isActive 
                    ? '0 8px 20px rgba(160, 32, 240, 0.15)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  width: '80px',
                  backgroundColor: '#fff',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#A020F0',
                    boxShadow: '0 8px 20px rgba(160, 32, 240, 0.15)',
                  },
                }}
              >
                {/* Avatar - 48x48, centered */}
                <Avatar
                  src={role.avatar}
                  sx={{
                    width: 40,
                    height: 40,
                    margin: '0 auto',
                    mb: 0.5,
                    border: 'none'
                  }}
                />
                
                {/* Caption text - small, text.secondary */}
                <Typography
                  variant="caption"
                  sx={{
                    display: 'block',
                    color: 'text.secondary',
                    fontSize: '12px',
                    mb: 0.5,
                    lineHeight: 1.2
                  }}
                >
                  {role.caption}
                </Typography>

                {/* Label text - bold, lowercase */}
                <Typography
                  variant="body2"
                  sx={{ 
                    textTransform: 'lowercase', 
                    fontWeight: 700,
                    color: '#000',
                    fontSize: '14px',
                    lineHeight: 1.2
                  }}
                >
                  {role.label}
                </Typography>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default RoleSelection;
