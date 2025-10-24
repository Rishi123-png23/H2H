import { Filter } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Women() {
  const patches = [
    {
      name: 'Lace Front Hair Topper',
      features: ['Natural scalp appearance', 'Breathable lace base', '100% human hair', 'Crown coverage'],
      base: 'Lace Front',
      hair: 'Human Remy Hair',
      image: 'https://th.bing.com/th/id/OIP.X05VSITY62GLcpfD5pIYIAHaHL?w=214&h=208&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
    },
    {
      name: 'Mono Top Patch',
      features: ['Hand-tied construction', 'Natural movement', 'Durable', 'Comfortable fit'],
      base: 'Monofilament',
      hair: 'Human Hair',
      image: 'https://cdn.shopify.com/s/files/1/0429/7257/7950/files/mono-typeemob-img.jpg?v=1594445195',
    },
    {
      name: 'Lace Front Wig',
      features: ['Natural hairline', 'Heat resistant', 'Style flexibility', 'Affordable'],
      base: 'Lace Front',
      hair: 'Human Hair',
      image: 'https://th.bing.com/th/id/OIP.LJHmPSaCfxO3x5WLHn1TLQHaHZ?w=206&h=206&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
    },
    {
      name: '360 Lace Wig',
      features: ['Ponytail ready', 'Natural all around', 'Comfortable', 'High quality'],
      base: '360 Lace',
      hair: 'Remy Hair',
      image: 'https://th.bing.com/th/id/OIP.j1r-b1-5LSwxnkub8UcQIwHaHa?w=198&h=198&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
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
      image: 'https://th.bing.com/th/id/OIP.J2Ese355-ASMvnzXmyNX3QHaFs?w=272&h=209&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
    },
  ];

  const extensions = [
    {
      name: 'I-Tip Extensions',
      features: ['Individual strands', 'Natural movement', 'Long-lasting', 'No damage'],
      type: 'I-Tips',
      hair: 'Human Hair',
      image: 'data:image/webp;base64,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',
    },
    {
      name: 'Clip-in Extensions',
      features: ['Easy application', 'Temporary', 'Reusable', 'Volume & length'],
      type: 'Clip-in',
      hair: 'Remy Hair',
      image: 'https://th.bing.com/th/id/OIP.fxhXlCfFXZ01zmtcDlU6bgHaHa?w=202&h=202&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
    },
    {
      name: 'Tape Extensions',
      features: ['Seamless blend', 'Quick install', 'Lightweight', 'Reusable'],
      type: 'Tape-in',
      hair: 'Human Hair',
      image: 'https://th.bing.com/th/id/OIP._vnSBoGW0ZfmZ6MZi84ZsgHaJ4?w=165&h=220&c=7&r=0&o=7&cb=12&dpr=1.5&pid=1.7&rm=3',
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
            Complete transformation with our premium wig collection. Choose from various styles, lengths, and colors. <strong>World Wide Delivery Available</strong>
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
