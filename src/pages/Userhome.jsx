import React from 'react';
import Navbar from '../components/Navbar';
import CategoryBar from '../components/Category';
import PromoBanner from '../components/Promobanner';
import Features from '../components/Features';
import ProductSection from '../components/Product';
import TopBrands from '../components/Brands';
import CombinedCategories from '../components/Grocerry';
import Footer from '../components/Footer';

const UserHome = () => {
  return (
    <div > 
      
      {/* Navbar full width aayi nilkkum */}
      <Navbar />
      
      {/* MAIN CONTENT WRAPPER:
        - max-w-[1300px]: Ellam 1300px width-il limit cheyyunnu.
        - mx-auto: ITHU MATHRAME RIGHT SIDE GAP MAATTU! Content-ine center aakkum.
        - w-full: Mobile-il full width kittaunnu.
      */}
      
        <CategoryBar/>
        <PromoBanner/>
        <Features/>
        <ProductSection/>
        <TopBrands/>
        <CombinedCategories/>
      
      
      <Footer/>
      
    </div>
  );
};

export default UserHome;