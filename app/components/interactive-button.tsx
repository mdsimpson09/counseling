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
      className={`${variant === 'outline' ? 'border-simpson-blue text-simpson-blue hover:bg-simpson-blue hover:text-white' : 'bg-simpson-blue hover:bg-simpson-blue-light text-white'} px-8 py-6 text-lg rounded-full`}
      onClick={handleClick}
    >
      {variant === 'outline' ? 'Learn More About Us' : 'Start Your Journey'}
    </Button>
  )
}

export default InteractiveButton