'use client'

import Image from 'next/image'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  const toggleSection = (section: number) => {
    setActiveSection(activeSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />

      <section className="relative bg-[#1C3142] h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/hero-placeholder.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
            Marli Simpson, LPC-MHSP, CPC
          </h1>
          <p className="text-lg md:text-xl text-white font-light">
          &quot;Like Bob Marley, but not spelled the same&quot;
          </p>
          <p className="text-lg md:text-xl font-light text-white">
            - Me
          </p>
        </div>
      </section>

      <main className="flex-grow pt-12 md:pt-20 bg-[#F5F2EF]">
        <div className="max-w-5xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg -mt-16">
          <h1 className="text-3xl md:text-4xl font-serif text-simpson-blue mb-6 text-center"></h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:justify-start">
              <Image
               src="/photo.jpg"
               alt="Marli practicing Brazilian Jiu-Jitsu"
               width={500}
               height={500}
               className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-simpson-blue-light">
                I am dedicated to creating a safe, affirming space where you feel seen and supported. Whether you&apos;re navigating the impacts of trauma, feeling stuck in patterns of putting others&apos; needs before your own, or working to calm an overactive mind and body to find peace, I&apos;m here to help. Healing and growth happen through meaningful connection, collaboration, and honest feedback. 
              </p>
              <p className="text-lg text-simpson-blue-light">
                While I bring clinical expertise to our work together, I deeply respect that you are the expert on your own life, values, and culture. I aim to meet you where you are. 
                I use an eclectic mix of evidence-based therapies tailored to your unique needs, including Cognitive Behavioral Therapy (CBT), Acceptance and Commitment Therapy (ACT), Internal Family Systems (IFS), and Dialectical Behavioral Therapy (DBT). Together, we will explore the root causes of your struggles and work to develop practical, actionable strategies to help you feel more at ease, confident, and connected to yourself and others.
              </p>
              <p className="text-lg text-simpson-blue-light">
                Healing is a journey, and showing up for yourself in this way is an act of courage and worthiness. As Glennon Doyle says, <em>&quot;Being human is not hard because you&apos;re doing it wrong; it&apos;s hard because you&apos;re doing it right.&quot;</em> You are capable of incredible transformation, and I&apos;m here to support you every step of the way.
              </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-serif text-simpson-blue mb-4"></h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Background +',
                    content: (
                      <>
                        <p>
                    
                          I was born and raised in Indianapolis and moved to Muncie Indiana for undergraduate and graduate studies. I made my way to Nashville after applying for a random, but interesting job, and decided to give it a shot. It wasn&apos;t long before Nashville and the community stole my heart. I often claim that I am a &quot;Nashvillian&quot; when introducing myself for the first time!
                        </p>
                        <br />
                        <p>
                          My partner and I decided to try our luck in new places. We lived in Fort Lauderdale for two years and built ourselves a wonderful community of friends before deciding that we should, again, try something new. We have been in Las Vegas now for over a year. 
                        </p>
                        <br />
                        <p>
                          I am licensed in and able to see clients in both Tennessee and Nevada. 
                        </p>
                      </>
                    )
                  },
                  {
                    title: 'Qualifications +',
                    content: (
                      <>
                        <p>
                          Bachelor of Science in Psychology with a Minor in Interpersonal Relations - Ball State University
                        </p>
                        <br />
                        <p>
                          Master of Arts in Counseling Psychology - Ball State University
                        </p>
                        <br />
                        <p>
                          Tennessee Licensed Professional Counselor - Mental Health Service Provider 
                        </p>
                        <br />
                        <p>
                          Nevada Clinical Professional Counselor 
                        </p>
                        <br />
                        <p>
                        My clinical background spans a variety of settings, including inpatient mental health, residential substance abuse treatment, outpatient therapy, corrections, and community mental health. This diverse experience allows me to bring a well-rounded, client-centered approach to my work. Whether you’re working through life transitions, healing from trauma, or exploring identity, my goal is to help you feel seen, supported, and capable of moving forward with confidence.

                        </p>
                      </>
                    ),
                  },
                  {
                    title: 'Marli Outside of Therapy +',
                    content: (
                      <>
                        <p>
                          I&apos;m all about adventure and connection. Traveling is one of my greatest joys—whether I&apos;m exploring new corners of the U.S. or venturing to far-off countries, I love meeting people, diving into new cultures, and sampling every kind of food I can find.
                        </p>
                        <br />
                        <p>
                        I&apos;m an avid gamer - the Mass Effect trilogy holds a special place in my heart. Jiu-jitsu is another passion of mine—I enjoy training with friends across the country and in other parts of the world. 
                        </p>
                        <br />
                        <p>
                          I am also a certified diver and find the most peace and joy in anything ocean-related. At home. I value the time I get to spend with my partner and our dogs.
                        </p>
                      </> 
                    ),
                  },
                ].map((section, index) => (
                  <div key={index} className="border rounded-md shadow-md overflow-hidden">
                    <button
                      onClick={() => toggleSection(index)}
                      className="w-full text-left p-4 bg-simpson-blue text-white font-semibold hover:bg-simpson-blue-light transition-colors"
                    >
                      {section.title}
                    </button>
                    {activeSection === index && (
                      <div className="p-4 bg-white text-simpson-blue">
                        {section.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
            <Image 
                src="/bjj.jpg"
                alt="Marli practicing Brazilian Jiu-Jitsu"
                width={500}
                height={500}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

