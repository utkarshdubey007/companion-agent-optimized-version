import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Container
} from '@mui/material';
import {
  ChildCare,
  FamilyRestroom,
  School
} from '@mui/icons-material';

const RoleSelection = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState('kid');
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: 'kid',
      name: 'Kid',
      subtitle: 'Child',
      icon: ChildCare,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800'
    },
    {
      id: 'guardian',
      name: 'Guardian',
      subtitle: 'Parent',
      icon: FamilyRestroom,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800'
    },
    {
      id: 'educator',
      name: 'Educator',
      subtitle: 'Partner',
      icon: School,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800'
    }
  ];

  const handleRoleClick = (roleId) => {
    setSelectedRole(roleId);
    if (onRoleSelect) {
      onRoleSelect(roleId);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Role Cards Container - Relative positioned for badge */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          pt: 4 // Space for the floating badge
        }}
      >
        {roles.map((role, index) => {
          const IconComponent = role.icon;
          const isSelected = selectedRole === role.id;
          const isHovered = hoveredRole === role.id;
          const isActive = isSelected || isHovered;
          
          return (
            <Box
              key={role.id}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleRoleClick(role.id)}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
            >
              {/* Dynamic "I'm a" Badge - Only above selected card */}
              {isSelected && (
                <Chip
                  label="I'm a"
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#8000b3',
                    color: 'white',
                    fontWeight: 500,
                    fontSize: '14px',
                    height: 'auto',
                    borderRadius: '9999px',
                    zIndex: 10,
                    boxShadow: '0 2px 8px rgba(128, 0, 179, 0.4)',
                    transition: 'all 0.3s ease',
                    '& .MuiChip-label': {
                      padding: '6px 16px'
                    }
                  }}
                />
              )}

              {/* Compact Role Card */}
              <Card
                sx={{
                  width: '100px',
                  height: '120px',
                  border: isActive ? '2px solid #8000b3' : '1px solid transparent',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  backgroundColor: 'white',
                  boxShadow: isActive 
                    ? '0 4px 16px rgba(128, 0, 179, 0.2)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.08)',
                  '&:hover': {
                    border: '2px solid #8000b3',
                    boxShadow: '0 4px 16px rgba(128, 0, 179, 0.2)',
                  },
                }}
              >
                <CardContent 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    padding: '16px !important',
                    height: '100%',
                    textAlign: 'center'
                  }}
                >
                  {/* Subtitle (top text) */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '12px',
                      color: '#9E9E9E',
                      fontWeight: 400,
                      lineHeight: 1,
                      mb: 0.5
                    }}
                  >
                    {role.subtitle}
                  </Typography>

                  {/* Clean Avatar - No borders */}
                  <Avatar
                    src={role.avatar}
                    sx={{
                      width: 50,
                      height: 50,
                      mb: 0.5
                    }}
                  >
                    <IconComponent sx={{ fontSize: 24, color: '#6A1B9A' }} />
                  </Avatar>

                  {/* Title (bottom text) */}
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: '#000000',
                      fontSize: '16px',
                      lineHeight: 1.2
                    }}
                  >
                    {role.name}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default RoleSelection;
