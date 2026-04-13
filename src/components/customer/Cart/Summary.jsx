// import {Card,CardContent,Typography,Box,Divider,TextField,Button} from "@mui/material";
// import axios from "axios";
// import { useState } from "react";

// function Summary({ subtotal, cartItems }) {

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [pincode, setPincode] = useState("");

//   async function handlePayment() {

//     try {
//       const res = await axios.post(
//         `${process.env.REACT_APP_BE_API_URL}/payment/create-order`,
//         { 
//           amount: subtotal
//         }
//       );

//       const data = res.data;
//       const options = {

//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: data.amount,
//         currency: "INR",
//         order_id: data.id,

//         //  ADDED 
//         description: `Total Amount: ₹ ${subtotal}`,

//         handler: async function (response) {

//           try {

//             await axios.post(
//               `${process.env.REACT_APP_BE_API_URL}/order/save`,
//               {
//                 name,
//                 phone,
//                 address,
//                 pincode,

//                 products: cartItems.map((item) => ({
//                   productId: item.productId._id,
//                   count: item.count
//                 })),

//                 razorpay_order_id: response.razorpay_order_id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 price: subtotal

//               },
//               {
//                 headers: {
//                   Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//               }
//             );

//             //   show paid amount
//             alert(`Payment Successful! Amount Paid: ₹ ${subtotal}`);

//             //  CLEAR CART AFTER ORDER
//             await axios.delete(
//               `${process.env.REACT_APP_BE_API_URL}/cart/clear`,
//               {
//                 headers: {
//                   Authorization: `Bearer ${localStorage.getItem("token")}`
//                 }
//               }
//             );

//             //  RESET FORM
//             setName("");
//             setPhone("");
//             setAddress("");
//             setPincode("");

//           } catch (err) {
//             console.log(err);
//           }

//         },

//         prefill: {
//           name: name,
//           email: "test@gmail.com",
//           contact: phone
//         },

//         theme: {
//           color: "#3399cc"
//         }
//       };

//       const razor = new window.Razorpay(options);
//       razor.open();

//     } catch (err) {
//       console.log(err);
//     }

//   }

//   return (

//     <Card
//       sx={{
//         display: "flex",
//         borderRadius: 4,
//         flex: 1,
//         maxHeight: { xs: "none", md: "70vh" },  
//         overflowY: { xs: "visible", md: "auto" },
//         pr:2,
//         scrollbarWidth: "none",     
//         "&::-webkit-scrollbar": {
//           display: "none"
//         }
//       }}
//     >

//       <CardContent>

//         <Typography variant="h6" mb={2} textAlign="center">
//           Order Summary
//         </Typography>

//         <Box display="flex" justifyContent="space-between" mb={1}>
//           <Typography>Subtotal</Typography>
//           <Typography>₹ {subtotal}</Typography>
//         </Box>

//         <Divider sx={{ my: 2 }} />

//         <Box display="flex" justifyContent="space-between">
//           <Typography fontWeight={600}>Total</Typography>
//           <Typography fontWeight={600}>₹ {subtotal}</Typography>
//         </Box>

//         <Box display="flex" flexDirection="column" gap="10px" mt={2} pb={4}>

//           <Typography fontWeight={600}>Name</Typography>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Enter Name"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//           />

//           <Typography fontWeight={600}>Phone</Typography>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Enter Phone Number"
//             value={phone}
//             onChange={(e)=>setPhone(e.target.value)}
//           />

//           <Typography fontWeight={600}>Address</Typography>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Add Address"
//             value={address}
//             onChange={(e)=>setAddress(e.target.value)}
//             multiline
//             rows={3}
//           />

//           <Typography fontWeight={600}>Pincode</Typography>
//           <TextField
//             fullWidth
//             size="small"
//             placeholder="Enter Pincode"
//             value={pincode}
//             onChange={(e)=>setPincode(e.target.value)}
//           />

//         </Box>

//         <Button
//           variant="contained"
//           sx={{
//             mt: 1,
//             mb: 6,
//             borderRadius: 5,
//             bgcolor: "black",
//             "&:hover": { bgcolor: "#333" },
//           }}
//           onClick={handlePayment}
//         >
//           Place Order →
//         </Button>

//       </CardContent>

//     </Card>

//   );
// }

// export default Summary;



import { Card, CardContent, Typography, Box, Divider, TextField, Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function Summary({ subtotal, cartItems }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");

  async function handlePayment() {

    try {

      const res = await axios.post(
        `${process.env.REACT_APP_BE_API_URL}/payment/create-order`,
        {
          amount: subtotal
        }
      );

      const data = res.data;

      const options = {

        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: "INR",
        order_id: data.id,

        description: `Total Amount: ₹ ${subtotal}`,

        handler: async function (response) {

          try {

            await axios.post(
              `${process.env.REACT_APP_BE_API_URL}/order/save`,
              {
                name,
                phone,
                address,
                pincode,

                products: cartItems.map((item) => ({
                  productId: item.productId._id,
                  count: item.count
                })),

                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                price: subtotal
              },
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              }
            );

            alert(`Payment Successful! Amount Paid: ₹ ${subtotal}`);

            await axios.delete(
              `${process.env.REACT_APP_BE_API_URL}/cart/clear`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`
                }
              }
            );

            setName("");
            setPhone("");
            setAddress("");
            setPincode("");

          } catch (err) {
            console.log(err);
          }
        },

        prefill: {
          name: name,
          email: "test@gmail.com",
          contact: phone
        },

        theme: {
          color: "#3399cc"
        }
      };

      const razor = new window.Razorpay(options);
      razor.open();

    } catch (err) {
      console.log(err);
    }
  }

  return (

    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 4,
        flex: 1,

        // scroll height
        height: { xs: "25vh", md: "70vh" },

        overflowY: "auto",
        overflowX: "hidden",

        pr: 2,

        // hide scrollbar
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}
    >

      <CardContent
        sx={{
          flexGrow: 1
        }}
      >

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

        <Box display="flex" flexDirection="column" gap="10px" mt={2} pb={4}>

          <Typography fontWeight={600}>Name</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Typography fontWeight={600}>Phone</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Typography fontWeight={600}>Address</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Add Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            multiline
            rows={3}
          />

          <Typography fontWeight={600}>Pincode</Typography>
          <TextField
            fullWidth
            size="small"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

        </Box>

        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            mb: 4,
            borderRadius: 5,
            bgcolor: "black",
            "&:hover": { bgcolor: "#333" }
          }}
          onClick={handlePayment}
        >
          Place Order →
        </Button>

      </CardContent>

    </Card>
  );
}

export default Summary;