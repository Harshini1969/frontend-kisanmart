import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, Box, InputBase } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Logo from "./Logo";

function Appbar() {

  const [openDrawer, setOpenDrawer] = useState(false);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Products", path: "/" },
    { text: "Categories", path: "/" },
    { text: "About Us", path: "/" },
    { text: "Login", path: "/login" },
    { text: "Register", path: "/register" }
  ];

  let Items = menuItems.map((item, index) => (
    <Button
      key={index}
      component={Link}
      to={item.path}
      onClick={() => setOpenDrawer(false)}
      sx={{
         display: "block",
         width: "100%", 
         justifyContent: "flex-start",
         padding: 2 
        }}
    >
      {item.text}
    </Button>
  ));

  return (
    <div>
      <AppBar position="static">
        <Toolbar>

          {/* Mobile Menu */}
          <IconButton
            color="inherit"
            onClick={() => setOpenDrawer(true)}
            sx={{ display: { xs: "block", md: "none" }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Logo />

          <Typography variant="h6" sx={{ ml: 1 }}>
            KISAN MART
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              border: "1px solid white",
              borderRadius: 8,
              paddingLeft: "16px",
              marginLeft: 3,
              width: 300
            }}
          >
            <InputBase
              placeholder="Search ..."
              sx={{ flex: 1, color: "white" }}
            />
            <IconButton sx={{ color: "white" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.path}
              >
                {item.text}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }}>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 2
            }}
          >
            <Logo />
            <Typography variant="h6" sx={{ ml: 1 }}>
              KISAN MART
            </Typography>
          </Box>
          {Items}
        </Box>
      </Drawer>
    </div>
  );
}

export default Appbar;