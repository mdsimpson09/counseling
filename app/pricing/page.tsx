import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif text-simpson-blue mb-6">Pricing</h1>
          <p className="text-lg text-simpson-blue-light mb-8">
            I strive to provide transparent pricing. Please note that a sliding scale for those experiencing financial hardship may be an option.
          </p>
          <div className="space-y-8">
            <PricingItem
              service="Phone Consultation"
              price="Free"
              duration="15 minutes"
            />
               <PricingItem
              service="Individual Therapy"
              price="$120"
              duration="45-50 minutes"
            />
       
          </div>
          <p className="mt-8 text-simpson-blue-light">
            Various insurance plans. Please contact us to verify your coverage.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const PricingItem = ({ service, price, duration }: { service: string; price: string; duration: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
    <div>
      <h2 className="text-2xl font-serif text-simpson-blue mb-2">{service}</h2>
      <p className="text-simpson-blue-light">{duration}</p>
    </div>
    <div className="text-2xl font-bold text-simpson-blue">{price}</div>
  </div>
)