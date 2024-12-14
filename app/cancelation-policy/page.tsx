import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function CancelationPolicyPage() {
  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif text-simpson-blue mb-6">Cancelation Policy</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-simpson-blue-light mb-4">
              We understand that unforeseen circumstances can arise. However, to maintain the quality of our services and respect the time of our therapists, we have established the following cancelation policy:
            </p>
            <ul className="list-disc list-inside space-y-2 text-simpson-blue-light mb-4">
              <li>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.</li>
              <li>Cancelations made with less than 24 hours notice will be subject to a fee of 50% of the session cost.</li>
              <li>
No-shows (failing to attend without notice) will be charged the full session fee.</li>
              <li>Exceptions may be made for genuine emergencies, at the discretion of your therapist.</li>
            </ul>
            <p className="text-lg text-simpson-blue-light">
              We appreciate your understanding and cooperation with this policy. If you have any questions or concerns, please don't hesitate to discuss them with your therapist.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

