'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Checkbox from "@/components/ui/Checkbox";
import { Label } from "@/components/ui/label";

const concerns = [
  "Anxiety",
  "Depression",
  "Relationship Issues",
  "Trauma & PTSD",
  "Life Transitions",
  "ADHD",
  "Anger",
  "Mood disorders",
  "Other"
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  concerns: string[];
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    concerns: [],
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch('https://formspree.io/f/xovqgaba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        concerns: formData.concerns.join(', '),
        message: formData.message,
      }),
    });

    setIsSubmitting(false);

    if (response.ok) {
      alert('Submitted successfully! Thank you for reaching out!');
      setFormData({ name: '', phone: '', email: '', concerns: [], message: '' });
    } else {
      alert('Failed to send your message. Please try again later.');
    }
  };

  const handleCheckboxChange = (concern: string) => {
    setFormData((prev) => {
      const isChecked = prev.concerns.includes(concern);
      const updatedConcerns = isChecked
        ? prev.concerns.filter((c) => c !== concern)
        : [...prev.concerns, concern];
      return { ...prev, concerns: updatedConcerns };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg">
      {/* Form fields */}
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <Label htmlFor="name" className="text-[#154458]">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            className="mt-1 border-[#154458] focus:ring-[#154458] focus:border-[#154458]"
            required
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-[#154458]">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            className="mt-1 border-[#154458] focus:ring-[#154458] focus:border-[#154458]"
            required
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-[#154458]">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            className="mt-1 border-[#154458] focus:ring-[#154458] focus:border-[#154458]"
            required
            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <Label className="text-[#154458] block mb-3">What brings you here today?</Label>
        <div className="grid md:grid-cols-2 gap-4">
          {concerns.map((concern) => (
            <Checkbox
              key={concern}
              id={concern}
              label={concern}
              checked={formData.concerns.includes(concern)}
              onChange={() => handleCheckboxChange(concern)}
            />
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="text-[#154458]">
          Is there anything else you&apos;d like to share before our call?
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          className="mt-1 border-[#154458] focus:ring-[#154458] focus:border-[#154458]"
          rows={4}
          onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full border-2 border-[#154458] bg-transparent hover:bg-[#154458] text-[#154458] px-8 hover:text-white py-3 text-lg font-semibold transition duration-300"
      >
        {isSubmitting ? 'Submitting...' : 'Schedule Your Consultation'}
      </Button>
    </form>
  );
};

export default ContactForm;

// 'use client';

// import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import Checkbox from "@/components/ui/Checkbox";
// import { Label } from "@/components/ui/label";

// const concerns = [
//   "Anxiety",
//   "Depression",
//   "Relationship Issues",
//   "Trauma & PTSD",
//   "Life Transitions",
//   "ADHD",
//   "Anger",
//   "Mood disorders",
//   "Other"
// ];

// interface FormData {
//   name: string;
//   phone: string;
//   email: string;
//   concerns: string[];
//   message: string;
// }

// const ContactForm = () => {
//   // Explicitly define the type for formData
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     phone: '',
//     email: '',
//     concerns: [], // Initialize as an empty string array
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const response = await fetch('https://formspree.io/f/xovqgaba', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         phone: formData.phone,
//         email: formData.email,
//         concerns: formData.concerns.join(', '),
//         message: formData.message,
//       }),
//     });

//     setIsSubmitting(false);

//     if (response.ok) {
//       alert('Submitted successfully! Thank you for reaching out!');
//       setFormData({ name: '', phone: '', email: '', concerns: [], message: '' });
//     } else {
//       alert('Failed to send your message. Please try again later.');
//     }
//   };

//   const handleCheckboxChange = (concern: string) => {
//     setFormData((prev) => {
//       const isChecked = prev.concerns.includes(concern);
//       const updatedConcerns = isChecked
//         ? prev.concerns.filter((c) => c !== concern)
//         : [...prev.concerns, concern];
//       return { ...prev, concerns: updatedConcerns };
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6 bg-[#f8f9fa] p-8 rounded-lg">
//       <div className="grid md:grid-cols-2 gap-6">
//         <div>
//           <Label htmlFor="name" className="text-[#2c4a63]">Name</Label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
//             required
//             onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
//           />
//         </div>
//         <div>
//           <Label htmlFor="phone" className="text-[#2c4a63]">Phone Number</Label>
//           <Input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
//             required
//             onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
//           />
//         </div>
//       </div>

//       <div>
//         <Label className="text-[#2c4a63] block mb-3">What brings you here today?</Label>
//         <div className="grid md:grid-cols-2 gap-4">
//           {concerns.map((concern) => (
//             <Checkbox
//               key={concern}
//               id={concern}
//               label={concern}
//               checked={formData.concerns.includes(concern)}
//               onChange={() => handleCheckboxChange(concern)}
//             />
//           ))}
//         </div>
//       </div>

//       <div>
//         <Label htmlFor="message" className="text-[#2c4a63]">
//           Is there anything else you&apos;d like to share before our call?
//         </Label>
//         <Textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           className="mt-1 border-[#91a5b9] focus:ring-[#91a5b9] focus:border-[#91a5b9]"
//           rows={4}
//           onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
//         />
//       </div>

//       <Button
//         type="submit"
//         disabled={isSubmitting}
//         className="w-full bg-[#1C3142] hover:bg-[#7b8fa3] text-white py-6 text-lg"
//       >
//         {isSubmitting ? 'Submitting...' : 'Schedule Your Consultation'}
//       </Button>
//     </form>
//   );
// };

// export default ContactForm;