import { Box, Card, Divider, Typography } from "@mui/material";

function OrderCard({ image, name, price, count, totalPrice, units }) {
  return (
    <Card sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: 70,
            height: 70,
            objectFit: "cover",
            borderRadius: 2,
            mr: 2
          }}
        />

        {/* Name */}
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight="bold">{name}</Typography>
          <Typography variant="body2">₹{price}</Typography>
        </Box>

        {/* Qty */}
        <Box sx={{ width: 120, textAlign: "center" }}>
          <Typography>Qty: {count} {units}</Typography>
        </Box>

        {/* Total */}
        <Box sx={{ width: 80, textAlign: "right" }}>
          <Typography fontWeight="bold">₹{totalPrice}</Typography>
        </Box>
      </Box>

      {/* FULL WIDTH DIVIDER */}
      <Divider sx={{ width: "100%" }} />
    </Card>
  );
}

export default OrderCard;


