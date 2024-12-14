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
              answer="Your first session is typically an intake session where we'll discuss your reasons for seeking therapy, your background, and your goals. It's also an opportunity for you to ask questions and see if we're a good fit."
            />
            <FAQItem
              question="How long does each therapy session last?"
              answer="Standard therapy sessions are 50 minutes long. However, we may recommend longer sessions depending on your needs and the type of therapy."
            />
            <FAQItem
              question="How often will I need to attend therapy?"
              answer="The frequency of sessions varies depending on individual needs. Initially, weekly sessions are common. As you progress, we may adjust the frequency."
            />
            <FAQItem
              question="Is everything I say in therapy confidential?"
              answer="Confidentiality is a crucial part of therapy. Everything you share is confidential, with a few legal exceptions, such as if there's a risk of harm to yourself or others."
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
