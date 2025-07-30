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
      <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Speech-bubble style "I'm a" label positioned above cards */}
        <Box
          sx={{
            position: 'absolute',
            top: -16,
            left: '20px',
            zIndex: 10
          }}
        >
          <Chip
            label="I'm a"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main || '#8000b3',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '0.75rem',
              borderRadius: '12px',
              px: 2,
              py: 0.5,
              height: 'auto',
              boxShadow: '0 2px 8px rgba(128, 0, 179, 0.3)',
              '& .MuiChip-label': {
                padding: '4px 12px'
              }
            }}
          />
        </Box>

        {/* Role Cards Container */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: 'center',
            alignItems: 'center',
            pt: 3 // Space for the floating label
          }}
        >
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            const isHovered = hoveredRole === role.id;
            const isActive = isSelected || isHovered;
            
            return (
              <Card
                key={role.id}
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => handleRoleClick(role.id)}
                sx={{
                  width: '90px',
                  height: '120px',
                  cursor: 'pointer',
                  border: isSelected 
                    ? `2px solid ${(theme) => theme.palette.primary.main || '#8000b3'}` 
                    : isHovered 
                      ? `2px solid ${(theme) => theme.palette.primary.main || '#8000b3'}`
                      : '1px solid transparent',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  backgroundColor: isSelected 
                    ? (theme) => theme.palette.primary.light || 'rgba(128, 0, 179, 0.04)'
                    : 'white',
                  boxShadow: isActive 
                    ? 4
                    : 1,
                  '&:hover': {
                    border: `2px solid ${(theme) => theme.palette.primary.main || '#8000b3'}`,
                    boxShadow: 4,
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
                    px: 1,
                    py: 1.5,
                    height: '100%',
                    textAlign: 'center',
                    '&:last-child': {
                      pb: 1.5
                    }
                  }}
                >
                  {/* Small gray label above */}
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '10px',
                      color: '#9E9E9E',
                      fontWeight: 400,
                      lineHeight: 1,
                      mb: 0.25
                    }}
                  >
                    {role.subtitle}
                  </Typography>

                  {/* Circular Avatar - 48x48 pixels */}
                  <Avatar
                    src={role.avatar}
                    sx={{
                      width: 48,
                      height: 48,
                      mb: 0.25
                    }}
                  >
                    <IconComponent sx={{ fontSize: 24, color: '#6A1B9A' }} />
                  </Avatar>

                  {/* Bold main label below */}
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#000000',
                      fontSize: '12px',
                      lineHeight: 1.2,
                      textTransform: 'capitalize'
                    }}
                  >
                    {role.name}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default RoleSelection;
