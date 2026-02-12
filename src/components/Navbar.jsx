import React from 'react';
import logo from '../assets/logooos.png'; 
import { Search, ShoppingCart, User, MapPin, BadgePercent } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 w-full font-sans shadow-xs">
      
      {/* FIX: IVIDE SHREDIKKUKA! 
          'max-w-[1300px] mx-auto' nalkunnu. 
          Ithu vazhi Navbar content-um thazhe ulla Banner-um exact same vertical line-il align aakum.
      */}
      <div className="w-full max-w-[1300px] mx-auto px-4 py-2.5 flex items-center justify-between">
        
        {/* ---------- Logo ---------- */}
        <div className="flex-shrink-0">
          <img 
            src={logo} 
            alt="POKAK TECHNOLOGIES PVT LTD" 
            className="h-9 md:h-12 lg:h-16 w-auto object-contain" 
          />
        </div>

        {/* ---------- Location + Search (Center) ---------- */}
        <div className="flex flex-1 items-center justify-center gap-1 md:gap-3 mx-2 md:mx-6">
          <div className="flex items-center gap-1 text-gray-800 font-semibold cursor-pointer shrink-0 bg-gray-50 px-2 py-1.5 rounded-md">
            <MapPin size={18} className="text-gray-600" strokeWidth={2} />
            <span className="hidden sm:inline text-xs md:text-sm font-medium">Location</span>
          </div>

          <div className="relative w-full max-w-lg">
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
      {/* Ningal thanna custom SVG */}
      <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M11.6836 5.66992C12.2357 5.67013 12.6836 6.11776 12.6836 6.66992C12.6835 7.222 12.2356 7.66972 11.6836 7.66992H11.3379C6.18084 7.67011 2.00008 11.8507 2 17.0078C2.0001 22.1649 6.18086 26.3455 11.3379 26.3457H12.0283C17.1855 26.3457 21.3661 22.165 21.3662 17.0078C21.3663 16.4557 21.8142 16.008 22.3662 16.0078C22.9184 16.0078 23.3661 16.4556 23.3662 17.0078C23.3661 23.2696 18.2901 28.3457 12.0283 28.3457H11.3379C5.07628 28.3455 9.84402e-05 23.2694 0 17.0078C7.52492e-05 10.7462 5.07627 5.67011 11.3379 5.66992H11.6836ZM21.7803 0C22.7373 3.14502 25.1928 5.6499 28.3311 6.71582C25.1924 7.78171 22.7372 10.2881 21.7803 13.4336C20.8234 10.2884 18.3689 7.78176 15.2305 6.71582C18.3686 5.64986 20.8233 3.14492 21.7803 0Z" 
          fill="#27AE60" 
        />
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