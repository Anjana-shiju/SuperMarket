import React from 'react';

// Assets folder-il ulla images import cheyyunnu
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
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-8">
      {/* Grid Layout: Desktop-il 10 rows, Mobile-il 3 rows */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-3 md:gap-4">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="flex flex-col items-center bg-white border border-gray-100 rounded-2xl p-2 hover:shadow-lg transition-all cursor-pointer group shadow-sm"
          >
            {/* Category Name - Fixed height for alignment */}
            <h3 className="text-[10px] md:text-[11px] font-bold text-gray-800 text-center mb-2 leading-tight h-7 flex items-center justify-center overflow-hidden">
              {cat.name}
            </h3>
            
            {/* Image Container with the green curve effect */}
            <div className="w-full aspect-square relative rounded-xl overflow-hidden bg-[#f8fcfb] flex items-center justify-center">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-[90%] h-[90%] object-contain group-hover:scale-110 transition-transform duration-300 z-10" 
              />
              
              {/* Decorative Green Curve at bottom (from your reference image) */}
              <div className="absolute bottom-[-15px] left-0 w-full h-10 bg-[#e9f7f0] rounded-[100%] opacity-90"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;