import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import axios from "axios";
import { Typography,Box,Grid,Card,CardContent,Stepper,Step,StepLabel} from "@mui/material";

function Orders() {

  const [orders, setorders] = useState([]);

  const getOrderStatus = (order) => {
    if (order.isCanceled) {
      return { label: "Cancelled", color: "error.main", step: -1 };
    }
    if (order.isDelivered) {
      return { label: "Delivered", color: "success.main", step: 3 };
    }
    if (order.isShipped) {
      return { label: "Shipped", color: "primary.main", step: 2 };
    }
    if (order.isAccepted) {
      return { label: "Accepted", color: "secondary.main", step: 1 };
    }
    return { label: "Pending", color: "warning.main", step: 0 };
  };

  async function getOrders() {
    try {
      let res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}/order`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      setorders(res.data);

    } catch (err) {
      console.log("Fetch orders error:", err);
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  let products = orders.map((order) => {

    if (!order.products) return null;
    const { label: status, color, step } = getOrderStatus(order);
    const steps = ["Accepted", "Shipped", "Delivered"];
    let arr = order.products.map((item) => {
      if (!item.productId) return null;
      let totalPrice =
        (item.productId?.price || 0) * (item.count || 0);

      return (
        <OrderCard
          key={item._id}
          count={item.count}
          category={item.productId?.category}
          image={item.productId?.image}
          name={item.productId?.name}
          price={item.productId?.price}
          units={item.productId?.unit}
          totalPrice={totalPrice}
        />
      );
    });

    const dateObj = new Date(order.date);

    const orderDate = dateObj.toLocaleDateString("en-IN");
    const orderTime = dateObj.toLocaleTimeString("en-IN");

    return (
      <Grid item xs={12} key={order._id}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 3
          }}
        >
          <CardContent>

            {/* ✅ STEPPER */}
            {step !== -1 && (
              <Stepper activeStep={step - 1} alternativeLabel sx={{ mb: 2 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            )}

            {/* ✅ DATE */}
            <Typography
              variant="subtitle2"
              sx={{
                display: "inline-block",
                background: "#f1f1f1",
                p: 1,
                borderRadius: 2,
                mb: 1
              }}
            >
              {orderDate} | {orderTime}
            </Typography>

            {/* ✅ STATUS */}
            <Typography
              sx={{
                fontWeight: "bold",
                color: color,
                mb: 2
              }}
            >
              Status: {status}
            </Typography>

            {/* ✅ PRODUCTS */}
            <Box>
              {arr}
            </Box>

          </CardContent>
        </Card>
      </Grid>
    );
  });

  return (
    <Box
      sx={{
        flex:1,
        height: "78vh",
        overflowY: "auto",
        px: 3,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      <Grid container spacing={3} mt={1}>
        {products}
      </Grid>
    </Box>
  );
}

export default Orders;