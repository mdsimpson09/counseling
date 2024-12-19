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
            <Link href="/" className="font-serif text-2xl text-[#2c4a63]">
              Simpson Counseling
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/specialties">Specialties</NavLink>
            <NavLink href="/about">About</NavLink>
            {/* <NavLink href="/pricing">Pricing</NavLink> */}
            <NavLink href="/faq">FAQs</NavLink>
            <Button
            className="bg-[#1C3142] hover:bg-[#7b8fa3] text-white"
              onClick={() => {
                if (window.location.pathname === "/") {
                   // User is already on the landing page, scroll to the contact form
                   document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  // Redirect to the landing page and scroll to the contact form
                   window.location.href = "/#contact-form";
                   }
                 }}
                >
                Contact Me
              </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2c4a63] hover:text-[#5a7894]"
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
            <Button 
              className="w-full bg-[#91a5b9] hover:bg-[#7b8fa3] text-white mt-4"
              onClick={() => {
                document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-[#5a7894] hover:text-[#2c4a63] font-medium"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="block px-3 py-2 text-[#5a7894] hover:text-[#2c4a63] font-medium"
  >
    {children}
  </Link>
)

export default Navbar

