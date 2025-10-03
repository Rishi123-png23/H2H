import { Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Women() {
  const patches = [
    {
      name: 'Silk Base Hair Topper',
      features: ['Natural scalp appearance', 'Breathable silk base', '100% human hair', 'Crown coverage'],
      base: 'Silk Base',
      hair: 'Human Remy Hair',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Lace Front Topper',
      features: ['Invisible hairline', 'Lightweight', 'Easy to wear', 'Perfect for thinning'],
      base: 'Swiss Lace',
      hair: 'Virgin Human Hair',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Mono Top Patch',
      features: ['Hand-tied', 'Natural movement', 'Durable', 'Comfortable fit'],
      base: 'Monofilament',
      hair: 'Human Hair',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Crown Coverage Topper',
      features: ['Target crown area', 'Clips securely', 'Blends naturally', 'Various sizes'],
      base: 'Hybrid Base',
      hair: 'Remy Human Hair',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const wigs = [
    {
      name: 'Full Lace Wig',
      features: ['Complete versatility', 'Natural parting', 'Breathable', 'Long-lasting'],
      base: 'Full Lace',
      hair: 'Virgin Human Hair',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Lace Front Wig',
      features: ['Natural hairline', 'Heat resistant', 'Style flexibility', 'Affordable'],
      base: 'Lace Front',
      hair: 'Human Hair',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: '360 Lace Wig',
      features: ['Ponytail ready', 'Natural all around', 'Comfortable', 'High quality'],
      base: '360 Lace',
      hair: 'Remy Hair',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Silk Top Wig',
      features: ['Realistic scalp', 'Premium quality', 'Soft texture', 'Natural look'],
      base: 'Silk Top',
      hair: 'Virgin Hair',
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const extensions = [
    {
      name: 'I-Tip Extensions',
      features: ['Individual strands', 'Natural movement', 'Long-lasting', 'No damage'],
      type: 'I-Tips',
      hair: 'Human Hair',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Clip-in Extensions',
      features: ['Easy application', 'Temporary', 'Reusable', 'Volume & length'],
      type: 'Clip-in',
      hair: 'Remy Hair',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Tape Extensions',
      features: ['Seamless blend', 'Quick install', 'Lightweight', 'Reusable'],
      type: 'Tape-in',
      hair: 'Human Hair',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/80 to-[#A0153E]/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Hair Solutions for Women
            </h1>
            <p className="text-xl">Natural, Beautiful, Confident</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section id="patches" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-4xl font-serif text-[#8B1538]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Hair Patches & Toppers
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <Filter size={20} />
              Filter
            </button>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Perfect for covering thinning areas, bald spots, or adding volume to your crown. Our toppers blend seamlessly
            with your natural hair.
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
                      <span className="font-medium">Hair:</span> {product.hair}
                    </p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
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
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-4xl font-serif text-[#8B1538]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Full Wigs
            </h2>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Complete transformation with our premium wig collection. Choose from various styles, lengths, and colors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wigs.map((product, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Base:</span> {product.base}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Hair:</span> {product.hair}
                    </p>
                  </div>
                  <ul className="space-y-1 mb-4">
                    {product.features.slice(0, 3).map((feature, idx) => (
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

        <section id="extensions" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-4xl font-serif text-[#8B1538]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Hair Extensions
            </h2>
          </div>
          <p className="text-gray-600 mb-8 text-lg">
            Add instant length, volume, and style with our premium hair extension collections.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {extensions.map((product, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                  <div className="mb-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Type:</span> {product.type}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Hair:</span> {product.hair}
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

        <section className="bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Need Help Choosing?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our experts are here to help you find the perfect hair solution. Book a free consultation today!
          </p>
          <Button href="/booking" size="lg">
            Book Free Consultation
          </Button>
        </section>
      </div>
    </div>
  );
}
