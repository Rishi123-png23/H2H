import { TrendingUp, Shield, Truck, Users, FileText, Headphones } from 'lucide-react';
import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Wholesale() {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    gst: '',
    contactPerson: '',
    email: '',
    phone: '',
    address: '',
    monthlyVolume: '',
    productInterest: '',
  });

  const benefits = [
    { icon: TrendingUp, title: 'Bulk Pricing & Discounts', description: 'Competitive rates for volume orders' },
    { icon: Shield, title: 'Quality Assured', description: 'Premium products with guarantees' },
    { icon: Truck, title: 'Consistent Supply', description: 'Reliable inventory and delivery' },
    { icon: Users, title: 'Business Support', description: 'Dedicated account management' },
    { icon: FileText, title: 'Custom Orders', description: 'Tailored solutions for your business' },
    { icon: Headphones, title: 'Training & Support', description: 'Expert guidance and resources' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Use Web3Forms service with traditional form submission
      const form = document.createElement('form');
      form.action = 'https://api.web3forms.com/submit';
      form.method = 'POST';
      form.style.display = 'none';
      
      // Add Web3Forms fields
      const fields = {
        access_key: '675b3c24-8999-426b-819b-29bc8e789cc7',
        subject: 'New Website Enquiry - B2B Wholesale',
        from_name: 'Hair 2 Hair Studio Website',
        redirect: 'https://web3forms.com/success',
        businessName: formData.businessName,
        businessType: formData.businessType,
        gst: formData.gst,
        contactPerson: formData.contactPerson,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        monthlyVolume: formData.monthlyVolume,
        productInterest: formData.productInterest,
        botcheck: ''
      };
      
      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
      // Show success message
      alert('Application submitted successfully! We will get back to you soon.');
      setFormData({
        businessName: '',
        businessType: '',
        gst: '',
        contactPerson: '',
        email: '',
        phone: '',
        address: '',
        monthlyVolume: '',
        productInterest: '',
      });
      
    } catch (error) {
      console.error('Error sending application:', error);
      alert('Sorry, there was an error sending your application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage: 'url(/Data/IMG-20251003-WA0073.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#C19A6B]/80 to-[#D4AF37]/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Premium Wigs & Patches
            </h1>
            <p className="text-xl">Wholesale Solutions for Your Business</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C19A6B] to-[#D4AF37] rounded-full mb-4">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#C19A6B]">Women's Wholesale</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Bulk Hair Toppers & Patches
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Full Wig Collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Extension Bundles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Raw Hair Material
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#C19A6B]">Men's Wholesale</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Hair System Bundles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Toupee Collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Bulk Base Materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                  Adhesive & Maintenance Kits
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-16 bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-8">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            World Wide Delivery Available
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-6">
              We provide worldwide delivery through our trusted courier partners to ensure your orders reach you safely and on time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-semibold text-[#C19A6B] mb-2">Blue Dart</h3>
                <p className="text-sm text-gray-600">Premium express delivery service</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-semibold text-[#C19A6B] mb-2">Delhivery</h3>
                <p className="text-sm text-gray-600">Reliable logistics partner</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-semibold text-[#C19A6B] mb-2">DHL Express</h3>
                <p className="text-sm text-gray-600">International shipping specialist</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-semibold text-[#C19A6B] mb-2">FedEx</h3>
                <p className="text-sm text-gray-600">Global delivery network</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              All our premium hair patches and wigs are carefully packaged and shipped worldwide through these trusted courier partners.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Premium Hair Patches & Wigs Collection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/Data/IMG-20251003-WA0073.jpg', name: 'Classic Men\'s Hair System', description: 'Natural hairline • Comfortable wear • Salon grade' },
              { src: '/Data/IMG-20251003-WA0074.jpg', name: 'Premium Hair Patch', description: 'High quality • Durable • Natural look' },
              { src: '/Data/IMG-20251003-WA0075.jpg', name: 'Professional Hair System', description: 'Salon grade • Long lasting • Easy maintenance' },
              { src: '/Data/IMG-20251003-WA0076.jpg', name: 'Natural Hair Patch', description: 'Breathable • Comfortable • Professional finish' },
              { src: '/Data/IMG-20251003-WA0077.jpg', name: 'Premium Hair System', description: 'High quality materials • Natural appearance' },
              { src: '/Data/IMG-20251003-WA0078.jpg', name: 'Professional Hair Patch', description: 'Salon quality • Durable • Natural look' },
              { src: '/Data/Golden_Silk_hair_patch.jpg', name: 'Golden Silk Hair Patch', description: 'Premium silk base • Natural hair • Luxurious feel' },
              { src: '/Data/Golden_hair_patch.jpg', name: 'Golden Hair Patch', description: 'Golden tone • Premium quality • Natural appearance' },
              { src: '/Data/Australian_mirage.jpg', name: 'Australian Mirage', description: 'Australian hair • Premium quality • Natural look' },
              { src: '/Data/mf_patch.jpg', name: 'MF Hair Patch', description: 'Multi-fiber • Durable • Professional grade' },
              { src: '/Data/china_mirage.jpg', name: 'China Mirage', description: 'Chinese hair • High quality • Natural appearance' },
              { src: '/Data/golden_miraz.jpg', name: 'Golden Miraz', description: 'Golden tone • Premium quality • Natural look' },
              { src: '/Data/mono_hair_patch.jpg', name: 'Mono Hair Patch', description: 'Monofilament base • Natural parting • Professional grade' },
            ].map((item, idx) => (
              <Card key={idx} hover className="overflow-hidden">
                <img src={item.src} alt={item.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pricing Tiers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#C19A6B]">
                  <th className="text-left py-3 px-4 font-semibold">Order Volume</th>
                  <th className="text-center py-3 px-4 font-semibold">Discount</th>
                  <th className="text-center py-3 px-4 font-semibold">Payment Terms</th>
                  <th className="text-center py-3 px-4 font-semibold">Delivery Time</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">10-50 units</td>
                  <td className="text-center py-3 px-4 text-[#D4AF37] font-semibold">10%</td>
                  <td className="text-center py-3 px-4">Net 15</td>
                  <td className="text-center py-3 px-4">7-10 days</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4">50-100 units</td>
                  <td className="text-center py-3 px-4 text-[#D4AF37] font-semibold">20%</td>
                  <td className="text-center py-3 px-4">Net 30</td>
                  <td className="text-center py-3 px-4">5-7 days</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">100+ units</td>
                  <td className="text-center py-3 px-4 text-[#D4AF37] font-semibold">30%</td>
                  <td className="text-center py-3 px-4">Net 30</td>
                  <td className="text-center py-3 px-4">3-5 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Minimum Order Quantity (MOQ): 10 units per product category
          </p>
        </section>

        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            B2B Registration
          </h2>
          <Card className="max-w-3xl mx-auto p-8">
            <form id="wholesale-form" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="access_key" value="675b3c24-8999-426b-819b-29bc8e789cc7" />
              <input type="hidden" name="subject" value="New Website Enquiry - B2B Wholesale" />
              <input type="hidden" name="from_name" value="Hair 2 Hair Studio Website" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="checkbox" name="botcheck" id="" style={{ display: 'none' }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                  <input
                    name="businessName"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Type *</label>
                  <select
                    name="businessType"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  >
                    <option value="">Select type</option>
                    <option value="salon">Salon</option>
                    <option value="retailer">Retailer</option>
                    <option value="distributor">Distributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">GST Number</label>
                <input
                  name="gst"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                  value={formData.gst}
                  onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Contact Person *</label>
                  <input
                    name="contactPerson"
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expected Monthly Order Volume *</label>
                <select
                  name="monthlyVolume"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                  value={formData.monthlyVolume}
                  onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                >
                  <option value="">Select volume</option>
                  <option value="10-50">10-50 units</option>
                  <option value="50-100">50-100 units</option>
                  <option value="100+">100+ units</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product Interest *</label>
                <textarea
                  name="productInterest"
                  required
                  rows={3}
                  placeholder="Please specify which products you're interested in..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </Card>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center" hover>
            <h3 className="font-semibold mb-2">Product Catalog</h3>
            <p className="text-sm text-gray-600 mb-4">Download our complete product catalog</p>
            <Button variant="outline" size="sm">
              Download PDF
            </Button>
          </Card>
          <Card className="p-6 text-center" hover>
            <h3 className="font-semibold mb-2">Price List</h3>
            <p className="text-sm text-gray-600 mb-4">Access wholesale pricing</p>
            <Button variant="outline" size="sm">
              Request Access
            </Button>
          </Card>
          <Card className="p-6 text-center" hover>
            <h3 className="font-semibold mb-2">Terms & Conditions</h3>
            <p className="text-sm text-gray-600 mb-4">Business partnership terms</p>
            <Button variant="outline" size="sm">
              View Terms
            </Button>
          </Card>
          <Card className="p-6 text-center" hover>
            <h3 className="font-semibold mb-2">Agreement Template</h3>
            <p className="text-sm text-gray-600 mb-4">Wholesale agreement template</p>
            <Button variant="outline" size="sm">
              Download
            </Button>
          </Card>
        </section>
      </div>
    </div>
  );
}
