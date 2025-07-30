import { Box, Container, Typography, Grid } from "@mui/material";

const MuiIntroducingSection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
      {/* Two column layout as per reference image */}
      <Grid container spacing={3}>
        {/* Left - Large illustration card (60% width) */}
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "300px",
            }}
          >
            {/* Fox character scene */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #312e81 0%, #3730a3 50%, #1e1b4b 100%)",
                height: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Background elements - plants */}
              <Box
                sx={{
                  position: "absolute",
                  left: 20,
                  bottom: 60,
                  width: 80,
                  height: 60,
                  bgcolor: "#22c55e",
                  borderRadius: "50% 50% 40% 60%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  right: 30,
                  bottom: 50,
                  width: 60,
                  height: 80,
                  bgcolor: "#16a34a",
                  borderRadius: "50% 40% 50% 30%",
                }}
              />

              {/* Fox character */}
              <Box
                sx={{
                  width: 100,
                  height: 120,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {/* Fox body */}
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "#ef4444",
                    borderRadius: "50% 50% 40% 40%",
                    position: "relative",
                    mx: "auto",
                  }}
                >
                  {/* Fox ears */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: 15,
                      width: 16,
                      height: 25,
                      bgcolor: "#ef4444",
                      borderRadius: "50% 50% 10% 10%",
                      transform: "rotate(-20deg)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: -15,
                      right: 15,
                      width: 16,
                      height: 25,
                      bgcolor: "#ef4444",
                      borderRadius: "50% 50% 10% 10%",
                      transform: "rotate(20deg)",
                    }}
                  />

                  {/* Fox face - white circle */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 50,
                      height: 40,
                      bgcolor: "white",
                      borderRadius: "50%",
                    }}
                  >
                    {/* Eyes */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        left: 12,
                        width: 8,
                        height: 12,
                        bgcolor: "#000",
                        borderRadius: "50%",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 8,
                        right: 12,
                        width: 8,
                        height: 12,
                        bgcolor: "#000",
                        borderRadius: "50%",
                      }}
                    />
                    {/* Nose */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 22,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 6,
                        height: 4,
                        bgcolor: "#000",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                </Box>

                {/* Fox tail */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    right: -20,
                    width: 40,
                    height: 30,
                    bgcolor: "#ef4444",
                    borderRadius: "70% 30% 50% 50%",
                    transform: "rotate(45deg)",
                  }}
                />
              </Box>

              {/* Yellow ground path */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 60,
                  background: "linear-gradient(to top, #fbbf24, #f59e0b)",
                  borderRadius: "0 0 0 0",
                }}
              />

              {/* Green ground on sides */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "30%",
                  height: 80,
                  background: "#22c55e",
                  borderRadius: "0 50% 0 0",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "30%",
                  height: 80,
                  background: "#22c55e",
                  borderRadius: "50% 0 0 0",
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right - Small photo card (40% width) */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              height: "300px",
            }}
          >
            {/* Family photo */}
            <Box
              sx={{
                height: "220px",
                background: "linear-gradient(135deg, #fef3c7, #fbbf24)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Simulated family photo with multiple people */}
              <Box sx={{ display: "flex", gap: 1, alignItems: "end" }}>
                {/* Child 1 */}
                <Box
                  sx={{
                    width: 40,
                    height: 50,
                    bgcolor: "#f97316",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 20,
                      height: 20,
                      bgcolor: "#fed7aa",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Child 2 */}
                <Box
                  sx={{
                    width: 35,
                    height: 45,
                    bgcolor: "#ec4899",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 18,
                      height: 18,
                      bgcolor: "#fce7f3",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Child 3 */}
                <Box
                  sx={{
                    width: 38,
                    height: 48,
                    bgcolor: "#06b6d4",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 7,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 19,
                      height: 19,
                      bgcolor: "#cffafe",
                      borderRadius: "50%",
                    }}
                  />
                </Box>

                {/* Child 4 */}
                <Box
                  sx={{
                    width: 36,
                    height: 46,
                    bgcolor: "#8b5cf6",
                    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 18,
                      height: 18,
                      bgcolor: "#ede9fe",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Card content */}
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#111827",
                  mb: 0.5,
                }}
              >
                TaleTree And kids
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "12px",
                  color: "#6b7280",
                }}
              >
                Jun 30,2025
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Bottom heading as per reference */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
            mb: 0.5,
          }}
        >
          Introducing TaleTree
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontSize: "12px",
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
