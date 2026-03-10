import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SpaIcon from "@mui/icons-material/Spa";
import PersonIcon from "@mui/icons-material/Person";

function WhyChooseKisanMart() {
  const features = [
    { title: "Direct from Farmers",
       icon: <PersonIcon sx={{ fontSize: 40, color: "#fff" }} />, 
       bgColor: "#4CAF50" 
    },
    { title: "Best Prices", 
      icon: <ShoppingBagIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
    { title: "Organic Products", 
      icon: <SpaIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
    { title: "Fast Delivery", 
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
  ];

  const featureCards = features.map((item, index) => {
    return (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Paper
          elevation={3}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            borderRadius: 2,
            backgroundColor: "#fff",
            height: 100, 
            width: 200,  
            margin: "0 auto",
          }}
        >
         <Box
            sx={{
              bgcolor: item.bgColor,
              width: 60,
              height: 60,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {item.icon}
        </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, color: "#2e4d21", textAlign: "center" }}
          >
            {item.title}
          </Typography>
        </Paper>
      </Grid>
    );
  });

  return (
    <Box sx={{ py: 6, backgroundColor: "#faf5ed", textAlign: "center" }}>
      
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#2e4d21" }}>
        Why Choose Kisan Mart?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {featureCards}
      </Grid>

    </Box>
  );
}

export default WhyChooseKisanMart;