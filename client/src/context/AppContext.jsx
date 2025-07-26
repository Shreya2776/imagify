import React, { createContext, useState,useEffect } from "react";
export const AppContext = createContext();
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const[showLogin, setShowLogin]= useState(false);
  const [token, setToken]=useState(localStorage.getItem('token'))
  const [credit, setCredit]=useState(null)
  // new line 
  const [prompt, setPrompt] = useState('');
  const backendUrl=import.meta.env.VITE_BACKEND_URL
  const navigate= useNavigate();
  const loadCreditsData=async()=> {
    try{
      const {data}=await axios.get(backendUrl+'/api/user/credits',{headers: {token} });
      // console.log("API Response:", data);
      if(data.success){
        setCredit(data.credits)
        setUser(data.user)
      }
    } catch(error){
      console.log(error)
      toast.error(error.message)
    }
  };
  const generateImage=async(prompt)=>{
    try{
      const {data} = await axios.post(backendUrl+'/api/image/generate-image', {prompt},{headers: {token} });
      // console.log("API Response:", data);
      if(data.success){
        //toast.success("Image generated successfully!");
        loadCreditsData(); // Reload credits after image generation
        return data.resultImage
      }else{
        toast.error(data.message);
        loadCreditsData(); // Reload credits if generation fails
        if(data.creditBalance ===0 ){
          navigate('/buy');
        }
      }
    }catch(error){
      toast.error(error.message)
    }
  }
  

  const logout=()=>{
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
    setCredit(null); // new line added 
  }
  useEffect(()=>{
    if(token){
      loadCreditsData();
    }
  },[token])
  // new line after generating is added here 
  
  const value = {
    user, 
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
    prompt,
    setPrompt 
  };
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;