import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {Box,IconButton,TextField,Select,MenuItem,InputAdornment,Badge,Drawer,List,
  ListItem,ListItemButton,ListItemText,Button} from "@mui/material";

import { useNavigate } from "react-router-dom";

function Header({
  search = "",
  setSearch,
  category,
  setCategory,
  cartCount = 0
}) {
  const [user, setUser] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();

  function goToCart() {
    navigate("/customer/cart");
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch(
          `${process.env.REACT_APP_BE_API_URL}/customer/profile`,
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        if (!res.ok) throw new Error("Failed");

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <Box
        sx={{
          position: "relative", 
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          m: 1,
          borderRadius: "20px",
          background: "#ffffff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="/logo.png" alt="logo" style={{ width: 35 }} />
          <span style={{ fontWeight: "bold" }}>Kisan Mart</span>
        </Box>

        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 1,
            alignItems: "center",
            width: { xs: "70%", sm: "50%", md: "40%" }, 
            borderRadius:"10px",
          }}
        >
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            size="small"
            sx={{
              display: { xs: "none", md: "block" },
              background: "white",
              borderRadius: "10px",
              minWidth: 100,
              "& .MuiSelect-select": {
                padding: "6px 10px"
              }
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Fruits">Fruits</MenuItem>
            <MenuItem value="Vegetables">Vegetables</MenuItem>
            <MenuItem value="Grains">Grains</MenuItem>
            <MenuItem value="Dairy">Dairy</MenuItem>
          </Select>

          {/* Search */}
          <TextField
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            size="small"
            fullWidth
            sx={{
              background: "white",
              borderRadius: "20px",
              "& .MuiInputBase-root": {
                height: "34px",
                fontSize: "14px"
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ fontSize: "16px" }} />
                </InputAdornment>
              )
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Badge badgeContent={cartCount} color="error">
            <ShoppingCartIcon
              onClick={goToCart}
              sx={{ cursor: "pointer" }}
            />
          </Badge>

          <IconButton onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Box>

      <Drawer
        anchor="right"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <Box sx={{ width: 260 }}>
          <Box sx={{ p: 2 }}>
            <strong>{user?.name || "User"}</strong>
            <div>{user?.email}</div>
          </Box>

          <List>
            {[
              { text: "Home", path: "/" },
              { text: "Products", path: "/products" },
              { text: "Categories", path: "/categories" },
              { text: "Cart", path: "/customer/cart" }
            ].map((item, i) => (
              <ListItem key={i} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpenMenu(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 2 }}>
            <Button
              startIcon={<PowerSettingsNewIcon />}
              color="error"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
}

export default Header;