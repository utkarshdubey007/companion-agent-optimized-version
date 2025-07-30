import { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Button,
  Menu,
  MenuItem,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Search, Person } from "@mui/icons-material";

export function MuiHeaderActions() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoginMenuOpen = Boolean(anchorEl);

  const handleSearchClick = () => {
    setIsSearchExpanded(!isSearchExpanded);
  };

  const handleLoginAreaEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLoginAreaLeave = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 24,
        right: 24,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      {/* Search Component */}
      <Box sx={{ position: "relative" }}>
        {!isSearchExpanded ? (
          <IconButton
            onClick={handleSearchClick}
            sx={{
              width: 40,
              height: 40,
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "50%",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <Search sx={{ width: 20, height: 20 }} />
          </IconButton>
        ) : (
          <Box
            sx={{
              bgcolor: "transparent",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              borderRadius: "25px",
              px: 2,
              py: 1,
              minWidth: "240px",
              transition: "all 0.3s ease",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Search sx={{ width: 16, height: 16, color: "white" }} />
              <TextField
                placeholder="Search TaleTree"
                variant="standard"
                fullWidth
                autoFocus
                onBlur={() => setIsSearchExpanded(false)}
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "none",
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottom: "none",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontSize: "14px",
                    padding: 0,
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.7)",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>
          </Box>
        )}
      </Box>

      {/* Login Component */}
      <Box
        sx={{ position: "relative" }}
        onMouseEnter={handleLoginMouseEnter}
        onMouseLeave={handleLoginMouseLeave}
      >
        <Button
          sx={{
            border: "1px solid rgba(255, 255, 255, 0.4)",
            color: "white",
            px: 2,
            py: 1,
            borderRadius: "25px",
            fontWeight: 500,
            fontSize: "14px",
            textTransform: "none",
            "&:hover": {
              bgcolor: "white",
              color: "#374151",
            },
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Person sx={{ width: 16, height: 16 }} />
          Login
        </Button>

        {/* Login Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={isLoginMenuOpen}
          onClose={handleMenuMouseLeave}
          sx={{
            "& .MuiPaper-root": {
              borderRadius: "16px",
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              border: "1px solid #f3f4f6",
              minWidth: "140px",
              mt: 1,
            },
          }}
          MenuListProps={{
            onMouseEnter: handleMenuMouseEnter,
            onMouseLeave: handleMenuMouseLeave,
            sx: { py: 0 }
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          disableScrollLock={true}
        >
          <MenuItem
            sx={{
              px: 2,
              py: 1.5,
              "&:hover": {
                bgcolor: "#f9fafb",
              },
              transition: "background-color 0.2s ease",
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Avatar
                src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F8ade38e9e3ed4481823af4c44b90eec8?format=webp&width=800"
                alt="Kids"
                sx={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Kids"
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
              }}
            />
          </MenuItem>

          <MenuItem
            sx={{
              px: 2,
              py: 1.5,
              "&:hover": {
                bgcolor: "#f9fafb",
              },
              transition: "background-color 0.2s ease",
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Avatar
                src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F70906b39ddd5462b8740ab078244aace?format=webp&width=800"
                alt="Parent"
                sx={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Guardians"
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
              }}
            />
          </MenuItem>

          <MenuItem
            sx={{
              px: 2,
              py: 1.5,
              "&:hover": {
                bgcolor: "#f9fafb",
              },
              transition: "background-color 0.2s ease",
            }}
          >
            <ListItemIcon sx={{ minWidth: 32 }}>
              <Avatar
                src="https://cdn.builder.io/api/v1/image/assets%2F0b5ad4e8e5f84db5a19db37317c1643d%2F79afaa309c38474ba6bc9b0f00dbac56?format=webp&width=800"
                alt="Educator"
                sx={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Educator"
              primaryTypographyProps={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#374151",
              }}
            />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
}
