import { Box, Typography, IconButton } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";

function CartItem({ item, onDelete }) {
  
  function handleClick() {
    onDelete(item.id); 
  }

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" p={1}>
    
      <Box display="flex" gap={2}>
        <Box
          component="img"
          src="/logo.png"
          alt={item.title}
          sx={{ width: 80, height: 80, borderRadius: 2 }}
        />
        <Box>
          <Typography fontWeight={600}>{item.title}</Typography>
          <Typography variant="body2">Size: {item.size}</Typography>
          <Typography variant="body2">Color: {item.color}</Typography>
          <Typography mt={1} fontWeight={600}>
            ₹ {item.price}
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" gap={1}>
        <Box
          display="flex"
          alignItems="center"
          bgcolor="#f5f5f5"
          borderRadius={2}
          px={1}
        >
          <IconButton size="small">
            <Remove />
          </IconButton>

          <Typography mx={1}>1</Typography>

          <IconButton size="small">
            <Add />
          </IconButton>
        </Box>

        <IconButton color="error" onClick={handleClick}>
          <Delete />
        </IconButton>
      </Box>
    </Box>
  );
}

export default CartItem;