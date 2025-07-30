import { Box, Container, Typography } from "@mui/material";

const MuiIntroducingSection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          color: "#111827",
          mb: 4,
        }}
      >
        Introducing TaleTree
      </Typography>

      {/* Single centered card with fox character */}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "100%", md: "70%" },
            maxWidth: "600px",
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          {/* Image section with fox character */}
          <Box
            sx={{
              background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)",
              height: 300,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Fox character placeholder */}
            <Box
              sx={{
                width: 120,
                height: 120,
                bgcolor: "#ef4444",
                borderRadius: "50% 50% 0 50%",
                position: "relative",
                transform: "rotate(-15deg)",
              }}
            >
              {/* Fox ears */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  left: 20,
                  width: 20,
                  height: 30,
                  bgcolor: "#ef4444",
                  borderRadius: "50% 50% 0 0",
                  transform: "rotate(-30deg)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: 20,
                  width: 20,
                  height: 30,
                  bgcolor: "#ef4444",
                  borderRadius: "50% 50% 0 0",
                  transform: "rotate(30deg)",
                }}
              />
              {/* Fox eyes */}
              <Box
                sx={{
                  position: "absolute",
                  top: 30,
                  left: 25,
                  width: 15,
                  height: 15,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 30,
                  right: 25,
                  width: 15,
                  height: 15,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              />
              {/* Fox nose */}
              <Box
                sx={{
                  position: "absolute",
                  top: 50,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 8,
                  height: 6,
                  bgcolor: "white",
                  borderRadius: "50%",
                }}
              />
            </Box>

            {/* Green ground area */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: 80,
                background: "linear-gradient(to top, #22c55e, #16a34a)",
                borderRadius: "0 0 50% 50% / 0 0 100px 100px",
              }}
            />
          </Box>

          {/* Caption */}
          <Box sx={{ p: 3, textAlign: "center" }}>
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
      </Box>
    </Container>
  );
};

export default MuiIntroducingSection;
