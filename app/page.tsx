// import Image from 'next/image'
// import Navbar from './components/navbar'
// import ContactForm from './components/contact-form'
// import InteractiveButton from './components/interactive-button'
// import Footer from './components/footer'

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-simpson-bg">
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center bg-simpson-hero">
//         <div className="absolute inset-0">
//           <Image
//             src="/placeholder.svg?height=1080&width=1920"
//             alt="Calming background"
//             fill
//             className="object-cover opacity-20"
//             priority
//           />
//         </div>
//         <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
//           <h1 className="text-5xl md:text-6xl font-serif text-simpson-blue mb-6">
//             Simpson Counseling Co. 
//           </h1>
//           <p className="text-xl md:text-2xl text-simpson-blue-light mb-8 font-light">
//           Come as you are, wherever you are in your journey—this space is yours.          </p>
//           <InteractiveButton />
//         </div>
//       </section>

//       {/* Welcome Section */}
//       <section className="py-10 bg-white">
//         <div className="max-w-4xl mx-auto px-4 text-center">
        
//           <div className="grid md:grid-cols-3 gap-8 mt-12">
//             <div className="p-6 bg-simpson-bg rounded-lg">
//               <h3 className="text-xl font-serif text-simpson-blue mb-4">Free Consultation</h3>
//               <p className="text-simpson-blue-light">Free 15 minute phone conversation to see if we are a good fit.</p>
//             </div>
//             <div className="p-6 bg-simpson-bg rounded-lg">
//               <h3 className="text-xl font-serif text-simpson-blue mb-4">Individual Sessions</h3>
//               <p className="text-simpson-blue-light">Personalized support for your individual growth and healing journey.</p>
//             </div>
//             {/* <div className="p-6 bg-simpson-bg rounded-lg">
//               <h3 className="text-xl font-serif text-simpson-blue mb-4">Ecotherapy</h3>
//               <p className="text-simpson-blue-light"> Integrate the healing power of nature to promote emotional well-being and reduce stress. Let&apos;s get outside</p>
//             </div> */}
//           </div>
//           <p className=" mt-10 text-lg text-simpson-blue-light leading-relaxed mb-8">
//            I believe growth begins when you feel truly seen and understood, free from judgment or pressure to have everything figured out. My goal is to offer a safe, affirming environment where you can explore your challenges, strengths, and goals at a pace that feels right for you. 
//           </p>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 bg-simpson-hero">
//         <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <Image
//               src="/howareyou.jpg"
//               alt="Thanks Instagram: @finnnyc"
//               width={500}
//               height={500}
//               className="rounded-lg shadow-lg"
//             />
//           </div>
//           <div>
//             <h2 className="text-3xl font-serif text-simpson-blue mb-6">Your Path to Growth</h2>
//             <p className="text-lg text-simpson-blue-light leading-relaxed mb-6">
//             Taking the step to seek therapy is an act of courage and self-investment. I’m here to offer compassionate, results-driven support with evidence-based approaches designed to empower your growth and help you thrive.
//             </p>
//             <InteractiveButton variant="outline" />
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact-form" className="py-20 bg-white">
//         <div className="max-w-4xl mx-auto px-4">
//           <h2 className="text-3xl font-serif text-simpson-blue mb-6 text-center">
//             Begin Your Healing Journey
//           </h2>
//           <p className="text-lg text-simpson-blue-light text-center mb-12">
//             Take the first step towards positive change. 
//           </p>
//           <ContactForm />
//         </div>
//       </section>

//       {/* Footer */}
//       {/* <div className="bg-simpson-blue text-white py-12">
//         <div className="max-w-4xl mx-auto px-4 text-center">
//           <h3 className="text-2xl font-serif mb-4">Simpson Counseling Co</h3>
//           <p className="mb-6">Creating space for healing and growth</p>
//           <div className="text-sm opacity-80">
//             © {new Date().getFullYear()} Simpson Counseling Co. All rights reserved.
//           </div>
//         </div>
//       </div> */}
  
//       <Footer />


//     </div>
    
//   )
// }
import Image from 'next/image';
import Navbar from './components/navbar';
import ContactForm from './components/contact-form';
import InteractiveButton from './components/interactive-button';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2EF] flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-[#254257]">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Calming background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Simpson Counseling Co.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Wherever you are in your journey, this space is yours to heal and grow.
          </p>
          <InteractiveButton className="bg-simpson-blue-light"/>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-[#F5F2EF]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-[#1C3142] mb-6">Services Offered</h2>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="p-6 bg-[#1C3142] rounded-lg">
              <h3 className="text-xl font-serif text-white mb-4">Individual Sessions</h3>
              <p className="text-gray-300">Virtual, one-on-one therapy sessions tailored to your unique needs and goals.</p>
            </div>
            <div className="p-6 bg-[#1C3142] rounded-lg">
              <h3 className="text-xl font-serif text-white mb-4">Free 15-Minute Consultation</h3>
              <p className="text-gray-300">A quick phone call to discuss your needs and see if we’re a good fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Therapy Section */}
      <section className="py-20 bg-[#1C3142]">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/howareyou.jpg"
              alt="Therapy session image"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-white mb-6">What is Individual Therapy?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Individual therapy is a collaborative process of self-discovery and growth. My approach blends gentle directness with compassion, meeting you where you are while encouraging you to explore deeper layers and take meaningful steps forward.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Some sessions may stir up difficult emotions, and that&apos;s okay—it&apos;s all part of the process. Together, we&apos;ll create a safe space where you can express yourself, gain new perspectives, and move toward meaningful change.
            </p>
            <InteractiveButton variant="outline" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 bg-[#F5F2EF]">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-3xl font-serif text-[#1C3142] mb-6">Working with Me</h2>
    <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
    I’m deeply committed to creating a supportive, affirming space where you feel truly seen, understood, and empowered to make meaningful changes in your life. Whether you’re navigating challenges related to LGBTQIA+ issues, healing from trauma, working through addiction recovery, managing anxiety or mood disorders, embracing neurodiversity, strengthening relationships, or exploring personality dynamics, I’m here to walk alongside you on your journey.    </p>
    <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
    My approach is grounded in respect, inclusivity, and genuine collaboration. I recognize the role of privilege, intersectionality, and life experiences in shaping your path, and I view healing through a compassionate, holistic lens. Therapy with me blends gentle directness with compassion, meeting you where you are while encouraging deeper exploration and growth.


    </p>
    <p className="text-lg text-[#1C3142] leading-relaxed mb-6">
    I wholeheartedly believe in the power of change and the incredible resilience of the human mind and body. Under the right conditions, healing is not only possible—it’s transformative. Let’s navigate your challenges, refine your tools for self-growth, and build a space where your truth and voice are honored, valued, and celebrated.
    </p>
    <InteractiveButton label="Learn More" href="/specialities" />
        
          
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-[#1C3142]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-6 text-center">
            Begin Your Journey
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12">
            Take the first step toward positive change. I’m here to help you every step of the way.
          </p>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
}
