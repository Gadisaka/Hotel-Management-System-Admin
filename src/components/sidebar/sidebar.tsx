import { Box, Typography, Stack, Paper, IconButton, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  Domain,
  Dashboard,
  Book,
  Bed,
  Badge,
  Person,
  Settings,
} from "@mui/icons-material";
import { useState } from "react";

export default function Sidebar() {
  const location = useLocation();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isSmallScreen);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    cursor: "pointer",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  if (isSmallScreen) {
    return null; // Hide the sidebar on small screens
  }

  return (
    <>
      {isSmallScreen && (
        <IconButton
          sx={{ position: "absolute", top: 16, left: 16 }}
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <CloseIcon /> : <Menu />}
        </IconButton>
      )}
      {isSidebarOpen && (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            width: "250px",
            flexDirection: "column",
            gap: 5,
            padding: 2,
            boxShadow: 3,
            bgcolor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Domain sx={{ color: "primary.light", fontSize: 40 }} />
            <Typography variant="h3" color="primary.light">
              _Dotel
            </Typography>
          </Box>

          <Stack spacing={2} sx={{ width: "100%" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/" ? "primary.light" : "inherit",
                  color: location.pathname === "/" ? "#fff" : "inherit",
                }}
              >
                <Dashboard />
                <Typography variant="button">Dashboard</Typography>
              </Item>
            </Link>

            <Link to="/bookings" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/bookings"
                      ? "primary.light"
                      : "inherit",
                  color: location.pathname === "/bookings" ? "#fff" : "inherit",
                }}
              >
                <Book />
                <Typography variant="button">Bookings</Typography>
              </Item>
            </Link>

            <Link to="/rooms" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/rooms"
                      ? "primary.light"
                      : "inherit",
                  color: location.pathname === "/rooms" ? "#fff" : "inherit",
                }}
              >
                <Bed />
                <Typography variant="button">Rooms</Typography>
              </Item>
            </Link>

            <Link to="/employees" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/employees"
                      ? "primary.light"
                      : "inherit",
                  color:
                    location.pathname === "/employees" ? "#fff" : "inherit",
                }}
              >
                <Badge />
                <Typography variant="button">Employees</Typography>
              </Item>
            </Link>

            <Link to="/customers" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/customers"
                      ? "primary.light"
                      : "inherit",
                  color:
                    location.pathname === "/customers" ? "#fff" : "inherit",
                }}
              >
                <Person />
                <Typography variant="button">Customers</Typography>
              </Item>
            </Link>

            <Link to="/settings" style={{ textDecoration: "none" }}>
              <Item
                sx={{
                  gap: 2,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 5,
                  backgroundColor:
                    location.pathname === "/settings"
                      ? "primary.light"
                      : "inherit",
                  color: location.pathname === "/settings" ? "#fff" : "inherit",
                }}
              >
                <Settings />
                <Typography variant="button">Settings</Typography>
              </Item>
            </Link>
          </Stack>
        </Box>
      )}
    </>
  );
}
