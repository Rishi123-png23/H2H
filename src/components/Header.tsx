import { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="bg-[#8B1538] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+918121999243" className="flex items-center gap-2 hover:text-[#F4E4C1] transition">
              <Phone size={14} />
              <span>+91 81219 99243</span>
            </a>
            <a href="mailto:hair2hairstudiokhammam@gmail.com" className="hidden md:flex items-center gap-2 hover:text-[#F4E4C1] transition">
              <Mail size={14} />
              <span>hair2hairstudiokhammam@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4E4C1] transition">
              <Facebook size={16} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4E4C1] transition">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F4E4C1] transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex-1 hidden lg:flex items-center gap-8">
              <a href="/" className="text-gray-700 hover:text-[#8B1538] transition font-medium">Home</a>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('women')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#8B1538] transition font-medium">
                  Women's Solutions
                </button>
                {activeDropdown === 'women' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2">
                    <a href="/women#patches" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Patches & Toppers</a>
                    <a href="/women#wigs" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Full Wigs</a>
                    <a href="/women#extensions" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Extensions</a>
                    <a href="/women" className="block px-4 py-2 text-[#8B1538] font-medium hover:bg-[#F5E6EA] transition">View All</a>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('men')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#8B1538] transition font-medium">
                  Men's Solutions
                </button>
                {activeDropdown === 'men' && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2">
                    <a href="/men#patches" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Patches/Systems</a>
                    <a href="/men#wigs" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Full Wigs & Toupees</a>
                    <a href="/men" className="block px-4 py-2 text-[#8B1538] font-medium hover:bg-[#F5E6EA] transition">View All</a>
                  </div>
                )}
              </div>

              <a href="/wholesale" className="text-gray-700 hover:text-[#8B1538] transition font-medium flex items-center gap-2">
                Wholesale
                <span className="bg-[#D4AF37] text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
              </a>
            </div>

            <div className="flex-shrink-0">
              <a href="/" className="text-center block">
                <h1 className="text-2xl md:text-3xl font-serif text-[#8B1538]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Hair 2 Hair Studio
                </h1>
                <p className="text-xs text-gray-600 italic">Beauty Meets Comfort</p>
              </a>
            </div>

            <div className="flex-1 hidden lg:flex items-center justify-end gap-8">
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-gray-700 hover:text-[#8B1538] transition font-medium">
                  Services
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2">
                    <a href="/services#bonding" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Bonding</a>
                    <a href="/services#weaving" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Weaving</a>
                    <a href="/services#extensions" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Hair Extensions</a>
                    <a href="/services#wigs" className="block px-4 py-2 text-gray-700 hover:bg-[#F5E6EA] transition">Wig Services</a>
                    <a href="/services" className="block px-4 py-2 text-[#8B1538] font-medium hover:bg-[#F5E6EA] transition">View All</a>
                  </div>
                )}
              </div>

              <a href="/gallery" className="text-gray-700 hover:text-[#8B1538] transition font-medium">Gallery</a>
              <a href="/about" className="text-gray-700 hover:text-[#8B1538] transition font-medium">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-[#8B1538] transition font-medium">Contact</a>

              <a
                href="/booking"
                className="bg-gradient-to-r from-[#8B1538] to-[#A0153E] text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Book Appointment
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Home</a>
            <a href="/women" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Women's Solutions</a>
            <a href="/men" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Men's Solutions</a>
            <a href="/wholesale" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Wholesale</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Services</a>
            <a href="/gallery" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Gallery</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">About Us</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-[#8B1538] transition font-medium">Contact</a>
            <a
              href="/booking"
              className="block text-center bg-gradient-to-r from-[#8B1538] to-[#A0153E] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
