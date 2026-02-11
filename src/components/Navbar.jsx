import React from 'react';
import logo from '../assets/logooos.png'; 
import { Search, ShoppingCart, User, MapPin, BadgePercent } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full font-sans shadow-xs">
      
      <div className="w-full px-4 md:px-10 lg:px-16 xl:px-20 py-2.5 flex items-center justify-between">
        
        {/* ---------- Logo ---------- */}
        <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt="POKAK TECHNOLOGIES PVT LTD" 
            className="h-9 md:h-12 lg:h-20 w-auto object-contain" 
          />
        </div>

        {/* ---------- Location + Search (Center) ---------- */}
        <div className="flex flex-1 items-center justify-center gap-1 md:gap-3 mx-2 md:mx-6">
          
          {/* Location */}
          <div className="flex items-center gap-1 text-gray-800 font-semibold cursor-pointer shrink-0 bg-gray-50 px-2 py-1.5 rounded-md">
            <MapPin size={18} className="text-gray-600" strokeWidth={2} />
            <span className="hidden sm:inline text-xs md:text-sm font-medium">Location</span>
          </div>

          {/* ---------- SEARCH BAR - ROUNDED FULL (Figma exact) ---------- */}
          <div className="relative w-full max-w-[200px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <input 
              type="text" 
              placeholder='Search for "Ice Cream"' 
              className="w-full bg-[#f3f7f5] border border-gray-200 rounded-full py-2 px-8 text-xs md:text-sm outline-none focus:border-green-400 placeholder:text-gray-500"
            />
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500" size={16} strokeWidth={2} />
          </div>
        </div>

        {/* ---------- Right Icons ---------- */}
        <div className="flex items-center gap-4 md:gap-6 lg:gap-8 shrink-0">
  
  {/* 1. AI Icon - Matching image_c35ab8.png */}
  <div className="flex flex-col items-center cursor-pointer group">
    <div className="relative h-[24px] flex items-center justify-center">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {/* Main Green Circle */}
        <circle cx="12" cy="13" r="8" stroke="#00A67E" strokeWidth="2" />
        {/* Sparkle Icon */}
        <path d="M17 3L18.2 5.8L21 7L18.2 8.2L17 11L15.8 8.2L13 7L15.8 5.8L17 3Z" fill="#00A67E" />
      </svg>
    </div>
    <span className="text-[10px] md:text-[12px] font-black text-black mt-1">AI</span>
  </div>

  {/* 2. Offers - Matching image_c36122.png */}
  <div className="flex flex-col items-center cursor-pointer group">
    <div className="h-[24px] flex items-center justify-center">
      <BadgePercent size={22} className="text-black" strokeWidth={2} />
    </div>
    <span className="text-[10px] md:text-[12px] font-black text-black mt-1">Offers</span>
  </div>

  {/* 3. Cart - With Red Notification */}
  <div className="flex flex-col items-center cursor-pointer relative group">
    <div className="relative h-[24px] flex items-center justify-center">
      <ShoppingCart size={22} className="text-black" strokeWidth={2} />
      {/* Red Dot Badge */}
      <span className="absolute -top-1 -right-2 bg-[#E11D48] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center border border-white">
        1
      </span>
    </div>
    <span className="text-[10px] md:text-[12px] font-black text-black mt-1">Cart</span>
  </div>

  {/* 4. Profile - Grey Circle */}
  <div className="flex flex-col items-center cursor-pointer group">
    <div className="h-[24px] flex items-center justify-center">
      <div className="bg-[#D1D5DB] rounded-full p-0.5">
        <User size={20} className="text-white" fill="currentColor" />
      </div>
    </div>
    <span className="text-[10px] md:text-[12px] font-black text-black mt-1">Profile</span>
  </div>

</div>
      </div>
    </nav>
  );
};

export default Navbar;