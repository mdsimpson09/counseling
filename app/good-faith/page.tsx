import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function GoodFaithEstimatePage() {
  return (
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {/* Hero Section */}
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
          <h1 className="text-5xl font-serif text-white mb-4">Good Faith Estimate</h1>
          <p className="text-xl text-white/90 font-light">
            A cornerstone of ethical mental health care is transparency—you deserve to know what to expect, both emotionally and financially.
          </p>
        </div>
      </section>

      {/* Content Section with Background Color */}
      <div className="bg-[#F5F2EF]">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-simpson-blue-light mb-6">
              I believe in transparency and empowering clients with the information they need to feel confident about their care. As part of the No Surprises Act, you have the right to receive a Good Faith Estimate outlining the costs of the services I provide.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-4">What is a Good Faith Estimate?</h2>
            <p className="text-simpson-blue-light mb-6">
              A Good Faith Estimate is a document that details the expected costs of your therapy sessions or related services if you are uninsured or if you choose not to use insurance. This estimate is designed to help you make informed decisions about your care and avoid unexpected financial burdens.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-4">What does it include?</h2>
            <p className="text-simpson-blue-light mb-6">
              The Good Faith Estimate covers the total anticipated cost of your therapy sessions, including the fee for individual, couples, or family therapy. If applicable, it also includes any additional services I might recommend, such as assessments or reports. While this estimate is based on your unique treatment plan, please note that it is not a contract and does not obligate you to complete a certain number of sessions.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-4">When will you receive it?</h2>
            <p className="text-simpson-blue-light mb-6">
              You have the right to receive a Good Faith Estimate at least 1 business day before your first scheduled session and any time upon request before scheduling services.
            </p>
            <p className="text-simpson-blue-light mb-6">
              Simply ask, and we will be happy to provide a detailed estimate for your care.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-4">What if the costs exceed the estimate?</h2>
            <p className="text-simpson-blue-light mb-6">
              If you receive a bill that is at least $400 more than your Good Faith Estimate, you have the right to dispute it. This ensures fairness and transparency in our financial practices, and we are here to help if you have any questions or concerns about your billing.
            </p>
            <h2 className="text-2xl font-serif text-simpson-blue mb-4">What do I do with it?</h2>
            <p className="text-simpson-blue-light mb-6">
              We encourage you to save a copy of your Good Faith Estimate for your records. This ensures you have a clear understanding of the financial aspects of your care and can refer to it as needed.
            </p>
            <p className="text-simpson-blue-light">
              I am committed to providing high-quality, compassionate care while upholding the highest ethical standards. If you have questions about your Good Faith Estimate or need clarification, do not hesitate to contact me. You can also visit{' '}
              <Link
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline"
              >
                CMS Website
              </Link>{' '}
              for additional information about your rights under the No Surprises Act.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);
}