import React from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  
const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Products", icon: <StoreIcon /> },
  { text: "Categories", icon: <CategoryIcon /> },
  { text: "Orders", icon: <ShoppingCartIcon /> },
  { text: "Customers", icon: <PeopleIcon /> },
  { text: "Reports", icon: <BarChartIcon /> },
  { text: "Settings", icon: <SettingsIcon /> }
];


  let menuList = menuItems.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: 2,
        marginBottom: 2,
        borderRadius: 2,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#a0c953"
        }
      }}
    >
      {item.icon}

      <Typography variant="body1">
        {item.text}
      </Typography>
    </Box>
  ));

  return (
    <Box
      sx={{
        width: 220,
        height: "100vh",
        background:" #2e4d21",
        color: "white",
        padding: 3,
        marginTop: 2,      
        marginBottom: 2,        
        marginLeft: 2,        
        borderRadius: 5
      }}
    >
     
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Kisan Mart
      </Typography>

           {menuList}
      {/* Logout */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: 2,
          cursor: "pointer",
        }}
      >
        <LogoutIcon sx={{ color: "yellow" }} />

        <Typography>
          Logout
        </Typography>
      </Box>
    </Box>
  );
}

export default Sidebar;