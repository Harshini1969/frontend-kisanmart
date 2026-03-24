import { Card, CardContent, Typography, Box, Divider, TextField, Button } from "@mui/material";

function Summary() {
  return (
    <Card sx={{ display: "flex", borderRadius: 4, flex: 1 }}>
      <CardContent>

        <Typography variant="h6" mb={2}  textAlign="center">
          Order Summary
        </Typography>

        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Subtotal</Typography>
          <Typography>₹ 565</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography>Discount (-20%)</Typography>
          <Typography color="error">-₹ 113</Typography>
        </Box>

        <Box 
          display="flex"
          justifyContent="space-between" 
          mb="2px"
         >
          <Typography>Delivery Fee</Typography>
          <Typography>₹ 15</Typography>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Box display="flex" justifyContent="space-between" mb="3px"  >
          <Typography fontWeight={600}>Total</Typography>
          <Typography fontWeight={600}>₹ 467</Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="4px" mb="4px">

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
        >
          Go to Checkout →
        </Button>

      </CardContent>
    </Card>
  );
}

export default Summary;