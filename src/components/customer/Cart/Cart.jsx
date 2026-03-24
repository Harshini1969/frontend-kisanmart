import { Box, Typography } from "@mui/material";
import CartItems from "./CartItems";
import Summary from "./Summary";

function Cart() {
  return (
    <Box p={3}>
      <Typography variant="h5" mb={3}  textAlign="center">
        Shopping Cart
      </Typography>

      <Box
        display="flex"
        flexDirection="row" 
        gap="10px"         
        alignItems="flex-start"
      >
        <CartItems />
        <Summary />
      </Box>
    </Box>
  );
}

export default Cart;