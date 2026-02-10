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
    
    <div className="w-full min-h-screen bg-[#F3F4F6] flex flex-col">
      
     
      <Navbar />
      
      
      <main className="flex-grow">
        <CategoryBar/>
        <PromoBanner/>
        <Features/>
        <ProductSection/>
        <TopBrands/>
        <CombinedCategories/>
      </main>
      
      
      <Footer/>
      
    </div>
  );
};

export default UserHome;