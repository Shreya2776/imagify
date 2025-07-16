import React from 'react'
import sample_img_1 from '../assets/sample_img_1.png';

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-white text-center">
        Create AI Images
      </h1>
      <p className="text-gray-300 mb-8 text-center">Turn your imagination into visuals</p>

      <div className="flex flex-col md:flex-row items-center w-full gap-8">
        <div className="flex justify-center w-full md:w-auto">
          <img 
            src={sample_img_1} 
            alt="Sample AI" 
            className="w-80 xl:w-96 rounded-2xl shadow-lg border border-slate-700 bg-slate-800 p-2"
            style={{ background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)' }}
          />
        </div>
        <div
          className="w-full max-w-2xl mx-auto rounded-2xl p-8 backdrop-blur-md md:w-2/3"
          style={{
            background: 'linear-gradient(135deg, rgba(30,25,59,0.85) 60%, rgba(51,65,85,0.85) 100%)',
            boxShadow: '0 4px 24px 0 rgba(59,130,246,0.10)',
            color: '#f1f5f9',
            border: '1.5px solid rgba(59,130,246,0.18)',
            borderTop: '1.5px solid rgba(59,130,246,0.32)',
            borderLeft: '1.5px solid rgba(59,130,246,0.32)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            transition: 'box-shadow 0.3s',
          }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Introducing AI-Powered Text to Image Generator</h2>
          <p className="mb-4 text-base text-slate-200">
            Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly!
          </p>
          <p className="text-base text-slate-300">
            Simply type in a text prompt, and our cutting-edge AI will generate a stunning image based on your description. From product visuals to character design and portraits—even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description
