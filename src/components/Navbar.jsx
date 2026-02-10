import React from 'react';
import logo from '../assets/logooos.png'; 
import { Search, ShoppingCart, User, MapPin, BadgePercent } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-none sticky top-0 z-50 w-screen font-sans left-0 shadow-sm">
      
      <div className="w-full px-2 md:px-12 lg:px-20 py-3 flex items-center justify-between">
        
        {/* --- 1. LOGO --- */}
       <div className="flex-shrink-0">
  <img 
    src={logo} 
    alt="POKAK" 
   
    className="h-10 md:h-20 lg:h-24 w-auto object-contain cursor-pointer transition-transform hover:scale-105" 
  />
</div>

        {/* --- 2. MIDDLE GROUP: Location + Search --- */}
        <div className="flex flex-1 items-center justify-center gap-2 md:gap-5 mx-1 md:mx-6">
          <div className="flex items-center gap-0.5 text-gray-800 font-bold cursor-pointer shrink-0">
            <MapPin size={16} className="text-gray-600" strokeWidth={2.5} />
            {/* Mobile-il location hide cheyyunnathaanu search bar-inu space kittan nallathu */}
            <span className="hidden md:inline text-sm">Location</span>
          </div>

          <div className="relative w-full max-w-[140px] sm:max-w-xs md:max-w-md lg:max-w-lg">
            <input 
              type="text" 
              placeholder='Search...' 
              className="w-full bg-[#f0f5f3] border-none rounded-full py-2 px-8 md:px-12 text-[10px] md:text-sm outline-none font-medium text-gray-700"
            />
            <Search className="absolute left-2.5 md:left-4 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
          </div>
        </div>

        {/* --- 3. ACTION ICONS: Mobile-ilum labels kaanum --- */}
        <div className="flex items-center gap-2.5 md:gap-8 lg:gap-10 shrink-0">
          
          {/* AI Icon */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="relative w-5 h-5 md:w-7 md:h-7 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="#14b814" strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0115.36-6.36" />
              </svg>
              <div className="absolute top-[-1px] right-[-1px]">
                <svg viewBox="0 0 24 24" fill="#14b814" className="w-2 md:w-4 h-2 md:h-4">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
            </div>
            <span className="text-[7px] md:text-[10px] font-bold text-gray-400 mt-0.5 uppercase">AI</span>
          </div>

          {/* Offers - Hidden class maatti */}
          <div className="flex flex-col items-center cursor-pointer group">
            <BadgePercent size={18} className="text-gray-700 md:w-6 md:h-6 group-hover:text-green-600" />
            <span className="text-[7px] md:text-[10px] font-bold text-gray-400 mt-0.5 uppercase">Offers</span>
          </div>

          {/* Cart - Hidden class maatti */}
          <div className="flex flex-col items-center cursor-pointer relative group">
            <div className="relative">
              <ShoppingCart size={18} className="text-gray-700 md:w-6 md:h-6 group-hover:text-green-600" />
              <span className="absolute -top-1 -right-1.5 bg-[#ff4d4d] text-white text-[7px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">1</span>
            </div>
            <span className="text-[7px] md:text-[10px] font-bold text-gray-400 mt-0.5 uppercase">Cart</span>
          </div>

          {/* Profile - Hidden class maatti */}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="bg-gray-200 rounded-full p-0.5 text-gray-600 group-hover:bg-gray-300">
              <User size={18} className="md:w-7 md:h-7" />
            </div>
            <span className="text-[7px] md:text-[10px] font-bold text-gray-400 mt-0.5 uppercase">Profile</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;