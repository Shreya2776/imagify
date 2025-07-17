// import React, { useState } from 'react';
// import { plans, assets } from '../assets/assets';

// const BuyPage = () => {
//   const [darkMode, setDarkMode] = useState(true);

//   return (
//     <div className={`${darkMode ? 'dark' : ''}`}>
//       {/* 🌗 Dark Mode Toggle */}
//       <div className="absolute top-4 right-6 z-20">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition"
//         >
//           {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//         </button>
//       </div>

//       {/* 🖼️ Main Section */}
//       <div className="relative min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#0f172a] to-[#000814] dark:from-gray-100 dark:to-white text-white dark:text-black pt-20 px-6 overflow-hidden transition-colors duration-500">

//         {/* 🔮 Background Shapes */}
//         <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] top-[-200px] left-[-150px] z-0 animate-pulse-slow"></div>
//         <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[140px] bottom-[-180px] right-[-180px] z-0 animate-pulse-slower"></div>
//         <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px] top-[300px] left-[65%] z-0 animate-float"></div>
//         <div className="absolute w-[250px] h-[250px] bg-indigo-300/10 rounded-full blur-[100px] bottom-[150px] left-[15%] z-0 animate-float-reverse"></div>

//         {/* 🦸 Hero Content */}
//         <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto">
//           <button className="border border-gray-500 text-gray-300 px-10 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 mb-4">
//             Explore Subscriptions
//           </button>
//           <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
//             Unlock Your Creative Potential
//           </h1>
//           <p className="text-gray-300 dark:text-gray-600 text-lg">
//             Flexible AI plans tailored for creators, developers, and teams
//           </p>
//         </div>

//         {/* 💳 Plans */}
//         <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//           {plans.map((item, index) => (
//             <div
//               key={index}
//               className="mb-12 rounded-2xl p-6 bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 dark:from-white dark:to-gray-100 border border-blue-600/30 dark:border-gray-300 backdrop-blur-md shadow-xl hover:shadow-blue-600/40 hover:shadow-neon transition-all duration-300 hover:scale-105"
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={assets.logo_icon}
//                   alt="Plan Icon"
//                   className="h-10 w-10 opacity-80"
//                 />
//               </div>
//               <h2 className="text-2xl font-bold mb-2">{item.id}</h2>
//               <p className="text-gray-300 dark:text-gray-600 mb-4">{item.desc}</p>
//               <p className="text-lg font-medium">
//                 {item.price} / <span className="text-indigo-300 dark:text-indigo-600">{item.credits} credits</span>
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyPage;

import React, { useContext, useState } from 'react';
import { plans, assets } from '../assets/assets';
import {  AppContext } from '../context/AppContext';
const BuyPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const {user}= useContext(AppContext);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      {/* 🌗 Dark Mode Toggle */}
      <div className="absolute top-4 right-6 z-20">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-white text-black dark:bg-gray-800 dark:text-white px-4 py-2 rounded-full shadow hover:shadow-lg transition"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* 🖼️ Main Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#0d1b2a] via-[#0f172a] to-[#000814] dark:from-gray-100 dark:to-white text-white dark:text-black pt-20 px-6 overflow-hidden transition-colors duration-500">

        {/* 🔮 Background Shapes */}
        <div className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] top-[-200px] left-[-150px] z-0 animate-pulse-slow"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[140px] bottom-[-180px] right-[-180px] z-0 animate-pulse-slower"></div>
        <div className="absolute w-[350px] h-[350px] bg-cyan-400/20 rounded-full blur-[120px] top-[300px] left-[65%] z-0 animate-float"></div>
        <div className="absolute w-[250px] h-[250px] bg-indigo-300/10 rounded-full blur-[100px] bottom-[150px] left-[15%] z-0 animate-float-reverse"></div>

        {/* 🦸 Hero Content */}
        <div className="relative z-10 text-center mb-20 max-w-3xl mx-auto">
          <button className="border border-gray-500 text-gray-300 px-10 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 mb-4">
            Explore Subscriptions
          </button>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 leading-tight">
            Unlock Your Creative Potential
          </h1>
          <p className="text-gray-300 dark:text-gray-600 text-lg">
            Flexible AI plans tailored for creators, developers, and teams
          </p>
        </div>

        {/* 💳 Plans with "Get Started" */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {plans.map((item, index) => (
            <div
              key={index}
              className="mb-6 flex flex-col justify-between rounded-2xl p-6 bg-gradient-to-br from-[#1e293b]/90 to-[#0f172a]/90 dark:from-white dark:to-gray-100 border border-blue-600/30 dark:border-gray-300 backdrop-blur-md shadow-xl hover:shadow-blue-600/40 hover:shadow-neon transition-all duration-300 hover:scale-105"
            >
              <div>
                <div className="flex justify-center mb-4">
                  <img
                    src={assets.logo_icon}
                    alt="Plan Icon"
                    className="h-10 w-10 opacity-80"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-2 text-center">{item.id}</h2>
                <p className="text-gray-300 dark:text-gray-600 mb-4 text-center">{item.desc}</p>
                <p className="text-lg font-medium text-center mb-6">
                  {item.price} / <span className="text-indigo-300 dark:text-indigo-600">{item.credits} credits</span>
                </p>
              </div>

              {/* 🟦 Get Started Button */}
              <button
                onClick={() => alert(`Getting started with ${item.id} plan!`)}
                className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700
                 text-white dark:text-white font-semibold py-2 px-4 rounded-lg shadow-md 
                 hover:shadow-indigo-400/50 transition duration-300"
              >
               {user ? 'Purchase' : 'Get Started' } 
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BuyPage;


