import React from 'react';

import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri'; 
import pokakLogo from '../assets/lo.png'; 
const Footer = () => {
  return (
    
    <footer className="w-full bg-[#45b55e] text-white pt-16 pb-12 mt-70 mb-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8">
          
          
          <div className="flex flex-col gap-8 min-w-[300px]">
            <img 
              src={pokakLogo} 
              alt="POKAK TECHNOLOGIES" 
              className="w-[240px] md:w-[280px] object-contain" 
            />
            
            <div className="flex gap-6 items-center ml-1">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:opacity-80 transition-all" />
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:opacity-80 transition-all" />
              <RiTwitterXFill className="w-5 h-5 cursor-pointer hover:opacity-80 transition-all" />
              <FaLinkedinIn className="w-6 h-6 cursor-pointer hover:opacity-80 transition-all" />
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
          
            <div>
              <h3 className="text-[17px] font-bold mb-5 tracking-wide">Quick Links</h3>
              <ul className="space-y-3 text-[15px] font-medium opacity-95">
                <li className="cursor-pointer hover:text-gray-200">Home</li>
                <li className="cursor-pointer hover:text-gray-200">Orders</li>
                <li className="cursor-pointer hover:text-gray-200">Track Order</li>
                <li className="cursor-pointer hover:text-gray-200">Offers</li>
                <li className="cursor-pointer hover:text-gray-200">Cart</li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-[17px] font-bold mb-5 tracking-wide">Customer Care</h3>
              <ul className="space-y-3 text-[15px] font-medium opacity-95">
                <li className="cursor-pointer hover:text-gray-200">Help Center</li>
                <li className="cursor-pointer hover:text-gray-200">FAQ</li>
                <li className="cursor-pointer hover:text-gray-200">Contact Support</li>
                <li className="cursor-pointer hover:text-gray-200">Cancellation & Refund Policies</li>
                <li className="cursor-pointer hover:text-gray-200">Terms & Conditions</li>
                <li className="cursor-pointer hover:text-gray-200">Privacy & Policies</li>
              </ul>
            </div>

          </div>
        </div>

       
        <div className="mt-20 pt-8 border-t border-white/10">
          <p className="text-[14px] font-medium opacity-90">
            © 2025 Pokak Technologies Pvt Ltd
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;