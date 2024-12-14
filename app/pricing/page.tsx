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
            We strive to provide transparent pricing for our services. Please note that we offer a sliding scale for those experiencing financial hardship.
          </p>
          <div className="space-y-8">
            <PricingItem
              service="Individual Therapy"
              price="$120"
              duration="50 minutes"
            />
            <PricingItem
              service="Couples Counseling"
              price="$150"
              duration="60 minutes"
            />
            <PricingItem
              service="Family Therapy"
              price="$180"
              duration="75 minutes"
            />
            <PricingItem
              service="Group Therapy"
              price="$60"
              duration="90 minutes"
            />
          </div>
          <p className="mt-8 text-simpson-blue-light">
            We accept various insurance plans. Please contact us to verify your coverage.
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