

import React, { useState, useEffect, useContext } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
//import { loadCreditsData } from '../context/AppContext';
const LoginPage = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin,backendUrl, setToken, setUser } = useContext(AppContext);
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const onSubmitHandler = async(e) =>{
    e.preventDefault();

    try{
      if (state==='Login'){
        const {data}= await axios.post(backendUrl+'/api/user/login',{email,password})
        if(data.success){
          setToken(data.token); 
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);

        }
        else{
          toast.error(data.message)
        }
      }
      else{
        const {data}= await axios.post(backendUrl+'/api/user/register',{name,email,password})
        if(data.success){
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        }
        else{
          toast.error(data.message)
        }
      }
    }catch(error){
      toast.error(error.message)
    }
  }


  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black/40 backdrop-blur-md">
      {/* Optional: darker layer behind the modal */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <form onSubmit={onSubmitHandler} className="relative z-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl w-full max-w-md shadow-xl border border-white/20">
        <h1 className="text-center text-3xl text-white font-semibold mb-2">
          {state}
        </h1>
        <p className="text-center text-sm text-gray-300 mb-6">
          Welcome Back! Please sign in to continue
        </p>

        {state !== 'Login' && (
          <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-4 bg-white/5">
            <img src={assets.profile_icon} alt="User" className="w-5 h-5 opacity-70" />
            <input onChange={(e)=>setName(e.target.value)} value={name}
              type="text"
              placeholder="Full Name"
              required
              className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
            />
          </div>
        )}

        <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-4 bg-white/5">
          <img src={assets.email_icon} alt="Email" className="w-5 h-5 opacity-70" />
          <input onChange={(e)=>setEmail(e.target.value)} value={email}
            type="email"
            placeholder="Email Address"
            required
            className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>

        <div className="border border-white/30 px-4 py-2 flex items-center gap-3 rounded-full mb-6 bg-white/5">
          <img src={assets.lock_icon} alt="Password" className="w-5 h-5 opacity-70" />
          <input onChange={(e)=>setPassword(e.target.value)} value={password}
            type="password"
            placeholder="Password"
            required
            className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
          />
        </div>

        <p className="text-sm text-blue-300 my-4 cursor-pointer">Forgot Password?</p>

        <button className="text-sm text-blue-300 bg-blue-900 w-full py-2 rounded-full mb-4">
          {state === 'Login' ? 'login' : 'create account'}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign Up')}>Sign Up</span>
          </p>
        ) : (
          <p className="mt-2 text-center">
            Already have an account?{' '}
            <span className="text-blue-800 cursor-pointer" onClick={() => setState('Login')}>Login</span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-5 right-5 w-5 h-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default LoginPage;




