import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3E5D7]">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#254257] h-[50vh] flex items-center justify-center mt-20">
          <div className="absolute inset-0">
            <img
              src="/krzysztof-kowalik-2pnozU26QBo-unsplash.jpg"
              alt="Hero background"
              className="object-cover w-full h-full opacity-20"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl md:text-6xl font-serif text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
              
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-16">
              <FAQItem
                question="What can I expect in my first therapy session?"
                answer="In our first session, we'll focus on getting to know each other and setting the stage for our work together. We'll start by going over an intake questionnaire you've filled out, which helps me understand your history, concerns, and what you hope to get out of therapy. The most important part of this session is building a sense of safety and trust. We'll also talk about your goals for therapy and set realistic expectations for the process."
              />
          
              <FAQItem
                question="How long does each therapy session last?"
                answer="Standard therapy sessions are 50 minutes long. This duration allows us to dive deep into your concerns while also giving you time to process and transition between your therapy session and the rest of your day."
              />

              <FAQItem
                question="Is there a no-show policy?"
                answer="Yes, there is a no-show policy in place to ensure fairness and respect for everyone's time. A no-show fee of $75 will be charged directly to the card on file for any missed appointments without prior notice. We understand that unexpected situations can arise, so we appreciate at least 24 hours notice for cancellations or rescheduling when possible."
              />

              <FAQItem
                question="How often will I need to attend therapy?"
                answer="The frequency of sessions is tailored to your individual needs. We often begin with weekly sessions to establish a strong foundation and build momentum in your therapeutic journey. After 3-4 weeks, we may transition to bi-weekly sessions, and eventually monthly, if we agree that it's an appropriate adjustment for your progress. The goal is to find a rhythm that supports your growth while fitting into your life and schedule."
              />

              <FAQItem
                question="Is everything I say in therapy confidential?"
                answer="Confidentiality is a crucial part of therapy and a cornerstone of our professional relationship. Everything you share is confidential, with a few legal exceptions. These exceptions include situations where there is a risk of harm to yourself or others, or if there's suspected abuse or neglect of a child, elderly person, or dependent adult. In these cases, I am legally required to report to the appropriate authorities. Outside of these specific circumstances, your privacy is protected and respected."
              />

              <FAQItem
                question="Can you prescribe medication or complete psych testing?"
                answer="As a licensed therapist, my scope of practice does not include prescribing medications or conducting comprehensive psychological testing. However, I am qualified to diagnose and treat many mental health issues through therapy. If medication or psychological testing seems beneficial for your treatment, I can provide established clients with referrals to trusted providers in the community who specialize in these services. Our goal is to ensure you receive comprehensive care that addresses all aspects of your mental health."
              />

              <FAQItem
                question="How long will I need to attend therapy?"
                answer="There isn't a definitive answer to how long therapy will last, as everyone's circumstances and goals are unique. Some clients work with me for a few months to address specific issues, while others continue for years as part of their ongoing personal growth and mental health maintenance. The duration of therapy depends on various factors, including the nature and severity of your concerns, your personal goals, and the progress we make together. We'll regularly assess where you are in your healing journey and ensure that the work we're doing continues to meet your needs. The ultimate goal is to help you develop the tools and insights you need to navigate life's challenges effectively."
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="mb-16">
    <h3 className="text-3xl font-serif text-[#4285A0] mb-4 pb-2 border-b-2 border-[#4285A0]">{question}</h3>
    <p className="text-base text-[#1C3142] leading-relaxed">{answer}</p>
  </div>
)