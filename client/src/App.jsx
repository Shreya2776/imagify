import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Only need Routes and Route
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Steps from './components/Steps';
import Description from './components/Description';
import star_group from "./assets/star_group.png";
import sample_img_1 from "./assets/sample_img_1.png";
import sample_img_2 from "./assets/sample_img_2.png";
import GenerateBtn from './components/GenerateBtn';
import Testimonials from './components/Testimonials';
import Result from './pages/Result';
import BuyPage from './pages/BuyPage';
import LoginPage from './pages/LoginPage';

const Home = () => (
  <>
    <div style={{
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem', textAlign: 'center', lineHeight: 1.2 }}>
        Turn text to{' '}
        <span style={{ color: '#3B82F6', background: 'rgba(59,130,246,0.12)', padding: '0 0.5rem', borderRadius: '0.5rem' }}>image</span>,<br />
        <span style={{ fontSize: '2rem', color: '#fff', fontWeight: 600 }}>in seconds</span>
      </h1>

      <div style={{
        position: 'relative',
        background: 'linear-gradient(120deg, rgba(30,41,59,0.92) 60%, rgba(51,65,133,0.92) 100%)',
        color: '#f1f5f9',
        padding: '2rem 2.5rem',
        borderRadius: '1.5rem',
        boxShadow: '0 8px 32px 0 rgba(59,130,246,0.18), 0 0 32px 0 #3B82F633',
        fontSize: '1.18rem',
        maxWidth: '650px',
        textAlign: 'center',
        fontWeight: 500,
        marginBottom: '2.5rem',
        lineHeight: 1.7,
        border: '1.5px solid rgba(51,65,85,0.45)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120px',
          height: '60px',
          background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)',
          opacity: 0.25,
          filter: 'blur(8px)',
          zIndex: 0
        }} />
        <span style={{ position: 'relative', zIndex: 1, display: 'block' }}>
          <span style={{
            background: 'linear-gradient(90deg, #60a5fa, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 700,
            fontSize: '1.25em',
            letterSpacing: '0.5px',
            display: 'inline-block',
            marginBottom: '0.5rem'
          }}>
            Unleash your creativity with AI.
          </span>
          <br />
          <span style={{
            color: '#f1f5f9',
            textShadow: '0 2px 16px #38bdf8cc',
            fontWeight: 500,
            fontSize: '1.08em',
            display: 'inline-block',
            marginTop: '0.5rem'
          }}>
            Turn your imagination into visual art in seconds — just type, and watch the magic happen!
          </span>
        </span>
      </div>

      <div style={{
        backgroundColor: '#1e293b',
        padding: '2rem',
        borderRadius: '1rem',
        width: '100%',
        maxWidth: '500px'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input 
            type="text" 
            placeholder="Describe your image..." 
            style={{
              flex: 1,
              padding: '1rem',
              backgroundColor: '#334155',
              color: 'white',
              border: '1px solid #475569',
              borderRadius: '0.5rem',
              outline: 'none'
            }}
          />
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.7rem 1.2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '2rem',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              boxShadow: '0 2px 8px 0 rgba(59,130,246,0.10)'
            }}
          >
            Generate Images
            <img src={star_group} alt="" style={{ width: '32px', height: '32px', marginLeft: '0.2rem' }} />
          </button>
        </div>
      </div>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill().map((_, index) => (
          <img
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
            src={index % 2 === 0 ? sample_img_2 : sample_img_1}
            alt=""
            key={index}
            width={70}
          />
        ))}
      </div>

      <p className='mt-2 text-neutral-100'>
        Generated Images from Imagify
      </p>
      
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
      <Footer />
    </div>
  </>
);

const App = () => {
  return (
    // ❌ Removed <Router> here (already exists in main.jsx)
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0f172a',
      color: 'white',
    }}>
      <Navbar />

      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        background: 'linear-gradient(135deg, #0f172a 0%, #172a4a 50%, #0f172a 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />

        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => {
            const blueShades = [
              'rgba(59, 130, 246, 0.15)',
              'rgba(37, 99, 235, 0.12)',
              'rgba(29, 78, 216, 0.1)',
              'rgba(30, 64, 175, 0.08)',
            ];
            const shade = blueShades[(row + col) % 4];

            return (
              <div
                key={`${row}-${col}`}
                style={{
                  position: 'absolute',
                  width: '80px',
                  height: '80px',
                  left: `${col * 120 + 60}px`,
                  top: `${row * 100 + 80}px`,
                  backgroundColor: shade,
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '8px',
                  transform: `rotate(${(row + col) % 2 === 0 ? '0deg' : '45deg'})`,
                }}
              />
            );
          })
        )}
      </div>

      <div style={{ position: 'relative', zIndex: 10 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<BuyPage />} />
          <Route path="/result" element={<Result />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>

      
    </div>
  );
};

export default App;
