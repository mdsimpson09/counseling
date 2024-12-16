import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-simpson-bg">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#1C3142] h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-placeholder.jpg" // Replace with your hero image
            alt="Hero background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-serif text-white mb-4">
            Services
          </h1>
          <p className="text-xl text-white font-light">
          "Do the best you can until you know better. Then when you know better, do better."
          </p>
          <p className="text-xl  font-light text-white">
          - Maya Angelou
          </p>
        </div>
      </section>

      {/* Specialties Section */}
      {/* <main className="flex-grow py-16  bg-[#F5F2EF]"> */}
      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          <SpecialtyItem
            title="Individual Therapy"
            description="One-on-one therapy designed to help you navigate life’s challenges, explore your emotions, and build tools for personal growth. Offered virtually or in person to suit your needs."
            imageSrc="/individual-therapy.jpg" // Replace with your image
            reverse={false}
          />
          <SpecialtyItem
            title="EcoTherapy"
            description="Reconnect with nature to support emotional well-being and reduce stress. Available as outdoor sessions or virtually with nature-focused mindfulness techniques."
            imageSrc="/ecotherapy.jpg" // Replace with your image
            reverse={true}
          />
          <SpecialtyItem
            title="Free Consultation"
            description="A no-cost, 15-minute consultation to discuss your needs, answer questions, and determine if we’re the right fit for your journey."
            imageSrc="/consultation.jpg" // Replace with your image
            reverse={false}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const SpecialtyItem = ({
  title,
  description,
  imageSrc,
  reverse,
}: {
  title: string;
  description: string;
  imageSrc: string;
  reverse: boolean;
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? 'md:flex-row-reverse' : ''
    } items-center space-y-8 md:space-y-0 md:space-x-8`}
  >
    {/* Image */}
    <div className="w-full md:w-1/2">
      <Image
        src={imageSrc}
        alt={title}
        width={600}
        height={400}
        className="rounded-lg shadow-md"
      />
    </div>
    {/* Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-serif text-simpson-blue mb-4">{title}</h2>
      <p className="text-lg text-simpson-blue-light leading-relaxed">{description}</p>
    </div>
  </div>
);