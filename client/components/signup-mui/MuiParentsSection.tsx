import { Box, Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const MuiParentsSection = () => {
  return (
    <Container maxWidth="xl" sx={{ px: 4, py: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
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

      <Grid container spacing={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                bgcolor: "#f3f4f6",
                border: "none",
                boxShadow: "none",
                borderRadius: "8px",
              }}
            >
              <CardContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    width: "100%",
                    height: 128,
                    bgcolor: "#e5e7eb",
                    borderRadius: "6px",
                    mb: 1.5,
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    color: "#374151",
                    mb: 1,
                  }}
                >
                  Parent story title
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color: "#9ca3af",
                  }}
                >
                  Story description here
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MuiParentsSection;
