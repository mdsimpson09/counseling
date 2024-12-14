import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function GoodFaithEstimatePage() {
  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif text-simpson-blue mb-6">Good Faith Estimate</h1>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-simpson-blue-light mb-4">
              In compliance with the No Surprises Act, we provide a Good Faith Estimate of expected charges for services to individuals who are uninsured or who are not using insurance to pay for health care items and services.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-2">What is a Good Faith Estimate?</h2>
            <p className="text-simpson-blue-light mb-4">
              A Good Faith Estimate is a notification of expected charges for a scheduled or requested health care service. It provides an estimate of what you may have to pay out of pocket for a medical item or service.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-2">Our Commitment</h2>
            <p className="text-simpson-blue-light mb-4">
              At Simpson Counseling Co, we are committed to transparency in our pricing. We will provide you with a Good Faith Estimate for the total expected cost of any non-emergency items or services upon request or when scheduling services.
            </p>
            <p className="text-simpson-blue-light">
              If you have any questions about our Good Faith Estimate policy or would like to request an estimate, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

