import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiEducatorsSection = () => {
  const educatorItems = [
    { title: "Lorem ipsum dolor sit amet", date: "Jun 23, 2025" },
    { title: "The TaleTree Method", date: "Jun 22, 2025" },
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
          TaleTree for Educators
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

      {/* 2 cards side by side */}
      <Grid container spacing={4}>
        {educatorItems.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
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
              {/* Educational content image */}
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  bgcolor: i === 0 ? "#eff6ff" : "#f0f9ff",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* Educational icon/illustration */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    bgcolor: i === 0 ? "#3b82f6" : "#06b6d4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Book/Education icon representation */}
                  <Box
                    sx={{
                      width: 40,
                      height: 30,
                      bgcolor: "white",
                      borderRadius: "4px",
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 2,
                        height: 20,
                        bgcolor: i === 0 ? "#3b82f6" : "#06b6d4",
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

export default MuiEducatorsSection;
