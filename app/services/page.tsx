import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3E5D7]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-[#254257] mt-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-placeholder.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-7xl font-serif text-white mb-6">
            Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            &quot;Do the best you can until you know better. Then when you know better, do better.&quot;
          </p>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            - Maya Angelou
          </p>
        </div>
      </section>

      {/* Services Section */}
      <main className="flex-grow">
        <SpecialtyItem
          title="Free Consultation"
          description="A no-cost, 15-minute consultation to discuss your needs, answer questions, and determine if we're the right fit for your journey."
          imageSrc="/paul-hanaoka.jpg"
          buttonText="Schedule Now"
          buttonLink="/#contact"
          reverse={false}
          bgColor="bg-white"
        />
        <SpecialtyItem
          title="Individual Therapy"
          description="One-on-one therapy designed to help you navigate life's challenges, explore your emotions, and build tools for personal growth. Offered virtually."
          imageSrc="/lauren-mancke.jpg"
          buttonText="Learn More"
          buttonLink="https://provider.growtherapy.com/provider/iku5bme8fc2h/marli-simpson"
          reverse={true}
          bgColor="bg-[#F3E5D7]"
        />
        <SpecialtyItem
          title="EcoTherapy"
          description="Reconnect with nature to support emotional well-being and reduce stress. Available virtually. In-person sessions coming soon."
          imageSrc="/lala-azizli.jpg"
          buttonText="Learn More"
          buttonLink="/ecotherapy"
          reverse={false}
          bgColor="bg-white"
        />
      </main>

      <Footer />
    </div>
  );
}

const SpecialtyItem = ({
  title,
  description,
  imageSrc,
  buttonText,
  buttonLink,
  reverse,
  bgColor,
}: {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
  reverse: boolean;
  bgColor: string;
}) => (
  <section className={`py-20 ${bgColor}`}>
    <div className="max-w-4xl mx-auto px-4">
      <div
        className={`flex flex-col ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } items-center gap-12`}
      >
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 border-4 border-[#4285A0] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-serif text-[#154458] mb-4">{title}</h2>
          <p className="text-lg text-[#154458] leading-relaxed mb-6">{description}</p>
          <Link 
            href={buttonLink}
            className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-2 px-6 rounded-md font-semibold hover:bg-[#154458] hover:text-white transition duration-300"
          >
            {buttonText} <ArrowRight className="inline-block ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
