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
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 md:gap-2">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="flex flex-col items-center bg-white border border-gray-100 transition-all cursor-pointer relative overflow-hidden"
            style={{
              width: '110px',      // Figma Width
              height: '120px',     // Figma Height
              borderRadius: '10px' // Figma Radius
            }}
          >
            {/* Category Name */}
            <h3 className="text-[10px] md:text-[11px] font-bold text-[#1E1E1E text-center leading-tight mt-3 mb-1 px-1 z-10">
              {cat.name}
            </h3>
            
            {/* Image & Arc Container */}
            <div className="w-full mt-auto relative flex justify-center items-end h-full">
              
              {/* 1. Image first (Z-Index low) */}
              <div className="relative z-0 flex justify-center items-center pb-1">
                <img 
                  src={cat.img} 
                  alt={cat.name} 
                  className="w-[50px] h-[70px] md:w-[80px] md:h-[80px] object-contain"
                />
              </div>

              {/* 2. GREEN ARC (Z-Index high, placed OVER the image bottom) */}
              <div 
                className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 rounded-full z-20"
                style={{
                  backgroundColor: '#DEFFEC', // Exact Figma Color
                  width: '90px',           // Exact Figma Width
                  height: '40px'           // Exact Figma Height
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;




