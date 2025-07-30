import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiParentsSection = () => {
  const parentStories = [
    { title: "Lorem ipsum dolor sit amet", date: "Jun 23, 2025", image: "family1" },
    { title: "Consectetur adipiscing elit", date: "Jun 22, 2025", image: "family2" },
    { title: "Sed do eiusmod tempor", date: "Jun 21, 2025", image: "family3" },
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
          Parents
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

      {/* 3 cards with family photos */}
      <Grid container spacing={4}>
        {parentStories.map((story, i) => (
          <Grid item xs={12} md={4} key={i}>
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
              {/* Real family photo placeholder */}
              <Box
                sx={{
                  width: "100%",
                  height: 180,
                  bgcolor: "#fef3c7",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Simulated family photo with warm colors */}
                <Box
                  sx={{
                    width: "80%",
                    height: "70%",
                    borderRadius: "50%",
                    background: i === 0
                      ? "linear-gradient(135deg, #fed7aa, #fb923c)"
                      : i === 1
                      ? "linear-gradient(135deg, #ddd6fe, #a855f7)"
                      : "linear-gradient(135deg, #bbf7d0, #22c55e)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Simple family representation */}
                  <Box sx={{ display: "flex", gap: 0.5 }}>
                    <Box sx={{ width: 12, height: 16, bgcolor: "white", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                    <Box sx={{ width: 10, height: 14, bgcolor: "white", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                    <Box sx={{ width: 8, height: 10, bgcolor: "white", borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
                  </Box>
                </Box>
              </Box>

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
                  {story.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color: "#6b7280",
                  }}
                >
                  {story.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MuiParentsSection;
