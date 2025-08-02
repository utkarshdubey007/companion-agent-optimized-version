import React, { useRef } from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { Download, Refresh } from '@mui/icons-material';
import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';
import html2canvas from 'html2canvas';

const AvatarPreview = ({ config, onReset, onExport }) => {
  const avatarRef = useRef(null);

  // Generate avatar SVG
  const generateAvatarSvg = () => {
    try {
      const avatar = createAvatar(avataaars, {
        seed: config.seed || 'default',
        hair: [config.hair],
        eyes: [config.eyes],
        mouth: [config.mouth],
        clothing: [config.clothes],
        accessories: [config.accessories],
        backgroundColor: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf'],
      });
      
      return avatar.toString();
    } catch (error) {
      console.error('Error generating avatar:', error);
      return '';
    }
  };

  // Export avatar as PNG
  const handleExport = async () => {
    if (!avatarRef.current) return;

    try {
      const canvas = await html2canvas(avatarRef.current, {
        backgroundColor: null,
        scale: 2, // Higher resolution
        useCORS: true,
      });

      // Create download link
      const link = document.createElement('a');
      link.download = `avatar-${config.seed || 'custom'}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (onExport) onExport();
    } catch (error) {
      console.error('Error exporting avatar:', error);
    }
  };

  const avatarSvg = generateAvatarSvg();

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
        Avatar Preview
      </Typography>

      {/* Avatar Display */}
      <Box
        ref={avatarRef}
        sx={{
          width: 200,
          height: 200,
          mb: 3,
          p: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          border: '3px solid rgba(255, 255, 255, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
          },
        }}
      >
        {avatarSvg ? (
          <Box
            sx={{
              width: '100%',
              height: '100%',
              '& svg': {
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              },
            }}
            dangerouslySetInnerHTML={{ __html: avatarSvg }}
          />
        ) : (
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Loading...
          </Typography>
        )}
      </Box>

      {/* Seed Display */}
      <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
        Seed: <strong>{config.seed}</strong>
      </Typography>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={handleExport}
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            },
          }}
        >
          Export PNG
        </Button>
        
        <Button
          variant="outlined"
          startIcon={<Refresh />}
          onClick={onReset}
          sx={{
            borderColor: 'rgba(255, 255, 255, 0.5)',
            color: 'white',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Reset
        </Button>
      </Box>

      {/* Fun Stats */}
      <Box sx={{ mt: 3, opacity: 0.7 }}>
        <Typography variant="caption" display="block">
          🎨 Customizations: {Object.keys(config).length - 1}
        </Typography>
        <Typography variant="caption" display="block">
          ✨ Combinations: 1M+ possible
        </Typography>
      </Box>
    </Paper>
  );
};

export default AvatarPreview;
