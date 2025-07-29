import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Grid,
  Card,
  CardMedia,
  CardContent,
  AppBar,
  Toolbar,
  useTheme,
  useMediaQuery,
  Paper,
  Chip,
  Avatar,
  Link,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  Search as SearchIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const TaleTreeExact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Sample data for content sections based on the exact image
  const latestNews = [
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'We are using my children village'
    },
    {
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
      title: 'Making their dreams'
    },
    {
      image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=400&h=250&fit=crop',
      title: 'Business are going to Forward trip'
    },
    {
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400&h=250&fit=crop',
      title: 'Kids has commented'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'Applying a Curriculum to Forward trip'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'Active WITH EXPERTS'
    },
  ];

  const parentsImages = [
    {
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=250&fit=crop',
      title: 'Create space about at home',
      subtitle: 'July 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1543269664-647912086415?w=400&h=250&fit=crop',
      title: 'Create space about at home',
      subtitle: 'July 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
      title: 'Learn space about at most',
      subtitle: 'July 18, 2024'
    },
  ];

  const educatorsImages = [
    {
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
      title: 'Transform space about at most',
      subtitle: 'Aug 8, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
      title: 'The Different Featured',
      subtitle: 'Aug 8, 2024'
    },
  ];

  const expertsImages = [
    {
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=250&fit=crop',
      title: 'Learn space about at most',
      subtitle: 'Feb 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
      title: 'Create space about at most',
      subtitle: 'Feb 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=250&fit=crop',
      title: 'Create space about at most',
      subtitle: 'Feb 18, 2024'
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* Header */}
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          bgcolor: 'transparent',
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
          position: 'relative'
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(79, 195, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, rgba(255, 193, 7, 0.2) 0%, transparent 50%)
            `,
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '10%',
              left: '10%',
              width: '20px',
              height: '20px',
              background: '#ff6b35',
              borderRadius: '50%',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              top: '20%',
              right: '15%',
              width: '15px',
              height: '15px',
              background: '#4fc3f7',
              borderRadius: '50%',
            }
          }}
        />
        <Toolbar sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                bgcolor: '#4fc3f7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1
              }}
            >
              <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                T
              </Typography>
            </Box>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              TaleTree
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem' }}>
            A New Kind of Curriculum for a New Kind of World
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 50%, #3949ab 100%)',
          minHeight: '80vh',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(79, 195, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 70%, rgba(255, 193, 7, 0.2) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Floating decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '15%',
            left: '5%',
            width: '30px',
            height: '30px',
            background: '#ff6b35',
            borderRadius: '50%',
            opacity: 0.7,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            right: '10%',
            width: '20px',
            height: '20px',
            background: '#4fc3f7',
            borderRadius: '50%',
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '30%',
            left: '15%',
            width: '25px',
            height: '25px',
            background: '#ffc107',
            borderRadius: '50%',
            opacity: 0.6,
          }}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ color: 'white' }}>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.1,
                  }}
                >
                  It's time to spark your kid's creativity
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ 
                    mb: 4, 
                    opacity: 0.9,
                    fontWeight: 400,
                    fontSize: { xs: '1.2rem', md: '1.5rem' }
                  }}
                >
                  with storytelling and playing
                </Typography>
                
                {/* Search Bar */}
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: 500,
                    borderRadius: '30px',
                    mb: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Find your interests"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: { pl: 2, pr: 1 },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            sx={{
                              bgcolor: '#ff6b35',
                              color: 'white',
                              width: 40,
                              height: 40,
                              '&:hover': { bgcolor: '#e55a2b' },
                            }}
                          >
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Paper>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Chip
                    label="All Time most liked lesson"
                    sx={{ 
                      bgcolor: 'rgba(255,255,255,0.2)', 
                      color: 'white',
                      borderRadius: '20px',
                      fontSize: '0.8rem'
                    }}
                  />
                  <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.85rem' }}>
                    3.2k lessons
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  minHeight: 400,
                }}
              >
                {/* Character illustration container */}
                <Box
                  sx={{
                    position: 'relative',
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                  }}
                >
                  {/* Green hills background */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '60%',
                      background: 'linear-gradient(to top, #4caf50, #8bc34a)',
                      borderRadius: '50% 50% 0 0',
                    }}
                  />
                  
                  {/* Character */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '40%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 120,
                      height: 120,
                      bgcolor: '#4fc3f7',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '4rem',
                      zIndex: 2,
                    }}
                  >
                    🐰
                  </Box>

                  {/* Speech bubble */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10%',
                      right: '5%',
                      bgcolor: '#4fc3f7',
                      color: 'white',
                      p: 2,
                      borderRadius: '20px',
                      maxWidth: 200,
                      fontSize: '0.8rem',
                      zIndex: 3,
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '30px',
                        width: 0,
                        height: 0,
                        borderLeft: '10px solid transparent',
                        borderRight: '10px solid transparent',
                        borderTop: '10px solid #4fc3f7',
                      },
                    }}
                  >
                    It's time to spark your kid's creativity and storytelling and playing!
                  </Box>

                  {/* Decorative trees */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '10%',
                      left: '10%',
                      width: 40,
                      height: 60,
                      bgcolor: '#4caf50',
                      borderRadius: '50% 50% 0 0',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -20,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 8,
                        height: 20,
                        bgcolor: '#8d6e63',
                      }
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '15%',
                      right: '15%',
                      width: 30,
                      height: 50,
                      bgcolor: '#66bb6a',
                      borderRadius: '50% 50% 0 0',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        bottom: -15,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 6,
                        height: 15,
                        bgcolor: '#8d6e63',
                      }
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Creativity Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: { xs: '1.8rem', md: '2.2rem' }
            }}
          >
            Creativity and kindness matter more than ever in the age of{' '}
            <Box component="span" sx={{ 
              bgcolor: '#4fc3f7', 
              color: 'white', 
              px: 1, 
              py: 0.5, 
              borderRadius: 1,
              display: 'inline-block'
            }}>
              AI
            </Box>
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
            TaleTree helps your child grow both — and get rewarded for it.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop"
              alt="Children creativity"
              sx={{
                width: '100%',
                height: 350,
                objectFit: 'cover',
                borderRadius: 3,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
              Introducing TaleTree
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, fontSize: '1.1rem' }}>
              A revolutionary platform that combines storytelling, creativity, and learning 
              to help children develop essential skills for the future. Through interactive 
              narratives and engaging activities, kids learn to think creatively, express 
              themselves, and build emotional intelligence.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Latest News Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              Latest news
            </Typography>
            <Button 
              sx={{ 
                color: '#4fc3f7', 
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              View all
            </Button>
          </Box>
          <Grid container spacing={3}>
            {latestNews.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    cursor: 'pointer', 
                    borderRadius: 3,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    '&:hover': { 
                      transform: 'translateY(-4px)', 
                      transition: 'transform 0.3s',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    } 
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', lineHeight: 1.4 }}>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Parents Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            Parents
          </Typography>
          <Button 
            sx={{ 
              color: '#4fc3f7', 
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            View all
          </Button>
        </Box>
        <Grid container spacing={3}>
          {parentsImages.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    transition: 'transform 0.3s',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  } 
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* TaleTree for Educators Section */}
      <Box sx={{ bgcolor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              TaleTree for Educators
            </Typography>
            <Button 
              sx={{ 
                color: '#4fc3f7', 
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 'bold'
              }}
            >
              View all
            </Button>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    transition: 'transform 0.3s',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  } 
                }}
              >
                <CardMedia
                  component="img"
                  height="280"
                  image={educatorsImages[0].image}
                  alt={educatorsImages[0].title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {educatorsImages[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {educatorsImages[0].subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  minHeight: 400,
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  borderRadius: 3,
                  p: 4,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
                  The TaleTree Method
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, opacity: 0.9, fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Our innovative approach combines proven educational methodologies 
                  with cutting-edge technology to create engaging learning experiences 
                  that foster creativity and critical thinking.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ 
                    bgcolor: '#4fc3f7', 
                    alignSelf: 'flex-start',
                    px: 3,
                    py: 1.5,
                    borderRadius: '25px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 'bold'
                  }}
                >
                  Learn More
                </Button>
                
                {/* Decorative circles */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -30,
                    right: -30,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: 'rgba(79, 195, 247, 0.1)',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: -20,
                    left: -20,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 107, 53, 0.1)',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Experts and Friends Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
            Experts and Friends
          </Typography>
          <Button 
            sx={{ 
              color: '#4fc3f7', 
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 'bold'
            }}
          >
            View all
          </Button>
        </Box>
        <Grid container spacing={3}>
          {expertsImages.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  '&:hover': { 
                    transform: 'translateY(-4px)', 
                    transition: 'transform 0.3s',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                  } 
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: '#4fc3f7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    T
                  </Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>
                  TaleTree Inc.
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8, fontSize: '0.9rem' }}>
                10 E 29th St, Apt 42B, New York, NY 10016 USA
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: '#4fc3f7', p: 1 }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7', p: 1 }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7', p: 1 }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7', p: 1 }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Our Story
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Careers
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Team
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Support
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Getting Started
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Help Center
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Server Status
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                  Bug Reports
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Follow us
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2, fontSize: '0.9rem' }}>
                Stay updated with our latest news and features
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  sx={{
                    flexGrow: 1,
                    minWidth: 200,
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white',
                      borderRadius: '25px',
                      '& fieldset': { borderColor: 'transparent' },
                    },
                  }}
                />
                <Button 
                  variant="contained" 
                  sx={{ 
                    bgcolor: '#4fc3f7',
                    borderRadius: '25px',
                    px: 3,
                    textTransform: 'none'
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box 
            sx={{ 
              mt: 6, 
              pt: 3, 
              borderTop: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: 2 
            }}
          >
            <Typography variant="body2" sx={{ opacity: 0.6, fontSize: '0.8rem' }}>
              © 2024 TaleTree Inc. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6, fontSize: '0.8rem' }}>
              Email: contact@taletree.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TaleTreeExact;
