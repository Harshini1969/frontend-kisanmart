import { Card, CardContent, Typography, Box, Divider, TextField, Button } from "@mui/material";
import axios from 'axios';

function Summary({ subtotal }) {

 async function handlePayment() {

  try {

    let res = await axios.post(
      `${process.env.REACT_APP_BE_API_URL}/payment/create-order`,
      { amount: subtotal }
    );

    const data = res.data;

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: "INR",
      order_id: data.id,

      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
      },

      prefill: {
        name: "harshini",
        email: "test@gmail.com",
        contact: "9999999999"
      },

      theme: {
        color: "#3399cc"
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();

  } catch (err) {
    console.log(err);
  }

}
  return (

    <Card sx={{ display: "flex", borderRadius: 4, flex: 1 }}>
      <CardContent>

        <Typography variant="h6" mb={2} textAlign="center">
          Order Summary
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Subtotal</Typography>
          <Typography>₹ {subtotal}</Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box display="flex" justifyContent="space-between">
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>₹ {subtotal}</Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="4px" mt={2}>
          <Typography fontWeight={600}>Address</Typography>

          <TextField
            fullWidth
            size="small"
            placeholder="Add Address"
            multiline
            rows={4}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 2,
            borderRadius: 5,
            bgcolor: "black",
            "&:hover": { bgcolor: "#333" },
          }}

           onClick={handlePayment}
        >
          Place Order →
        </Button>

      </CardContent>

    </Card>

  );
}

export default Summary;