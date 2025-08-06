import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Chip,
  Stack,
  Card,
  CardContent,
  Fade,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Save as SaveIcon,
  Undo as UndoIcon,
  Refresh as ResetIcon,
  Download as DownloadIcon,
  Palette as PaletteIcon,
  Face as FaceIcon,
  Style as StyleIcon,
  Checkroom as CheckroomIcon,
  Visibility as EyesIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import Avatar from 'react-avataaars';

// Avatar configuration options based on react-avataaars
const AVATAR_OPTIONS = {
  skinColors: [
    { id: 'Light', name: 'Light', value: 'Light' },
    { id: 'Yellow', name: 'Yellow', value: 'Yellow' },
    { id: 'Pale', name: 'Pale', value: 'Pale' },
    { id: 'Tanned', name: 'Tanned', value: 'Tanned' },
    { id: 'Brown', name: 'Brown', value: 'Brown' },
    { id: 'DarkBrown', name: 'Dark Brown', value: 'DarkBrown' },
    { id: 'Black', name: 'Black', value: 'Black' }
  ],
  
  topTypes: [
    { id: 'NoHair', name: 'Bald', value: 'NoHair' },
    { id: 'Eyepatch', name: 'Eyepatch', value: 'Eyepatch' },
    { id: 'Hat', name: 'Hat', value: 'Hat' },
    { id: 'Hijab', name: 'Hijab', value: 'Hijab' },
    { id: 'Turban', name: 'Turban', value: 'Turban' },
    { id: 'WinterHat1', name: 'Winter Hat', value: 'WinterHat1' },
    { id: 'WinterHat2', name: 'Winter Hat 2', value: 'WinterHat2' },
    { id: 'WinterHat3', name: 'Winter Hat 3', value: 'WinterHat3' },
    { id: 'WinterHat4', name: 'Winter Hat 4', value: 'WinterHat4' },
    { id: 'LongHairBigHair', name: 'Big Hair', value: 'LongHairBigHair' },
    { id: 'LongHairBob', name: 'Bob Cut', value: 'LongHairBob' },
    { id: 'LongHairBun', name: 'Hair Bun', value: 'LongHairBun' },
    { id: 'LongHairCurly', name: 'Curly Hair', value: 'LongHairCurly' },
    { id: 'LongHairCurvy', name: 'Curvy Hair', value: 'LongHairCurvy' },
    { id: 'LongHairDreads', name: 'Dreadlocks', value: 'LongHairDreads' },
    { id: 'LongHairFrida', name: 'Frida Style', value: 'LongHairFrida' },
    { id: 'LongHairFro', name: 'Afro', value: 'LongHairFro' },
    { id: 'LongHairFroBand', name: 'Afro Band', value: 'LongHairFroBand' },
    { id: 'LongHairNotTooLong', name: 'Medium Hair', value: 'LongHairNotTooLong' },
    { id: 'LongHairShavedSides', name: 'Shaved Sides', value: 'LongHairShavedSides' },
    { id: 'LongHairMiaWallace', name: 'Mia Wallace', value: 'LongHairMiaWallace' },
    { id: 'LongHairStraight', name: 'Straight Hair', value: 'LongHairStraight' },
    { id: 'LongHairStraight2', name: 'Straight Hair 2', value: 'LongHairStraight2' },
    { id: 'LongHairStraightStrand', name: 'Hair Strand', value: 'LongHairStraightStrand' },
    { id: 'ShortHairDreads01', name: 'Short Dreads', value: 'ShortHairDreads01' },
    { id: 'ShortHairDreads02', name: 'Short Dreads 2', value: 'ShortHairDreads02' },
    { id: 'ShortHairFrizzle', name: 'Frizzle', value: 'ShortHairFrizzle' },
    { id: 'ShortHairShaggyMullet', name: 'Shaggy Mullet', value: 'ShortHairShaggyMullet' },
    { id: 'ShortHairShortCurly', name: 'Short Curly', value: 'ShortHairShortCurly' },
    { id: 'ShortHairShortFlat', name: 'Short Flat', value: 'ShortHairShortFlat' },
    { id: 'ShortHairShortRound', name: 'Short Round', value: 'ShortHairShortRound' },
    { id: 'ShortHairShortWaved', name: 'Short Waved', value: 'ShortHairShortWaved' },
    { id: 'ShortHairSides', name: 'Short Sides', value: 'ShortHairSides' },
    { id: 'ShortHairTheCaesar', name: 'Caesar Cut', value: 'ShortHairTheCaesar' },
    { id: 'ShortHairTheCaesarSidePart', name: 'Caesar Side Part', value: 'ShortHairTheCaesarSidePart' }
  ],

  hairColors: [
    { id: 'Auburn', name: 'Auburn', value: 'Auburn', color: '#A55728' },
    { id: 'Black', name: 'Black', value: 'Black', color: '#2C1B18' },
    { id: 'Blonde', name: 'Blonde', value: 'Blonde', color: '#B58143' },
    { id: 'BlondeGolden', name: 'Golden Blonde', value: 'BlondeGolden', color: '#D6B370' },
    { id: 'Brown', name: 'Brown', value: 'Brown', color: '#724133' },
    { id: 'BrownDark', name: 'Dark Brown', value: 'BrownDark', color: '#4A312C' },
    { id: 'PastelPink', name: 'Pastel Pink', value: 'PastelPink', color: '#F59797' },
    { id: 'Platinum', name: 'Platinum', value: 'Platinum', color: '#ECDCBF' },
    { id: 'Red', name: 'Red', value: 'Red', color: '#C93305' },
    { id: 'SilverGray', name: 'Silver Gray', value: 'SilverGray', color: '#E8E1E1' }
  ],

  eyeTypes: [
    { id: 'Close', name: 'Closed', value: 'Close' },
    { id: 'Cry', name: 'Crying', value: 'Cry' },
    { id: 'Default', name: 'Default', value: 'Default' },
    { id: 'Dizzy', name: 'Dizzy', value: 'Dizzy' },
    { id: 'EyeRoll', name: 'Eye Roll', value: 'EyeRoll' },
    { id: 'Happy', name: 'Happy', value: 'Happy' },
    { id: 'Hearts', name: 'Hearts', value: 'Hearts' },
    { id: 'Side', name: 'Side Look', value: 'Side' },
    { id: 'Squint', name: 'Squint', value: 'Squint' },
    { id: 'Surprised', name: 'Surprised', value: 'Surprised' },
    { id: 'Wink', name: 'Wink', value: 'Wink' },
    { id: 'WinkWacky', name: 'Wacky Wink', value: 'WinkWacky' }
  ],

  mouthTypes: [
    { id: 'Concerned', name: 'Concerned', value: 'Concerned' },
    { id: 'Default', name: 'Default', value: 'Default' },
    { id: 'Disbelief', name: 'Disbelief', value: 'Disbelief' },
    { id: 'Eating', name: 'Eating', value: 'Eating' },
    { id: 'Grimace', name: 'Grimace', value: 'Grimace' },
    { id: 'Sad', name: 'Sad', value: 'Sad' },
    { id: 'ScreamOpen', name: 'Scream', value: 'ScreamOpen' },
    { id: 'Serious', name: 'Serious', value: 'Serious' },
    { id: 'Smile', name: 'Smile', value: 'Smile' },
    { id: 'Tongue', name: 'Tongue Out', value: 'Tongue' },
    { id: 'Twinkle', name: 'Twinkle', value: 'Twinkle' },
    { id: 'Vomit', name: 'Vomit', value: 'Vomit' }
  ],

  clothingTypes: [
    { id: 'BlazerShirt', name: 'Blazer Shirt', value: 'BlazerShirt' },
    { id: 'BlazerSweater', name: 'Blazer Sweater', value: 'BlazerSweater' },
    { id: 'CollarSweater', name: 'Collar Sweater', value: 'CollarSweater' },
    { id: 'GraphicShirt', name: 'Graphic Shirt', value: 'GraphicShirt' },
    { id: 'Hoodie', name: 'Hoodie', value: 'Hoodie' },
    { id: 'Overall', name: 'Overall', value: 'Overall' },
    { id: 'ShirtCrewNeck', name: 'Crew Neck', value: 'ShirtCrewNeck' },
    { id: 'ShirtScoopNeck', name: 'Scoop Neck', value: 'ShirtScoopNeck' },
    { id: 'ShirtVNeck', name: 'V-Neck', value: 'ShirtVNeck' }
  ]
};

const DEFAULT_AVATAR = {
  skinColor: 'Light',
  topType: 'LongHairStraight',
  hairColor: 'BrownDark',
  eyeType: 'Happy',
  mouthType: 'Smile',
  clothingType: 'Hoodie'
};

const AvataaarsCreator = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [currentAvatar, setCurrentAvatar] = useState(DEFAULT_AVATAR);
  const [avatarHistory, setAvatarHistory] = useState([DEFAULT_AVATAR]);
  const [activeCategory, setActiveCategory] = useState('skinColor');

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
      newHistory.pop();
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

  // Save avatar
  const saveAvatar = useCallback(() => {
    const avatarData = {
      avatar: currentAvatar,
      timestamp: new Date().toISOString(),
      id: `avataaars_${Date.now()}`
    };

    try {
      const savedAvatars = JSON.parse(localStorage.getItem('savedAvataaars') || '[]');
      savedAvatars.push(avatarData);
      localStorage.setItem('savedAvataaars', JSON.stringify(savedAvatars));
    } catch (error) {
      console.error('Error saving avatar:', error);
    }
    
    console.log('🎨 Avataaars Saved:', avatarData);
    alert('🎉 Your amazing avatar has been saved! 💫');
  }, [currentAvatar]);

  // Download avatar as SVG
  const downloadAvatar = useCallback(() => {
    // This would require additional setup for SVG download
    console.log('📥 Download avatar feature - would implement SVG export');
    alert('📥 Download feature coming soon! Your avatar config is logged to console.');
  }, []);

  const categories = [
    { id: 'skinColor', name: 'Skin', icon: '👤', color: '#FF9800' },
    { id: 'topType', name: 'Hair', icon: '💇', color: '#9C27B0' },
    { id: 'eyeType', name: 'Eyes', icon: '👀', color: '#4CAF50' },
    { id: 'mouthType', name: 'Mouth', icon: '👄', color: '#E91E63' },
    { id: 'clothingType', name: 'Clothes', icon: '👕', color: '#2196F3' }
  ];

  // Option selector component
  const OptionSelector = ({ options, selectedValue, onSelect, showColor = false, columns = 4 }) => (
    <Grid container spacing={1}>
      {options.map((option) => (
        <Grid item xs={12/columns} sm={6/columns} md={12/columns} key={option.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedValue === option.value ? 'contained' : 'outlined'}
              fullWidth
              onClick={() => onSelect(option.value)}
              sx={{
                minHeight: 60,
                borderRadius: '12px',
                textTransform: 'none',
                flexDirection: 'column',
                gap: 0.5,
                fontSize: '11px',
                backgroundColor: selectedValue === option.value ? '#4CAF50' : 'transparent',
                borderColor: showColor && option.color ? option.color : '#ddd',
                color: selectedValue === option.value ? '#fff' : '#333',
                '&:hover': {
                  backgroundColor: '#4CAF50',
                  color: '#fff'
                }
              }}
            >
              {showColor && option.color && (
                <Box
                  sx={{
                    width: 20,
                    height: 20,
                    backgroundColor: option.color,
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    mb: 0.5
                  }}
                />
              )}
              <Typography variant="caption" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                {option.name}
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
      case 'skinColor':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.skinColors}
            selectedValue={currentAvatar.skinColor}
            onSelect={(value) => updateAvatarPart('skinColor', value)}
            columns={3}
          />
        );
      case 'topType':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Hair Style
            </Typography>
            <OptionSelector
              options={AVATAR_OPTIONS.topTypes}
              selectedValue={currentAvatar.topType}
              onSelect={(value) => updateAvatarPart('topType', value)}
              columns={3}
            />
            
            {!currentAvatar.topType.includes('NoHair') && !currentAvatar.topType.includes('Hat') && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Hair Color
                </Typography>
                <OptionSelector
                  options={AVATAR_OPTIONS.hairColors}
                  selectedValue={currentAvatar.hairColor}
                  onSelect={(value) => updateAvatarPart('hairColor', value)}
                  showColor={true}
                  columns={5}
                />
              </Box>
            )}
          </Box>
        );
      case 'eyeType':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.eyeTypes}
            selectedValue={currentAvatar.eyeType}
            onSelect={(value) => updateAvatarPart('eyeType', value)}
            columns={3}
          />
        );
      case 'mouthType':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.mouthTypes}
            selectedValue={currentAvatar.mouthType}
            onSelect={(value) => updateAvatarPart('mouthType', value)}
            columns={3}
          />
        );
      case 'clothingType':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.clothingTypes}
            selectedValue={currentAvatar.clothingType}
            onSelect={(value) => updateAvatarPart('clothingType', value)}
            columns={3}
          />
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
            🎨 Avataaars Creator
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            Create amazing avatars with React Avataaars library! 
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
                      minWidth: 100,
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontWeight: 'bold',
                      backgroundColor: activeCategory === category.id ? category.color : 'transparent',
                      borderColor: 'white',
                      color: activeCategory === category.id ? 'white' : 'white',
                      flexShrink: 0,
                      '&:hover': {
                        backgroundColor: category.color,
                        color: 'white'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: '20px' }}>{category.icon}</span>
                      <span>{category.name}</span>
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
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 3 }}>
                  🌟 Your Avataaars
                </Typography>
                
                <Box
                  sx={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '20px',
                    p: 3,
                    mb: 3,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                  }}
                >
                  <Avatar
                    style={{ width: '250px', height: '250px' }}
                    avatarStyle="Circle"
                    {...currentAvatar}
                  />
                </Box>

                {/* Action Buttons */}
                <Stack direction={isMobile ? 'column' : 'row'} spacing={2} sx={{ width: '100%', maxWidth: 400 }}>
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
                    onClick={downloadAvatar}
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
                    Download
                  </Button>
                  
                  <Button
                    variant="outlined"
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
                  minHeight: '500px'
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
                    maxHeight: '400px',
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

        {/* Avatar Stats */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
            🎯 Avatar Configuration
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ gap: 1 }}>
            <Chip label={`Skin: ${currentAvatar.skinColor}`} color="primary" />
            <Chip label={`Hair: ${AVATAR_OPTIONS.topTypes.find(t => t.value === currentAvatar.topType)?.name}`} color="secondary" />
            <Chip label={`Eyes: ${currentAvatar.eyeType}`} color="success" />
            <Chip label={`Mouth: ${currentAvatar.mouthType}`} color="error" />
            <Chip label={`Clothes: ${AVATAR_OPTIONS.clothingTypes.find(c => c.value === currentAvatar.clothingType)?.name}`} color="info" />
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AvataaarsCreator;
