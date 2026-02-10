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
    /* 1. bg-[#F3F4F6] (Gray) nalki, 2. h-screen maatti min-h-screen aakki */
    <div className="w-full min-h-screen bg-[#F3F4F6] flex flex-col">
      
      {/* Navbar ippo white background-il separate aayi nilkum */}
      <Navbar />
      
      {/* Baaki sections ellam gray background-il neat aayi varum */}
      <main className="flex-grow">
        <CategoryBar/>
        <PromoBanner/>
        <Features/>
        <ProductSection/>
        <TopBrands/>
        <CombinedCategories/>
      </main>
      
      {/* Footer vibrant green-il perfect finishing nalkum */}
      <Footer/>
      
    </div>
  );
};

export default UserHome;