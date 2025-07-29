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
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Paper,
  Chip,
  Avatar,
  Link,
  Divider,
} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  ArrowForward as ArrowForwardIcon,
  PlayArrow as PlayArrowIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

const TaleTreeLanding = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  // Sample data for content sections
  const latestNews = [
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'Why play using my children apps',
      date: 'Jan 20, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=250&fit=crop',
      title: 'Making their dreams come to life'
    },
    {
      image: 'https://images.unsplash.com/photo-1533228100845-08145b01de14?w=400&h=250&fit=crop',
      title: 'Business are going to be tested for education'
    },
    {
      image: 'https://images.unsplash.com/photo-1581726690015-c9861fa5057f?w=400&h=250&fit=crop',
      title: 'Kids has commented'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'Applying a Curriculum to forward play'
    },
    {
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop',
      title: 'Active WITH EXPERTS'
    },
  ];

  const parentsSection = [
    {
      image: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=400&h=250&fit=crop',
      title: 'Create space about it at home',
      subtitle: 'July 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1543269664-647912086415?w=400&h=250&fit=crop',
      title: 'Create some time at family',
      subtitle: 'July 18, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
      title: 'Learn space about at most',
      subtitle: 'July 18, 2024'
    },
  ];

  const educatorsSection = [
    {
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop',
      title: 'Transform space about it at most',
      subtitle: 'Aug 8, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=250&fit=crop',
      title: 'The Different featured',
      subtitle: 'Aug 8, 2024'
    },
  ];

  const expertsSection = [
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
    <Box>
      {/* Header */}
      <AppBar position="static" sx={{ bgcolor: '#1a237e', boxShadow: 'none' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontWeight: 'bold',
                color: '#4fc3f7',
                mr: 4,
              }}
            >
              TaleTree
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" color="inherit" underline="none">
                  Home
                </Link>
                <Link href="#" color="inherit" underline="none">
                  About
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Services
                </Link>
                <Link href="#" color="inherit" underline="none">
                  Contact
                </Link>
              </Box>
            )}
          </Box>
          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Button variant="contained" sx={{ bgcolor: '#4fc3f7' }}>
              Get Started
            </Button>
          )}
        </Toolbar>
        <Menu
          anchorEl={mobileMenuAnchor}
          open={Boolean(mobileMenuAnchor)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleMobileMenuClose}>Home</MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>About</MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>Services</MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>Contact</MenuItem>
        </Menu>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
          background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234fc3f7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ color: 'white', zIndex: 1, position: 'relative' }}>
                <Typography
                  variant="h6"
                  sx={{ color: '#4fc3f7', mb: 2, fontWeight: 500 }}
                >
                  A New Kind of Curriculum for a New Kind of World
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 'bold',
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  It's time to spark your kid's creativity
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ mb: 4, opacity: 0.9, maxWidth: 500 }}
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
                    borderRadius: 3,
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Find your interests"
                    variant="standard"
                    InputProps={{
                      disableUnderline: true,
                      sx: { pl: 2 },
                    }}
                  />
                  <IconButton
                    sx={{
                      bgcolor: '#ff6b35',
                      color: 'white',
                      '&:hover': { bgcolor: '#e55a2b' },
                      mr: 1,
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>

                <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Chip
                    label="All time most liked lesson"
                    sx={{ bgcolor: 'rgba(255,255,255,0.2)', color: 'white' }}
                  />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    3.7k lessons
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: 400,
                }}
              >
                {/* Placeholder for the cute character illustration */}
                <Box
                  sx={{
                    width: { xs: 300, md: 400 },
                    height: { xs: 300, md: 400 },
                    borderRadius: '50%',
                    bgcolor: 'rgba(79, 195, 247, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 150, md: 200 },
                      height: { xs: 150, md: 200 },
                      bgcolor: '#4fc3f7',
                      fontSize: { xs: '4rem', md: '6rem' },
                    }}
                  >
                    🐰
                  </Avatar>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '20%',
                      right: '10%',
                      bgcolor: '#4fc3f7',
                      color: 'white',
                      p: 1,
                      borderRadius: 2,
                      fontSize: '0.875rem',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: '-8px',
                        left: '20px',
                        width: 0,
                        height: 0,
                        borderLeft: '8px solid transparent',
                        borderRight: '8px solid transparent',
                        borderTop: '8px solid #4fc3f7',
                      },
                    }}
                  >
                    It's time to spark your kid's creativity and storytelling and play!
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Creativity Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            Creativity and kindness matter more than ever in the age of{' '}
            <Box component="span" sx={{ color: '#4fc3f7' }}>AI</Box>
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
              alt="Children playing"
              sx={{
                width: '100%',
                height: 400,
                objectFit: 'cover',
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold', mb: 3 }}>
              Introducing TaleTree
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              A revolutionary platform that combines storytelling, creativity, and learning 
              to help children develop essential skills for the future. Through interactive 
              narratives and engaging activities, kids learn to think creatively, express 
              themselves, and build emotional intelligence.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Latest News Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              Latest news
            </Typography>
            <Button endIcon={<ArrowForwardIcon />}>View all</Button>
          </Box>
          <Grid container spacing={3}>
            {latestNews.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                      {item.title}
                    </Typography>
                    {item.date && (
                      <Typography variant="body2" color="text.secondary">
                        {item.date}
                      </Typography>
                    )}
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
          <Button endIcon={<ArrowForwardIcon />}>View all</Button>
        </Box>
        <Grid container spacing={3}>
          {parentsSection.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
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
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
              TaleTree for Educators
            </Typography>
            <Button endIcon={<ArrowForwardIcon />}>View all</Button>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                  alt="Educators"
                />
                <CardContent>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Transform space about at most
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aug 8, 2024
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  height: '100%',
                  background: 'linear-gradient(135deg, #1a237e 0%, #3949ab 100%)',
                  borderRadius: 2,
                  p: 4,
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                  The TaleTree Method
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
                  Our innovative approach combines proven educational methodologies 
                  with cutting-edge technology to create engaging learning experiences.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: '#4fc3f7', alignSelf: 'flex-start' }}
                  startIcon={<PlayArrowIcon />}
                >
                  Learn More
                </Button>
                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    right: -20,
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    bgcolor: 'rgba(79, 195, 247, 0.1)',
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
          <Button endIcon={<ArrowForwardIcon />}>View all</Button>
        </Box>
        <Grid container spacing={3}>
          {expertsSection.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { transform: 'translateY(-4px)', transition: 'transform 0.3s' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
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
      <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#4fc3f7' }}>
                TaleTree Inc.
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                10 E 29th St, Apt 42B, New York, NY 10016 USA
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton sx={{ color: '#4fc3f7' }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7' }}>
                  <TwitterIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7' }}>
                  <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: '#4fc3f7' }}>
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Our Story
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Careers
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Team
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Contact Us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Support
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Getting Started
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Help Center
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Server Status
                </Link>
                <Link href="#" color="inherit" underline="none" sx={{ opacity: 0.8 }}>
                  Bug Reports
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Follow us
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Stay updated with our latest news and features
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'white',
                      '& fieldset': { borderColor: 'transparent' },
                    },
                  }}
                />
                <Button variant="contained" sx={{ bgcolor: '#4fc3f7' }}>
                  Subscribe
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              © 2024 TaleTree Inc. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.6 }}>
              Email: contact@taletree.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default TaleTreeLanding;
