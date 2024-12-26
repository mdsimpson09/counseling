'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-2xl text-[#154458]">
              Simpson Counseling
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/specialties">Specialties</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/faq">FAQs</NavLink>
            <NavLink href="https://provider.growtherapy.com/provider/iku5bme8fc2h/marli-simpson">Schedule Appointment</NavLink>
            <Link href="/#contact" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
              Contact Me
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#154458] hover:text-[#4285A0]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <MobileNavLink href="/services">Services</MobileNavLink>
            <MobileNavLink href="/specialties">Specialties</MobileNavLink>
            <MobileNavLink href="/about">About</MobileNavLink>
            <MobileNavLink href="/faq">FAQs</MobileNavLink>
            <MobileNavLink href="https://provider.growtherapy.com/provider/iku5bme8fc2h/marli-simpson">Schedule Appointment</MobileNavLink>
            <Link href="/#contact" className="block w-full bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#154458] hover:text-white text-center transition duration-300 mt-4">
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[#154458] hover:text-[#154458] font-medium relative group"
  >
    {children}
    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#F89B7C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-[#4285A0] hover:text-[#154458] font-medium"
  >
    {children}
  </Link>
)

export default Navbar;