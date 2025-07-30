import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiExpertsSection = () => {
  const expertItems = [
    { title: "Lorem ipsum dolor sit amet", date: "Jun 23, 2025", category: "Expert Opinion" },
    { title: "Consectetur adipiscing elit", date: "Jun 22, 2025", category: "Brand Partnership" },
    { title: "Sed do eiusmod tempor", date: "Jun 21, 2025", category: "Research Study" },
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
          Experts and Brands
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

      {/* 3 cards for experts and brands */}
      <Grid container spacing={4}>
        {expertItems.map((item, i) => (
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
              {/* Expert/Brand image with professional look */}
              <Box
                sx={{
                  width: "100%",
                  height: 160,
                  bgcolor: i === 0 ? "#f8fafc" : i === 1 ? "#fefbf3" : "#f0fdf4",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Professional/Business icon representation */}
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: "12px",
                    bgcolor: i === 0 ? "#64748b" : i === 1 ? "#f59e0b" : "#10b981",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  {/* Professional icon (briefcase/building representation) */}
                  <Box
                    sx={{
                      width: 30,
                      height: 20,
                      bgcolor: "white",
                      borderRadius: "4px",
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -5,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 20,
                        height: 8,
                        bgcolor: "white",
                        borderRadius: "4px 4px 0 0",
                      },
                    }}
                  />
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
