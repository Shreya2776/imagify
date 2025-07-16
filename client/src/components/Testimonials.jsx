
import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className="w-full py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-white drop-shadow-lg tracking-tight">
        Customer Testimonials
      </h1>
      <p className="text-lg text-blue-200 mb-12 text-center font-medium">
        What Our Users Are Saying
      </p>
      <div className="flex flex-wrap gap-8 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="relative rounded-3xl shadow-2xl p-8 max-w-xs flex flex-col items-center border border-slate-700 hover:scale-105 transition-transform duration-300 backdrop-blur-md"
            style={{
              background: 'linear-gradient(135deg, #16213e 0%, #243b55 100%)',
              boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18), 0 0 32px 0 #3B82F633',
              border: '2px solid rgba(59,130,246,0.13)',
              overflow: 'hidden',
            }}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-28 h-10 bg-gradient-to-r from-blue-500/30 via-blue-400/10 to-transparent rounded-full blur-2xl opacity-70 z-0"></div>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-20 h-20 mb-4 border-4 border-blue-400 shadow-lg z-10 bg-slate-800 object-cover"
              style={{ boxShadow: '0 0 0 6px #334155cc' }}
            />
            <h3 className="text-xl font-semibold text-white mb-1 z-10 drop-shadow">
              {testimonial.name}
            </h3>
            <p className="text-blue-300 text-sm mb-1 z-10 font-medium">
              {testimonial.role}
            </p>
            <div className="flex mb-2 z-10">
              {Array.from({ length: testimonial.stars }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg drop-shadow">★</span>
              ))}
            </div>
            <p className="text-slate-200 text-center text-base z-10 font-normal" style={{ textShadow: '0 2px 12px #1e293b' }}>
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
