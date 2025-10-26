import { useState } from 'react';
import { Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="bg-brand.cream text-[#C19A6B] py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1BoX9WysMB/" target="_blank" rel="noopener noreferrer" className="hover:text-brand.primary transition">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/h2h_hairstudio_/?__pwa=1" target="_blank" rel="noopener noreferrer" className="hover:text-brand.primary transition">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com/source/DNoNgL8tSsY/shorts?si=c4ej8ETEsCjXOADc" target="_blank" rel="noopener noreferrer" className="hover:text-brand.primary transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 py-2">
            <div className="flex items-center">
              <a href="/" className="flex items-center mr-12">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-serif text-[#C19A6B] leading-tight whitespace-nowrap" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Hair 2 Hair Studio
                  </h1>
                  <p className="text-xs text-gray-600 italic leading-tight">Beauty Meets Comfort</p>
                </div>
              </a>
            </div>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="/" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Home</a>
              <a href="/women" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Women Solutions</a>
              <a href="/men" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Men Solutions</a>
              <a href="/services" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Services</a>
              <a href="/wholesale" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Wholesale</a>
              <a href="/gallery" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Gallery</a>
              <a href="/contact" className="text-sm text-center text-gray-700 hover:text-[#C19A6B] transition font-medium px-3 py-2 rounded hover:bg-gray-50">Contact Us</a>
              <a
                href="/booking"
                className="bg-[#C19A6B] text-center text-white text-sm px-4 py-2 rounded hover:bg-[#D4AF37] transition-all duration-300 font-medium whitespace-nowrap"
              >
                Book Free Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Home</a>
            <a href="/women" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Women's Solutions</a>
            <a href="/men" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Men's Solutions</a>
            <a href="/wholesale" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Wholesale</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Services</a>
            <a href="/gallery" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Gallery</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">About Us</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-[#C19A6B] transition font-medium">Contact</a>
            <a
              href="/booking"
              className="block text-center bg-[#C19A6B] text-white px-6 py-3 rounded hover:bg-[#D4AF37] transition-all duration-300 font-medium mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
