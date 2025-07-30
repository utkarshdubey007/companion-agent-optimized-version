import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiLatestNewsSection = () => {
  const newsItems = [
    { title: "Lorem ipsum dolor sit amet", date: "Jun 23, 2025" },
    { title: "Consectetur adipiscing elit", date: "Jun 22, 2025" },
    { title: "Sed do eiusmod tempor", date: "Jun 21, 2025" },
    { title: "Incididunt ut labore", date: "Jun 20, 2025" },
    { title: "Dolore magna aliqua", date: "Jun 19, 2025" },
  ];

  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
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

      {/* 5 cards in horizontal layout */}
      <Grid container spacing={3}>
        {newsItems.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={i}>
            <Card
              sx={{
                bgcolor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              {/* Image thumbnail */}
              <Box
                sx={{
                  width: "100%",
                  height: 120,
                  bgcolor: "#f3f4f6",
                  backgroundImage: "linear-gradient(45deg, #e5e7eb 25%, transparent 25%), linear-gradient(-45deg, #e5e7eb 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e5e7eb 75%), linear-gradient(-45deg, transparent 75%, #e5e7eb 75%)",
                  backgroundSize: "20px 20px",
                  backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
                }}
              />

              <CardContent sx={{ p: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
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

export default MuiLatestNewsSection;
