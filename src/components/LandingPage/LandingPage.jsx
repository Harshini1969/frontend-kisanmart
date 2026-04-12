// import React from 'react';
// import Herosection from '../Homepage/Herosection';
// import WhyChooseOurMart from '../Homepage/WhyChooseOurMart ';
// import Footer from '../Homepage/Footer';
// import Appbar from './AppBar';
// import Categories from '../Homepage/Categories';
// import LandingProducts from '../Homepage/LandingProducts';
// import CustomerReviews from '../Homepage/Review';

// function LandingPage() {
//   return (
//     <div>  
//       <Appbar/>
//       <Herosection />

//       <h1>TEST PRODUCTS</h1>
//       <LandingProducts />
//       <Categories/>
//       <WhyChooseOurMart />
//       <CustomerReviews/>
//       <Footer/>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import HeroSection from '../Homepage/Herosection';
import WhyChooseOurMart from '../Homepage/WhyChooseOurMart ';
import Footer from '../Homepage/Footer';
import Appbar from './AppBar';
import Categories from '../Homepage/Categories';
import LandingProducts from '../Homepage/LandingProducts';
import CustomerReviews from '../Homepage/Review';

function LandingPage() {
  return (
    <div style={{ overflowX: "hidden" }}>

      <Appbar />

      {/* HERO */}
      <HeroSection />

      {/* SECTIONS */}
      <LandingProducts />
      <Categories />
      <WhyChooseOurMart />
      <CustomerReviews />

      <Footer />

    </div>
  );
}

export default LandingPage;