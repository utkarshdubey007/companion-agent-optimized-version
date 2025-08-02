import React, { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Container,
  Grid,
  Snackbar,
  Alert,
  Fab,
  useTheme,
  useMediaQuery,
  Slide,
} from '@mui/material';
import { Save, GetApp } from '@mui/icons-material';
import AvatarPreview from './AvatarPreview.jsx';
import AvatarControls from './AvatarControls.jsx';
import {
  defaultAvatarConfig,
  saveAvatarConfig,
  loadAvatarConfig,
  resetAvatarConfig,
} from '../utils/avatarOptions.js';

const AvatarEditor = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [config, setConfig] = useState(defaultAvatarConfig);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [isLoading, setIsLoading] = useState(true);

  // Load saved configuration on mount
  useEffect(() => {
    try {
      const savedConfig = loadAvatarConfig();
      setConfig(savedConfig);
    } catch (error) {
      console.error('Error loading avatar config:', error);
      showNotification('Error loading saved avatar', 'error');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Auto-save configuration changes
  useEffect(() => {
    if (!isLoading) {
      try {
        saveAvatarConfig(config);
      } catch (error) {
        console.error('Error saving avatar config:', error);
      }
    }
  }, [config, isLoading]);

  const showNotification = useCallback((message, severity = 'success') => {
    setNotification({ open: true, message, severity });
  }, []);

  const handleCloseNotification = useCallback(() => {
    setNotification(prev => ({ ...prev, open: false }));
  }, []);

  const handleConfigChange = useCallback((key, value) => {
    setConfig(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    try {
      const resetConfig = resetAvatarConfig();
      setConfig(resetConfig);
      showNotification('Avatar reset to default settings! 🎨');
    } catch (error) {
      console.error('Error resetting avatar:', error);
      showNotification('Error resetting avatar', 'error');
    }
  }, [showNotification]);

  const handleExport = useCallback(() => {
    showNotification('Avatar exported successfully! 📸');
  }, [showNotification]);

  const handleManualSave = useCallback(() => {
    try {
      saveAvatarConfig(config);
      showNotification('Avatar saved! 💾');
    } catch (error) {
      console.error('Error saving avatar:', error);
      showNotification('Error saving avatar', 'error');
    }
  }, [config, showNotification]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
      >
        <Box sx={{ textAlign: 'center', color: 'white' }}>
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: '50%',
              border: '4px solid rgba(255,255,255,0.3)',
              borderTop: '4px solid white',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 16px',
              '@keyframes spin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }}
          />
          <div>Loading Avatar Editor...</div>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{ minHeight: 'calc(100vh - 64px)' }}>
          {/* Controls Panel */}
          <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              order: { xs: 2, md: 1 },
            }}
          >
            <Slide direction="right" in timeout={800}>
              <Box>
                <AvatarControls config={config} onChange={handleConfigChange} />
              </Box>
            </Slide>
          </Grid>

          {/* Preview Panel */}
          <Grid
            item
            xs={12}
            md={6}
            lg={7}
            sx={{
              order: { xs: 1, md: 2 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Slide direction="left" in timeout={800}>
              <Box sx={{ width: '100%' }}>
                <AvatarPreview
                  config={config}
                  onReset={handleReset}
                  onExport={handleExport}
                />
              </Box>
            </Slide>
          </Grid>
        </Grid>

        {/* Floating Action Buttons */}
        {!isMobile && (
          <Box
            sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            <Fab
              color="primary"
              aria-label="save"
              onClick={handleManualSave}
              sx={{
                boxShadow: 3,
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <Save />
            </Fab>
          </Box>
        )}

        {/* Notification Snackbar */}
        <Snackbar
          open={notification.open}
          autoHideDuration={4000}
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        >
          <Alert
            onClose={handleCloseNotification}
            severity={notification.severity}
            sx={{ width: '100%' }}
            variant="filled"
          >
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default AvatarEditor;
