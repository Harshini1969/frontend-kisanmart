import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, Box, Typography } from '@mui/material';
import OrderCard from '../../customer/CustomerOrders/OrderCard';
import OrderDetails from './OrderDetails';

function AdmminOrders() {

  const [orders, setorders] = useState([]);

  async function getOrders() {
    let res = await axios.get(
      `${process.env.REACT_APP_BE_API_URL}/order/getAll`, 
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    setorders(res.data);
  }

  let products = orders.map((order, ind) => {

    // TOTAL CALCULATION
    const totalAmount =
      order.price ??
      order.products.reduce(
        (sum, item) =>
          sum + (item.productId?.price || 0) * (item.count || 0),
        0
      );

    let arr = order.products.map((item) => {

      if (!item.productId) return null; 

      let totalPrice = item.productId.price * item.count;

      return (
        <OrderCard
          count={item.count}
          category={item.productId.category}
          image={item.productId.image}
          name={item.productId.name}
          price={item.productId.price}
          units={item.productId.unit}
          totalPrice={totalPrice}
          key={item._id}
        />
      )
    })

    // DATE
    const dateObj = new Date(order.createdAt || order.date);
    const orderDate = dateObj.toLocaleDateString('en-IN');
    const orderTime = dateObj.toLocaleTimeString('en-IN');

    order.orderDate = orderDate;
    order.orderTime = orderTime;

    return (
      <Grid item xs={12} key={ind}>

        {/*  PAYMENT DETAILS */}
        {order.isCanceled ? (
          <Typography color="error" fontWeight="600">
            Payment not available (Order Cancelled)
          </Typography>
        ) : (
          <Box>
            <Typography>
              Payment ID: {order.razorpay_payment_id || "N/A"}
            </Typography>

            <Typography>
              Order ID: {order.razorpay_order_id || "N/A"}
            </Typography>

            <Typography fontWeight="600">
              Total: ₹ {totalAmount}
            </Typography>
          </Box>
        )}

        <OrderDetails order={order} arr={arr}/>
      </Grid>
    );
  });

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <Box
      sx={{
        height: "75vh",
        overflowY: "auto",
        px: 2,
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >
      <Grid container spacing={2} mt={2}>
        {products}
      </Grid>
    </Box>
  )
}

export default AdmminOrders;