import React from 'react';





import e1 from '../assets/e1.png';

import e2 from '../assets/e2.png';

import e3 from '../assets/e3.png';

import e4 from '../assets/e4.png';

import e5 from '../assets/e5.png';

import e6 from '../assets/e6.png';

import e7 from '../assets/e7.png';

import e8 from '../assets/e8.png';

import e9 from '../assets/e9.png';

import e10 from '../assets/e10.png';

import e11 from '../assets/e11.png';

import e12 from '../assets/e12.png';

import e13 from '../assets/e13.png';

import e14 from '../assets/e14.png';

import e15 from '../assets/e15.png';

import e16 from '../assets/e16.png';



const CombinedCategories = () => {

  const groceriesData = [

    { name: "Fresh Produce", img: e1 },

    { name: "Dairy & Eggs", img: e2 },

    { name: "Meat & Seafood", img: e3 },

    { name: "Frozen Foods", img: e4 },

    { name: "Pantry Staples", img: e5 },

    { name: "Snacks & Sweets", img: e6 },

    { name: "Beverages", img: e7 },

    { name: "Breakfast Foods", img: e8 },

    { name: "Small Appliances", img: e9 },

    { name: "Food Storage", img: e10 },

    { name: "Cookware", img: e11 },

    { name: "Cutlery", img: e12 },

    { name: "Tableware", img: e13 },

    { name: "Kitchen Tools", img: e14 },

    { name: "Cleaning Supplies", img: e15 },

    { name: "Specialty Items", img: e16 },

  ];



  const CategoryCard = ({ item }) => (

    <div className="flex flex-col cursor-pointer group w-full">

     

      <div className="bg-[#E8F3EE] rounded-2xl p-2 lg:p-4 flex flex-col items-center justify-between transition-all hover:shadow-lg hover:scale-[1.05] h-[130px] md:h-[155px] lg:h-[180px] w-full">

       

       

        <div className="h-[10px] md:h-[10px] sm:h-[25px] flex items-center justify-center w-full">

          <span className="text-[10px] md:text-[11px] lg:text-[15px]  text-black text-center leading-tight px-1 line-clamp-2">

            {item.name}

          </span>

        </div>



       

        <div className="flex-grow flex items-center justify-center w-full pb-2">

          <img

            src={item.img}

            alt={item.name}

            className="max-w-[90%] max-h-[90%] object-contain group-hover:scale-110 transition-transform duration-300"

            onError={(e) => { e.target.src = 'https://via.placeholder.com/150?text=Error'; }}

          />

        </div>

      </div>

    </div>

  );



  return (

    <div className="w-full py-8 space-y-12">

     

     <section className="max-w-[1300px] mx-auto px-6 md:px-12 sm:px-12">

        <h2 className="text-[16px] md:text-[19px] font-bold text-gray-900 mb-6">

          Groceries & Kitchen 

        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 lg:gap-2">

          {groceriesData.map((item, index) => <CategoryCard key={`baby-${index}`} item={item} />)}

        </div>

      </section>



 <section className="max-w-[1300px] mx-auto px-6 md:px-12 sm:px-12">

        <h2 className="text-[16px] md:text-[19px] font-bold text-gray-900 mb-6">

          Baby & Kids

        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3 md:gap-4 lg:gap-2">

          {groceriesData.map((item, index) => <CategoryCard key={`baby-${index}`} item={item} />)}

        </div>

      </section>
    </div>

  );

};



export default CombinedCategories;

