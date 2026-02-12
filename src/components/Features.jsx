import React from 'react';



import b1 from '../assets/a1.png';

import b2 from '../assets/a2.png';

import b3 from '../assets/a3.png';

import b4 from '../assets/a4.png';

import b5 from '../assets/a5.png';



import recipeImg from '../assets/b1.png';

import picksImg from '../assets/b2.png';

import mealImg from '../assets/b3.png';



const Features = () => {

  const smallBanners = [

    { id: 1, title: "Essential Focus", desc: "Fresh Vegitables", color: "bg-[#e5f7ee]", textColor: "text-[#00b050]", btnStyle: { backgroundColor: '#27ae60', color: 'white' }, img: b1 },

    { id: 2, title: "Daily Saver", desc: "Grocery Discounts", color: "bg-[#ffede0]", textColor: "text-[#f2994a]", btnStyle: { backgroundColor: 'white', color: '#2d3436', border: '1px solid #e0e0e0' }, img: b2 },

    { id: 3, title: "Must-Have", desc: "Snacks & Beverages", color: "bg-[#fde8e8]", textColor: "text-[#eb4d4b]", btnStyle: { backgroundColor: '#eb4d4b', color: 'white' }, img: b3 },

    { id: 4, title: "Best Value", desc: "Dairy & Bakery", color: "bg-[#fff9db]", textColor: "text-[#f2994a]", btnStyle: { backgroundColor: 'white', color: '#2d3436', border: '1px solid #e0e0e0' }, img: b4 },

    { id: 5, title: "Trending Now", desc: "Chocolates", color: "bg-[#f1e9e9]", textColor: "text-[#4a1c1c]", btnStyle: { backgroundColor: '#4a1c1c', color: 'white' }, img: b5 },

  ];



  return (

    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-6 flex flex-col gap-6 font-sans items-start">

     

      {/* Banner Cards Grid */}

      {/* Banner Cards Grid - Ningalude athe boxes, No changes there */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full">
  {smallBanners.map((item) => (
    <div key={item.id} className={`${item.color} rounded-[20px] md:rounded-[24px] p-3 md:p-4 flex flex-col justify-between relative h-[125px] md:h-[140px] shadow-sm overflow-hidden`}>
      <div className="z-20 flex flex-col h-full justify-between items-start">
        <div>
          <h4 className={`text-[10px] md:text-[12px] font-black ${item.textColor} leading-tight`}>{item.title}</h4>
          <p className="text-[8px] md:text-[9px] text-gray-500 font-bold leading-tight opacity-70">{item.desc}</p>
        </div>
        
        {/* ONLY BUTTON SIZE CHANGED */}
        <button
  className="font-black !text-[11px] flex items-center justify-center transition-all active:scale-95 whitespace-nowrap"
  style={{ 
    ...item.btnStyle,
    width: '87.05px',   // Ningal set aakiya perfect width
    height: '28px',     // Ningal set aakiya perfect height
    borderRadius: '6px' // Ningal set aakiya perfect radius
  }}
>
  Order Now
</button>
      </div>
      
      {/* IMAGE SIZE INCREASED */}
      <div className="absolute -right-2 -bottom-2 w-24 h-24 md:w-32 md:h-32 z-10">
        <img src={item.img} alt="" className="w-full h-full object-contain scale-110" />
      </div>
    </div>
  ))}
</div>
      {/* AI Grocery Assistant Section */}

      <div className="w-full max-w-[850px] bg-[#fff4e1] rounded-[35px] p-4 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-sm border border-orange-100/50">
  
  {/* Left Section: Text expanded to one line */}
  <div className="max-w-full lg:max-w-[350px] text-center lg:text-left mb-4 lg:mb-0">
    <h2 className="text-xl md:text-[22px] font-[900] text-[#2d3436] mb-1 leading-tight whitespace-nowrap">
      Your personal grocery assistant
    </h2>
    <p className="text-[10px] md:text-[11px] text-gray-500 font-bold mb-4 whitespace-nowrap">
      Find recipes, get recommendations, and shop smarter with AI
    </p>
    <button className="!bg-[#f2994a] !text-white !opacity-100 text-[12px] font-black py-2.5 px-8 rounded-2xl shadow-md">
      Try Now
    </button>
  </div>

  {/* Right Section: Smaller Inner Boxes */}
  <div className="grid grid-cols-4 gap-15 w-full lg:w-auto">
    {[
      { title: "Recipe Suggestions", img: recipeImg, btn: "Browse" },
      { title: "Personalized picks", img: picksImg, btn: "View" },
      { title: "Meal Planning", img: mealImg, btn: "Try Search" }
    ].map((card, idx) => (
      <div key={idx} 
           className="bg-white rounded-[15px] md:rounded-[20px] p-2 flex flex-col items-center shadow-sm border border-orange-100 min-w-0"
           // Inner box size reduced to keep main container same
           style={{ width: '108px', height: '145px' }} 
      >
        <h5 className="text-[8px] md:text-[9px] font-black text-gray-800 text-center mb-1 h-8 flex items-center justify-center leading-tight">
          {card.title}
        </h5>
        <div className="w-12 h-12 md:w-14 md:h-14 mb-2 flex items-center justify-center">
          <img src={card.img} alt="" className="w-full h-full object-contain" />
        </div>
       <button 
        className="w-full rounded-[8px] font-black text-[8px] md:text-[9px] flex items-center justify-center text-center mt-auto"
        style={{ 
          backgroundColor: '#FDF2DF', // Design reference
          color: '#f2994a',
          height: '28px',            // Fixed height for all buttons
          lineHeight: '1',
          padding: '0 4px'
        }}
      >
        {card.btn}
      </button>

      </div>
    ))}
  </div>
</div>

    </div>

  );

};



export default Features;