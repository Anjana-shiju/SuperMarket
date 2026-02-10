import React from 'react';
import bannerBg from "../assets/bannanann.png"

const PromoBanner = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-4">
      {/* Container: Violet shade kooduthal ulla gradient nalki */}
      <div className="relative w-full h-32 md:h-48 rounded-[30px] overflow-hidden bg-gradient-to-r from-[#5a54d4] via-[#6b66d3] to-[#b195df] flex items-center px-8 md:px-16 text-white shadow-md">
        
        {/* 1. Background Image Overlay */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src={bannerBg} 
            alt="Decoration" 
            /* object-right upayogich design right side-il mathram nirthi */
            className="w-full h-full object-cover object-right mix-blend-overlay opacity-40 md:opacity-60" 
          />
          {/* Violet shade text area-il kooduthal clear aakkan ulla overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5a54d4]/90 via-[#5a54d4]/40 to-transparent"></div>
        </div>

        {/* 2. Text Side: Violet background-il nalla clarity kittan */}
        <div className="z-10 relative drop-shadow-lg">
          <h2 className="text-xl md:text-4xl font-black mb-1 tracking-tight">
            Best Home Deals
          </h2>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-5xl font-black">40%</span>
            <span className="text-lg md:text-3xl font-black uppercase tracking-wider">Off</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PromoBanner;