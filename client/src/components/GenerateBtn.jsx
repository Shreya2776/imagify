import React from "react";
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom'; 
import { useContext } from 'react';
const GenerateBtn = () => {
  const { user, setShowLogin } = useContext(AppContext); // ✅ valid inside function block
  const navigate = useNavigate(); // ❗ don't call useNavigate('/result'), just call useNavigate()

  const onClickHandler = () => {
    if (user) {
      navigate('/result'); // ✅ navigate function call
    } else {
      setShowLogin(true);
    }
  }
  return (
    
    <div className="pb-20 flex flex-col items-center justify-center w-full">
      <div
        className="relative w-full max-w-xl rounded-3xl p-10 mb-8 shadow-2xl border border-slate-800 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(30,41,59,0.92) 60%, rgba(51,65,133,0.92) 100%)',
          boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18), 0 0 32px 0 #3B82F633',
          border: '1.5px solid rgba(51,65,85,0.45)',
        }}
      >
        {/* Background beam effect */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[120px] bg-gradient-to-r from-blue-500/30 via-blue-400/10 to-transparent rounded-full blur-2xl opacity-60 z-0 animate-pulse"></div>
        {/* Shiny card effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-12 bg-gradient-to-r from-white/30 via-white/10 to-transparent rounded-full blur-lg opacity-30 animate-shine"></div>
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 drop-shadow-lg tracking-tight relative z-20">
          See the magic. Try now
        </h1>
            <div className="flex justify-center w-full relative z-20">
          <button onClick={onClickHandler}
            className="inline-flex items-center gap-3 px-12 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-semibold text-lg shadow-xl hover:scale-110 hover:shadow-blue-400/40 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border-2 border-blue-400/30"
            style={{
              boxShadow: '0 4px 24px 0 #3B82F6AA, 0 0 0 4px #33415544',
              letterSpacing: '0.5px',
              backgroundSize: '200% 200%',
              backgroundPosition: 'left center',
            }}
            onMouseOver={e => e.currentTarget.style.backgroundPosition = 'right center'}
            onMouseOut={e => e.currentTarget.style.backgroundPosition = 'left center'}
          >
            Generate Images
            <img src={assets.star_group} alt="" className="h-7 drop-shadow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenerateBtn
