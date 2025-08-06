import React, { useState, useCallback } from 'react';
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
  useMediaQuery
} from '@mui/material';
import {
  Save as SaveIcon,
  Undo as UndoIcon,
  Refresh as ResetIcon,
  Download as DownloadIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

// Avatar SVG Component (custom built to avoid library issues)
const CustomAvatar = ({ config }) => {
  const { skinColor, hairStyle, hairColor, eyeType, mouthType, clothingType } = config;
  
  // Color mappings
  const skinColors = {
    Light: '#FDBCB4',
    Yellow: '#F1C27D', 
    Pale: '#FFDCB5',
    Tanned: '#E0AC69',
    Brown: '#C68642',
    DarkBrown: '#8D5524',
    Black: '#654321'
  };

  const hairColors = {
    Auburn: '#A55728',
    Black: '#2C1B18',
    Blonde: '#B58143',
    BlondeGolden: '#D6B370',
    Brown: '#724133',
    BrownDark: '#4A312C',
    PastelPink: '#F59797',
    Platinum: '#ECDCBF',
    Red: '#C93305',
    SilverGray: '#E8E1E1'
  };

  const clothingColors = {
    BlazerShirt: '#3F51B5',
    BlazerSweater: '#E91E63',
    CollarSweater: '#FF9800',
    GraphicShirt: '#4CAF50',
    Hoodie: '#9C27B0',
    Overall: '#607D8B',
    ShirtCrewNeck: '#2196F3',
    ShirtScoopNeck: '#FF5722',
    ShirtVNeck: '#795548'
  };

  return (
    <svg width="200" height="280" viewBox="0 0 200 280" style={{ background: '#e3f2fd', borderRadius: '50%' }}>
      {/* Body */}
      <ellipse cx="100" cy="220" rx="60" ry="50" fill={skinColors[skinColor]} stroke="#333" strokeWidth="2"/>
      
      {/* Head */}
      <circle cx="100" cy="100" r="50" fill={skinColors[skinColor]} stroke="#333" strokeWidth="2"/>
      
      {/* Hair */}
      {hairStyle !== 'NoHair' && (
        <g>
          {hairStyle === 'LongHairStraight' && (
            <path 
              d="M 50 100 Q 100 40 150 100 Q 140 70 100 65 Q 60 70 50 100 L 45 130 Q 50 150 60 140 Q 90 130 100 130 Q 110 130 140 140 Q 150 150 155 130 L 150 100" 
              fill={hairColors[hairColor]} 
              stroke="#333" 
              strokeWidth="2"
            />
          )}
          {hairStyle === 'ShortHairShortFlat' && (
            <path 
              d="M 50 100 Q 100 40 150 100 Q 140 70 100 65 Q 60 70 50 100" 
              fill={hairColors[hairColor]} 
              stroke="#333" 
              strokeWidth="2"
            />
          )}
          {hairStyle === 'LongHairCurly' && (
            <g>
              <circle cx="70" cy="80" r="15" fill={hairColors[hairColor]} stroke="#333" strokeWidth="2"/>
              <circle cx="100" cy="70" r="18" fill={hairColors[hairColor]} stroke="#333" strokeWidth="2"/>
              <circle cx="130" cy="80" r="15" fill={hairColors[hairColor]} stroke="#333" strokeWidth="2"/>
              <circle cx="85" cy="95" r="12" fill={hairColors[hairColor]} stroke="#333" strokeWidth="2"/>
              <circle cx="115" cy="95" r="12" fill={hairColors[hairColor]} stroke="#333" strokeWidth="2"/>
            </g>
          )}
          {(hairStyle === 'Hat' || hairStyle === 'WinterHat1') && (
            <ellipse cx="100" cy="80" rx="45" ry="25" fill="#FF5722" stroke="#333" strokeWidth="2"/>
          )}
        </g>
      )}
      
      {/* Eyes */}
      <g>
        {eyeType === 'Happy' && (
          <>
            <path d="M 80 95 Q 85 90 90 95" stroke="#333" strokeWidth="3" fill="none"/>
            <path d="M 110 95 Q 115 90 120 95" stroke="#333" strokeWidth="3" fill="none"/>
          </>
        )}
        {eyeType === 'Default' && (
          <>
            <circle cx="85" cy="95" r="3" fill="#333"/>
            <circle cx="115" cy="95" r="3" fill="#333"/>
          </>
        )}
        {eyeType === 'Surprised' && (
          <>
            <circle cx="85" cy="95" r="5" fill="#333"/>
            <circle cx="115" cy="95" r="5" fill="#333"/>
          </>
        )}
        {eyeType === 'Wink' && (
          <>
            <path d="M 80 95 Q 85 92 90 95" stroke="#333" strokeWidth="3" fill="none"/>
            <circle cx="115" cy="95" r="3" fill="#333"/>
          </>
        )}
        {eyeType === 'Hearts' && (
          <>
            <text x="85" y="100" textAnchor="middle" fontSize="12" fill="#E91E63">♥</text>
            <text x="115" y="100" textAnchor="middle" fontSize="12" fill="#E91E63">♥</text>
          </>
        )}
      </g>
      
      {/* Mouth */}
      <g>
        {mouthType === 'Smile' && (
          <path d="M 85 115 Q 100 125 115 115" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>
        )}
        {mouthType === 'Default' && (
          <ellipse cx="100" cy="115" rx="8" ry="3" fill="#333"/>
        )}
        {mouthType === 'Surprised' && (
          <ellipse cx="100" cy="115" rx="5" ry="8" fill="#333"/>
        )}
        {mouthType === 'Sad' && (
          <path d="M 85 120 Q 100 110 115 120" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>
        )}
        {mouthType === 'Tongue' && (
          <>
            <path d="M 85 115 Q 100 125 115 115" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="100" cy="122" rx="6" ry="4" fill="#FF69B4"/>
          </>
        )}
      </g>
      
      {/* Clothing */}
      <g>
        {clothingType === 'Hoodie' && (
          <rect x="40" y="170" width="120" height="80" rx="20" fill={clothingColors[clothingType]} stroke="#333" strokeWidth="2"/>
        )}
        {clothingType === 'GraphicShirt' && (
          <>
            <rect x="40" y="170" width="120" height="80" rx="10" fill={clothingColors[clothingType]} stroke="#333" strokeWidth="2"/>
            <text x="100" y="210" textAnchor="middle" fontSize="20" fill="#FFF" fontWeight="bold">★</text>
          </>
        )}
        {clothingType === 'BlazerShirt' && (
          <>
            <rect x="40" y="170" width="120" height="80" rx="10" fill="#FFF" stroke="#333" strokeWidth="2"/>
            <rect x="35" y="175" width="130" height="75" rx="15" fill={clothingColors[clothingType]} stroke="#333" strokeWidth="2" fillOpacity="0.8"/>
          </>
        )}
        {(clothingType === 'ShirtCrewNeck' || clothingType === 'ShirtVNeck') && (
          <rect x="40" y="170" width="120" height="80" rx="10" fill={clothingColors[clothingType]} stroke="#333" strokeWidth="2"/>
        )}
      </g>
    </svg>
  );
};

// Avatar configuration options
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
  
  hairStyles: [
    { id: 'NoHair', name: 'Bald', value: 'NoHair' },
    { id: 'LongHairStraight', name: 'Long Straight', value: 'LongHairStraight' },
    { id: 'ShortHairShortFlat', name: 'Short Flat', value: 'ShortHairShortFlat' },
    { id: 'LongHairCurly', name: 'Curly', value: 'LongHairCurly' },
    { id: 'Hat', name: 'Hat', value: 'Hat' },
    { id: 'WinterHat1', name: 'Winter Hat', value: 'WinterHat1' }
  ],

  hairColors: [
    { id: 'Black', name: 'Black', value: 'Black', color: '#2C1B18' },
    { id: 'Brown', name: 'Brown', value: 'Brown', color: '#724133' },
    { id: 'BrownDark', name: 'Dark Brown', value: 'BrownDark', color: '#4A312C' },
    { id: 'Blonde', name: 'Blonde', value: 'Blonde', color: '#B58143' },
    { id: 'Red', name: 'Red', value: 'Red', color: '#C93305' },
    { id: 'PastelPink', name: 'Pink', value: 'PastelPink', color: '#F59797' }
  ],

  eyeTypes: [
    { id: 'Default', name: 'Default', value: 'Default' },
    { id: 'Happy', name: 'Happy', value: 'Happy' },
    { id: 'Surprised', name: 'Surprised', value: 'Surprised' },
    { id: 'Wink', name: 'Wink', value: 'Wink' },
    { id: 'Hearts', name: 'Hearts', value: 'Hearts' }
  ],

  mouthTypes: [
    { id: 'Default', name: 'Default', value: 'Default' },
    { id: 'Smile', name: 'Smile', value: 'Smile' },
    { id: 'Surprised', name: 'Surprised', value: 'Surprised' },
    { id: 'Sad', name: 'Sad', value: 'Sad' },
    { id: 'Tongue', name: 'Tongue Out', value: 'Tongue' }
  ],

  clothingTypes: [
    { id: 'Hoodie', name: 'Hoodie', value: 'Hoodie' },
    { id: 'GraphicShirt', name: 'Graphic Shirt', value: 'GraphicShirt' },
    { id: 'BlazerShirt', name: 'Blazer', value: 'BlazerShirt' },
    { id: 'ShirtCrewNeck', name: 'Crew Neck', value: 'ShirtCrewNeck' },
    { id: 'ShirtVNeck', name: 'V-Neck', value: 'ShirtVNeck' }
  ]
};

const DEFAULT_AVATAR = {
  skinColor: 'Light',
  hairStyle: 'LongHairStraight',
  hairColor: 'BrownDark',
  eyeType: 'Happy',
  mouthType: 'Smile',
  clothingType: 'Hoodie'
};

const AvataaarsCreatorFixed = () => {
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
      id: `avatar_${Date.now()}`
    };

    try {
      const savedAvatars = JSON.parse(localStorage.getItem('savedAvatars') || '[]');
      savedAvatars.push(avatarData);
      localStorage.setItem('savedAvatars', JSON.stringify(savedAvatars));
      console.log('🎨 Avatar Saved:', avatarData);
      alert('🎉 Avatar saved successfully!');
    } catch (error) {
      console.error('Error saving avatar:', error);
      alert('❌ Error saving avatar');
    }
  }, [currentAvatar]);

  const categories = [
    { id: 'skinColor', name: 'Skin', icon: '👤', color: '#FF9800' },
    { id: 'hairStyle', name: 'Hair', icon: '💇', color: '#9C27B0' },
    { id: 'eyeType', name: 'Eyes', icon: '👀', color: '#4CAF50' },
    { id: 'mouthType', name: 'Mouth', icon: '👄', color: '#E91E63' },
    { id: 'clothingType', name: 'Clothes', icon: '👕', color: '#2196F3' }
  ];

  // Option selector component
  const OptionSelector = ({ options, selectedValue, onSelect, showColor = false, columns = 3 }) => (
    <Grid container spacing={1}>
      {options.map((option) => (
        <Grid item xs={12/columns} key={option.id}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedValue === option.value ? 'contained' : 'outlined'}
              fullWidth
              onClick={() => onSelect(option.value)}
              sx={{
                minHeight: 50,
                borderRadius: '12px',
                textTransform: 'none',
                flexDirection: 'column',
                gap: 0.5,
                fontSize: '10px',
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
                    width: 16,
                    height: 16,
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
          />
        );
      case 'hairStyle':
        return (
          <Box>
            <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Hair Style
            </Typography>
            <OptionSelector
              options={AVATAR_OPTIONS.hairStyles}
              selectedValue={currentAvatar.hairStyle}
              onSelect={(value) => updateAvatarPart('hairStyle', value)}
            />
            
            {currentAvatar.hairStyle !== 'NoHair' && (
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
                  Hair Color
                </Typography>
                <OptionSelector
                  options={AVATAR_OPTIONS.hairColors}
                  selectedValue={currentAvatar.hairColor}
                  onSelect={(value) => updateAvatarPart('hairColor', value)}
                  showColor={true}
                  columns={3}
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
          />
        );
      case 'mouthType':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.mouthTypes}
            selectedValue={currentAvatar.mouthType}
            onSelect={(value) => updateAvatarPart('mouthType', value)}
          />
        );
      case 'clothingType':
        return (
          <OptionSelector
            options={AVATAR_OPTIONS.clothingTypes}
            selectedValue={currentAvatar.clothingType}
            onSelect={(value) => updateAvatarPart('clothingType', value)}
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
            🎨 Avatar Creator
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 1 }}>
            Create your perfect avatar! Custom built and working perfectly! 
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
                      color: 'white',
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
                  🌟 Your Avatar
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
                  <CustomAvatar config={currentAvatar} />
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
            <Chip label={`Hair: ${AVATAR_OPTIONS.hairStyles.find(h => h.value === currentAvatar.hairStyle)?.name}`} color="secondary" />
            <Chip label={`Eyes: ${currentAvatar.eyeType}`} color="success" />
            <Chip label={`Mouth: ${currentAvatar.mouthType}`} color="error" />
            <Chip label={`Clothes: ${AVATAR_OPTIONS.clothingTypes.find(c => c.value === currentAvatar.clothingType)?.name}`} color="info" />
          </Stack>
        </Box>
      </motion.div>
    </Container>
  );
};

export default AvataaarsCreatorFixed;
