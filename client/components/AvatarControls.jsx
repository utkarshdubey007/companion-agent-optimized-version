import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Avatar,
  Chip,
  Collapse,
  IconButton,
  Tooltip,
  Stack
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Face as FaceIcon,
  Style as StyleIcon,
  Checkroom as CheckroomIcon,
  RunningWithErrors as ShoesIcon
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const AvatarControls = ({ activeCategory, currentAvatar, assets, onUpdateAvatar }) => {
  
  // Color picker component for skin tones and hair colors
  const ColorPicker = ({ colors, selectedId, onSelect, title }) => (
    <Box>
      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {colors.map((color) => (
          <Grid item key={color.id}>
            <Tooltip title={color.name} arrow>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  onClick={() => onSelect(color.id)}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: color.color,
                    border: selectedId === color.id ? '3px solid #333' : '2px solid #fff',
                    margin: 0.5,
                    '&:hover': {
                      backgroundColor: color.color,
                      filter: 'brightness(1.1)'
                    }
                  }}
                >
                  {selectedId === color.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      style={{
                        width: 16,
                        height: 16,
                        backgroundColor: '#333',
                        borderRadius: '50%'
                      }}
                    />
                  )}
                </IconButton>
              </motion.div>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Selection grid for faces, hair styles, outfits, shoes
  const SelectionGrid = ({ items, selectedId, onSelect, title, showEmoji = false, showColor = false }) => (
    <Box>
      <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
        {title}
      </Typography>
      <Grid container spacing={1}>
        {items.map((item) => (
          <Grid item xs={6} sm={4} key={item.id}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedId === item.id ? 'contained' : 'outlined'}
                fullWidth
                onClick={() => onSelect(item.id)}
                sx={{
                  minHeight: 60,
                  borderRadius: '12px',
                  textTransform: 'none',
                  flexDirection: 'column',
                  gap: 0.5,
                  backgroundColor: selectedId === item.id ? 
                    (showColor && item.color ? item.color : '#4CAF50') : 
                    'transparent',
                  borderColor: showColor && item.color ? item.color : '#ddd',
                  color: selectedId === item.id ? '#fff' : '#333',
                  '&:hover': {
                    backgroundColor: showColor && item.color ? item.color : '#4CAF50',
                    color: '#fff'
                  }
                }}
              >
                {showEmoji && (
                  <span style={{ fontSize: '24px' }}>{item.emoji}</span>
                )}
                {showColor && item.color && (
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      backgroundColor: item.color,
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      mb: 0.5
                    }}
                  />
                )}
                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>
                  {item.name}
                </Typography>
              </Button>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  // Category-specific controls
  const renderCategoryControls = () => {
    switch (activeCategory) {
      case 'skinTone':
        return (
          <motion.div
            key="skinTone"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ColorPicker
              colors={assets.skinTones}
              selectedId={currentAvatar.skinTone}
              onSelect={(id) => onUpdateAvatar('skinTone', id)}
              title="Choose Your Skin Tone"
            />
          </motion.div>
        );

      case 'face':
        return (
          <motion.div
            key="face"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SelectionGrid
              items={assets.faces}
              selectedId={currentAvatar.face}
              onSelect={(id) => onUpdateAvatar('face', id)}
              title="Pick Your Expression"
              showEmoji={true}
            />
          </motion.div>
        );

      case 'hairStyle':
        return (
          <motion.div
            key="hairStyle"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ mb: 3 }}>
              <SelectionGrid
                items={assets.hairStyles}
                selectedId={currentAvatar.hairStyle}
                onSelect={(id) => onUpdateAvatar('hairStyle', id)}
                title="Choose Hair Style"
              />
            </Box>
            
            {currentAvatar.hairStyle !== 'bald' && (
              <ColorPicker
                colors={assets.hairColors}
                selectedId={currentAvatar.hairColor}
                onSelect={(id) => onUpdateAvatar('hairColor', id)}
                title="Pick Hair Color"
              />
            )}
          </motion.div>
        );

      case 'outfit':
        return (
          <motion.div
            key="outfit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SelectionGrid
              items={assets.outfits}
              selectedId={currentAvatar.outfit}
              onSelect={(id) => onUpdateAvatar('outfit', id)}
              title="Select Your Outfit"
              showColor={true}
            />
          </motion.div>
        );

      case 'shoes':
        return (
          <motion.div
            key="shoes"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SelectionGrid
              items={assets.shoes}
              selectedId={currentAvatar.shoes}
              onSelect={(id) => onUpdateAvatar('shoes', id)}
              title="Pick Your Footwear"
            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  const getCategoryIcon = (category) => {
    const icons = {
      skinTone: <PaletteIcon />,
      face: <FaceIcon />,
      hairStyle: <StyleIcon />,
      outfit: <CheckroomIcon />,
      shoes: <ShoesIcon />
    };
    return icons[category] || <PaletteIcon />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      skinTone: '#FF9800',
      face: '#4CAF50',
      hairStyle: '#9C27B0',
      outfit: '#2196F3',
      shoes: '#FF5722'
    };
    return colors[category] || '#4CAF50';
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        minHeight: { xs: '500px', sm: '600px' },
        position: { xs: 'relative', sm: 'sticky' },
        top: { xs: 'auto', sm: 20 }
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            backgroundColor: getCategoryColor(activeCategory),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            mr: 2
          }}
        >
          {getCategoryIcon(activeCategory)}
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
            Customize
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            {activeCategory === 'skinTone' && 'Skin Tone'}
            {activeCategory === 'face' && 'Face Expression'}
            {activeCategory === 'hairStyle' && 'Hair Style'}
            {activeCategory === 'outfit' && 'Outfit Style'}
            {activeCategory === 'shoes' && 'Footwear'}
          </Typography>
        </Box>
      </Box>

      {/* Controls Content */}
      <Box
        sx={{
          backgroundColor: 'rgba(255,255,255,0.95)',
          borderRadius: '16px',
          p: 2,
          backdropFilter: 'blur(10px)'
        }}
      >
        <AnimatePresence mode="wait">
          {renderCategoryControls()}
        </AnimatePresence>
      </Box>

      {/* Quick Stats */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle2" sx={{ color: 'white', mb: 1, fontWeight: 'bold' }}>
          🎨 Customization Progress
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 0.5 }}>
          <Chip
            size="small"
            label="Skin ✓"
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              fontWeight: 'bold'
            }}
          />
          <Chip
            size="small"
            label="Face ✓"
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              fontWeight: 'bold'
            }}
          />
          <Chip
            size="small"
            label="Hair ✓"
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              fontWeight: 'bold'
            }}
          />
          <Chip
            size="small"
            label="Outfit ✓"
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              fontWeight: 'bold'
            }}
          />
          <Chip
            size="small"
            label="Shoes ✓"
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.2)', 
              color: 'white',
              fontWeight: 'bold'
            }}
          />
        </Stack>
      </Box>

      {/* Fun Facts */}
      <Box sx={{ mt: 3, p: 2, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
        <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 'bold', mb: 1 }}>
          💡 Did you know?
        </Typography>
        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          {activeCategory === 'skinTone' && "Your avatar can represent anyone from around the world! 🌍"}
          {activeCategory === 'face' && "Facial expressions show how you're feeling today! 😊"}
          {activeCategory === 'hairStyle' && "Hair styles can completely change your look! ✨"}
          {activeCategory === 'outfit' && "Different outfits are perfect for different activities! 👕"}
          {activeCategory === 'shoes' && "The right shoes can take you anywhere! 👟"}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AvatarControls;
