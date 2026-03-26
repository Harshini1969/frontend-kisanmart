import React from 'react';
import { Box, Grid, Typography, Paper } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";                 
import GrainIcon from "@mui/icons-material/Grain";            
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage"; 

function Categories() {
  const features = [
    { 
      title: "Fruits & Vegetables",
      icon: <SpaIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
    { 
      title: "Grains", 
      icon: <GrainIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
    { 
      title: "Dairy", 
      icon: <EmojiFoodBeverageIcon sx={{ fontSize: 40, color: "#fff" }} />, 
      bgColor: "#4CAF50" 
    },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#faf5ed", textAlign: "center" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#2e4d21" }}>
        Categories
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((item, index) => (
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
                height: 120, 
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
        ))}
      </Grid>
    </Box>
  );
}

export default Categories;