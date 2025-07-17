import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer
      className="w-full flex items-center justify-between gap-4 py-5 px-8 mt-20 rounded-t-xl backdrop-blur-md"
      style={{
        background: 'rgba(15,23,42,0.92)',
        borderTop: '1.5px solid rgba(59,130,246,0.18)',
        boxShadow: '0 -2px 24px 0 rgba(59,130,246,0.10)',
        color: '#f1f5f9',
      }}
    >
      <div className="flex items-center gap-2">
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
      </div>
      <p
        className="flex-1 border-l border-gray-600 pl-6 text-sm text-gray-200 max-sm:hidden"
        style={{
          letterSpacing: '0.5px',
          textShadow: '0 2px 8px #3B82F633',
        }}
      >
        © {new Date().getFullYear()} Imagify | All rights reserved
      </p>
      <div className="flex gap-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white p-1.5 shadow transition hover:shadow-[0_0_12px_2px_#3B82F6] hover:scale-110"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={assets.facebook_icon} alt="Facebook" width={24} height={24} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white p-1.5 shadow transition hover:shadow-[0_0_12px_2px_#3B82F6] hover:scale-110"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={assets.twitter_icon} alt="Twitter" width={24} height={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white p-1.5 shadow transition hover:shadow-[0_0_12px_2px_#3B82F6] hover:scale-110"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <img src={assets.instagram_icon} alt="Instagram" width={24} height={24} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
