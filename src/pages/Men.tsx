import Card from '../components/Card';
import Button from '../components/Button';

export default function Men() {
  const patches = [
    {
      name: 'Skin Base Hair System',
      features: ['Durable PU base', 'Water-resistant', 'Active lifestyle ready', 'Natural appearance'],
      base: 'Polyurethane (PU)',
      coverage: 'Full/Partial',
      image: 'https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Lace Hair System',
      features: ['Breathable', 'Natural hairline', 'Lightweight', 'Comfortable wear'],
      base: 'Swiss Lace',
      coverage: 'Full Coverage',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Hybrid Base System',
      features: ['Best of both worlds', 'Durable front', 'Breathable top', 'Versatile'],
      base: 'Hybrid (Lace + PU)',
      coverage: 'Full Coverage',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mono Top System',
      features: ['Hand-tied', 'Natural movement', 'Long-lasting', 'Professional look'],
      base: 'Monofilament',
      coverage: 'Full/Partial',
      image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const wigs = [
    {
      name: 'Business Professional Wig',
      features: ['Classic style', 'Natural gray options', 'Conservative cut', 'Professional appearance'],
      style: 'Short/Medium',
      type: 'Full Wig',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Casual Style Wig',
      features: ['Relaxed look', 'Easy maintenance', 'Comfortable', 'Natural styling'],
      style: 'Medium',
      type: 'Full Wig',
      image: 'https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Sports Active Wig',
      features: ['Secure fit', 'Sweat-resistant', 'Durable', 'Natural movement'],
      style: 'Short',
      type: 'Full Wig',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const coverageAreas = [
    {
      title: 'Receding Hairline',
      description: 'Restore your natural hairline with invisible frontal solutions',
      icon: '👨',
    },
    {
      title: 'Crown Thinning',
      description: 'Target coverage for crown area hair loss',
      icon: '⭕',
    },
    {
      title: 'Full Bald Coverage',
      description: 'Complete transformation for full hair loss',
      icon: '👤',
    },
    {
      title: 'Partial Coverage',
      description: 'Blend seamlessly with existing hair',
      icon: '✨',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/80 to-[#A0153E]/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hair Systems & Solutions for Men
            </h1>
            <p className="text-xl">Confidence. Style. Natural Results.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#8B1538] mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Coverage Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {coverageAreas.map((area, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{area.title}</h3>
                <p className="text-sm text-gray-600">{area.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="patches" className="mb-16">
          <h2
            className="text-4xl font-serif text-[#8B1538] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hair Patches & Systems
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Our men's hair systems are designed for durability, comfort, and natural appearance. Choose the perfect
            base type for your lifestyle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {patches.map((product, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Base:</span> {product.base}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Coverage:</span> {product.coverage}
                    </p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8B1538] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="outline" size="sm" className="w-full">
                    Enquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="wigs" className="mb-16">
          <h2
            className="text-4xl font-serif text-[#8B1538] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Full Wigs & Toupees
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Complete hair solutions styled for different occasions and lifestyles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wigs.map((product, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Style:</span> {product.style}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Type:</span> {product.type}
                    </p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#8B1538] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="outline" size="sm" className="w-full">
                    Enquire Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-serif text-[#8B1538] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Choosing the Right Base Type
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-[#8B1538]">
                  <th className="text-left py-3 px-4 font-semibold">Base Type</th>
                  <th className="text-center py-3 px-4 font-semibold">Breathability</th>
                  <th className="text-center py-3 px-4 font-semibold">Durability</th>
                  <th className="text-center py-3 px-4 font-semibold">Natural Look</th>
                  <th className="text-center py-3 px-4 font-semibold">Comfort</th>
                  <th className="text-center py-3 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Lace</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-sm">Natural hairline</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">PU (Skin)</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-sm">Active lifestyle</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 font-medium">Monofilament</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-sm">Daily wear</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Hybrid</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="text-center py-3 px-4">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-sm">All-around</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Start Your Transformation Today
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experts will help you choose the perfect hair system for your lifestyle. Book a confidential
            consultation now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" size="lg">
              Book Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
