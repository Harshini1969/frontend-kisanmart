import React from "react";
import { Box, Grid, Typography, Rating } from "@mui/material";

function CustomerReviews() {
  const reviews = [
    {
      name: "Ravi Kumar",
      text: "Fresh vegetables and fruits delivered right from the farm. Excellent service!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Affordable prices and super fast delivery. Highly recommend Kisan Mart!",
      rating: 4,
    },
    {
      name: "Anil Verma",
      text: "Organic products that truly make a difference. Very satisfied with the quality.",
      rating: 4,
    },
  ];

 const reviewCards = reviews.map((item, index) => {
  return (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Box
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 2,
          backgroundColor: "#ffffff",
          minHeight: 150,
          maxWidth: 250,
          margin: "0 auto",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
          {item.name}
        </Typography>

        {/* rating */}
        <Rating value={item.rating} 
        readOnly sx={{ mb: 2, color: "#4CAF50" }}
         />
        <Typography variant="body1" sx={{ color: "#555", textAlign: "center" }}>
          "{item.text}"
        </Typography>
      </Box>
    </Grid>
  );
});

  return (
    <Box sx={{ py: 6, backgroundColor: "#faf5ed", textAlign: "center" }}>

      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "#2e4d21" }}>
        What Our Customers Say
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviewCards}
      </Grid>
      
    </Box>
  );
}

export default CustomerReviews;