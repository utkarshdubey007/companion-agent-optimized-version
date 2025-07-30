import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  IconButton,
  Tooltip,
  Link,
} from "@mui/material";
import {
  Check,
  ArrowBack,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { MuiHeaderActionsLight } from "@/components/signup-mui/MuiHeaderActionsLight.jsx";

const Plans = () => {
  const navigate = useNavigate();

  const planFeatures = {
    emeralites: [
      "Up to 20 TaleTree creations",
      "AI powered emotional reflections", 
      "Guardian account verification required",
      "Limited access to the TaleTree Method",
    ],
    seedlings: [
      "Unlimited TaleTree creations",
      "Full access to AI companions",
      "Weekly guardian insights & reports",
      "20-Minute Promise tools",
      "Daily emotional check-ins",
    ],
    villagers: [
      "Set up Camps & Tribes",
      "Manage groups & progress",
      "All Seedlings features included",
      "Institution-wide guardian engagement",
      "Custom challenge creation",
    ],
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white" }}>
      {/* Logo and Back Button */}
      <Box
        sx={{
          position: "absolute",
          top: 24,
          left: 24,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ width: 32, height: 32 }}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F956eb6364f77469eb6b19c2791e6b43a?format=webp&width=800"
            alt="TaleTree Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 600, color: "#111827", mr: 2 }}
        >
          taleTree
        </Typography>
        
        <Tooltip title="Back to Signup" placement="right">
          <IconButton
            onClick={() => navigate("/signup")}
            sx={{
              width: 32,
              height: 32,
              border: "1px solid #d1d5db",
              borderRadius: "50%",
              color: "#6b7280",
              "&:hover": {
                bgcolor: "#f3f4f6",
                borderColor: "#9ca3af",
                color: "#374151",
              },
              transition: "all 0.3s",
            }}
          >
            <ArrowBack sx={{ fontSize: 16 }} />
          </IconButton>
        </Tooltip>
      </Box>

      {/* MUI Header Actions Light for Search and Login */}
      <MuiHeaderActionsLight />

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ pt: 20, pb: 12 }}>
        {/* Page Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#111827",
              mb: 2,
              fontSize: { xs: "2.25rem", md: "3rem" },
            }}
          >
            TaleTree Pricing
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#6b7280",
              maxWidth: "512px",
              mx: "auto",
              lineHeight: 1.5,
              fontSize: "1.125rem",
            }}
          >
            Choose the plan that fits your family or organization.
          </Typography>
        </Box>

        {/* Pricing Cards */}
        <Grid container spacing={4} sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* Emeralites Plan */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  border: "4px solid #a855f7",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "#0891b2", mb: 1 }}
                  >
                    Emeralites
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 3, fontSize: "14px" }}>
                    For curious kids just starting out
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{ fontWeight: "bold", color: "#111827" }}
                    >
                      $0
                    </Typography>
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{ color: "#6b7280", ml: 1 }}
                    >
                      / month
                    </Typography>
                  </Box>
                </Box>

                <List sx={{ mb: 4, p: 0 }}>
                  {planFeatures.emeralites.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.75 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check sx={{ color: "#10b981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2" sx={{ color: "#374151", fontSize: "14px" }}>
                          {feature}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>

                <Button
                  fullWidth
                  disabled
                  sx={{
                    bgcolor: "#f3f4f6",
                    color: "#6b7280",
                    py: 1.5,
                    borderRadius: "25px",
                    textTransform: "none",
                    fontWeight: 500,
                    "&:disabled": {
                      bgcolor: "#f3f4f6",
                      color: "#6b7280",
                    },
                  }}
                >
                  You current plan
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Seedlings Plan */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  border: "4px solid #a855f7",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "#059669", mb: 1 }}
                  >
                    Seedlings
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 3, fontSize: "14px" }}>
                    For families ready to grow together
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      component="span"
                      variant="h3"
                      sx={{ fontWeight: "bold", color: "#111827" }}
                    >
                      $10
                    </Typography>
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{ color: "#6b7280", ml: 1 }}
                    >
                      / month per child
                    </Typography>
                  </Box>
                </Box>

                <List sx={{ mb: 4, p: 0 }}>
                  {planFeatures.seedlings.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.75 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check sx={{ color: "#10b981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2" sx={{ color: "#374151", fontSize: "14px" }}>
                          {feature}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#2563eb",
                    "&:hover": { bgcolor: "#1d4ed8" },
                    py: 1.5,
                    borderRadius: "25px",
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#1d4ed8",
                      boxShadow: "none",
                    },
                  }}
                >
                  Get Seedlings
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Villagers Plan */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: "100%",
                position: "relative",
                cursor: "pointer",
                transition: "all 0.3s ease",
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  border: "4px solid #a855f7",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, color: "#9333ea", mb: 1 }}
                  >
                    Villagers
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#6b7280", mb: 3, fontSize: "14px" }}>
                    For schools, churches, and camps
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    <Typography
                      component="span"
                      variant="h4"
                      sx={{ fontWeight: "bold", color: "#111827" }}
                    >
                      Contact Sales
                    </Typography>
                  </Box>
                </Box>

                <List sx={{ mb: 4, p: 0 }}>
                  {planFeatures.villagers.map((feature, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 0.75 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check sx={{ color: "#10b981", fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography variant="body2" sx={{ color: "#374151", fontSize: "14px" }}>
                          {feature}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#9333ea",
                    "&:hover": { bgcolor: "#7c3aed" },
                    py: 1.5,
                    borderRadius: "25px",
                    textTransform: "none",
                    fontWeight: 500,
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#7c3aed",
                      boxShadow: "none",
                    },
                  }}
                >
                  Get Villagers
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box sx={{ bgcolor: "#312e81", color: "white", mt: 10 }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                TaleTree Inc.
              </Typography>
              <Typography variant="body2" sx={{ color: "#c7d2fe", fontSize: "14px" }}>
                470 Ramona St. Palo Alto, CA 94301, USA
              </Typography>
            </Grid>

            {/* Company Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Company
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {["Our story", "TaleTree Friends", "TaleTree Pledge"].map(
                  (link, index) => (
                    <Link
                      key={index}
                      href="#"
                      variant="body2"
                      sx={{
                        color: "#c7d2fe",
                        textDecoration: "none",
                        fontSize: "14px",
                        "&:hover": { color: "white" },
                      }}
                    >
                      {link}
                    </Link>
                  )
                )}
              </Box>
            </Grid>

            {/* Support Links */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Support
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "End User License Agreement",
                  "Email Us",
                ].map((link, index) => (
                  <Link
                    key={index}
                    href="#"
                    variant="body2"
                    sx={{
                      color: "#c7d2fe",
                      textDecoration: "none",
                      fontSize: "14px",
                      "&:hover": { color: "white" },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>

            {/* Follow Us */}
            <Grid item xs={12} md={3}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                Follow us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: LinkedIn, label: "LinkedIn" },
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    sx={{
                      bgcolor: "#4338ca",
                      color: "white",
                      width: 32,
                      height: 32,
                      "&:hover": { bgcolor: "#3730a3" },
                    }}
                  >
                    <social.icon sx={{ fontSize: 12 }} />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Footer */}
          <Box
            sx={{
              borderTop: "1px solid #4338ca",
              mt: 4,
              pt: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography variant="body2" sx={{ color: "#c7d2fe", fontSize: "14px" }}>
              2025 TaleTree Inc. All rights reserved
            </Typography>
            <Typography variant="body2" sx={{ color: "#c7d2fe", fontSize: "14px" }}>
              Email: contact@taletree.com
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Plans;
