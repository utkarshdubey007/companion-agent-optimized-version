import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Chip,
  Stack
} from '@mui/material';
import { motion } from 'framer-motion';

// Mock SVG components for avatar parts
const AvatarSVGParts = {
  // Base body shape
  Body: ({ skinTone, assets }) => {
    const skinColor = assets.skinTones.find(s => s.id === skinTone)?.color || '#FDBCB4';
    return (
      <g id="body">
        {/* Head */}
        <ellipse
          cx="150"
          cy="120"
          rx="65"
          ry="75"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        {/* Neck */}
        <rect
          x="135"
          y="180"
          width="30"
          height="25"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        {/* Body */}
        <ellipse
          cx="150"
          cy="250"
          rx="55"
          ry="70"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        {/* Arms */}
        <ellipse
          cx="90"
          cy="230"
          rx="20"
          ry="50"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        <ellipse
          cx="210"
          cy="230"
          rx="20"
          ry="50"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        {/* Legs */}
        <ellipse
          cx="125"
          cy="350"
          rx="18"
          ry="55"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
        <ellipse
          cx="175"
          cy="350"
          rx="18"
          ry="55"
          fill={skinColor}
          stroke="#333"
          strokeWidth="2"
        />
      </g>
    );
  },

  // Face expressions
  Face: ({ face, skinTone, assets }) => {
    const expressions = {
      happy: (
        <g id="face-happy">
          {/* Eyes */}
          <circle cx="130" cy="105" r="4" fill="#333" />
          <circle cx="170" cy="105" r="4" fill="#333" />
          {/* Smile */}
          <path
            d="M 130 140 Q 150 155 170 140"
            stroke="#333"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ),
      excited: (
        <g id="face-excited">
          {/* Eyes */}
          <circle cx="130" cy="105" r="5" fill="#333" />
          <circle cx="170" cy="105" r="5" fill="#333" />
          {/* Big smile */}
          <path
            d="M 125 140 Q 150 160 175 140"
            stroke="#333"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          {/* Cheeks */}
          <circle cx="110" cy="125" r="8" fill="#FF69B4" opacity="0.5" />
          <circle cx="190" cy="125" r="8" fill="#FF69B4" opacity="0.5" />
        </g>
      ),
      cool: (
        <g id="face-cool">
          {/* Sunglasses */}
          <rect x="120" y="95" width="60" height="20" rx="10" fill="#333" />
          <circle cx="135" cy="105" r="12" fill="#333" />
          <circle cx="165" cy="105" r="12" fill="#333" />
          {/* Slight smile */}
          <path
            d="M 140 140 Q 150 145 160 140"
            stroke="#333"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ),
      wink: (
        <g id="face-wink">
          {/* Left eye (winking) */}
          <path
            d="M 125 105 Q 135 102 135 105"
            stroke="#333"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Right eye */}
          <circle cx="170" cy="105" r="4" fill="#333" />
          {/* Smile */}
          <path
            d="M 130 140 Q 150 155 170 140"
            stroke="#333"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      ),
      shy: (
        <g id="face-shy">
          {/* Eyes looking down */}
          <circle cx="130" cy="108" r="3" fill="#333" />
          <circle cx="170" cy="108" r="3" fill="#333" />
          {/* Small smile */}
          <path
            d="M 140 140 Q 150 148 160 140"
            stroke="#333"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Blush */}
          <circle cx="115" cy="125" r="6" fill="#FF69B4" opacity="0.4" />
          <circle cx="185" cy="125" r="6" fill="#FF69B4" opacity="0.4" />
        </g>
      ),
      cheerful: (
        <g id="face-cheerful">
          {/* Eyes */}
          <circle cx="130" cy="105" r="4" fill="#333" />
          <circle cx="170" cy="105" r="4" fill="#333" />
          {/* Open mouth smile */}
          <ellipse cx="150" cy="145" rx="12" ry="8" fill="#333" />
          <ellipse cx="150" cy="145" rx="8" ry="5" fill="#FFF" />
        </g>
      )
    };
    
    return expressions[face] || expressions.happy;
  },

  // Hair styles
  Hair: ({ hairStyle, hairColor, assets }) => {
    const color = assets.hairColors.find(h => h.id === hairColor)?.color || '#8B4513';
    
    const styles = {
      short: (
        <g id="hair-short">
          <path
            d="M 85 120 Q 150 40 215 120 Q 200 80 150 75 Q 100 80 85 120"
            fill={color}
            stroke="#333"
            strokeWidth="2"
          />
        </g>
      ),
      long: (
        <g id="hair-long">
          <path
            d="M 85 120 Q 150 40 215 120 Q 200 80 150 75 Q 100 80 85 120"
            fill={color}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Long sides */}
          <ellipse cx="85" cy="160" rx="15" ry="40" fill={color} stroke="#333" strokeWidth="2" />
          <ellipse cx="215" cy="160" rx="15" ry="40" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      curly: (
        <g id="hair-curly">
          {/* Curly top */}
          <circle cx="130" cy="80" r="20" fill={color} stroke="#333" strokeWidth="2" />
          <circle cx="150" cy="70" r="22" fill={color} stroke="#333" strokeWidth="2" />
          <circle cx="170" cy="80" r="20" fill={color} stroke="#333" strokeWidth="2" />
          <circle cx="110" cy="100" r="18" fill={color} stroke="#333" strokeWidth="2" />
          <circle cx="190" cy="100" r="18" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      ponytail: (
        <g id="hair-ponytail">
          <path
            d="M 85 120 Q 150 40 215 120 Q 200 80 150 75 Q 100 80 85 120"
            fill={color}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Ponytail */}
          <ellipse cx="220" cy="140" rx="12" ry="30" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      braids: (
        <g id="hair-braids">
          <path
            d="M 85 120 Q 150 40 215 120 Q 200 80 150 75 Q 100 80 85 120"
            fill={color}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Braids */}
          <ellipse cx="70" cy="170" rx="8" ry="35" fill={color} stroke="#333" strokeWidth="2" />
          <ellipse cx="230" cy="170" rx="8" ry="35" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      bald: null
    };
    
    return styles[hairStyle];
  },

  // Outfit styles
  Outfit: ({ outfit, assets }) => {
    const color = assets.outfits.find(o => o.id === outfit)?.color || '#4CAF50';
    
    const outfits = {
      casual: (
        <g id="outfit-casual">
          {/* T-shirt */}
          <ellipse cx="150" cy="240" rx="45" ry="55" fill={color} stroke="#333" strokeWidth="2" />
          {/* Pants */}
          <rect x="120" y="285" width="60" height="70" fill="#4169E1" stroke="#333" strokeWidth="2" />
        </g>
      ),
      formal: (
        <g id="outfit-formal">
          {/* Shirt */}
          <ellipse cx="150" cy="240" rx="45" ry="55" fill="#FFF" stroke="#333" strokeWidth="2" />
          {/* Suit jacket */}
          <path
            d="M 105 200 L 195 200 L 190 290 L 110 290 Z"
            fill={color}
            stroke="#333"
            strokeWidth="2"
          />
          {/* Tie */}
          <polygon
            points="150,200 145,220 155,220 150,260 145,260"
            fill="#DC143C"
            stroke="#333"
            strokeWidth="1"
          />
        </g>
      ),
      sporty: (
        <g id="outfit-sporty">
          {/* Sports jersey */}
          <ellipse cx="150" cy="240" rx="45" ry="55" fill={color} stroke="#333" strokeWidth="2" />
          <text x="150" y="250" textAnchor="middle" fill="#FFF" fontSize="20" fontWeight="bold">7</text>
          {/* Shorts */}
          <rect x="125" y="285" width="50" height="40" fill="#333" stroke="#333" strokeWidth="2" />
        </g>
      ),
      party: (
        <g id="outfit-party">
          {/* Dress/fancy top */}
          <ellipse cx="150" cy="250" rx="50" ry="70" fill={color} stroke="#333" strokeWidth="2" />
          {/* Sparkles */}
          <circle cx="130" cy="230" r="2" fill="#FFD700" />
          <circle cx="170" cy="240" r="2" fill="#FFD700" />
          <circle cx="140" cy="270" r="2" fill="#FFD700" />
        </g>
      ),
      school: (
        <g id="outfit-school">
          {/* School uniform */}
          <ellipse cx="150" cy="240" rx="45" ry="55" fill="#FFF" stroke="#333" strokeWidth="2" />
          <rect x="120" y="285" width="60" height="70" fill={color} stroke="#333" strokeWidth="2" />
          {/* School badge */}
          <circle cx="130" cy="220" r="8" fill="#FFD700" stroke="#333" strokeWidth="1" />
        </g>
      ),
      summer: (
        <g id="outfit-summer">
          {/* Tank top */}
          <ellipse cx="150" cy="240" rx="40" ry="50" fill={color} stroke="#333" strokeWidth="2" />
          {/* Shorts */}
          <rect x="125" y="280" width="50" height="35" fill="#FF6347" stroke="#333" strokeWidth="2" />
        </g>
      )
    };
    
    return outfits[outfit] || outfits.casual;
  },

  // Shoe styles
  Shoes: ({ shoes, assets }) => {
    const color = assets.shoes.find(s => s.id === shoes)?.color || '#FFFFFF';
    
    const shoeStyles = {
      sneakers: (
        <g id="shoes-sneakers">
          <ellipse cx="125" cy="405" rx="25" ry="12" fill={color} stroke="#333" strokeWidth="2" />
          <ellipse cx="175" cy="405" rx="25" ry="12" fill={color} stroke="#333" strokeWidth="2" />
          {/* Laces */}
          <line x1="115" y1="400" x2="135" y2="400" stroke="#333" strokeWidth="1" />
          <line x1="165" y1="400" x2="185" y2="400" stroke="#333" strokeWidth="1" />
        </g>
      ),
      boots: (
        <g id="shoes-boots">
          <rect x="105" y="390" width="40" height="25" fill={color} stroke="#333" strokeWidth="2" />
          <rect x="155" y="390" width="40" height="25" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      sandals: (
        <g id="shoes-sandals">
          <ellipse cx="125" cy="405" rx="20" ry="8" fill={color} stroke="#333" strokeWidth="2" />
          <ellipse cx="175" cy="405" rx="20" ry="8" fill={color} stroke="#333" strokeWidth="2" />
          {/* Straps */}
          <line x1="115" y1="405" x2="135" y2="405" stroke="#8B4513" strokeWidth="3" />
          <line x1="165" y1="405" x2="185" y2="405" stroke="#8B4513" strokeWidth="3" />
        </g>
      ),
      'dress-shoes': (
        <g id="shoes-dress">
          <ellipse cx="125" cy="405" rx="22" ry="10" fill={color} stroke="#333" strokeWidth="2" />
          <ellipse cx="175" cy="405" rx="22" ry="10" fill={color} stroke="#333" strokeWidth="2" />
        </g>
      ),
      barefoot: null
    };
    
    return shoeStyles[shoes];
  }
};

const AvatarPreview = ({ avatar, assets }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
        minHeight: { xs: '500px', sm: '600px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
          mb: 3
        }}
      >
        🌟 Your Avatar Preview
      </Typography>

      {/* Avatar SVG Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          padding: '20px',
          marginBottom: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
      >
        <svg
          width="300"
          height="420"
          viewBox="0 0 300 420"
          style={{
            background: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
            borderRadius: '15px'
          }}
        >
          {/* Background decorations */}
          <defs>
            <pattern id="stars" patternUnits="userSpaceOnUse" width="50" height="50">
              <circle cx="25" cy="25" r="2" fill="#FFF" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stars)" />
          
          {/* Avatar layers - order matters! */}
          <AvatarSVGParts.Body skinTone={avatar.skinTone} assets={assets} />
          <AvatarSVGParts.Outfit outfit={avatar.outfit} assets={assets} />
          <AvatarSVGParts.Hair hairStyle={avatar.hairStyle} hairColor={avatar.hairColor} assets={assets} />
          <AvatarSVGParts.Face face={avatar.face} skinTone={avatar.skinTone} assets={assets} />
          <AvatarSVGParts.Shoes shoes={avatar.shoes} assets={assets} />
        </svg>
      </motion.div>

      {/* Avatar Info */}
      <Box sx={{ textAlign: 'center', width: '100%' }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Avatar Details
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" sx={{ gap: 1 }}>
          <Chip
            label={`Skin: ${assets.skinTones.find(s => s.id === avatar.skinTone)?.name}`}
            size="small"
            sx={{ backgroundColor: assets.skinTones.find(s => s.id === avatar.skinTone)?.color, color: '#333' }}
          />
          <Chip
            label={`Face: ${assets.faces.find(f => f.id === avatar.face)?.name}`}
            size="small"
            color="primary"
          />
          <Chip
            label={`Hair: ${assets.hairStyles.find(h => h.id === avatar.hairStyle)?.name}`}
            size="small"
            sx={{ backgroundColor: assets.hairColors.find(h => h.id === avatar.hairColor)?.color, color: '#FFF' }}
          />
          <Chip
            label={`Outfit: ${assets.outfits.find(o => o.id === avatar.outfit)?.name}`}
            size="small"
            sx={{ backgroundColor: assets.outfits.find(o => o.id === avatar.outfit)?.color, color: '#FFF' }}
          />
          <Chip
            label={`Shoes: ${assets.shoes.find(s => s.id === avatar.shoes)?.name}`}
            size="small"
            color="secondary"
          />
        </Stack>
      </Box>
    </Paper>
  );
};

export default AvatarPreview;
