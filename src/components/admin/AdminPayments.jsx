import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Card, CardContent } from "@mui/material";

function AdminPayments() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getPayments();
  }, []);

  const getPayments = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BE_API_URL}/order/getAll`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      console.log("DATA:", res.data);
      setOrders(res.data);

    } catch (err) {
      console.error("Error fetching payments:", err);
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        height: "75vh",
        overflowY: "auto",
        px: 3,
      }}
    >

      <Typography variant="h5" mb={2}>
        Payments
      </Typography>

      {orders.map((order) => {

        if (!order) return null;

        //  DATE
        const dateObj = new Date(order.createdAt || order.date);
        const orderDate = dateObj.toLocaleDateString("en-IN");
        const orderTime = dateObj.toLocaleTimeString("en-IN");

        //  AMOUNT
        const totalAmount =
          order.price ??
          order.products?.reduce(
            (sum, item) =>
              sum + (item.productId?.price || 0) * (item.count || 0),
            0
          ) ?? 0;

        const isSuccess = !order.isCanceled;

        return (
          <Card key={order._id} sx={{ mb: 2, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>

              {/* USER */}
              <Typography fontWeight="600">
                User ID: {order.userId?._id || order.userId}
              </Typography>

              <Typography>
                Name: {order.userId?.name || "N/A"}
              </Typography>

              {/* DATE */}
              <Typography sx={{ mt: 1 }}>
                {orderDate} | {orderTime}
              </Typography>

              {/* STATUS */}
              <Typography
                sx={{
                  mt: 1,
                  fontWeight: "bold",
                  color: isSuccess ? "green" : "red"
                }}
              >
                {isSuccess ? "Payment Successful" : "Payment Failed"}
              </Typography>

              {/* PAYMENT DETAILS */}
              <Typography>
                Payment ID: {order.razorpay_payment_id || "N/A"}
              </Typography>

              <Typography>
                Order ID: {order.razorpay_order_id || "N/A"}
              </Typography>

              {/* AMOUNT */}
              <Typography fontWeight="600" mt={1}>
                Amount: ₹ {totalAmount}
              </Typography>

            </CardContent>
          </Card>
        );
      })}

    </Box>
  );
}

export default AdminPayments;