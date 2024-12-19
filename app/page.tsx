import Image from 'next/image'
import Navbar from './components/navbar'
import ContactForm from './components/contact-form'
import InteractiveButton from './components/interactive-button'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-simpson-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-simpson-hero">
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
          <h1 className="text-5xl md:text-6xl font-serif text-simpson-blue mb-6">
            Simpson Counseling Co. 
          </h1>
          <p className="text-xl md:text-2xl text-simpson-blue-light mb-8 font-light">
          Come as you are, wherever you are in your journey—this space is yours.          </p>
          <InteractiveButton />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
        
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-simpson-bg rounded-lg">
              <h3 className="text-xl font-serif text-simpson-blue mb-4">Free Consultation</h3>
              <p className="text-simpson-blue-light">Free 15 minute phone conversation to see if we are a good fit.</p>
            </div>
            <div className="p-6 bg-simpson-bg rounded-lg">
              <h3 className="text-xl font-serif text-simpson-blue mb-4">Individual Sessions</h3>
              <p className="text-simpson-blue-light">Personalized support for your individual growth and healing journey.</p>
            </div>
            <div className="p-6 bg-simpson-bg rounded-lg">
              <h3 className="text-xl font-serif text-simpson-blue mb-4">Ecotherapy</h3>
              <p className="text-simpson-blue-light"> Integrate the healing power of nature to promote emotional well-being and reduce stress. Let&apos;s get outside</p>
            </div>
          </div>
          <p className=" mt-10 text-lg text-simpson-blue-light leading-relaxed mb-8">
           I believe growth begins when you feel truly seen and understood, free from judgment or pressure to have everything figured out. My goal is to offer a safe, affirming environment where you can explore your challenges, strengths, and goals at a pace that feels right for you. 
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-simpson-hero">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/howareyou.jpg"
              alt="Thanks Instagram: @finnnyc"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-simpson-blue mb-6">Your Path to Growth</h2>
            <p className="text-lg text-simpson-blue-light leading-relaxed mb-6">
            Taking the step to seek therapy is an act of courage and self-investment. I’m here to offer compassionate, results-driven support with evidence-based approaches designed to empower your growth and help you thrive.
            </p>
            <InteractiveButton variant="outline" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-simpson-blue mb-6 text-center">
            Begin Your Healing Journey
          </h2>
          <p className="text-lg text-simpson-blue-light text-center mb-12">
            Take the first step towards positive change. 
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      {/* <div className="bg-simpson-blue text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif mb-4">Simpson Counseling Co</h3>
          <p className="mb-6">Creating space for healing and growth</p>
          <div className="text-sm opacity-80">
            © {new Date().getFullYear()} Simpson Counseling Co. All rights reserved.
          </div>
        </div>
      </div> */}
  
      <Footer />


    </div>
    
  )
}