import React from "react";
import { Box } from "@mui/material";

import Appbar from "./AppBar";
import HeroSection from "../Homepage/Herosection";
import LandingProducts from "../Homepage/LandingProducts";
import Categories from "../Homepage/Categories";
import WhyChooseOurMart from "../Homepage/WhyChooseOurMart ";
import CustomerReviews from "../Homepage/Review";
import Footer from "../Homepage/Footer";

function LandingPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "#f1f1f1",
        },
      }}
    >

      
      <Appbar />
      <HeroSection /> 
      <LandingProducts />
      <Categories />
      <WhyChooseOurMart />
      <CustomerReviews />
      <Footer />


    </Box>
  );
}

export default LandingPage;