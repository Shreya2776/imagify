import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Ensure assets are correctly imported


const Result = () => {
    const[image, setImage]=useState(assets.sample_img_1); 
    // Example state for image, replace with actual logic
    const[isImageLoaded, setIsImageLoaded]=useState(false)
    const[loading, setLoading]=useState(false)
    const[input, setInput]=useState('')
    const onSubmitHandler = async(e) => {

    }
  return (
    <form 
        onSubmit={onSubmitHandler}
      className='flex flex-col min-h-[90vh] justify-center items-center
       mt-10' // ✅ ADDED top margin to separate from navbar
    >
      {/* Output Image Box */}
      <div className="mb-6"> {/* ✅ REDUCED space between image and input 
      (was mb-8) */}
        <div
          className='relative p-1 rounded-lg bg-slate-800 shadow-xl' 
          // ✅ REPLACED light blue gradient with subtle dark background
        >
          <img
            src={image}
            alt=""
            className='max-w-sm rounded-lg shadow-lg transition-transform 
            duration-300 hover:scale-105' // image glow + hover
          />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-800 
                ${loading ? 'w-full transition-all duration-[10s]'
                   :'w-0' 
                }`}
          />
        </div>
        <p className={!loading ? 'hidden' : ''}>
            Loading...</p>
      </div>
{!isImageLoaded && 
      <div className='flex w-full max-w-xl backdrop-blur-md 
        bg-gradient-to-br from-slate-800 to-slate-900 
        bg-opacity-60 text-white text-sm p-1 mt-4 mb-12 rounded-full 
        shadow-lg ring-1 ring-slate-700'
      > 
        <input
          onChange={e=>setInput(e.target.value)}  value={input}
          type="text"
          placeholder='Describe what you want to generate'
          className='flex-1 bg-transparent outline-none ml-6 py-3 text-sm 
          placeholder-slate-400 text-white'
        />
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 transition-colors 
          px-8 sm:px-12 py-2.5 font-semibold rounded-full shadow-md'
        >
          Generate
        </button>
      </div>
    }
{isImageLoaded &&
      <div className='flex gap-2 flex-wrap justify-center 
      text-white text-sm p-0.5 mt-10 rounded-full'>
        <p onClick={()=>{setIsImageLoaded(false)}}
        className='bg-transparent border border-zinc-900
        text-white px-8 py-3 rounded-full cursor-pointer mb-12'>
            Generate Another</p>
        <a href={image} download className='bg-zinc-900 px-10 py-3 
        rounded-full cursor-pointer mb-12' >Download</a>
      </div>
}
    </form>
  )
}

export default Result


