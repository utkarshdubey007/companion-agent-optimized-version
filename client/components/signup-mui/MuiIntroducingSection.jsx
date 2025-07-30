import { Box, Container, Typography, Grid } from "@mui/material";

const MuiIntroducingSection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 8 }}>
      {/* Main layout - larger proportions like second image */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {/* Left - Large fox illustration card */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "400px",
            }}
          >
            {/* Fox character scene with starry night */}
            <Box
              sx={{
                background:
                  "linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4c1d95 100%)",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Stars in background */}
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 60,
                  width: 8,
                  height: 8,
                  bgcolor: "#fbbf24",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 40,
                  right: 120,
                  width: 6,
                  height: 6,
                  bgcolor: "#60a5fa",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 60,
                  left: 80,
                  width: 5,
                  height: 5,
                  bgcolor: "#f472b6",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 80,
                  right: 200,
                  width: 7,
                  height: 7,
                  bgcolor: "#34d399",
                  borderRadius: "50%",
                }}
              />

              {/* Green hills/landscape */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "40%",
                  height: 120,
                  background: "linear-gradient(45deg, #22c55e, #16a34a)",
                  borderRadius: "0 60% 0 0",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "35%",
                  height: 100,
                  background: "linear-gradient(-45deg, #22c55e, #16a34a)",
                  borderRadius: "60% 0 0 0",
                }}
              />

              {/* Yellow path/ground */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: "25%",
                  right: "25%",
                  height: 80,
                  background: "linear-gradient(to top, #f59e0b, #fbbf24)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              {/* Large Fox character - centered and bigger */}
              <Box
                sx={{
                  width: 140,
                  height: 160,
                  position: "relative",
                  zIndex: 3,
                  mt: -4,
                }}
              >
                {/* Fox body */}
                <Box
                  sx={{
                    width: 110,
                    height: 110,
                    bgcolor: "#f87171",
                    borderRadius: "50% 50% 45% 45%",
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  {/* Fox ears */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      left: 20,
                      width: 22,
                      height: 35,
                      bgcolor: "#f87171",
                      borderRadius: "50% 50% 20% 20%",
                      transform: "rotate(-15deg)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: -20,
                      right: 20,
                      width: 22,
                      height: 35,
                      bgcolor: "#f87171",
                      borderRadius: "50% 50% 20% 20%",
                      transform: "rotate(15deg)",
                    }}
                  />

                  {/* Fox face - white area */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 25,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 70,
                      height: 55,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  >
                    {/* Closed happy eyes */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        left: 16,
                        width: 12,
                        height: 8,
                        bgcolor: "#000",
                        borderRadius: "50% 50% 0 0",
                        transform: "rotate(15deg)",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 16,
                        width: 12,
                        height: 8,
                        bgcolor: "#000",
                        borderRadius: "50% 50% 0 0",
                        transform: "rotate(-15deg)",
                      }}
                    />

                    {/* Nose */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 30,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 8,
                        height: 6,
                        bgcolor: "#000",
                        borderRadius: "50%",
                      }}
                    />

                    {/* Happy smile */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 38,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 20,
                        height: 10,
                        border: "2px solid #000",
                        borderTop: "none",
                        borderRadius: "0 0 20px 20px",
                      }}
                    />
                  </Box>

                  {/* Fox arms/hands */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 50,
                      right: -25,
                      width: 20,
                      height: 35,
                      bgcolor: "#f87171",
                      borderRadius: "50% 50% 30% 30%",
                      transform: "rotate(30deg)",
                    }}
                  />
                </Box>

                {/* Fox tail */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 15,
                    right: -30,
                    width: 50,
                    height: 40,
                    bgcolor: "#f87171",
                    borderRadius: "60% 40% 50% 50%",
                    transform: "rotate(45deg)",
                  }}
                />
              </Box>

              {/* Small green object fox is holding */}
              <Box
                sx={{
                  position: "absolute",
                  right: "35%",
                  top: "45%",
                  width: 18,
                  height: 25,
                  bgcolor: "#22c55e",
                  borderRadius: "8px",
                  zIndex: 4,
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right - Family photo card */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "400px",
            }}
          >
            {/* Real family photo */}
            <Box
              sx={{
                height: "300px",
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets%2F70505802e34346039d2fb8ec7db34579%2F01c22825301043d9946881a73b08b4f9?format=webp&width=800')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            />

            {/* Card content */}
            <Box sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111827",
                  mb: 1,
                }}
              >
                TaleTree And kids
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "14px",
                  color: "#6b7280",
                }}
              >
                Jun 30,2025
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom heading */}
      <Box>
        <Typography
          variant="h2"
          sx={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#1e1b4b",
            mb: 1,
          }}
        >
          Introducing TaleTree
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#6b7280",
          }}
        >
          Jun 30,2025
        </Typography>
      </Box>
    </Container>
  );
};

export default MuiIntroducingSection;
