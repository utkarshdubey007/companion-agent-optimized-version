import { Box, Container, Typography, Grid } from "@mui/material";

const MuiIntroducingSection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Introducing TaleTree
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Left - Character illustration */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "linear-gradient(135deg, #fb923c 0%, #ef4444 100%)",
              borderRadius: "12px",
              p: 3,
              height: 256,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 80,
                  bgcolor: "#ea580c",
                  borderRadius: "50%",
                  position: "relative",
                }}
              >
                {/* Simple character representation */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 12,
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 12,
                    width: 8,
                    height: 8,
                    bgcolor: "white",
                    borderRadius: "50%",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 24,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    bgcolor: "white",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(34, 197, 94, 0.2) 0%, transparent 100%)",
                borderRadius: "12px",
              }}
            />
          </Box>
        </Grid>

        {/* Right - Family photo placeholder */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              bgcolor: "#e5e7eb",
              borderRadius: "12px",
              height: 256,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  bgcolor: "#d1d5db",
                  borderRadius: "50%",
                  mx: "auto",
                  mb: 2,
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Families that talk
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MuiIntroducingSection;
