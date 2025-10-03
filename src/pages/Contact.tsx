import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    concern: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">We're here to answer all your questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card hover className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Visit Us</h3>
            <p className="text-gray-600 mb-4">
              2nd floor, Star complex, Near new bus stand, Khammam, Telangana 507002
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B1538] font-medium hover:text-[#A0153E] transition"
            >
              Get Directions →
            </a>
          </Card>

          <Card hover className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Call/Email Us</h3>
            <div className="space-y-2 text-gray-600">
              <p>
                <a href="tel:+918121999243" className="hover:text-[#8B1538] transition">
                  +91 81219 99243
                </a>
              </p>
              <p>
                <a href="mailto:hair2hairstudiokhammam@gmail.com" className="hover:text-[#8B1538] transition break-all">
                  hair2hairstudiokhammam@gmail.com
                </a>
              </p>
              <a
                href={`https://wa.me/918121999243?text=${encodeURIComponent('Hi! I would like to know more about your services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-[#25D366] font-medium hover:underline"
              >
                WhatsApp Us →
              </a>
            </div>
          </Card>

          <Card hover className="p-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
              <Clock className="text-white" size={24} />
            </div>
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Business Hours</h3>
            <div className="space-y-2 text-gray-600">
              <p>Monday - Friday</p>
              <p className="font-medium">9:00 AM – 7:00 PM</p>
              <p>Saturday - Sunday</p>
              <p className="font-medium">9:00 AM – 7:00 PM</p>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <h2 className="text-3xl font-serif text-[#8B1538] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Concern *</label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                  >
                    <option value="">Choose an option</option>
                    <option value="Hair Replacement">Hair Replacement</option>
                    <option value="Hair Extensions">Hair Extensions</option>
                    <option value="Wigs for Women">Wigs for Women</option>
                    <option value="Men's Hair Systems">Men's Hair Systems</option>
                    <option value="Wholesale Enquiry">Wholesale Enquiry</option>
                    <option value="Product Care & Maintenance">Product Care & Maintenance</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div>
            <Card className="h-full p-8">
              <h2 className="text-3xl font-serif text-[#8B1538] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Find Us
              </h2>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.8!2d80.1514!3d17.2473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE0JzUwLjMiTiA4MMKwMDknMDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Hair2Hair Studio Location"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Quick Links</h3>
                  <div className="space-y-2">
                    <Button href="/booking" className="w-full">
                      Book an Appointment
                    </Button>
                    <Button
                      href={`https://wa.me/918121999243?text=${encodeURIComponent('Hi! I would like to know more.')}`}
                      className="w-full bg-[#25D366] hover:bg-[#128C7E]"
                    >
                      WhatsApp Direct Chat
                    </Button>
                    <Button href="tel:+918121999243" variant="outline" className="w-full">
                      Call Now
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
