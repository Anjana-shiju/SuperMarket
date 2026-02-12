import React from 'react';

// Brand Logos Import
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

const TopBrands = () => {
  const brands = [
    { id: 1, logo: d1 },
    { id: 2, logo: d2 },
    { id: 3, logo: d3 },
    { id: 4, logo: d4 },
    { id: 5, logo: d5 },
    { id: 6, logo: d6 },
  ];

  return (
    <section className="w-full bg-[#F3F4F6] py-10">
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-1">
        <h2 className="text-[18px] md:text-[22px] font-black text-black mb-6 tracking-tight">
          Top Brands
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              // BORDER & RADIUS UPDATED: Figma Green Border
              className="bg-white border border-[#27AE60] rounded-[15px] 
                         flex items-center justify-center 
                         h-[90px] md:h-[130px] 
                         p-4 md:p-6 shadow-sm
                         transition-all hover:shadow-md cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt="Brand Logo" 
                className="max-h-[75%] max-w-[80%] object-contain"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Brand'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TopBrands;