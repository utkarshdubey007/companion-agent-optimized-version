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
      color: '#FF6B9D', // Pink
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800'
    },
    {
      id: 'guardian',
      name: 'Guardian',
      icon: FamilyRestroom,
      color: '#FF6B6B', // Red
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800'
    },
    {
      id: 'educator',
      name: 'Educator',
      icon: School,
      color: '#6A1B9A', // Purple
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
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* I'm a Badge */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Chip
          label="I'm a"
          sx={{
            backgroundColor: '#6A1B9A',
            color: 'white',
            fontWeight: 600,
            fontSize: '16px',
            px: 2,
            py: 1,
            height: 'auto',
            borderRadius: '20px',
            border: hoveredRole || selectedRole ? '2px solid #6A1B9A' : '2px solid transparent',
            transition: 'all 0.3s ease',
            boxShadow: hoveredRole || selectedRole ? '0 4px 12px rgba(106, 27, 154, 0.3)' : 'none',
          }}
        />
      </Box>

      {/* Role Cards */}
      <Box 
        sx={{ 
          display: 'flex', 
          gap: 3, 
          justifyContent: 'center',
          flexWrap: { xs: 'wrap', sm: 'nowrap' }
        }}
      >
        {roles.map((role) => {
          const IconComponent = role.icon;
          const active = isActive(role.id);
          
          return (
            <Card
              key={role.id}
              onMouseEnter={() => setHoveredRole(role.id)}
              onMouseLeave={() => setHoveredRole(null)}
              onClick={() => handleRoleClick(role.id)}
              sx={{
                minWidth: { xs: '140px', sm: '160px' },
                maxWidth: { xs: '140px', sm: '160px' },
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
                backgroundColor: active ? 'rgba(106, 27, 154, 0.02)' : 'white',
              }}
            >
              <CardContent 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  gap: 2,
                  py: 3,
                  px: 2
                }}
              >
                {/* Avatar */}
                <Avatar
                  src={role.avatar}
                  sx={{
                    width: 64,
                    height: 64,
                    border: active ? `3px solid ${role.color}` : '3px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <IconComponent sx={{ fontSize: 32, color: role.color }} />
                </Avatar>

                {/* Role Name */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: active ? '#6A1B9A' : '#333',
                    fontSize: { xs: '14px', sm: '16px' },
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {role.name}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>

      {/* Selected Role Indicator */}
      {selectedRole && (
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography
            variant="body1"
            sx={{
              color: '#6A1B9A',
              fontWeight: 600,
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
