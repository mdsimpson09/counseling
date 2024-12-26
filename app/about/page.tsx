'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { ArrowDown, ArrowUp } from 'lucide-react'

export default function AboutPage(): React.ReactElement {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section)
  }

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
          <h1 className="text-6xl md:text-6xl font-serif text-white mb-6">
           Marli Simpson LPC-MHSP, CPC
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            &quot;Like Bob Marley, but not spelled the same&quot;
          </p>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
           
          </p>
        </div>
      </section>

      <main className="flex-grow py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="/photo.jpg"
                alt="Marli Simpson"
                width={400}
                height={500}
                className="rounded-lg shadow-md w-full"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-[#154458] mb-4">My Approach</h2>
              <p className="text-lg text-[#154458] leading-relaxed">
                I am dedicated to creating a safe, affirming space where you feel seen and supported. Whether you&apos;re navigating the impacts of trauma, feeling stuck in patterns of putting others&apos; needs before your own, or working to calm an overactive mind and body to find peace, I&apos;m here to help.
              </p>
              <p className="text-lg text-[#154458] leading-relaxed">
                Healing and growth happen through meaningful connection, collaboration, and honest feedback. While I bring clinical expertise to our work together, I deeply respect that you are the expert on your own life, values, and culture.
              </p>
              <p className="text-lg text-[#154458] leading-relaxed">
                I use an eclectic mix of evidence-based therapies tailored to your unique needs, including CBT, ACT, IFS, and DBT. Together, we will explore the root causes of your struggles and develop practical strategies to help you feel more at ease, confident, and connected.
              </p>
            </div>
          </div>

          <div className="mt-20 space-y-8">
            {[
              {
                title: 'My Background',
                content: (
                  <>
                    <p className="text-lg text-[#154458] leading-relaxed">
                      Born and raised in Indianapolis, I moved to Muncie for my studies. A random job application brought me to Nashville, which quickly stole my heart. My journey then took me to Fort Lauderdale for two years, and now I&apos;ve been calling Las Vegas home for over a year.
                    </p>
                    <p className="text-lg text-[#154458] leading-relaxed mt-4">
                      I&apos;m licensed to practice in both Tennessee and Nevada, allowing me to serve clients across these states.
                    </p>
                  </>
                )
              },
              {
                title: 'Qualifications',
                content: (
                  <>
                    <ul className="list-disc list-inside space-y-2 text-lg text-[#154458]">
                      <li>Bachelor of Science in Psychology, Minor in Interpersonal Relations - Ball State University</li>
                      <li>Master of Arts in Counseling Psychology - Ball State University</li>
                      <li>Tennessee Licensed Professional Counselor - Mental Health Service Provider</li>
                      <li>Nevada Clinical Professional Counselor</li>
                    </ul>
                    <p className="text-lg text-[#154458] leading-relaxed mt-4">
                      My diverse clinical background includes experience in inpatient mental health, residential substance abuse treatment, outpatient therapy, corrections, and community mental health. This allows me to bring a well-rounded, client-centered approach to our work together.
                    </p>
                  </>
                ),
              },
              {
                title: 'Outside the Therapy Room',
                content: (
                  <>
                    <p className="text-lg text-[#154458] leading-relaxed">
                      I&apos;m passionate about adventure and connection. Traveling is one of my greatest joys—I love exploring new places, meeting people, and immersing myself in different cultures.
                    </p>
                    <p className="text-lg text-[#154458] leading-relaxed mt-4">
                      As an avid gamer, the Mass Effect trilogy holds a special place in my heart. Brazilian Jiu-Jitsu is another passion of mine, and I enjoy training with friends across the country and around the world.
                    </p>
                    <p className="text-lg text-[#154458] leading-relaxed mt-4">
                      I&apos;m also a certified diver and find peace in anything ocean-related. At home, I cherish the time spent with my partner and our dogs.
                    </p>
                    <div className="mt-6">
                      <div className="mx-auto relative" style={{ width: '500px', height: '400px' }}>
                        <Image 
                          src="/bjj.jpg"
                          alt="Marli practicing Brazilian Jiu-Jitsu"
                          fill
                          style={{ objectFit: 'cover' }}
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </div>
                  </> 
                ),
              },
            ].map((section, index) => (
              <div key={`section-${index}`} className="border-b border-[#4285A0] pb-8">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full text-left p-4 bg-[#F3E5D7] text-[#154458] font-serif text-2xl hover:bg-[#E5D7C9] transition-colors rounded-lg flex justify-between items-center`}
                >
                  {section.title}
                  {activeSection === index ? (
                    <ArrowUp className="h-6 w-6" />
                  ) : (
                    <ArrowDown className="h-6 w-6" />
                  )}
                </button>
                {activeSection === index && (
                  <div className="p-4 bg-white mt-4">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-4xl font-serif text-[#154458] mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-[#154458] mb-8">
              Healing is a journey, and showing up for yourself is an act of courage. You are capable of incredible transformation, and I&apos;m here to support you every step of the way.
            </p>
            <div className="space-x-4">
              <Link 
                href="/#contact" 
                className="inline-block border-2 border-[#154458] text-[#154458] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#154458] hover:text-white transition duration-300"
              >
                Schedule a Consultation
              </Link>
              <a 
                href="https://provider.growtherapy.com/provider/iku5bme8fc2h/marli-simpson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border-2 border-[#154458] text-[#154458] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#154458] hover:text-white transition duration-300"
              >
                Schedule an Appointment
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}