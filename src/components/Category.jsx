import React from 'react';

import c1 from '../assets/div1.png';
import c2 from '../assets/div2.png';
import c3 from '../assets/div3.png';
import c4 from '../assets/div4.png';
import c5 from '../assets/div5.png';
import c6 from '../assets/div6.png';
import c7 from '../assets/div7.png';
import c8 from '../assets/div8.png';
import c9 from '../assets/div9.png';
import c10 from '../assets/div10.png';

const CategoryBar = () => {
  const categories = [
    { id: 1, name: "Groceries & Kitchen", img: c1 },
    { id: 2, name: "Baby & Kids", img: c2 },
    { id: 3, name: "Personal Care & Hygiene", img: c3 },
    { id: 4, name: "Groceries & Kitchen", img: c4 },
    { id: 5, name: "Groceries & Kitchen", img: c5 },
    { id: 6, name: "Groceries & Kitchen", img: c6 },
    { id: 7, name: "Groceries & Kitchen", img: c7 },
    { id: 8, name: "Groceries & Kitchen", img: c8 },
    { id: 9, name: "Groceries & Kitchen", img: c9 },
    { id: 10, name: "Groceries & Kitchen", img: c10 },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-6">
      
      {/* ---------- FIXED: Gap and Card Width ---------- */}
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-3">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-1.5 hover:shadow-md transition-all cursor-pointer w-full max-w-[110px] mx-auto"
          >
            {/* Category Name - Exact spacing */}
            <h3 className="text-[11px] md:text-[12px] font-semibold text-gray-800 text-center leading-tight h-8 flex items-center justify-center px-0.5 mb-1">
              {cat.name}
            </h3>
            
            {/* Image Container with Fixed Size */}
            <div className="w-full relative flex justify-center">
              {/* Green Arc - Exact position */}
              <div className="absolute bottom-0 left-0 w-full h-10 bg-[#e0f2e6] rounded-tl-2xl rounded-tr-2xl"></div>
              
              {/* Image - Fixed dimensions */}
              <div className="relative z-10 flex justify-center items-center">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;




