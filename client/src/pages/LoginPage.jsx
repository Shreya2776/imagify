import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
const LoginPage = () => {
  const [state, setState] = useState('Login');
  const{setShowLogin} = useContext(AppContext);
  useEffect(()=>{
    document.body.style.overflow='hidden';
    return () =>{
      document.body.style.overflow = 'unset';
    }
  },[])
  return (
    <div className="py-20 min-h-screen flex justify-center items-center px-4 bg-black/30 backdrop-blur-sm z-10 relative">
      <form className="bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-xl border border-white/20 relative">
        <h1 className="text-center text-3xl text-white font-semibold mb-2">
          {state}
        </h1>
        <p className="text-center text-sm text-gray-300 mb-6">
          Welcome Back! Please sign in to continue
        </p>
 
        {/* Name Input */}
        {state != 'Login' && <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-4 bg-white/5">
          <img src={assets.profile_icon} alt="User" className="w-5 h-5 opacity-70" />
          <input
            type="text"
            placeholder="Full Name"
            required
            className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>}
        {/* Email Input */}
        <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-4 bg-white/5">
          <img src={assets.email_icon} alt="Email" className="w-5 h-5 opacity-70" />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>

        {/* Password Input */}
        <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-6 bg-white/5">
          <img src={assets.lock_icon} alt="Password" className="w-5 h-5 opacity-70" />
          <input
            type="password"
            placeholder="Password"
            required
            className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>

        {/* Forgot Password */}
        <p className="text-sm text-blue-300 my-4 cursor-pointer">
          Forgot Password?
        </p>

        {/* Create Account Button */}
        <button className="text-sm text-blue-300 bg-blue-900 w-full py-2 rounded-full mb-4">
          {state === 'Login' ? 'login':'create account' }
        </button>

        {/* Auth Links */}
        {state === 'Login' ? <p className="mt-5 text-center">
          Don't have an account?
          <span className="text-blue-600 cursor-pointer" 
          onClick={()=>setState('Sign Up')} >Sign Up</span>
        </p>
        :
        <p className="mt-2 text-center">
          Already have an account?
          <span className="text-blue-800 cursor-pointer"
          onClick={()=>setState('Login')} >Login</span>
        </p>}

        {/* Close Icon */}
        <img onClick={()=>setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default LoginPage;




