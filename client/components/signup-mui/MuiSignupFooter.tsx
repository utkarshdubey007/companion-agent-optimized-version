import { Box, Container, Typography, Grid, Link } from "@mui/material";

const MuiSignupFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#312e81",
        color: "white",
        py: 6,
        px: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mb: { xs: 4, md: 0 } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                mb: 2,
              }}
            >
              TaleTree Inc.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#d1d5db",
                fontSize: "14px",
              }}
            >
              149 Barrow St, Floor 2nd, New York, NY 10014, USA
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ maxWidth: { md: "50%" } }}>
            <Grid item xs={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: "16px",
                }}
              >
                Company
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Our Story
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Careers
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Contact
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: "16px",
                }}
              >
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Getting Started
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Help Center
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#d1d5db",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  Server Status
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1.5,
                  fontSize: "16px",
                }}
              >
                Follow us
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#6b7280",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#6b7280",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#6b7280",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#6b7280",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            borderTop: "1px solid #374151",
            mt: 4,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontSize: "14px",
              color: "#9ca3af",
            }}
          >
            2024, TaleTree Inc. All rights reserved. | Email:
            contact@taletree.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default MuiSignupFooter;
