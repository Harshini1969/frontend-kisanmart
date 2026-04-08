import { Box, Grid, Stack, Switch, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

function OrderDetails({order,arr}) {

    const [isAccepted, setisAccepted] = useState(order.isAccepted);
    const [isShipped, setisShipped] = useState(order.isShipped);
    const [isDelivered, setisDelivered] = useState(order.isDelivered);
    const [isCanceled, setisCanceled] = useState(order.isCanceled);

  return (
<Grid
  size={{ xs: 12 }}
  sx={{
    border: "1px solid #ccc",
    borderRadius: 3,
    p: 3,
    mb: 3,
    backgroundColor: "#f9f9f9"
  }}
>
  {/* Top Section */}
  <Grid container spacing={2} alignItems="center" justifyContent="space-between">

    {/* Order Status */}
    <Grid item xs={12} md={6}>
      {isCanceled ? (
        <Typography color="error" fontWeight="bold">
          Order Cancelled
        </Typography>
      ) : (
        <Stack direction="row" spacing={3} flexWrap="wrap">

          <Stack direction="row" alignItems="center">
            <Switch
              checked={isAccepted}
              onChange={async () => {
                try {
                  await axios.put(
                    `${process.env.REACT_APP_BE_API_URL}/order/update/${order._id}`,
                    { isAccepted: true },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                      }
                    }
                  );
                  setisAccepted(true);
                } catch {
                  alert("Something went wrong");
                }
              }}
            />
            <Typography>Accept</Typography>
          </Stack>

          {!isAccepted && (
            <Stack direction="row" alignItems="center">
              <Switch
                checked={isCanceled}
                onChange={async () => {
                  try {
                    await axios.put(
                      `${process.env.REACT_APP_BE_API_URL}/order/update/${order._id}`,
                      { isCanceled: true },
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                      }
                    );
                    setisCanceled(true);
                  } catch {
                    alert("Something went wrong");
                  }
                }}
              />
              <Typography>Cancel</Typography>
            </Stack>
          )}

          <Stack direction="row" alignItems="center">
            <Switch
              checked={isShipped}
              onChange={async () => {
                try {
                  await axios.put(
                    `${process.env.REACT_APP_BE_API_URL}/order/update/${order._id}`,
                    { isShipped: true },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                      }
                    }
                  );
                  setisShipped(true);
                } catch {
                  alert("Something went wrong");
                }
              }}
            />
            <Typography>Shipped</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Switch
              checked={isDelivered}
              onChange={async () => {
                try {
                  await axios.put(
                    `${process.env.REACT_APP_BE_API_URL}/order/update/${order._id}`,
                    { isDelivered: true },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                      }
                    }
                  );
                  setisDelivered(true);
                } catch {
                  alert("Something went wrong");
                }
              }}
            />
            <Typography>Delivered</Typography>
          </Stack>

        </Stack>
      )}
    </Grid>

    {/* Order Date */}
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          border: "1px solid #ddd",
          p: 2,
          borderRadius: 2,
          background: "#fff",
          textAlign: "center"
        }}
      >
        <Typography>{order.orderDate}</Typography>
        <Typography>{order.orderTime}</Typography>
      </Box>
    </Grid>

  </Grid>

  {/* Address + Price */}
  <Box
    sx={{
      mt: 2,
      border: "1px solid #ddd",
      borderRadius: 2,
      p: 2,
      backgroundColor: "#fff"
    }}
  >
  
    <Typography sx={{ mt: 1 }}>
      {order.name} <br />
      {order.phone} <br />
      {order.address} <br />
      {order.pincode}
    </Typography>
  </Box>

  {/* Product List */}
  <Box mt={2}>
    {arr}
  </Box>

</Grid>
  )
}

export default OrderDetails




