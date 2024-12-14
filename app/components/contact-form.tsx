'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const concerns = [
  "Anxiety & Depression",
  "Relationship Issues",
  "Trauma & PTSD",
  "Life Transitions",
  "Self-Discovery",
  "Other"
]

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    concern: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    alert('Thank you for reaching out. We will contact you soon to schedule your consultation.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#f8f9fa] p-8 rounded-lg">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-[#2c4a63]">Name</Label>
          <Input
            type="text"
            id="name"
            className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
            required
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-[#2c4a63]">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
            required
            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email" className="text-[#2c4a63]">Email</Label>
        <Input
          type="email"
          id="email"
          className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
          required
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div>
        <Label className="text-[#2c4a63] block mb-3">What brings you here today?</Label>
        <RadioGroup
          onValueChange={(value) => setFormData(prev => ({ ...prev, concern: value }))}
          className="grid md:grid-cols-2 gap-4"
        >
          {concerns.map((concern) => (
            <div className="flex items-center space-x-2" key={concern}>
              <RadioGroupItem value={concern} id={concern} />
              <Label htmlFor={concern} className="text-[#5a7894]">{concern}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <Label htmlFor="message" className="text-[#2c4a63]">
          Is there anything else you'd like to share before our call?
        </Label>
        <Textarea
          id="message"
          className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
          rows={4}
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <Button 
        type="submit"
        className="w-full bg-[#91a5b9] hover:bg-[#7b8fa3] text-white py-6 text-lg"
      >
        Schedule Your Consultation
      </Button>
    </form>
  )
}

export default ContactForm