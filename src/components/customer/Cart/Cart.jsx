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
        display="flex"
        flexDirection="row"
        gap="10px"
        alignItems="flex-start"
      >
        <CartItems
          setSubtotal={setSubtotal}
          setCartItems={setCartItems}
        />

        <Summary
          subtotal={subtotal}
          cartItems={cartItems}
        />
      </Box>

    </Box>
  );
}

export default Cart;