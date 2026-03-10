import React from "react";
import { Box, Typography, Card, CardContent, Button, Grid } from "@mui/material";

const productData = [
  { id: 1, name: "Rice", price: 60, unit: "kg", image: "/Ricebag.jpg" },
  { id: 2, name: "Milk", price: 28, unit: "liter", image: "/milk.jpg" },
  { id: 3, name: "Apple", price: 120, unit: "kg", image: "/Apple.jpg" },
  { id: 4, name: "Pomegranate", price: 150, unit: "kg", image: "/pomegranate.jpg" },
  { id: 5, name: "Orange", price: 80, unit: "kg", image: "/orange.jpg" },
  { id: 6, name: "Tomato", price: 40, unit: "kg", image: "/Tomato.jpeg" },
  { id: 7, name: "Potato", price: 30, unit: "kg", image: "/potato.jpg" },
  { id: 8, name: "Onion", price: 35, unit: "kg", image: "/onion.jpg" },
  { id: 9, name: "Carrot", price: 50, unit: "kg", image: "/carrot.jpg" },
  { id: 10, name: "Cabbage", price: 28, unit: "kg", image: "/cabbage.jpg" },
  { id: 11, name: "Cauliflower", price: 45, unit: "kg", image: "/cauliflower.jpg" },
  { id: 12, name: "Spinach", price: 25, unit: "bunch", image: "/Spinach.jpg" }, 
  { id: 13, name: "Capsicum", price: 70, unit: "kg", image: "/capsicum.jpg" },
  { id: 14, name: "Brinjal", price: 40, unit: "kg", image: "/brinjal.jpg" },
  { id: 15, name: "Mango", price: 100, unit: "kg", image: "/mango.jpg" },
  { id: 16, name: "Banana", price: 70, unit: "kg", image: "/banana.jpg" },
];

function Products() {
  const cardHeight = 320;
  const cardWidth = 250;

  const productCards = productData.map((item) => (
    <Grid item key={item.id}>
      <Card
        sx={{
          width: cardWidth,
          height: cardHeight,
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          boxShadow: 3,
        }}
      >
        {/* Image */}
        <Box sx={{ width: "100%", height: 200, overflow: "hidden" }}>
          <Box
            component="img"
            src={item.image}
            alt={item.name}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Card Content */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "center",
            
          }}
        >
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.name}
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 1 }}>
              ₹{item.price} / {item.unit}
            </Typography>
          </Box>

          <Button variant="contained" color="success" size="small" fullWidth>
            ADD TO CART
          </Button>
        </CardContent>
      </Card>
    </Grid>
  ));

  return (
    <Box sx={{ py: 6, px: 6 , backgroundColor: "#faf5ed" }}>

      <Typography variant="h4" textAlign="center" fontWeight="bold" sx={{ mb: 5 }}>
        Fresh Products
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {productCards} 
      </Grid>

    </Box>
  );
}

export default Products;