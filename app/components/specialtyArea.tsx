// interface SpecialtyAreaProps {
//   title: string;
//   description: React.ReactNode; // Change from `string` to `React.ReactNode`
//   bgColor: string;
// }

// const SpecialtyArea: React.FC<SpecialtyAreaProps> = ({ title, description, bgColor }) => {
//   return (
//     <div className={`p-8 rounded-lg shadow-md ${bgColor}`}>
//       <h3 className="text-3xl text-simpson-blue font-light mb-4">{title}</h3>
//       <div className="text-lg text-simpson-blue-light leading-relaxed space-y-4">{description}</div>
//     </div>
//   );
// };

// export default SpecialtyArea;

import React from 'react'

interface SpecialtyAreaProps {
  title: string
  description: React.ReactNode
  bgColor?: string
}

const SpecialtyArea: React.FC<SpecialtyAreaProps> = ({ 
  title, 
  description, 
  bgColor = "bg-white"
}) => {
  return (
    <div className={`${bgColor} p-12 pb-16 mb-8 flex flex-col md:flex-row items-start border-b border-[#E0E0E0]`}>
      <h3 className="text-3xl text-[#4285A0] font-light mb-4 md:mb-0 md:w-1/4 md:pr-8">{title}</h3>
      <div className="text-base text-[#1C3142] leading-relaxed space-y-4 md:w-3/4">{description}</div>
    </div>
  )
}

export default SpecialtyArea