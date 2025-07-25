// import React from 'react';
// import {motion} from "framer-motion"
// import { assets } from '../assets/assets';
// const Hero = () => {
//   return (
//     <motion.div className="rounded-2xl p-8" style={{ backgroundColor: '#1e1e1e', 
//     boxShadow: '0 8px 20px rgba(0,0,0,0.3)' }}
//     initial={{opacity:0.2, y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1, y:0}}
//     viewport={{ once: true }}
//     >
//       <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto" 
//       style={{ backgroundColor: '#242424', border: '1px solid #333333', color: '#A1A1AA' }}
//       initial={{opacity:0.2, y:100}}
//       transition={{delay:0.2 ,duration:0.8}}
//       animate={{opacity:1, y:0}}
//       >
//         <span>✨ Best text to image generator</span>
//       </div>
//       <h1 className="text-center mb-6" style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ffffff', lineHeight: '1.2' }}>
        
//         <span style={{ color: '#3B82F6' }}> Stunning AI Images</span>
//       </h1>
//       <p className="text-center max-w-2xl mx-auto" style={{ color: '#A1A1AA', fontSize: '1.25rem' }}>
//         Create high-quality AI images from simple text prompts
//       </p>
//     </motion.div>
//   );
// };

// export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <motion.div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: '#1e1e1e',
        boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
      }}
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* ⬇️ Changed to motion.div to apply animation */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto"
        style={{ backgroundColor: '#242424', border: '1px solid #333333', color: '#A1A1AA' }}
        initial={{ opacity: 0.2, y: 100 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>✨ Best text to image generator</span>
      </motion.div>

      <h1
        className="text-center mb-6"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: '#ffffff',
          lineHeight: '1.2',
        }}
      >
        <span style={{ color: '#3B82F6' }}> Stunning AI Images</span>
      </h1>

      <p
        className="text-center max-w-2xl mx-auto"
        style={{ color: '#A1A1AA', fontSize: '1.25rem' }}
      >
        Create high-quality AI images from simple text prompts
      </p>
    </motion.div>
  );
};

export default Hero;
