import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiExpertsSection = () => {
  const expertItems = [
    { 
      title: "Lorem ipsum dolor sit amet", 
      date: "Jun 30,2025",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=240&fit=crop&crop=face"
    },
    { 
      title: "Lorem ipsum dolor sit amet", 
      date: "Jun 30,2025",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=240&fit=crop&crop=center"
    },
    { 
      title: "Lorem ipsum dolor sit amet", 
      date: "Jun 30,2025",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=240&fit=crop&crop=center"
    },
  ];

  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Experts and brands
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

      {/* 3 equal cards for experts and brands */}
      <Grid container spacing={4}>
        {expertItems.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                bgcolor: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                },
              }}
            >
              {/* Professional/Expert image */}
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111827",
                    mb: 1,
                    lineHeight: 1.4,
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MuiExpertsSection;
