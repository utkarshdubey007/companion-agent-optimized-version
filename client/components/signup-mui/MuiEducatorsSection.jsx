import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const MuiEducatorsSection = () => {
  const educatorItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=280&fit=crop&crop=center",
    },
    {
      title: "The TaleTree Method",
      date: "Jun 30,2025",
      isMethodCard: true,
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
          TaleTree for educators
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
              {/* Educational content image */}
              <Box
                sx={{
                  width: "100%",
                  height: 240,
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {i === 0 ? (
                  // First card - classroom image
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ) : (
                  // Second card - TaleTree Method diagram
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      background:
                        "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Central circular diagram */}
                    <Box
                      sx={{
                        width: 160,
                        height: 160,
                        borderRadius: "50%",
                        background:
                          "linear-gradient(45deg, #f59e0b, #22c55e, #3b82f6, #ef4444)",
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* Inner circle */}
                      <Box
                        sx={{
                          width: 120,
                          height: 120,
                          borderRadius: "50%",
                          bgcolor: "#1e1b4b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Tree symbol */}
                        <Box
                          sx={{
                            width: 40,
                            height: 60,
                            position: "relative",
                          }}
                        >
                          {/* Tree trunk */}
                          <Box
                            sx={{
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 8,
                              height: 20,
                              bgcolor: "#a855f7",
                              borderRadius: "2px",
                            }}
                          />
                          {/* Tree crown */}
                          <Box
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 32,
                              height: 32,
                              bgcolor: "#22c55e",
                              borderRadius: "50%",
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>

                    {/* Method labels around the circle */}
                    {[
                      {
                        text: "IMAGINE",
                        color: "#a855f7",
                        top: "10%",
                        right: "15%",
                      },
                      {
                        text: "REWARD",
                        color: "#f59e0b",
                        top: "25%",
                        left: "8%",
                      },
                      {
                        text: "PLAY",
                        color: "#3b82f6",
                        bottom: "25%",
                        right: "12%",
                      },
                      {
                        text: "REFLECT",
                        color: "#ef4444",
                        bottom: "35%",
                        left: "5%",
                      },
                      {
                        text: "CREATE",
                        color: "#22c55e",
                        bottom: "15%",
                        right: "8%",
                      },
                      {
                        text: "SHARE",
                        color: "#ec4899",
                        bottom: "10%",
                        left: "15%",
                      },
                      {
                        text: "STORE",
                        color: "#06b6d4",
                        bottom: "20%",
                        right: "25%",
                      },
                    ].map((label, index) => (
                      <Box
                        key={index}
                        sx={{
                          position: "absolute",
                          ...label,
                          bgcolor: label.color,
                          color: "white",
                          px: 1.5,
                          py: 0.5,
                          borderRadius: "20px",
                          fontSize: "10px",
                          fontWeight: 600,
                          textAlign: "center",
                          minWidth: "60px",
                        }}
                      >
                        {label.text}
                      </Box>
                    ))}

                    {/* Small connecting elements */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "30%",
                        right: "30%",
                        width: 6,
                        height: 6,
                        bgcolor: "#fbbf24",
                        borderRadius: "50%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: "40%",
                        left: "25%",
                        width: 8,
                        height: 8,
                        bgcolor: "#34d399",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                )}
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
