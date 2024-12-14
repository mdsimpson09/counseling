import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-simpson-bg flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-serif text-simpson-blue mb-6">About Business Name</h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Dr. Emily Simpson"
                width={400}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div>
              <p className="text-lg text-simpson-blue-light mb-4">
                Founded by Dr. Emily Barnes is dedicated to providing compassionate, evidence-based mental health care to our community.
              </p>
              <p className="text-lg text-simpson-blue-light mb-4">
                With over 15 years of experience, Dr. Barnes and her team of qualified therapists offer a range of services to support individuals, couples, and families on their journey to emotional wellness.
              </p>
              <p className="text-lg text-simpson-blue-light">
                Our approach is client-centered, focusing on creating a safe, accepting environment where you can explore your thoughts and feelings freely.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
