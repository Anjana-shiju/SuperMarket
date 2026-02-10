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
    /* Main Section Background: Gray aakki */
    <section className="w-full bg-[#F3F4F6] py-8">
      
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
        {/* Title: Clarity-kk vendi font size kurach koode kooti */}
        <h2 className="text-[16px] md:text-[19px] font-bold text-gray-900 mb-6">
          Top Brands
        </h2>

        {/* Grid: 3 columns on mobile, 6 on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div 
              key={brand.id} 
              /* Card background white aayi thanne nirthi */
              className="bg-white border border-gray-100 rounded-2xl 
                         flex items-center justify-center 
                         h-[85px] md:h-[120px] 
                         p-4 md:p-6 shadow-sm
                         transition-all hover:shadow-md hover:border-green-400 cursor-pointer"
            >
              <img 
                src={brand.logo} 
                alt="Brand Logo" 
                className="max-h-[80%] max-w-[85%] object-contain"
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