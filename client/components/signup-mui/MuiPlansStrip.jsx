import React from "react";
import { Box, Container, Button, Chip, Typography } from "@mui/material";

const MuiPlansStrip = ({ onShowPlans }) => {
  return (
    <Container maxWidth="xl" sx={{ py: 2, px: 3 }}>
      <Box
        sx={{
          bgcolor: "#f9fafb",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          py: 1.5,
          px: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {/* Left Side - New Badge + Text */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Chip
              label="New"
              sx={{
                bgcolor: "#dcfce7",
                color: "#166534",
                fontSize: "12px",
                fontWeight: 500,
                height: "24px",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: 500,
                color: "#111827",
              }}
            >
              TaleTree just got better!
            </Typography>
          </Box>

          {/* Right Side - See Plans Button */}
          <Button
            onClick={onShowPlans}
            sx={{
              background: "linear-gradient(to right, #9333ea, #7c3aed)",
              "&:hover": {
                background: "linear-gradient(to right, #7c3aed, #6d28d9)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              },
              color: "white",
              fontWeight: 500,
              py: 1,
              px: 3,
              borderRadius: "25px",
              transition: "all 0.2s ease",
              textTransform: "none",
              fontSize: "14px",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          >
            See plans
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MuiPlansStrip;
