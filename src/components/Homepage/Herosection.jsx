import React from "react";
import { Box, Typography, Button } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "80vh", 
        backgroundImage: "url(/Hero.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.35)",
        }}
      />

      {/* Hero Content */}
      <Box
        sx={{
          position: "relative",
          color: "#ffffff",
          maxWidth: "600px",
          ml: 8,
        }}
      >
        <Typography
          variant="h2"   
          fontWeight="bold"
          sx={{ mb: 2 }}
          
        >
          Welcome to KisanMart
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Fresh groceries directly from trusted farmers.
          Shop vegetables, fruits, and daily essentials with ease.
        </Typography>

         <Typography variant="body1" sx={{ mb: 3 }}>
          Healthy food sourced directly from trusted farmers.
          Quality vegetables, fruits, and essentials at the best prices.
          </Typography>
    
          <Typography variant="body1" sx={{ mb: 3 }}>
             Safe and reliable delivery to your doorstep.
             KisanMart brings the farm closer to your home.  
          </Typography>

        <Button variant="contained" color="success" sx={{ mr: 2 }}>
          Shop Now
        </Button>

        <Button
          variant="outlined"
          sx={{ color: "white", borderColor: "gray" }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;