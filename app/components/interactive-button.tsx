'use client'

import { Button } from "@/components/ui/button"

interface InteractiveButtonProps {
  variant?: 'default' | 'outline'
}

const InteractiveButton: React.FC<InteractiveButtonProps> = ({ variant = 'default' }) => {
  const handleClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Button 
      className={`${variant === 'outline' ? 'border-simpson-blue text-white hover:bg-simpson-blue-light hover:text-white' : 'bg-[#1C3142] hover:bg-simpson-blue-light text-white'} px-8 py-6 text-lg rounded-full`}
      onClick={handleClick}
    >
      {variant === 'outline' ? 'Learn More' : 'Start Your Journey'}
    </Button>
  )
}

export default InteractiveButton