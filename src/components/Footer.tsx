import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-serif text-[#8B1538] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Updated with Hair Care Tips & Offers
          </h3>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B1538] text-gray-700"
            />
            <button
              type="submit"
              className="bg-[#8B1538] text-white px-6 py-3 rounded-lg hover:bg-[#A0153E] transition font-medium"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-600 mt-2">We respect your privacy</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hair 2 Hair Studio
            </h2>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Premium hair replacement solutions, wigs, and patches. We understand your needs and provide natural, undetectable solutions.
            </p>
            <p className="text-[#D4AF37] italic font-medium mb-4">Beauty Meets Comfort</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-[#8B1538] transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-[#8B1538] transition">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-[#8B1538] transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition">Services</a></li>
              <li><a href="/gallery" className="text-gray-400 hover:text-white transition">Gallery</a></li>
              <li><a href="/wholesale" className="text-gray-400 hover:text-white transition">Wholesale</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">FAQ</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/women" className="text-gray-400 hover:text-white transition">Women's Hair Patches</a></li>
              <li><a href="/women" className="text-gray-400 hover:text-white transition">Women's Wigs</a></li>
              <li><a href="/men" className="text-gray-400 hover:text-white transition">Men's Hair Systems</a></li>
              <li><a href="/women#extensions" className="text-gray-400 hover:text-white transition">Hair Extensions</a></li>
              <li><a href="/wholesale" className="text-gray-400 hover:text-white transition">Wholesale Products</a></li>
              <li><a href="/care" className="text-gray-400 hover:text-white transition">Care Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#D4AF37]">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>2nd floor, Star complex, Near new bus stand, Khammam, Telangana 507002</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+918121999243" className="hover:text-white transition">+91 81219 99243</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hair2hairstudiokhammam@gmail.com" className="hover:text-white transition break-all">
                  hair2hairstudiokhammam@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <Clock size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 9:00 AM – 7:00 PM</p>
                  <p>Sat-Sun: 9:00 AM – 7:00 PM</p>
                </div>
              </li>
            </ul>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-[#D4AF37] hover:text-white transition text-sm font-medium"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Hair2Hair Studio – All Rights Reserved</p>
          <p>Design & Development by WebX Solutions</p>
        </div>
      </div>
    </footer>
  );
}
