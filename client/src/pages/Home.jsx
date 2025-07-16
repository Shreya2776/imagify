import React, { useContext } from 'react';
import Navbar from '../components/navbar';
import { AppContext } from '../context/AppContext';
import Hero from '../components/sections/Hero';
import Steps from '../components/Steps';

const Home = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="min-h-screen">
        
        {/* Main Content Container */}
        <div className="max-w-4xl mx-auto px-6 py-2 flex flex-col gap-4">
          
          {/* Hero Section */}
          <Hero />

          {/* Input Section Card */}
          <div className="rounded-2xl p-6" style={{
              backgroundColor: '#242424',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)'
            }}
          >
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Describe your image in detail..." 
                className="flex-1 px-6 py-4 rounded-xl outline-none transition-all"
                style={{
                  backgroundColor: '#1E1E1E',
                  color: '#ffffff',
                  border: '1px solid #333333',
                  fontSize: '1.125rem'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                onBlur={(e) => e.target.style.borderColor = '#333333'}
              />
              <button 
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                style={{
                  backgroundColor: '#3B82F6',
                  color: '#ffffff',
                  fontSize: '1.125rem',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2563EB'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3B82F6'}
              >
                Generate Image
              </button>
            </div>
          </div>
            
            
        </div>
    </div>
  );
};

export default Home;