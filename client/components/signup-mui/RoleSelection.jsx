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
  const [selectedRole, setSelectedRole] = useState('kid'); // Default to 'kid' to match the image

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

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {/* Main Container with rounded rectangle background */}
      <Box 
        sx={{ 
          backgroundColor: 'white',
          borderRadius: '16px',
          border: '2px solid #E0E0E0',
          padding: '32px 24px',
          position: 'relative',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)'
        }}
      >
        {/* "I'm a" Badge positioned in top-left inside container */}
        <Chip
          label="I'm a"
          sx={{
            position: 'absolute',
            top: 16,
            left: 24,
            backgroundColor: '#8000b3',
            color: 'white',
            fontWeight: 700,
            fontSize: '12px',
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

        {/* Role Cards Container */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: '16px', 
            justifyContent: 'center',
            alignItems: 'center',
            pt: 2
          }}
        >
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isSelected = selectedRole === role.id;
            
            return (
              <Box
                key={role.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer'
                }}
                onClick={() => handleRoleClick(role.id)}
              >
                {/* Role Card */}
                <Card
                  sx={{
                    width: '120px',
                    height: '140px',
                    border: isSelected ? '3px solid #8000b3' : '2px solid #E0E0E0',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    backgroundColor: 'white',
                    boxShadow: isSelected 
                      ? '0 4px 16px rgba(128, 0, 179, 0.2)' 
                      : '0 1px 4px rgba(0, 0, 0, 0.08)',
                    '&:hover': {
                      borderColor: '#8000b3',
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
                      gap: 1.5,
                      padding: '20px 16px !important',
                      height: '100%'
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      src={role.avatar}
                      sx={{
                        width: 56,
                        height: 56,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 28, color: '#6A1B9A' }} />
                    </Avatar>

                    {/* Role Name */}
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: '#000000',
                        fontSize: '14px',
                        textAlign: 'center',
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
      </Box>
    </Container>
  );
};

export default RoleSelection;
