import { Box, Container, Typography, Grid, Card, Button } from "@mui/material";

const MuiLatestNewsSection = () => {
  const newsItems = [
    {
      title: "Set up camp in TaleTree Village",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=150&h=150&fit=crop&crop=face",
    },
    {
      title: "Amplify Your Impact",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=150&h=150&fit=crop&crop=center",
    },
    {
      title: "Become an expert in Emerald City",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      title: "Join our movement",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=150&h=150&fit=crop&crop=face",
    },
    {
      title: "Acquire a Treehouse in Emerald City",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=150&h=150&fit=crop&crop=center",
    },
    {
      title: "Dream With Experts",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Latest news
        </Typography>
        <Button
          sx={{
            color: "#9333ea",
            "&:hover": {
              color: "#7c3aed",
            },
            fontSize: "14px",
            fontWeight: 500,
            textTransform: "none",
            p: 0,
            minWidth: "auto",
          }}
        >
          View all
        </Button>
      </Box>

      {/* 2-column layout with 3 cards each */}
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {newsItems.slice(0, 3).map((item, i) => (
              <Card
                key={i}
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* Image thumbnail */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      m: 2,
                      borderRadius: "8px",
                    }}
                  />

                  {/* Content */}
                  <Box sx={{ flex: 1, p: 2, pl: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#111827",
                        mb: 0.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "#6b7280",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {newsItems.slice(3, 6).map((item, i) => (
              <Card
                key={i + 3}
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                  overflow: "hidden",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  {/* Image thumbnail */}
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      flexShrink: 0,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      m: 2,
                      borderRadius: "8px",
                    }}
                  />

                  {/* Content */}
                  <Box sx={{ flex: 1, p: 2, pl: 0 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#111827",
                        mb: 0.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "#6b7280",
                      }}
                    >
                      {item.date}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MuiLatestNewsSection;
