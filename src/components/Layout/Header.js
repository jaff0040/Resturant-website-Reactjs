import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "../../styles/HeaderStyles.css";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const navClass = ({ isActive }) => (isActive ? "active" : "");

  // Menu drawer (mobile)
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height="70" width="200" />
      </Typography>

      <Divider />

      <ul className="mobile-navigation">
        <li>
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" className={navClass}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar component="nav" sx={{ bgcolor: "black" }}>
        <Toolbar>
          {/* Mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography
            color={"goldenrod"}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <img src={Logo} alt="logo" height="70" width="250" />
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className="navigation-menu">
              <li>
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className={navClass}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Spacer under AppBar */}
      <Toolbar />
    </Box>
  );
};

export default Header;
