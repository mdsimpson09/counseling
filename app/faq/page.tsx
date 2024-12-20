import Navbar from '../components/navbar'
import  Footer from '../components/footer'

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif text-simpson-blue mb-6">Frequently Asked Questions</h1>
          <div className="space-y-8">
            <FAQItem
              question="What can I expect in my first therapy session?"
              answer="In our first session, we’ll focus on getting to know each other and setting the stage for our work together. We’ll start by going over an intake questionnaire you’ve filled out, which helps me understand your history, concerns, and what you hope to get out of therapy. The most important part of this session is building a sense of safety and trust. We’ll also talk about your goals for therapy and set realistic expectations for the process. 
  "
            />
        
            <FAQItem
              question="How long does each therapy session last?"
              answer="Standard therapy sessions are 50 minutes long."
            />

            <FAQItem
              question="Is there a no-show policy?"
              answer="A no-show fee of $75 will be charged directly to the card on file for any missed appointments without prior notice."
            />

            <FAQItem
              question="How often will I need to attend therapy?"
              answer="The frequency of sessions is tailored to your individual needs. We often begin with weekly sessions to establish a strong foundation, and after 3-4 weeks, we may transition to bi-weekly sessions, and eventually monthly, if we agree that it’s an appropriate adjustment for your progress."
            />
            <FAQItem
              question="Is everything I say in therapy confidential?"
              answer="Confidentiality is a crucial part of therapy. Everything you share is confidential, with a few legal exceptions, such as if you indicate intent to harm yourself, someone else, or report abuse/neglect of a dependent person."
            />

            <FAQItem
              question="Can you prescribe medication or complete psych testing?"
              answer="No, my license does not allow me to prescribe medications or complete psych testing. I diagnose and treat many mental health issues and am also able to provide established clients with referrals to trusted providers in the community for these services."
            />

            <FAQItem
              question="How long will I need to attend therapy?"
              answer="
              There isn’t a definitive answer to how long therapy will last, as everyone’s circumstances and goals are unique. Some clients work with me for a few months, while others continue for years. Together, we’ll regularly assess where you are in your healing journey and ensure that the work we’re doing continues to meet your needs."
            />
            <FAQItem
              question="Is there a no-show policy?"
              answer="A no-show fee of $75 will be charged directly to the card on file for any missed appointments without prior notice."
            />





          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const FAQItem = ({ question, answer }: { question: string; answer: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-serif text-simpson-blue mb-2">{question}</h2>
    <p className="text-simpson-blue-light">{answer}</p>
  </div>
)
