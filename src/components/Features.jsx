import React from 'react';

// Banners (a1 to a5)
import b1 from '../assets/a1.png'; 
import b2 from '../assets/a2.png'; 
import b3 from '../assets/a3.png'; 
import b4 from '../assets/a4.png'; 
import b5 from '../assets/a5.png'; 

// AI Assistant Icons
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
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-8 flex flex-col gap-6 font-sans items-start">
      
      {/* --- TOP ROW: 5 BANNERS --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 w-full">
        {smallBanners.map((item) => (
          <div key={item.id} className={`${item.color} rounded-[20px] md:rounded-[24px] p-3 md:p-4 flex flex-col justify-between relative h-[125px] md:h-[140px] shadow-sm overflow-hidden`}>
            <div className="z-20 flex flex-col h-full justify-between items-start">
              <div>
                <h4 className={`text-[10px] md:text-[12px] font-black ${item.textColor} leading-tight`}>{item.title}</h4>
                <p className="text-[8px] md:text-[9px] text-gray-500 font-bold leading-tight opacity-70">{item.desc}</p>
              </div>
              <button style={item.btnStyle} className="text-[7px] md:text-[7px] font-black py-1 px-1 rounded-md shadow-sm">Order Now</button>
            </div>
            <div className="absolute -right-1 -bottom-1 w-20 h-20 md:w-28 md:h-28 z-10">
              <img src={item.img} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        ))}
      </div>

      {/* --- AI GROCERY ASSISTANT --- */}
      <div className="w-full max-w-[850px] bg-[#fff4e1] rounded-[35px] p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm border border-orange-100/50">
        
        <div className="max-w-[250px] text-center lg:text-left mb-6 lg:mb-0">
          <h2 className="text-xl md:text-[24px] font-[900] text-[#2d3436] mb-2 leading-tight">
            Your personal grocery assistant
          </h2>
          <p className="text-[10px] md:text-[11px] text-gray-500 font-bold mb-6">
            Find recipes, get recommendations, and shop smarter with AI
          </p>
          <button className="!bg-[#f2994a] !text-white !opacity-100 text-[14px] font-black py-3 px-10 rounded-2xl shadow-md">
  Try Now
</button>

        </div>

        {/* AI Cards: Grid upayogichu, mobile-il space kurachu neat aakki */}
        <div className="grid grid-cols-3 gap-2 md:gap-3 w-full lg:w-auto">
          {[
            { title: "Recipe Suggestions", img: recipeImg, btn: "Browse" },
            { title: "Personalized picks", img: picksImg, btn: "View" },
            { title: "Meal Planning", img: mealImg, btn: "Try Search" }
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-[20px] md:rounded-[25px] p-2 md:p-4 flex flex-col items-center shadow-sm border border-orange-50 min-w-0">
              <h5 className="text-[8px] md:text-[11px] font-black text-gray-800 text-center mb-2 h-10 flex items-center justify-center leading-tight">
                {card.title}
              </h5>
              <div className="w-10 h-10 md:w-40 md:h-16 mb-4 flex items-center justify-center">
                 <img src={card.img} alt="" className="w-full h-full object-contain" />
              </div>
              <button className="bg-[#fef3e0] text-[#f2994a] text-[8px] md:text-[10px] font-black w-full py-2 rounded-xl whitespace-nowrap">
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