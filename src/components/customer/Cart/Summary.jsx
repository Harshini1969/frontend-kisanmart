import { Card, CardContent, Typography, Box, Divider, TextField, Button } from "@mui/material";

function Summary({ subtotal }) {

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
        >
          Go to Checkout →
        </Button>

      </CardContent>

    </Card>

  );
}

export default Summary;