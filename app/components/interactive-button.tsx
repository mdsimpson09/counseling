// 'use client'

// import { Button } from "@/components/ui/button"

// interface InteractiveButtonProps {
//   variant?: 'default' | 'outline'
// }

// const InteractiveButton: React.FC<InteractiveButtonProps> = ({ variant = 'default' }) => {
//   const handleClick = () => {
//     document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   return (
//     <Button 
//       className={`${variant === 'outline' ? 'border-simpson-blue text-white hover:bg-simpson-blue-light hover:text-white' : 'bg-[#1C3142] hover:bg-simpson-blue-light text-white'} px-8 py-6 text-lg rounded-full`}
//       onClick={handleClick}
//     >
//       {variant === 'outline' ? 'Learn More' : 'Start Your Journey'}
//     </Button>
//   )
// }

// export default InteractiveButton

'use client';

import { Button } from "@/components/ui/button";

interface InteractiveButtonProps {
  variant?: 'default' | 'outline';
  label?: string; // Add a label prop for button text
  href?: string; // Add an optional href prop for navigation
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ 
  variant = 'default', 
  label, 
  href 
}) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href; // Navigate to the href if provided
    } else {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button 
      className={`${variant === 'outline' ? 
        'border-simpson-blue text-white hover:bg-simpson-blue-light hover:text-white' : 
        'bg-[#1C3142] hover:bg-simpson-blue-light text-white'} px-8 py-6 text-lg rounded-full`}
      onClick={handleClick}
    >
      {label || (variant === 'outline' ? 'Learn More' : 'Start Your Journey')}
    </Button>
  );
};

export default InteractiveButton;