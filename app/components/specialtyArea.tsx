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
  bgColor?: string // Made optional since we'll use a default background
}

const SpecialtyArea: React.FC<SpecialtyAreaProps> = ({ 
  title, 
  description, 
  bgColor = "bg-white" // Default to white background
}) => {
  return (
    <div className={`${bgColor} p-12 flex flex-col md:flex-row items-start`}>
      <h3 className="text-3xl text-[#1C3142] font-light mb-4 md:mb-0 md:w-1/4 md:pr-8">{title}</h3>
      <div className="text-base text-[#1C3142]/80 leading-relaxed space-y-4 md:w-3/4">{description}</div>
    </div>
  )
}

export default SpecialtyArea

