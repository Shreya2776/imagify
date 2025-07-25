// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import profileImg from '../assets/profile_new.png';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//   const { user, setUser, setShowLogin, logout, credit } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropdownRef = useRef(null);

//   // Optional: Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <nav
//       className="flex items-center justify-between py-4 px-6 z-50"
//       style={{
//         backgroundColor: '#0f172a',
//         borderBottom: '1px solid #333333',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//         fontFamily: 'Inter, system-ui, sans-serif',
//         position: 'relative'
//       }}>
      
//       <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-white">
//         <img
//           src={assets.logo_icon}
//           alt="Imagify Logo"
//           width={38}
//           height={38}
//           style={{
//             filter: 'drop-shadow(0 0 8px #3B82F6AA)',
//             objectFit: 'contain'
//           }}
//         />
//         Imagify
//       </Link>

//       {user ? (
//         <div className="flex items-center gap-6" ref={dropdownRef}>
//           <button onClick={() => navigate('/buy')} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-white">
//             <span className="text-yellow-400">★</span>
//             <p className="text-sm font-medium">Credits Left: {credit}</p>
//           </button>

//           <button
//             type="button"
//             className="pr-2 font-medium text-slate-400 hover:text-slate-200 focus:outline-none"
//             tabIndex={0}
//           >
//             Hi, {user.name ?? 'User'}
//           </button>

//           <div className="relative">
//             <button
//               className="flex items-center px-0 py-0 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
//               onClick={() => setShowDropdown(!showDropdown)}
//             >
//               <img src={profileImg} alt="Profile" className="w-8 h-8 rounded-full" />
//             </button>

//             {showDropdown && (
//               <div className="absolute right-0 mt-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10">
//                 <button
//                   onClick={() => {
//                     logout();
//                     setUser(null);
//                     navigate('/');
//                   }}
//                   className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-slate-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       ) : (
//         <div className="flex items-center gap-6">
//           <button
//             onClick={() => navigate('/buy')}
//             className="font-semibold text-white hover:text-slate-300 transition-colors"
//           >
//             Pricing
//           </button>
//           <button
//             onClick={() => setShowLogin(true)}
//             className="px-6 py-2.5 text-sm font-semibold rounded-full 
//             bg-blue-500 text-white hover:bg-blue-600 transition-colors"
//           >
//             Login
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import profileImg from '../assets/profile_new.png';
import { assets } from '../assets/assets';

const Navbar = () => {
  const { user, setUser, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className="flex items-center justify-between py-4 px-6 z-50"
      style={{
        backgroundColor: '#0f172a',
        borderBottom: '1px solid #333333',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        fontFamily: 'Inter, system-ui, sans-serif',
        position: 'relative'
      }}
    >
      <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-white">
        <img
          src={assets.logo_icon}
          alt="Imagify Logo"
          width={38}
          height={38}
          style={{
            filter: 'drop-shadow(0 0 8px #3B82F6AA)',
            objectFit: 'contain'
          }}
        />
        Imagify
      </Link>

      {user ? (
        <div className="flex items-center gap-6" ref={dropdownRef}>
          <button
            onClick={() => navigate('/buy')}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-white"
          >
            <span className="text-yellow-400">★</span>
            <p className="text-sm font-medium">Credits Left: {typeof credit === 'number' ? credit : '...'}</p>
          </button>

          <div className="relative">
            <button
              className="flex items-center px-2 py-1 gap-2 rounded-full bg-slate-700 hover:bg-slate-600 transition-colors"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="text-slate-300 text-sm">Hi, {user.name ?? 'User'}</span>
              <img src={profileImg} alt="Profile" className="w-8 h-8 rounded-full" />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 bg-slate-800 border border-slate-700 rounded-md shadow-lg z-10">
                <button
                  onClick={() => {
                    logout();
                    //setUser(null);
                    navigate('/');
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-slate-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <button
            onClick={() => navigate('/buy')}
            className="font-semibold text-white hover:text-slate-300 transition-colors"
          >
            Pricing
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="px-6 py-2.5 text-sm font-semibold rounded-full 
            bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


