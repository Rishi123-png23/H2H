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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/80 to-[#A0153E]/60" />
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
            className="text-4xl font-serif text-center text-[#8B1538] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Partner With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
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
            className="text-4xl font-serif text-center text-[#8B1538] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Product Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#8B1538]">Women's Wholesale</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Bulk Hair Toppers & Patches
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Full Wig Collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Extension Bundles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Raw Hair Material
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4 text-[#8B1538]">Men's Wholesale</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Hair System Bundles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Toupee Collections
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Bulk Base Materials
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B1538] rounded-full" />
                  Adhesive & Maintenance Kits
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2
            className="text-4xl font-serif text-center text-[#8B1538] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Pricing Tiers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#8B1538]">
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
            className="text-4xl font-serif text-center text-[#8B1538] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            B2B Registration
          </h2>
          <Card className="max-w-3xl mx-auto p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                  <input
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
