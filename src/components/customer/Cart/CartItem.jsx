import { Grid, Stack, Box, Typography, IconButton } from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useState, useEffect } from "react";

function CartItem({ item, deleteItem, updateQuantity }) {

  let { id, name, category, price, unit, quantity, image } = item;
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  function dec() {
    if (count <= 1) return;

    const newCount = count - 1;
    setCount(newCount);
    updateQuantity(id, newCount);
  }

  function inc() {
    const newCount = count + 1;
    setCount(newCount);
    updateQuantity(id, newCount);
  }

  function handleDelete() {
    deleteItem(id);
  }

  let totalPrice = price * count;

  return (
    <Grid size={{ xs: 12 }} sx={{ padding: "10px" }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">

        <Stack direction="row" spacing={2} alignItems="center">

          <Box
            component="img"
            src={image}
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "10px"
            }}
          />

          <Box>
            <Typography fontWeight="600">{name}</Typography>
            <Typography variant="body2">{category}</Typography>

            <Typography>
              ₹ {price} / {unit}
            </Typography>

            <Typography fontWeight="600">
              Total : ₹ {totalPrice}
            </Typography>
          </Box>

        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>

          <IconButton onClick={dec}>
            <Remove />
          </IconButton>

          <Typography>{count}</Typography>

          <IconButton onClick={inc}>
            <Add />
          </IconButton>

          <IconButton color="error" onClick={handleDelete}>
            <Delete />
          </IconButton>

        </Stack>

      </Stack>
    </Grid>
  );
}

export default CartItem;