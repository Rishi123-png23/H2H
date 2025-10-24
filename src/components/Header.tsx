import { useState } from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="bg-brand.primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+918121999243" className="flex items-center gap-2 hover:text-brand.cream transition">
              <Phone size={14} />
              <span>+91 81219 99243</span>
            </a>
            <a href="mailto:hair2hairstidio2024@gmail.com" className="hidden md:flex items-center gap-2 hover:text-brand.cream transition">
              <Mail size={14} />
              <span>hair2hairstidio2024@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/share/1BoX9WysMB/" target="_blank" rel="noopener noreferrer" className="hover:text-brand.cream transition">
              <Facebook size={16} />
            </a>
            <a href="https://www.instagram.com/h2h_hairstudio_/?__pwa=1" target="_blank" rel="noopener noreferrer" className="hover:text-brand.cream transition">
              <Instagram size={16} />
            </a>
            <a href="https://youtube.com/source/DNoNgL8tSsY/shorts?si=c4ej8ETEsCjXOADc" target="_blank" rel="noopener noreferrer" className="hover:text-brand.cream transition">
              <Youtube size={16} />
            </a>
          </div>
        </div>
      </div>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Compact navigation with logo and nav items on same line */}
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-serif text-brand.primary" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Hair 2 Hair Studio
                </h1>
                <p className="text-xs text-gray-600 italic">Beauty Meets Comfort</p>
              </div>
            </a>

            <button
              className="lg:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation links on the same line as logo */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="/" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">Home</a>

              <a href="/women" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">
                Women's Solutions
              </a>

              <a href="/men" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">
                Men's Solutions
              </a>

              <a href="/wholesale" className="text-gray-700 hover:text-brand.primary transition font-medium flex items-center gap-2 whitespace-nowrap">
                Wholesale
                <span className="bg-brand.gold text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
              </a>

              <a href="/services" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">
                Services
              </a>

              <a href="/gallery" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">Gallery</a>
              <a href="/about" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">About Us</a>
              <a href="/contact" className="text-gray-700 hover:text-brand.primary transition font-medium whitespace-nowrap">Contact</a>

              <a
                href="/booking"
                className="bg-gradient-to-r from-brand.primary to-brand.accent text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="/" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Home</a>
            <a href="/women" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Women's Solutions</a>
            <a href="/men" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Men's Solutions</a>
            <a href="/wholesale" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Wholesale</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Services</a>
            <a href="/gallery" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Gallery</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">About Us</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-brand.primary transition font-medium">Contact</a>
            <a
              href="/booking"
              className="block text-center bg-gradient-to-r from-brand.primary to-brand.accent text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium mt-4"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
