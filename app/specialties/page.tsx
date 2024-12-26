import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function SpecialtiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3E5D7]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#254257] h-[50vh] flex items-center justify-center mt-20">
          <div className="absolute inset-0">
            <Image
              src="/krzysztof-kowalik-2pnozU26QBo-unsplash.jpg"
              alt="Hero background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-7xl font-serif text-white mb-6">
              Specialties
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              &quot;Your job is to feel and be moved by your feelings, and to let that movement move you into action.&quot;
            </p>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              - Glennon Doyle
            </p>
          </div>
        </section>

        {/* Specialty Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">LGBTQIA+</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  I strive to create a safe and inclusive space for LGBTQIA+ individuals and allies. It is my privilege to support you through life&apos;s stressors, identity and sexual exploration, processing experiences of discrimination or rejection, and navigating relationships. I also offer gender-affirming healthcare assessments and letters when needed. Every part of you is welcome here, and I am honored to celebrate your resilience and growth as you reconnect with your authentic self.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Trauma Processing</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Trauma processing is about understanding and addressing traumatic experiences, building emotional regulation skills, and fostering a renewed sense of self. My approach emphasizes reconnecting with your mind, body, and emotions in a safe and supportive space. Together, we work at your own pace to develop effective coping strategies and restore a sense of safety, control, and balance in your life.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Neurodiversity</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Neurodiversity is a broad term that encompasses the various ways people&apos;s brains function. Each brain is unique, and no two work exactly the same. Being neurodivergent means having a brain that operates differently from what is considered typical or neurotypical. While neurodivergence is not inherently negative, it can bring significant challenges and frustrations. It may feel as though everyone else has access to an unspoken rulebook for socializing and interacting that you were never given.
                </p>
                <p className="text-base text-[#1C3142] leading-relaxed mt-4">
                  Through neurodivergent-affirming care, we focus on your strengths while addressing the unique challenges of navigating a world designed for neurotypical individuals. Therapy can support you in improving communication with yourself and others, all while embracing and celebrating your differences.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Recovery</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Whether you&apos;re in the early stages of recovery or have been navigating it for some time, we will work together to address substance use and other addictive behaviors. Together, we&apos;ll focus on understanding what drives these behaviors, creating tools to manage challenges, and building a personalized plan to maintain stability and prevent or navigate relapse.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Relationships</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Relationships, whether traditional or non-traditional, are at the heart of our lives but can also bring unique challenges. By exploring your patterns, communication styles, and emotional needs, we can identify areas for growth, develop healthier coping mechanisms, and gain meaningful insight into how past experiences may influence your current dynamics.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Bipolar Disorder</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Living with Bipolar Disorder can feel like navigating a complex emotional landscape. My approach to treating Bipolar Disorder focuses on helping you understand and manage the unique challenges of manic, hypomanic, and depressive episodes. We work together to develop strategies for mood stabilization, identify triggers, and create a personalized treatment plan. This may include a combination of therapy techniques, lifestyle adjustments, and collaboration with your medical team to ensure comprehensive care. My goal is to help you achieve greater emotional balance and improve your overall quality of life.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Borderline Personality Disorder</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Borderline Personality Disorder (BPD) can present significant challenges in managing emotions, maintaining relationships, and establishing a stable sense of self. My approach to BPD is compassionate and non-judgmental, focusing on helping you develop skills for emotional regulation, interpersonal effectiveness, and distress tolerance. I utilize evidence-based treatments such as Dialectical Behavior Therapy (DBT) to address the core symptoms of BPD. Together, we&apos;ll work on building a stronger sense of identity, improving relationships, and creating a life that feels more stable and fulfilling.
                </p>
              </div>

              <div className="mb-16">
                <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">Anxiety and Mood</h3>
                <p className="text-base text-[#1C3142] leading-relaxed">
                  Managing the ups and downs of mood dysregulation can be overwhelming, and it&apos;s not something you can simply think your way out of. Whether you&apos;re navigating anxiety, depression, or a bipolar diagnosis, we work together to identify unhelpful thinking patterns, improve emotional regulation, and build acceptance for what lies outside your control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Therapy Methods Section */}
        <section className="py-24 bg-[#F3E5D7]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl font-serif text-[#154458] mb-12 text-center">
              Therapy Methods
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "CBT",
                  description: "When navigating emotional challenges, it can be helpful to understand how your thoughts influence your feelings and behaviors. Cognitive Behavioral Therapy (CBT) is a proven, evidence-based approach that emphasizes the connection between these three areas. Together, we identify and challenge unhelpful thought patterns, replacing them with more balanced and constructive perspectives. This approach is especially effective in addressing anxiety, depression, and a range of mood disorders, fostering greater emotional well-being."
                },
                {
                  title: "ACT",
                  description: "Focusing on things beyond your control can drain your emotional and mental energy. Through Acceptance and Commitment Therapy (ACT), we work together to uncover unhelpful thought patterns that may be keeping you stuck in behaviors that once served you but no longer align with your goals. ACT helps you cultivate acceptance for what lies outside your influence while empowering you to take meaningful steps toward positive change in areas you can impact."
                },
                {
                  title: "DBT",
                  description: "When emotions feel overwhelming and difficult to manage, having practical tools can make a meaningful difference. Dialectical Behavior Therapy (DBT) is an evidence-based approach that combines mindfulness with skills for emotional regulation, distress tolerance, and interpersonal effectiveness. In DBT-focused sessions, we work together to develop healthier coping strategies, build emotional resilience, and navigate challenging situations with greater confidence and balance."
                },
                {
                  title: "IFS",
                  description: "Healing often requires understanding the inner dynamics that influence your thoughts, feelings, and behaviors. In IFS-focused therapy sessions, we explore the different parts of you—each with its own emotions, roles, and perspectives—to better understand your inner experiences. Together, we build a connection with your core Self, a place of calm, curiosity, and compassion, to guide the healing process. These sessions create space to release burdens carried by wounded parts and restore balance, helping you feel more integrated and aligned with your true self."
                }
              ].map((method, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-serif text-[#4285A0] mb-4">{method.title}</h3>
                  <p className="text-[#154458] leading-relaxed">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif text-[#154458] mb-8">Ready to Start Your Journey?</h2>
            <p className="text-lg text-[#154458] mb-12">Take the first step towards healing and growth. Schedule a consultation or learn more about our services.</p>
            <div className="flex justify-center space-x-6">
              <Link href="/#contact" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
                Schedule Consultation
              </Link>
              <Link href="/services" className="inline-block bg-transparent border-2 border-[#154458] text-[#154458] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#154458] hover:text-white transition duration-300">
                Our Services <ArrowRight className="inline-block ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}