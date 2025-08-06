import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Save as SaveIcon,
  Undo as UndoIcon,
  Refresh as ResetIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarPreview from './AvatarPreview';
import AvatarControls from './AvatarControls';

// Avatar data structure
const AVATAR_ASSETS = {
  skinTones: [
    { id: 'light', color: '#FDBCB4', name: 'Light' },
    { id: 'medium-light', color: '#F1C27D', name: 'Medium Light' },
    { id: 'medium', color: '#E0AC69', name: 'Medium' },
    { id: 'medium-dark', color: '#C68642', name: 'Medium Dark' },
    { id: 'dark', color: '#8D5524', name: 'Dark' },
    { id: 'very-dark', color: '#654321', name: 'Very Dark' }
  ],
  faces: [
    { id: 'happy', name: 'Happy', emoji: '😊' },
    { id: 'excited', name: 'Excited', emoji: '😄' },
    { id: 'cool', name: 'Cool', emoji: '😎' },
    { id: 'wink', name: 'Wink', emoji: '😉' },
    { id: 'shy', name: 'Shy', emoji: '😊' },
    { id: 'cheerful', name: 'Cheerful', emoji: '😁' }
  ],
  hairStyles: [
    { id: 'short', name: 'Short', color: '#8B4513' },
    { id: 'long', name: 'Long', color: '#8B4513' },
    { id: 'curly', name: 'Curly', color: '#8B4513' },
    { id: 'ponytail', name: 'Ponytail', color: '#8B4513' },
    { id: 'braids', name: 'Braids', color: '#8B4513' },
    { id: 'bald', name: 'Bald', color: 'transparent' }
  ],
  hairColors: [
    { id: 'brown', color: '#8B4513', name: 'Brown' },
    { id: 'black', color: '#2F2F2F', name: 'Black' },
    { id: 'blonde', color: '#FFD700', name: 'Blonde' },
    { id: 'red', color: '#DC143C', name: 'Red' },
    { id: 'blue', color: '#4169E1', name: 'Blue' },
    { id: 'pink', color: '#FF69B4', name: 'Pink' }
  ],
  outfits: [
    { id: 'casual', name: 'Casual', color: '#4CAF50' },
    { id: 'formal', name: 'Formal', color: '#2196F3' },
    { id: 'sporty', name: 'Sporty', color: '#FF9800' },
    { id: 'party', name: 'Party', color: '#E91E63' },
    { id: 'school', name: 'School', color: '#9C27B0' },
    { id: 'summer', name: 'Summer', color: '#FFEB3B' }
  ],
  shoes: [
    { id: 'sneakers', name: 'Sneakers', color: '#FFFFFF' },
    { id: 'boots', name: 'Boots', color: '#8B4513' },
    { id: 'sandals', name: 'Sandals', color: '#FFD700' },
    { id: 'dress-shoes', name: 'Dress Shoes', color: '#2F2F2F' },
    { id: 'barefoot', name: 'Barefoot', color: 'transparent' }
  ]
};

const DEFAULT_AVATAR = {
  skinTone: 'medium',
  face: 'happy',
  hairStyle: 'short',
  hairColor: 'brown',
  outfit: 'casual',
  shoes: 'sneakers'
};

const AvatarBuilder = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Avatar state management
  const [currentAvatar, setCurrentAvatar] = useState(DEFAULT_AVATAR);
  const [avatarHistory, setAvatarHistory] = useState([DEFAULT_AVATAR]);
  const [activeCategory, setActiveCategory] = useState('skinTone');

  // Update avatar part with history tracking
  const updateAvatarPart = useCallback((category, value) => {
    setCurrentAvatar(prev => {
      const newAvatar = { ...prev, [category]: value };
      setAvatarHistory(history => [...history, newAvatar]);
      return newAvatar;
    });
  }, []);

  // Undo last change
  const undoLastChange = useCallback(() => {
    if (avatarHistory.length > 1) {
      const newHistory = [...avatarHistory];
      newHistory.pop(); // Remove current state
      const previousState = newHistory[newHistory.length - 1];
      setCurrentAvatar(previousState);
      setAvatarHistory(newHistory);
    }
  }, [avatarHistory]);

  // Reset to default
  const resetAvatar = useCallback(() => {
    setCurrentAvatar(DEFAULT_AVATAR);
    setAvatarHistory([DEFAULT_AVATAR]);
  }, []);

  // Save avatar (console.log for now)
  const saveAvatar = useCallback(() => {
    console.log('💾 Avatar Saved:', {
      avatar: currentAvatar,
      timestamp: new Date().toISOString(),
      assetsUsed: {
        skinTone: AVATAR_ASSETS.skinTones.find(s => s.id === currentAvatar.skinTone),
        face: AVATAR_ASSETS.faces.find(f => f.id === currentAvatar.face),
        hairStyle: AVATAR_ASSETS.hairStyles.find(h => h.id === currentAvatar.hairStyle),
        hairColor: AVATAR_ASSETS.hairColors.find(h => h.id === currentAvatar.hairColor),
        outfit: AVATAR_ASSETS.outfits.find(o => o.id === currentAvatar.outfit),
        shoes: AVATAR_ASSETS.shoes.find(s => s.id === currentAvatar.shoes)
      }
    });
    
    // Show success feedback
    alert('🎉 Avatar saved successfully! Check the console for details.');
  }, [currentAvatar]);

  const categories = [
    { id: 'skinTone', name: 'Skin', icon: '👤', color: '#FF9800' },
    { id: 'face', name: 'Face', icon: '😊', color: '#4CAF50' },
    { id: 'hairStyle', name: 'Hair', icon: '💇', color: '#9C27B0' },
    { id: 'outfit', name: 'Outfit', icon: '👕', color: '#2196F3' },
    { id: 'shoes', name: 'Shoes', icon: '👟', color: '#FF5722' }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)',
              backgroundSize: '300% 300%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'gradientShift 3s ease-in-out infinite',
              '@keyframes gradientShift': {
                '0%, 100%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '100% 50%' }
              }
            }}
          >
            🎨 Avatar Builder
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            Create your perfect avatar! Mix and match to make it uniquely yours.
          </Typography>
        </Box>

        <Grid container spacing={isMobile ? 2 : 3}>
          {/* Controls Panel */}
          <Grid item xs={12} md={4} lg={3}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: isMobile ? 2 : 3,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  position: isMobile ? 'relative' : 'sticky',
                  top: isMobile ? 'auto' : 20
                }}
              >
                {/* Category Tabs */}
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                  Customize Your Avatar
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      fullWidth
                      variant={activeCategory === category.id ? 'contained' : 'outlined'}
                      onClick={() => setActiveCategory(category.id)}
                      sx={{
                        mb: 1,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        backgroundColor: activeCategory === category.id ? category.color : 'transparent',
                        borderColor: category.color,
                        color: activeCategory === category.id ? 'white' : category.color,
                        '&:hover': {
                          backgroundColor: category.color,
                          color: 'white'
                        }
                      }}
                      startIcon={<span style={{ fontSize: '18px' }}>{category.icon}</span>}
                    >
                      {category.name}
                    </Button>
                  ))}
                </Box>

                {/* Action Buttons */}
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={saveAvatar}
                    startIcon={<SaveIcon />}
                    sx={{
                      backgroundColor: '#4CAF50',
                      borderRadius: '12px',
                      py: 1.5,
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': { backgroundColor: '#45a049' }
                    }}
                  >
                    Save Avatar
                  </Button>
                  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={undoLastChange}
                      disabled={avatarHistory.length <= 1}
                      startIcon={<UndoIcon />}
                      sx={{
                        borderColor: '#FFC107',
                        color: '#FFC107',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: '#FFC107',
                          color: 'white'
                        }
                      }}
                    >
                      Undo
                    </Button>
                    
                    <Button
                      variant="outlined"
                      fullWidth
                      onClick={resetAvatar}
                      startIcon={<ResetIcon />}
                      sx={{
                        borderColor: '#FF5722',
                        color: '#FF5722',
                        borderRadius: '12px',
                        '&:hover': {
                          backgroundColor: '#FF5722',
                          color: 'white'
                        }
                      }}
                    >
                      Reset
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          {/* Preview Panel */}
          <Grid item xs={12} md={4} lg={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <AvatarPreview 
                avatar={currentAvatar}
                assets={AVATAR_ASSETS}
              />
            </motion.div>
          </Grid>

          {/* Controls Detail Panel */}
          <Grid item xs={12} md={4} lg={4}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <AvatarControls
                activeCategory={activeCategory}
                currentAvatar={currentAvatar}
                assets={AVATAR_ASSETS}
                onUpdateAvatar={updateAvatarPart}
              />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
};

export default AvatarBuilder;
