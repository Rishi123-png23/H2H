import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand.dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hair 2 Hair Studio
            </h2>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Premium hair replacement solutions, wigs, and patches. We understand your needs and provide natural, undetectable solutions.
            </p>
            
            {/* Hidden SEO Content */}
            <div className="hidden">
              <h3>H2H Hair Studio - Best Hair Patches & Wigs in Hyderabad, Khammam, Kothagudem, Dilsukhnagar</h3>
              <p>H2H Hair Studio (Hair2Hair) is the leading hair replacement specialist in Hyderabad, Khammam, Kothagudem, and Dilsukhnagar. We offer premium hair patches, wigs, and non-surgical hair replacement solutions with 15+ years of experience. Our main branch is located in Dilsukhnagar, Hyderabad, serving customers across Telangana.</p>
              <p>Visit H2H Hair Studio for the best hair patches in Hyderabad, hair studio Khammam services, hair studio Kothagudem solutions, and hair studio Dilsukhnagar expertise. We provide professional hair replacement services including hair patches for men, wigs for women, hair systems, toupees, hair bonding, and complete hair replacement solutions.</p>
              <p>Our expert team at H2H Hair Studio provides natural-looking hair replacement solutions for men and women. We serve customers from all areas of Hyderabad, Khammam, Kothagudem, Dilsukhnagar, Secunderabad, and surrounding districts in Telangana. Contact us for the best hair studio experience in the region.</p>
            </div>
            <p className="text-brand.gold italic font-medium mb-4">Beauty Meets Comfort</p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1BoX9WysMB/" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-brand.primary transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/h2h_hairstudio_/?__pwa=1" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-brand.primary transition">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/source/DNoNgL8tSsY/shorts?si=c4ej8ETEsCjXOADc" target="_blank" rel="noopener noreferrer" className="bg-[#4A4A4A] p-2 rounded-full hover:bg-brand.primary transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand.gold">Quick Links</h3>
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
            <h3 className="text-lg font-semibold mb-4 text-brand.gold">Services</h3>
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
            <h3 className="text-lg font-semibold mb-4 text-brand.gold">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>1st Floor, beside Sai Baba Temple, Pratap Nagar, Dilsukhnagar, Hyderabad, Telangana 500060</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+918121999243" className="hover:text-white transition">+91 81219 99243</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:hair2hairstidio2024@gmail.com" className="hover:text-white transition break-all">
                  hair2hairstidio2024@gmail.com
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
              href="https://www.google.com/maps?sca_esv=2286ae5c4aad172f&rlz=1C1CHBF_enIN1003IN1003&sxsrf=AE3TifN9v7wVjK-Cfq4Nuf7Et3DMZzzogQ:1761147267709&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWgyaCBoYWlyIHN0dWRpbyBoeWRlcmFiYWQgZGlsc2h1ayoCCAAyBxAhGKABGAoyBxAhGKABGApIvClQyw5YzRpwAXgAkAEAmAGAAqABjgyqAQUwLjYuM7gBAcgBAPgBAZgCCqAC7QzCAggQABiABBiwA8ICDhAAGIAEGLADGIYDGIoFwgILEAAYgAQYsAMYogTCAgsQABiwAxiiBBiJBcICBRAhGKABwgIEECEYFZgDAIgGAZAGCZIHBTEuNi4zoAexK7IHBTAuNi4zuAfjDMIHBzAuMi42LjLIBzw&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kedsqbs3mcs7MZ1hrQ1iZ5S4&daddr=1st+Floor,+beside+Sai+Baba+Temple,+Pratap+Nagar,+Dilsukhnagar,+Hyderabad,+Telangana+500060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-brand.gold hover:text-white transition text-sm font-medium"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Hair2Hair Studio – All Rights Reserved</p>
          <p>Design & Development by Rishi</p>
        </div>
      </div>
    </footer>
  );
}
