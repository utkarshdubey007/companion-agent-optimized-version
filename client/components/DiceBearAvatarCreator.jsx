import React, { useState, useCallback, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  IconButton,
  Tooltip,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  ButtonGroup
} from '@mui/material';
import {
  Save as SaveIcon,
  Undo as UndoIcon,
  Refresh as ResetIcon,
  Download as DownloadIcon,
  Shuffle as RandomIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { createAvatar } from '@dicebear/core';
import { avataaars, lorelei, micah, miniavs, personas } from '@dicebear/collection';

// Avatar styles available from DiceBear
const AVATAR_STYLES = [
  { id: 'avataaars', name: 'Avataaars', style: avataaars, description: 'Classic cartoon style' },
  { id: 'lorelei', name: 'Lorelei', style: lorelei, description: 'Cute illustrated style' },
  { id: 'micah', name: 'Micah', style: micah, description: 'Simple geometric style' },
  { id: 'miniavs', name: 'Miniavs', style: miniavs, description: 'Minimal avatar style' },
  { id: 'personas', name: 'Personas', style: personas, description: 'Professional portraits' }
];

// Configuration options for avataaars style
const AVATAAARS_OPTIONS = {
  accessories: ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'],
  clothing: ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'],
  clothingGraphic: ['Bat', 'Bear', 'Cumbia', 'Deer', 'Diamond', 'Hola', 'Pizza', 'Resist', 'Selena', 'Skull', 'SkullOutline'],
  eyebrows: ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'],
  eyes: ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'],
  facialHair: ['Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum'],
  hairColor: ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'],
  hatColor: ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'],
  mouth: ['Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'],
  skinColor: ['Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'],
  top: ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart']
};

const DEFAULT_CONFIG = {
  style: 'avataaars',
  seed: 'Felix',
  accessories: 'Prescription02',
  clothing: 'Hoodie',
  clothingGraphic: 'Pizza',
  eyebrows: 'Default',
  eyes: 'Happy',
  facialHair: 'Blank',
  hairColor: 'BrownDark',
  hatColor: 'Blue01',
  mouth: 'Smile',
  skinColor: 'Light',
  top: 'LongHairStraight'
};

const DiceBearAvatarCreator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [history, setHistory] = useState([DEFAULT_CONFIG]);
  const [activeCategory, setActiveCategory] = useState('style');

  // Generate avatar SVG using DiceBear
  const avatarSvg = useMemo(() => {
    try {
      const selectedStyle = AVATAR_STYLES.find(s => s.id === config.style);
      if (!selectedStyle) return '';
      
      const avatar = createAvatar(selectedStyle.style, {
        seed: config.seed,
        ...config
      });
      
      return avatar.toString();
    } catch (error) {
      console.error('Error generating avatar:', error);
      return '';
    }
  }, [config]);

  // Update avatar configuration
  const updateConfig = useCallback((key, value) => {
    setConfig(prev => {
      const newConfig = { ...prev, [key]: value };
      setHistory(hist => [...hist, newConfig]);
      return newConfig;
    });
  }, []);

  // Generate random avatar
  const randomizeAvatar = useCallback(() => {
    const randomSeed = Math.random().toString(36).substring(7);
    const randomConfig = {
      ...config,
      seed: randomSeed,
      accessories: AVATAAARS_OPTIONS.accessories[Math.floor(Math.random() * AVATAAARS_OPTIONS.accessories.length)],
      clothing: AVATAAARS_OPTIONS.clothing[Math.floor(Math.random() * AVATAAARS_OPTIONS.clothing.length)],
      eyebrows: AVATAAARS_OPTIONS.eyebrows[Math.floor(Math.random() * AVATAAARS_OPTIONS.eyebrows.length)],
      eyes: AVATAAARS_OPTIONS.eyes[Math.floor(Math.random() * AVATAAARS_OPTIONS.eyes.length)],
      facialHair: AVATAAARS_OPTIONS.facialHair[Math.floor(Math.random() * AVATAAARS_OPTIONS.facialHair.length)],
      hairColor: AVATAAARS_OPTIONS.hairColor[Math.floor(Math.random() * AVATAAARS_OPTIONS.hairColor.length)],
      mouth: AVATAAARS_OPTIONS.mouth[Math.floor(Math.random() * AVATAAARS_OPTIONS.mouth.length)],
      skinColor: AVATAAARS_OPTIONS.skinColor[Math.floor(Math.random() * AVATAAARS_OPTIONS.skinColor.length)],
      top: AVATAAARS_OPTIONS.top[Math.floor(Math.random() * AVATAAARS_OPTIONS.top.length)]
    };
    
    setConfig(randomConfig);
    setHistory(hist => [...hist, randomConfig]);
  }, [config]);

  // Undo last change
  const undoChange = useCallback(() => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop();
      const previousConfig = newHistory[newHistory.length - 1];
      setConfig(previousConfig);
      setHistory(newHistory);
    }
  }, [history]);

  // Reset to default
  const resetAvatar = useCallback(() => {
    setConfig(DEFAULT_CONFIG);
    setHistory([DEFAULT_CONFIG]);
  }, []);

  // Save avatar
  const saveAvatar = useCallback(() => {
    const avatarData = {
      config,
      svg: avatarSvg,
      timestamp: new Date().toISOString(),
      id: `dicebear_${Date.now()}`
    };

    try {
      const savedAvatars = JSON.parse(localStorage.getItem('dicebearAvatars') || '[]');
      savedAvatars.push(avatarData);
      localStorage.setItem('dicebearAvatars', JSON.stringify(savedAvatars));
      console.log('🎨 DiceBear Avatar Saved:', avatarData);
      alert('🎉 Avatar saved successfully! Check localStorage for details.');
    } catch (error) {
      console.error('Error saving avatar:', error);
      alert('❌ Error saving avatar');
    }
  }, [config, avatarSvg]);

  // Download SVG
  const downloadSvg = useCallback(() => {
    if (avatarSvg) {
      const blob = new Blob([avatarSvg], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `avatar-${config.seed || 'custom'}.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }, [avatarSvg, config.seed]);

  const categories = [
    { id: 'style', name: 'Style', icon: '🎨', color: '#FF6B6B' },
    { id: 'skin', name: 'Skin', icon: '👤', color: '#FF9800' },
    { id: 'hair', name: 'Hair', icon: '💇', color: '#9C27B0' },
    { id: 'eyes', name: 'Eyes', icon: '👀', color: '#4CAF50' },
    { id: 'mouth', name: 'Mouth', icon: '👄', color: '#E91E63' },
    { id: 'clothing', name: 'Clothes', icon: '👕', color: '#2196F3' },
    { id: 'accessories', name: 'Extras', icon: '🕶️', color: '#FF5722' }
  ];

  // Option selector component
  const OptionSelector = ({ options, selectedValue, onSelect, columns = 4 }) => (
    <Grid container spacing={1}>
      {options.map((option) => (
        <Grid item xs={12/columns} sm={6/columns} md={12/columns} key={option}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedValue === option ? 'contained' : 'outlined'}
              fullWidth
              onClick={() => onSelect(option)}
              sx={{
                minHeight: 45,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '10px',
                backgroundColor: selectedValue === option ? '#4CAF50' : 'transparent',
                borderColor: '#ddd',
                color: selectedValue === option ? '#fff' : '#333',
                '&:hover': {
                  backgroundColor: '#4CAF50',
                  color: '#fff'
                }
              }}
            >
              <Typography variant="caption" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {option.replace(/([A-Z])/g, ' $1').trim()}
              </Typography>
            </Button>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  // Style selector component
  const StyleSelector = () => (
    <Grid container spacing={2}>
      {AVATAR_STYLES.map((style) => (
        <Grid item xs={12} sm={6} key={style.id}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant={config.style === style.id ? 'contained' : 'outlined'}
              fullWidth
              onClick={() => updateConfig('style', style.id)}
              sx={{
                p: 2,
                borderRadius: '12px',
                textTransform: 'none',
                flexDirection: 'column',
                backgroundColor: config.style === style.id ? '#4CAF50' : 'transparent',
                color: config.style === style.id ? '#fff' : '#333',
                '&:hover': {
                  backgroundColor: '#4CAF50',
                  color: '#fff'
                }
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                {style.name}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {style.description}
              </Typography>
            </Button>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  // Render category controls
  const renderCategoryControls = () => {
    switch (activeCategory) {
      case 'style':
        return <StyleSelector />;
      case 'skin':
        return (
          <OptionSelector
            options={AVATAAARS_OPTIONS.skinColor}
            selectedValue={config.skinColor}
            onSelect={(value) => updateConfig('skinColor', value)}
            columns={3}
          />
        );
      case 'hair':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Hair Style
            </Typography>
            <OptionSelector
              options={AVATAAARS_OPTIONS.top}
              selectedValue={config.top}
              onSelect={(value) => updateConfig('top', value)}
              columns={3}
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Hair Color
              </Typography>
              <OptionSelector
                options={AVATAAARS_OPTIONS.hairColor}
                selectedValue={config.hairColor}
                onSelect={(value) => updateConfig('hairColor', value)}
                columns={4}
              />
            </Box>
          </Box>
        );
      case 'eyes':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Eyes
            </Typography>
            <OptionSelector
              options={AVATAAARS_OPTIONS.eyes}
              selectedValue={config.eyes}
              onSelect={(value) => updateConfig('eyes', value)}
              columns={3}
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Eyebrows
              </Typography>
              <OptionSelector
                options={AVATAAARS_OPTIONS.eyebrows}
                selectedValue={config.eyebrows}
                onSelect={(value) => updateConfig('eyebrows', value)}
                columns={3}
              />
            </Box>
          </Box>
        );
      case 'mouth':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Mouth
            </Typography>
            <OptionSelector
              options={AVATAAARS_OPTIONS.mouth}
              selectedValue={config.mouth}
              onSelect={(value) => updateConfig('mouth', value)}
              columns={3}
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Facial Hair
              </Typography>
              <OptionSelector
                options={AVATAAARS_OPTIONS.facialHair}
                selectedValue={config.facialHair}
                onSelect={(value) => updateConfig('facialHair', value)}
                columns={3}
              />
            </Box>
          </Box>
        );
      case 'clothing':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Clothing
            </Typography>
            <OptionSelector
              options={AVATAAARS_OPTIONS.clothing}
              selectedValue={config.clothing}
              onSelect={(value) => updateConfig('clothing', value)}
              columns={3}
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Graphic
              </Typography>
              <OptionSelector
                options={AVATAAARS_OPTIONS.clothingGraphic}
                selectedValue={config.clothingGraphic}
                onSelect={(value) => updateConfig('clothingGraphic', value)}
                columns={4}
              />
            </Box>
          </Box>
        );
      case 'accessories':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Accessories
            </Typography>
            <OptionSelector
              options={AVATAAARS_OPTIONS.accessories}
              selectedValue={config.accessories}
              onSelect={(value) => updateConfig('accessories', value)}
              columns={3}
            />
            
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                Hat Color
              </Typography>
              <OptionSelector
                options={AVATAAARS_OPTIONS.hatColor}
                selectedValue={config.hatColor}
                onSelect={(value) => updateConfig('hatColor', value)}
                columns={4}
              />
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

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
            🎭 DiceBear Avatar Creator
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            Professional avatar generator using DiceBear library! 
          </Typography>
        </Box>

        <Grid container spacing={isMobile ? 2 : 3}>
          {/* Category Selection */}
          <Grid item xs={12}>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                mb: 2
              }}
            >
              <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1, pb: 1 }}>
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'contained' : 'outlined'}
                    onClick={() => setActiveCategory(category.id)}
                    sx={{
                      minWidth: 90,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      backgroundColor: activeCategory === category.id ? category.color : 'transparent',
                      borderColor: 'white',
                      color: 'white',
                      flexShrink: 0,
                      '&:hover': {
                        backgroundColor: category.color,
                        color: 'white'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '16px' }}>{category.icon}</span>
                      <span style={{ fontSize: '12px' }}>{category.name}</span>
                    </Box>
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>

          {/* Avatar Preview */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
                  minHeight: '600px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  🌟 Your DiceBear Avatar
                </Typography>
                
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px',
                    p: 3,
                    mb: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {avatarSvg ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: avatarSvg }}
                      style={{ width: '250px', height: '250px' }}
                    />
                  ) : (
                    <Typography color="white">Loading avatar...</Typography>
                  )}
                </Box>

                {/* Action Buttons */}
                <Stack direction={isMobile ? 'column' : 'row'} spacing={1} sx={{ width: '100%', maxWidth: 450 }}>
                  <Button
                    variant="contained"
                    onClick={randomizeAvatar}
                    startIcon={<RandomIcon />}
                    sx={{
                      backgroundColor: '#FF6B6B',
                      borderRadius: '12px',
                      flex: 1,
                      '&:hover': { backgroundColor: '#FF5252' }
                    }}
                  >
                    Random
                  </Button>

                  <Button
                    variant="contained"
                    onClick={saveAvatar}
                    startIcon={<SaveIcon />}
                    sx={{
                      backgroundColor: '#4CAF50',
                      borderRadius: '12px',
                      flex: 1,
                      '&:hover': { backgroundColor: '#45a049' }
                    }}
                  >
                    Save
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={downloadSvg}
                    startIcon={<DownloadIcon />}
                    sx={{
                      borderColor: '#2196F3',
                      color: '#2196F3',
                      borderRadius: '12px',
                      flex: 1,
                      '&:hover': {
                        backgroundColor: '#2196F3',
                        color: 'white'
                      }
                    }}
                  >
                    SVG
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={undoChange}
                    disabled={history.length <= 1}
                    startIcon={<UndoIcon />}
                    sx={{
                      borderColor: '#FFC107',
                      color: '#FFC107',
                      borderRadius: '12px',
                      flex: 1,
                      '&:hover': {
                        backgroundColor: '#FFC107',
                        color: 'white'
                      },
                      '&:disabled': {
                        borderColor: 'rgba(255, 193, 7, 0.3)',
                        color: 'rgba(255, 193, 7, 0.3)'
                      }
                    }}
                  >
                    Undo
                  </Button>
                  
                  <Button
                    variant="outlined"
                    onClick={resetAvatar}
                    startIcon={<ResetIcon />}
                    sx={{
                      borderColor: '#FF5722',
                      color: '#FF5722',
                      borderRadius: '12px',
                      flex: 1,
                      '&:hover': {
                        backgroundColor: '#FF5722',
                        color: 'white'
                      }
                    }}
                  >
                    Reset
                  </Button>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>

          {/* Controls Panel */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  borderRadius: '20px',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  minHeight: '600px'
                }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: 'white', mb: 3, textAlign: 'center' }}
                >
                  {categories.find(c => c.id === activeCategory)?.icon} Customize{' '}
                  {categories.find(c => c.id === activeCategory)?.name}
                </Typography>
                
                <Box
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    borderRadius: '16px',
                    p: 2,
                    backdropFilter: 'blur(10px)',
                    maxHeight: '520px',
                    overflowY: 'auto'
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {renderCategoryControls()}
                    </motion.div>
                  </AnimatePresence>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        {/* Avatar Configuration Display */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            🎯 Avatar Configuration
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ gap: 1 }}>
            <Chip label={`Style: ${config.style}`} color="primary" />
            <Chip label={`Seed: ${config.seed}`} color="secondary" />
            <Chip label={`Skin: ${config.skinColor}`} color="success" />
            <Chip label={`Hair: ${config.top?.replace(/([A-Z])/g, ' $1').trim()}`} color="error" />
            <Chip label={`Eyes: ${config.eyes}`} color="info" />
            <Chip label={`Mouth: ${config.mouth}`} color="warning" />
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
};

export default DiceBearAvatarCreator;
