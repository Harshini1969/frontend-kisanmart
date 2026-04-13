import { Box, Typography } from "@mui/material";
import CartItems from "./CartItems";
import Summary from "./Summary";
import { useState } from "react";

function Cart() {
  const [subtotal, setSubtotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Box p={3}>
      <Typography variant="h5" mb={3} textAlign="center">
        Shopping Cart
      </Typography>

      <Box
        sx={{
          height:{ md: "65vh", xs: "auto" },
          display: "flex",
          gap: 2,
           overflow: "hidden",
          flexDirection: {
            xs: "column",   
            md: "row",   
          },

          alignItems: "stretch",
        }}
      >
        {/*  Cart Items */}
        <Box sx={{ flex: 2 }}>
          <CartItems
            setSubtotal={setSubtotal}
            setCartItems={setCartItems}
          />
        </Box>
     {/* summary */}
        <Box
          sx={{
            flex: 1,
            mt: { xs: 2, md: 0 },
          }}
        >
          <Summary
            subtotal={subtotal}
            cartItems={cartItems}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;