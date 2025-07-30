import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const MuiParentsSection = () => {
  const parentStories = [
    {
      title: "Lorem ipsum dolor sit amet",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=240&fit=crop&crop=face",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=240&fit=crop&crop=center",
      hasAvatars: true,
    },
    {
      title: "Lorem ipsum dolor sit amet",
      date: "Jun 30,2025",
      image:
        "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=240&fit=crop&crop=center",
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

      {/* 3 cards with different proportions */}
      <Grid container spacing={3}>
        {/* First card - larger */}
        <Grid item xs={12} md={5}>
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
            {/* Family photo */}
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundImage: `url(${parentStories[0].image})`,
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
                {parentStories[0].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                {parentStories[0].date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Second card - medium with avatars */}
        <Grid item xs={12} md={3.5}>
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
            {/* Family photo with avatars overlay */}
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundImage: `url(${parentStories[1].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              {/* Cartoon avatars overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  display: "flex",
                  gap: 1,
                }}
              >
                {/* Purple avatar */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#a855f7",
                    borderRadius: "50%",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Orange avatar */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#f97316",
                    borderRadius: "50%",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Blue avatar */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#3b82f6",
                    borderRadius: "50%",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Green avatar */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#22c55e",
                    borderRadius: "50%",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  />
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
                {parentStories[1].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                {parentStories[1].date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Third card - medium */}
        <Grid item xs={12} md={3.5}>
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
            {/* Family photo */}
            <Box
              sx={{
                width: "100%",
                height: 200,
                backgroundImage: `url(${parentStories[2].image})`,
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
                {parentStories[2].title}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                {parentStories[2].date}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MuiParentsSection;
