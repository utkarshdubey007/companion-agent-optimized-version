import React, { useState } from 'react';
import {
  Box,
  Card,
  Typography,
  Avatar,
  Container
} from '@mui/material';
import {
  ChildCare,
  FamilyRestroom,
  School
} from '@mui/icons-material';

const RoleSelection = ({ onRoleSelect }) => {
  const [selectedRole, setSelectedRole] = useState('kid');

  const roles = [
    {
      value: 'kid',
      label: 'kid',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800'
    },
    {
      value: 'guardian',
      label: 'Guardian',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800'
    },
    {
      value: 'educator',
      label: 'Educator',
      avatar: 'https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800'
    }
  ];

  const handleRoleClick = (roleValue) => {
    setSelectedRole(roleValue);
    if (onRoleSelect) {
      onRoleSelect(roleValue);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          position: 'relative',
          backgroundColor: 'white',
          borderRadius: 3,
          padding: 2,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 'fit-content',
          margin: '0 auto',
        }}
      >
        {/* "I'm a" Badge at the top */}
        <Box
          sx={{
            backgroundColor: '#8A2BE2',
            color: 'white',
            px: 2,
            py: 0.5,
            borderRadius: 10,
            fontSize: 14,
            mb: 1,
          }}
        >
          I'm a
        </Box>

        {/* Role Cards Container */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {roles.map((role) => (
            <Card
              key={role.value}
              onClick={() => handleRoleClick(role.value)}
              sx={{
                p: 1.5,
                borderRadius: 2,
                border:
                  selectedRole === role.value
                    ? '2px solid #8A2BE2'
                    : '1px solid #e0e0e0',
                boxShadow: selectedRole === role.value ? 4 : 1,
                textAlign: 'center',
                cursor: 'pointer',
                width: 90,
                backgroundColor: '#fff',
                transition: 'all 0.3s ease',
                '&:hover': {
                  border: '2px solid #8A2BE2',
                  boxShadow: 4,
                },
              }}
            >
              <Avatar
                src={role.avatar}
                sx={{ width: 48, height: 48, margin: '0 auto', mb: 1 }}
              />
              <Typography
                variant="body2"
                sx={{ textTransform: 'lowercase', fontWeight: 600 }}
              >
                {role.label}
              </Typography>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default RoleSelection;
