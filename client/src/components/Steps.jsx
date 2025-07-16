// import React from 'react'

// const stepsData = [
//   {
//     icon: 'path/to/icon1.png',
//     title: 'Step 1',
//     description: 'Description for step 1'
//   },
//   // ...more steps
// ];

// const Steps = () => {
//   return (
//     <div>
//         <h1 className='text-3xl sm:text-4xl font-semibold
//          mb-2'>
//             How it works
//         </h1>
//         <p className='text-lg text-gray-400 mb-8'>
//             Transform Words Into Stunning Images
//         </p>

//         <div>
//             {stepsData.map((item,index)=>(
//                 <div key={index}>
//                     <img src={item.icon} alt=""/>
//                     <div>
//                         <h2>{item.title}</h2>
//                         <p>{item.description}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Steps


import React from 'react';
import step_icon_1 from '../assets/step_icon_1.svg';
import step_icon_2 from '../assets/step_icon_2.svg';
import step_icon_3 from '../assets/step_icon_3.svg';

const stepsData = [
  {
    icon: step_icon_1,
    title: '1. Describe Your Vision',
    description: 'Type a detailed description of the image you want to create.'
  },
  {
    icon: step_icon_2,
    title: '2. AI Generation', 
    description: 'Our advanced AI processes your text and generates stunning images.'
  },
  {
    icon: step_icon_3,
    title: '3. Download & Share',
    description: 'Download your generated image and share it with the world.'
  }
];

const Steps = () => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-white'>
        How it works
      </h1>
      <p className='text-lg text-gray-400 mb-10'>
        Transform Words Into Stunning Images
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        {stepsData.map((item, index) => (
          <div
            key={index}
            style={{
              maxWidth: '300px',
              padding: '2rem',
              background: 'linear-gradient(135deg, #23293a 60%, #334155 100%)',
              borderRadius: '1.5rem',
              border: '1.5px solid #334155',
              boxShadow: '0 6px 32px 0 rgba(59,130,246,0.10)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 32px 0 rgba(59,130,246,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 32px 0 rgba(59,130,246,0.10)';
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, #3B82F6 60%, #2563EB 100%)',
              borderRadius: '50%',
              width: '70px',
              height: '70px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <img src={item.icon} alt="" style={{ width: '38px', height: '38px' }} />
            </div>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#60a5fa', fontWeight: 600 }}>{item.title}</h2>
            <p style={{ color: '#cbd5e1', fontSize: '1rem' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
