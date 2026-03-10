import React from 'react';
import Herosection from '../Homepage/Herosection';
import Products from '../Homepage/Products';
import WhyChooseOurMart from '../Homepage/WhyChooseOurMart ';
import Review from '../Homepage/Review';
import Footer from '../Homepage/Footer';

function LandingPage() {
  return (
    <div>
      <Herosection />
      <Products />
      <WhyChooseOurMart />
      <Review/>
      <Footer/>
    </div>
  );
}

export default LandingPage;