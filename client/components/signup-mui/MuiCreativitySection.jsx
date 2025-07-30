import { Box, Container, Typography, Chip } from "@mui/material";

const MuiCreativitySection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 4, textAlign: "center" }}>
      <Typography
        variant="body1"
        sx={{
          color: "#374151",
          mb: 1,
          fontSize: "16px",
          lineHeight: 1.5,
        }}
      >
        <Box component="span" sx={{ fontWeight: 600 }}>
          Creativity and kindness matter more than score
        </Box>{" "}
        in the age of{" "}
        <Chip
          label="AI"
          sx={{
            bgcolor: "#f3e8ff",
            color: "#7c3aed",
            fontSize: "14px",
            height: "24px",
            mx: 0.5,
          }}
        />
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#6b7280",
          fontSize: "16px",
          lineHeight: 1.5,
        }}
      >
        TaleTree helps your child grow both — and get rewarded for it.
      </Typography>
    </Container>
  );
};

export default MuiCreativitySection;
