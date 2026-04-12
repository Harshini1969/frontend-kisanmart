import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent } from "@mui/material";

function CustomerPayments() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BE_API_URL}/order`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    }).then(res => setOrders(res.data));
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
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

      <Typography variant="h5" mb={2}>
        My Payments
      </Typography>

      {orders.map((order) => {

        if (order.isCanceled) return null;

        const dateObj = new Date(order.createdAt || order.date);
        const orderDate = dateObj.toLocaleDateString("en-IN");
        const orderTime = dateObj.toLocaleTimeString("en-IN");

        const totalAmount =
          order.price ??
          order.products?.reduce(
            (sum, item) =>
              sum + (item.productId?.price || 0) * (item.count || 0),
            0
          ) ?? 0;

        return (
          <Card key={order._id} sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>

              <Typography sx={{ background: "#f1f1f1", p: 1, borderRadius: 2, mb: 1 }}>
                {orderDate} | {orderTime}
              </Typography>

              <Typography>
                Payment ID: {order.razorpay_payment_id || "N/A"}
              </Typography>

              <Typography>
                Order ID: {order.razorpay_order_id || "N/A"}
              </Typography>

              <Typography fontWeight="600">
                Amount: ₹ {totalAmount}
              </Typography>

            </CardContent>
          </Card>
        );
      })}

    </Box>
  );
}

export default CustomerPayments;