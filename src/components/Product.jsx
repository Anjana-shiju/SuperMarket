import React from 'react';


import c1 from '../assets/c1.png'; 
import c2 from '../assets/c2.png'; 
import c3 from '../assets/c3.png'; 
import c4 from '../assets/c4.png'; 

const ProductSection = () => {
  const recommendedProducts = [
    { id: 1, name: "Amul Dark Chocolate 70% Cocoa", weight: "200g", price: 180, oldPrice: 200, discount: 5, image: c1, qty: 1 },
    { id: 2, name: "Organic Almond Milk", weight: "1L", price: 280, oldPrice: 320, discount: 10, image: c2, qty: 0 },
    { id: 3, name: "Hybrid Tomato", weight: "500g", price: 25, oldPrice: 30, discount: 3, image: c3, qty: 0 },
    { id: 4, name: "Broccoli", weight: "1Piece", price: 50, oldPrice: 60, discount: 10, image: c4, qty: 0 },
    { id: 5, name: "Amul Dark Chocolate 70% Cocoa", weight: "200g", price: 180, oldPrice: 200, discount: 5, image: c1, qty: 1 },
    { id: 6, name: "Organic Almond Milk", weight: "1L", price: 280, oldPrice: 320, discount: 10, image: c2, qty: 0 },
    { id: 7, name: "Hybrid Tomato", weight: "500g", price: 25, oldPrice: 30, discount: 3, image: c3, qty: 0 },
    { id: 8, name: "Broccoli", weight: "1Piece", price: 50, oldPrice: 60, discount: 10, image: c4, qty: 0 },
  ];

  const flashSaleProducts = [
    { id: 9, name: "Broccoli", weight: "1Piece", price: 180, oldPrice: 60, discount: 10, image: c4, qty: 0 },
    { id: 10, name: "Organic Almond Milk", weight: "1L", price: 280, oldPrice: 280, discount: 10, image: c2, qty: 0 },
    { id: 11, name: "Hybrid Tomato", weight: "500g", price: 25, oldPrice: 30, discount: 3, image: c3, qty: 0 },
    { id: 12, name: "Amul Dark Chocolate 70% Cocoa", weight: "200g", price: 180, oldPrice: 200, discount: 5, image: c1, qty: 1 },
    { id: 13, name: "Broccoli", weight: "1Piece", price: 180, oldPrice: 60, discount: 10, image: c4, qty: 0 },
    { id: 14, name: "Organic Almond Milk", weight: "1L", price: 280, oldPrice: 280, discount: 10, image: c2, qty: 0 },
    { id: 15, name: "Hybrid Tomato", weight: "500g", price: 25, oldPrice: 30, discount: 3, image: c3, qty: 0 },
    { id: 16, name: "Amul Dark Chocolate 70% Cocoa", weight: "200g", price: 180, oldPrice: 200, discount: 5, image: c1, qty: 1 },
  ];

  const ProductCard = ({ item }) => (
    <div className="bg-white border border-gray-100 rounded-2xl relative flex flex-col shadow-sm h-full w-full overflow-hidden transition-all hover:shadow-md">
      
     
      <div className="bg-[#f2f3f5] h-24 md:h-36 w-full flex items-center justify-center relative p-3">
        
       
        <div className="absolute top-0 left-2 z-10">
          <div className="relative flex items-center justify-center">
            <svg width="22" height="28" viewBox="0 0 24 32" fill="none">
              <path d="M0 4C0 1.79 1.79 0 4 0H20C22.21 0 24 1.79 24 4V26L12 32L0 26V4Z" fill="#388E3C"/>
              <circle cx="12" cy="6" r="1.5" fill="white" fillOpacity="0.4"/>
            </svg>
            <span className="absolute top-2.5 text-white text-[8px] font-bold">{item.discount}%</span>
          </div>
        </div>

       
        <div className="absolute top-2 right-2 z-10">
          {item.qty > 0 ? (
            <div className="flex items-center gap-1.5 border border-green-500 rounded-lg px-1.5 py-0.5 text-green-600 font-bold text-[10px] bg-white shadow-sm">
              <button className="text-gray-400">-</button><span>01</span><button>+</button>
            </div>
          ) : (
            <button className="text-green-600 border border-green-500/30 rounded-lg p-1 bg-white shadow-sm flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
          )}
        </div>

        <img src={item.image} alt="" className="h-full object-contain mix-blend-multiply" />
      </div>

     
      <div className="p-2 md:p-3 flex flex-col flex-grow bg-white">
        <h3 className="text-[10px] md:text-[12px] font-bold text-gray-800 leading-tight line-clamp-2 h-7 md:h-9 mb-1">
          {item.name}
        </h3>

        <div className="mt-auto">
          <div className="flex justify-end pr-1 h-3">
             <span className="text-[8px] md:text-[9px] text-gray-400 line-through">₹{item.oldPrice}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center text-gray-500 text-[10px] font-medium">
              <span>{item.weight}</span>
              <svg className="w-2.5 h-2.5 ml-0.5 text-green-600" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
            </div>
            <div className="text-[12px] md:text-[14px] font-black text-gray-900">
              <span className="text-[10px] font-bold mr-0.5">₹</span>{item.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
   
    <div className="w-full bg-[#F3F4F6] py-10 space-y-12">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        
       
        <section className="mb-14">
          <div className="flex justify-between items-center mb-6 px-1">
            <h2 className="text-[16px] md:text-[19px] font-bold text-gray-900">Recommended for you</h2>
            <div className="flex items-center gap-2 text-green-600 font-bold text-xs cursor-pointer hover:underline">
              <span>See all</span>
              <div className="bg-[#388E3C] text-white rounded-full p-1.5 flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
            {recommendedProducts.map(p => <ProductCard key={`rec-${p.id}`} item={p} />)}
          </div>
        </section>

      <section className="bg-gradient-to-br from-[#EFFFF4] to-[#dcfce7] py-6 rounded-[30px] px-4 md:px-8 relative shadow-sm border border-green-100">
  <div className="flex justify-between items-center mb-5">
    
   
    <h2 className="text-[16px] md:text-[20px] font-black text-[#FFAB00] tracking-tight">
      Flash Sale
    </h2>
    
    
    <div className="flex gap-1.5 items-center">
      {['02h', '30m', '02s'].map((time, index) => (
        <div key={index} className="bg-white/90 px-2 py-1 rounded-md shadow-sm border border-orange-200">
          <span className="text-[#FF4D4D] font-bold text-[11px] md:text-[13px] tabular-nums">
            {time}
          </span>
        </div>
      ))}
    </div>
  </div>

  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
    {flashSaleProducts.map(p => <ProductCard key={`flash-${p.id}`} item={p} />)}
  </div>
</section>

      </div>
    </div>
  );
};

export default ProductSection;