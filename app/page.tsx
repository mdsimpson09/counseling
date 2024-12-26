'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ContactForm from './components/contact-form';

export default function Home() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F3E5D7] flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#254257] mt-20">
        <div className="absolute inset-0">
          <Image
            src="/krzysztof-kowalik-2pnozU26QBo-unsplash.jpg"
            alt="Calming background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-5xl sm:text-3xl font-serif text-white mb-6">
            Simpson Counseling Co.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
            Wherever you are in your journey, this space is yours to heal and grow.
          </p>
          <Link href="#contact" className="inline-block bg-transparent border-2 border-[#F3E5D7] text-[#F3E5D7] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#F3E5D7] hover:text-[#254257] transition duration-300">
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-[#154458] mb-8 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/photo6.jpg"
                alt="Therapist portrait"
                width={400}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-lg text-[#154458] leading-relaxed mb-6">
                I&apos;m deeply committed to creating a supportive, affirming space where you feel truly seen, understood, and empowered to make meaningful changes in your life. My approach is grounded in respect, inclusivity, and genuine collaboration.
              </p>
              <p className="text-lg text-[#154458] leading-relaxed mb-6">
              While I bring clinical expertise to our work together, I deeply respect that you are the expert on your own life, values, and culture. I aim to meet you where you are. Therapy with me blends gentle directness with compassion, meeting you where you are while encouraging deeper exploration and growth.
              </p>
              <Link href="/about" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-6 rounded-md font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
                Learn More <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F3E5D7]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-[#154458] mb-12 text-center">Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/sindy-sussengut-c_IZi4EnUMM-unsplash.jpg"
                  alt="Free Consultation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#4285A0] mb-2">Free 15-Minute Consultation</h3>
                <p className="text-[#154458] mb-4">A quick call to discuss your needs and see if we&apos;re a good fit.</p>
                <Link href="#contact" onClick={scrollToContact} className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
                  Schedule Now <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-72">
                <Image
                  src="/daphne-richard-IFsvZ9bqwAU-unsplash.jpg"
                  alt="Individual Therapy"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif text-[#4285A0] mb-2">Individual Therapy</h3>
                <p className="text-[#154458] mb-4">Virtual, one-on-one therapy sessions tailored to your unique needs and goals.</p>
                <Link href="https://provider.growtherapy.com/provider/iku5bme8fc2h/marli-simpson" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-4 rounded-md text-sm font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
                  Learn More <ArrowRight className="inline-block ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-[#154458] mb-12 text-center">Specialties</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'LGBTQIA+', description: 'Affirming support for diverse identities and experiences.' },
              { name: 'Trauma Processing', description: 'Healing from past experiences and building resilience.' },
              { name: 'Anxiety and Mood', description: 'Managing symptoms and developing coping strategies.' },
              { name: 'Neurodiversity', description: 'Embracing unique cognitive styles and strengths.' },
              { name: 'Recovery', description: 'Support for addiction and maintaining sobriety.' },
              { name: 'Relationships', description: 'Improving communication and connection with others.' },
            ].map((specialty) => (
              <div key={specialty.name} className="bg-[#F3E5D7] p-6 rounded-lg text-center">
                <h3 className="text-xl font-serif text-[#4285A0] mb-2">{specialty.name}</h3>
                <p className="text-[#154458] mb-4 text-sm">{specialty.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/specialties" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-6 rounded-md font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
              View All Specialties <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#154458]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif text-white mb-8 text-center">Get in Touch</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}



// import Image from 'next/image';
// import Navbar from './components/navbar';
// import ContactForm from './components/contact-form';
// import InteractiveButton from './components/interactive-button';
// import Footer from './components/footer';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-[#F5F2EF] flex flex-col">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center bg-[#254257]">
//         <div className="absolute inset-0">
//           <Image
//             src="/krzysztof-kowalik-2pnozU26QBo-unsplash.jpg
//             "
//             alt="Calming background"
//             fill
//             className="object-cover opacity-20"
//             priority
//           />
//         </div>
//         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
//           <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
//             Simpson Counseling Co.
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
//             Wherever you are in your journey, this space is yours to heal and grow.
//           </p>
//           <InteractiveButton className="bg-simpson-blue-light"/>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-12 bg-[#F3E5D7]">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-serif text-[#1C3142] mb-6">Services Offered</h2>
//           <div className="grid md:grid-cols-2 gap-8 mt-8">
//             <div className="p-6 bg-[#4285A0] rounded-lg">
//               <h3 className="text-xl font-serif text-white mb-4">Individual Sessions</h3>
//               <p className="text-gray-300">Virtual, one-on-one therapy sessions tailored to your unique needs and goals.</p>
//             </div>
//             <div className="p-6 bg-[#1C3142] rounded-lg">
//               <h3 className="text-xl font-serif text-white mb-4">Free 15-Minute Consultation</h3>
//               <p className="text-gray-300">A quick phone call to discuss your needs and see if we’re a good fit.</p>
//             </div>
//           </div>
          
//         </div>
        
//       </section>

//       {/* Individual Therapy Section */}
//       <section className="py-20 bg-[#1C3142]">
//         <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <Image
//               src="/howareyou.jpg"
//               alt="Therapy session image"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-serif text-white mb-6">What is Individual Therapy?</h2>
//             <p className="text-lg text-gray-300 leading-relaxed mb-6">
//               Individual therapy is a collaborative process of self-discovery and growth. My approach blends gentle directness with compassion, meeting you where you are while encouraging you to explore deeper layers and take meaningful steps forward.
//             </p>
//             <p className="text-lg text-gray-300 leading-relaxed mb-6">
//               Some sessions may stir up difficult emotions, and that&apos;s okay—it&apos;s all part of the process. Together, we&apos;ll create a safe space where you can express yourself, gain new perspectives, and move toward meaningful change.
//             </p>
//             <InteractiveButton variant="outline" />
//           </div>
//         </div>
//       </section>

//       {/* About Me Section */}
//       <section className="py-20 bg-[#F5F2EF]">
//   <div className="max-w-4xl mx-auto px-4 text-center">
//     <h2 className="text-3xl font-serif text-[#1C3142] mb-6">Working with Me</h2>
//     <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
//     I’m deeply committed to creating a supportive, affirming space where you feel truly seen, understood, and empowered to make meaningful changes in your life. Whether you’re navigating challenges related to LGBTQIA+ issues, healing from trauma, working through addiction recovery, managing anxiety or mood disorders, embracing neurodiversity, strengthening relationships, or exploring personality dynamics, I’m here to walk alongside you on your journey.    </p>
//     <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
//     My approach is grounded in respect, inclusivity, and genuine collaboration. I recognize the role of privilege, intersectionality, and life experiences in shaping your path, and I view healing through a compassionate, holistic lens. Therapy with me blends gentle directness with compassion, meeting you where you are while encouraging deeper exploration and growth.


//     </p>
//     <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
//     I wholeheartedly believe in the power of change and the incredible resilience of the human mind and body. Under the right conditions, healing is not only possible—it’s transformative. Let’s navigate your challenges, refine your tools for self-growth, and build a space where your truth and voice are honored, valued, and celebrated.
//     </p>
//     <InteractiveButton label="Learn More" href="/specialities" />
        
          
//       </div>
//     </section>

//       {/* Contact Section */}
//       <section id="contact-form" className="py-20 bg-[#1C3142]">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-serif text-white mb-6 text-center">
//             Begin Your Journey
//           </h2>
//           <p className="text-lg text-gray-300 text-center mb-12">
//             Take the first step toward positive change. I’m here to help you every step of the way.
//           </p>
//           <ContactForm />
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }
