import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Chip,
  Stack,
} from '@mui/material';
import { AutoAwesome, Palette, GetApp, Save } from '@mui/icons-material';
import AvatarEditor from '../components/AvatarEditor.jsx';

const AvatarCreatorDemo = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          py: 4,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
            }}
          >
            🎨 Avatar Creator
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              mb: 3,
            }}
          >
            Create your unique avatar with endless customization options
          </Typography>
          
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <Chip
              icon={<AutoAwesome />}
              label="Live Preview"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Chip
              icon={<Palette />}
              label="1M+ Combinations"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Chip
              icon={<GetApp />}
              label="PNG Export"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            />
            <Chip
              icon={<Save />}
              label="Auto Save"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}
            />
          </Stack>
        </Container>
      </Box>

      {/* Features Info */}
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            border: '1px solid rgba(255, 152, 0, 0.2)',
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            ✨ How to Use
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={3}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" paragraph>
                <strong>1. Customize:</strong> Use the tabs to modify hair, eyes, mouth, clothes, and accessories
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" paragraph>
                <strong>2. Preview:</strong> See your avatar update in real-time as you make changes
              </Typography>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body1" paragraph>
                <strong>3. Export:</strong> Download your avatar as PNG or save for later editing
              </Typography>
            </Box>
          </Stack>
        </Paper>
      </Container>

      {/* Main Avatar Editor */}
      <AvatarEditor />

      {/* Footer Info */}
      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#f1f5f9' }}>
        <Container maxWidth="md">
          <Typography variant="body2" color="text.secondary" paragraph>
            Built with React + MUI + Dicebear • Responsive Design • LocalStorage Persistence
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Perfect for kids and adults who love creativity! 🌟
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default AvatarCreatorDemo;
