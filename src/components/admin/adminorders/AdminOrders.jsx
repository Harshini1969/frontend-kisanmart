import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Grid, Box } from '@mui/material';
import OrderCard from '../../customer/CustomerOrders/OrderCard';
import OrderDetails from './OrderDetails';

function AdmminOrders() {

  const [orders, setorders] = useState([]);

  async function getOrders() {
    let res = await axios.get(`${process.env.REACT_APP_BE_API_URL}/order/getAll`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );
    setorders(res.data);
  }

  let products = orders.map((order, ind) => {
  let arr = order.products.map((item) => {
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

  const dateObj = new Date(order.date);

  const orderDate = dateObj.toLocaleDateString('en-IN');
  const orderTime = dateObj.toLocaleTimeString('en-IN');

  order.orderDate = orderDate;
  order.orderTime = orderTime;

  return (
    <Grid item xs={12} key={ind}>
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

        /* Hide Scrollbar */
        scrollbarWidth: "none", 
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >

      <Grid
        container
        spacing={2}
        mt={2}
      >
        {products}
      </Grid>

    </Box>

  )
}

export default AdmminOrders