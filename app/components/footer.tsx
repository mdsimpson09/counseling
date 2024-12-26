import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#154458] text-white pt-0 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 border-t border-[#4285A0]"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12"> {/* Updated main content div */}
          {/* Logo and Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-serif mb-4">Simpson Counseling</h3>
            <p className="text-[#F3E5D7] mb-6 max-w-md">
              Creating a safe and supportive environment for healing, growth, and transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-serif mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="hover:text-[#4285A0] transition-colors">Services</Link></li>
              <li><Link href="/specialties" className="hover:text-[#4285A0] transition-colors">Specialties</Link></li>
              <li><Link href="/about" className="hover:text-[#4285A0] transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-[#4285A0] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-serif mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@test.com" className="hover:text-[#4285A0] transition-colors">
                  info@test.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-[#4285A0] transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#4285A0]"> {/* Updated bottom border div */}
          <p className="text-sm text-center">© {new Date().getFullYear()} Simpson Counseling Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer





// import Link from 'next/link'

// const Footer = () => {
//   return (
    
//     <footer className="bg-simpson-blue-dark text-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
//           {/* Logo and Company Info */}
//           <div className="md:col-span-2">
//             <h3 className="text-3xl font-serif mb-4">Simpson Counseling</h3>
//             <p className="text-simpson-blue-lighter mb-6 max-w-md">
//               Creating a safe and supportive environment for healing, growth, and transformation.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-3">
//               <li><Link href="/services" className="hover:text-simpson-blue-lighter transition-colors">Services</Link></li>
              
//               <li><Link href="/specialties" className="hover:text-simpson-blue-lighter transition-colors">Specialties</Link></li>
             
//               <li><Link href="/about" className="hover:text-simpson-blue-lighter transition-colors">About</Link></li>
             
//               <li><Link href="/faq" className="hover:text-simpson-blue-lighter transition-colors">FAQs</Link></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact</h4>
//             <ul className="space-y-3">
//               <li>
//                 <a href="mailto:info@simpsoncounseling.co" className="hover:text-simpson-blue-lighter transition-colors">
//                   info@test.com
//                 </a>
//               </li>
//               <li>
//                 <a href="tel:+15551234567" className="hover:text-simpson-blue-lighter transition-colors">
//                   (555) 123-4567
//                 </a>
//               </li>
//               {/* <li><Link href="/good-faith" className="hover:text-simpson-blue-lighter transition-colors">Good Faith Estimate</Link></li>
              
//               <li><Link href="/cancellation-policy" className="hover:text-simpson-blue-lighter transition-colors">Cancellation Policy</Link></li>
              
//               <li><Link href="/pricing" className="hover:text-simpson-blue-lighter transition-colors">Pricing</Link></li> */}
//             </ul>
//           </div>
//         </div>
//         <div className="mt-12 pt-8 border-t border-simpson-blue-light text-sm text-center">
//           <p>© {new Date().getFullYear()} Simpson Counseling Co. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer