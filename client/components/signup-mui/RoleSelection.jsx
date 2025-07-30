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
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    {
      id: 'kid',
      name: 'Kid',
      icon: ChildCare,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800'
    },
    {
      id: 'guardian',
      name: 'Guardian',
      icon: FamilyRestroom,
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800'
    },
    {
      id: 'educator',
      name: 'Educator',
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

  const isActive = (roleId) => selectedRole === roleId || hoveredRole === roleId;

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Role Cards Container */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: '24px', 
          justifyContent: 'center',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          position: 'relative'
        }}
      >
        {roles.map((role) => {
          const IconComponent = role.icon;
          const active = isActive(role.id);
          const isSelected = selectedRole === role.id;
          
          return (
            <Box
              key={role.id}
              sx={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* "I'm a" Badge - Only shows above selected card */}
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
                    fontWeight: 700,
                    fontSize: '14px',
                    px: 2,
                    py: 0.5,
                    height: 'auto',
                    borderRadius: '9999px',
                    zIndex: 10,
                    boxShadow: '0 2px 8px rgba(128, 0, 179, 0.3)',
                    '& .MuiChip-label': {
                      padding: '4px 12px'
                    }
                  }}
                />
              )}

              {/* Role Card */}
              <Card
                onMouseEnter={() => setHoveredRole(role.id)}
                onMouseLeave={() => setHoveredRole(null)}
                onClick={() => handleRoleClick(role.id)}
                sx={{
                  width: '160px',
                  cursor: 'pointer',
                  border: active ? '3px solid #6A1B9A' : '3px solid transparent',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  transform: active ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: active 
                    ? '0 8px 24px rgba(106, 27, 154, 0.2)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(106, 27, 154, 0.2)',
                  },
                  backgroundColor: 'white',
                }}
              >
                <CardContent 
                  sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    gap: 2,
                    padding: '24px !important'
                  }}
                >
                  {/* Avatar - Clean without borders */}
                  <Avatar
                    src={role.avatar}
                    sx={{
                      width: 64,
                      height: 64,
                      // No borders on avatar
                    }}
                  >
                    <IconComponent sx={{ fontSize: 32, color: '#6A1B9A' }} />
                  </Avatar>

                  {/* Role Name - Always black text */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#000000', // Always black, never purple
                      fontSize: '16px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
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

      {/* Selected Role Indicator */}
      {selectedRole && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontWeight: 400,
              fontSize: '14px'
            }}
          >
            Selected: {roles.find(r => r.id === selectedRole)?.name}
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default RoleSelection;
