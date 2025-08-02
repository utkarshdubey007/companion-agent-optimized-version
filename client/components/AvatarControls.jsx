import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Chip,
  Grid,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Face,
  Visibility,
  SentimentSatisfied,
  Checkroom,
  Palette,
  Shuffle,
} from '@mui/icons-material';
import { avatarOptions } from '../utils/avatarOptions.js';

const TabPanel = ({ children, value, index, ...other }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`avatar-tabpanel-${index}`}
    aria-labelledby={`avatar-tab-${index}`}
    {...other}
  >
    {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
  </div>
);

const OptionSelector = ({ label, value, options, onChange, icon }) => (
  <FormControl fullWidth sx={{ mb: 2 }}>
    <InputLabel id={`${label.toLowerCase()}-label`}>{label}</InputLabel>
    <Select
      labelId={`${label.toLowerCase()}-label`}
      value={value}
      label={label}
      onChange={(e) => onChange(e.target.value)}
      startAdornment={icon}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <span>{option.emoji}</span>
            <span>{option.label}</span>
          </Box>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const OptionGrid = ({ options, value, onChange, columns = 4 }) => (
  <Grid container spacing={1}>
    {options.map((option) => (
      <Grid item xs={12 / columns} key={option.value}>
        <Tooltip title={option.label} arrow>
          <Chip
            label={option.emoji}
            variant={value === option.value ? 'filled' : 'outlined'}
            color={value === option.value ? 'primary' : 'default'}
            onClick={() => onChange(option.value)}
            sx={{
              width: '100%',
              fontSize: '1.2rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                boxShadow: 2,
              },
            }}
          />
        </Tooltip>
      </Grid>
    ))}
  </Grid>
);

const AvatarControls = ({ config, onChange }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'dropdown'

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleConfigChange = (key, value) => {
    onChange(key, value);
  };

  const generateRandomSeed = () => {
    const randomWords = ['Happy', 'Sunny', 'Magic', 'Dream', 'Star', 'Cloud', 'River', 'Ocean', 'Forest', 'Mountain'];
    const randomSeed = randomWords[Math.floor(Math.random() * randomWords.length)] + Math.floor(Math.random() * 1000);
    handleConfigChange('seed', randomSeed);
  };

  const tabs = [
    { label: 'Hair', icon: <Face />, key: 'hair', options: avatarOptions.hair },
    { label: 'Eyes', icon: <Visibility />, key: 'eyes', options: avatarOptions.eyes },
    { label: 'Mouth', icon: <SentimentSatisfied />, key: 'mouth', options: avatarOptions.mouth },
    { label: 'Clothes', icon: <Checkroom />, key: 'clothes', options: avatarOptions.clothes },
    { label: 'Accessories', icon: <Palette />, key: 'accessories', options: avatarOptions.accessories },
  ];

  return (
    <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
      {/* Header */}
      <Box sx={{ p: 2, backgroundColor: 'primary.main', color: 'white' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          🎨 Avatar Customizer
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.9 }}>
          Create your unique avatar
        </Typography>
      </Box>

      {/* Seed Input */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
          <TextField
            label="Avatar Seed"
            value={config.seed}
            onChange={(e) => handleConfigChange('seed', e.target.value)}
            size="small"
            fullWidth
            helperText="Change this to generate different base avatars"
          />
          <Tooltip title="Generate Random Seed">
            <IconButton onClick={generateRandomSeed} color="primary">
              <Shuffle />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* View Mode Toggle */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Chip
          label={viewMode === 'grid' ? '🎯 Grid View' : '📋 Dropdown View'}
          onClick={() => setViewMode(viewMode === 'grid' ? 'dropdown' : 'grid')}
          color="primary"
          variant="outlined"
          sx={{ cursor: 'pointer' }}
        />
      </Box>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderBottom: 1, borderColor: 'divider' }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.key}
            label={tab.label}
            icon={tab.icon}
            iconPosition="start"
            id={`avatar-tab-${index}`}
            aria-controls={`avatar-tabpanel-${index}`}
            sx={{ minHeight: 48 }}
          />
        ))}
      </Tabs>

      {/* Tab Panels */}
      <Box sx={{ minHeight: 300 }}>
        {tabs.map((tab, index) => (
          <TabPanel key={tab.key} value={activeTab} index={index}>
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
                Choose {tab.label}
              </Typography>
              
              {viewMode === 'dropdown' ? (
                <OptionSelector
                  label={tab.label}
                  value={config[tab.key]}
                  options={tab.options}
                  onChange={(value) => handleConfigChange(tab.key, value)}
                  icon={tab.icon}
                />
              ) : (
                <OptionGrid
                  options={tab.options}
                  value={config[tab.key]}
                  onChange={(value) => handleConfigChange(tab.key, value)}
                  columns={tab.key === 'hair' ? 3 : 4}
                />
              )}

              {/* Current Selection Info */}
              <Box sx={{ mt: 2, p: 2, backgroundColor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Selected: <strong>
                    {tab.options.find(opt => opt.value === config[tab.key])?.label || 'Unknown'}
                  </strong>
                </Typography>
              </Box>
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Paper>
  );
};

export default AvatarControls;
