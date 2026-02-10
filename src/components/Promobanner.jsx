import React from 'react';
// Banner-inte background image assets-il undengil athu use cheyyaam
// import bannerBg from '../assets/banner-bg.png';

const PromoBanner = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-4">
      <div className="relative w-full h-32 md:h-48 rounded-3xl overflow-hidden bg-gradient-to-r from-[#6b66d3] to-[#b195df] flex items-center px-8 md:px-16 text-white">
        
        {/* Left Text Side */}
        <div className="z-10">
          <h2 className="text-xl md:text-4xl font-extrabold mb-1">Best Home Deals</h2>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl md:text-5xl font-black">40%</span>
            <span className="text-lg md:text-3xl font-bold uppercase">Off</span>
          </div>
        </div>

        {/* Right Side Image Decoration (Kitchen tools/flowers) */}
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-40 md:opacity-50">
           {/* Replace with your banner image if you have one */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>

      </div>
    </div>
  );
};

export default PromoBanner;