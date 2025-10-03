import { useState, useEffect } from 'react';
import { Crown, Sparkles, Scissors, Handshake as HandshakeIcon, Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState<'women' | 'men'>('women');

  const heroSlides = [
    {
      title: 'Rediscover Confidence with Premium Hair Patches & Wigs',
      subtitle: 'Natural, Undetectable Solutions for Women & Men',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Expert Hair Replacement Solutions',
      subtitle: 'Transform Your Look with Our Premium Collections',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
    {
      title: 'Wholesale Solutions for Your Business',
      subtitle: 'Quality Products at Competitive Prices',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1920',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: Crown,
      title: 'Hair Patches & Toppers',
      description: 'Natural coverage for thinning areas',
      link: '/women#patches',
    },
    {
      icon: Sparkles,
      title: 'Premium Wigs',
      description: 'Full transformation solutions',
      link: '/women#wigs',
    },
    {
      icon: Scissors,
      title: 'Hair Extensions',
      description: 'Add length and volume instantly',
      link: '/women#extensions',
    },
    {
      icon: HandshakeIcon,
      title: 'Wholesale Solutions',
      description: 'Bulk orders for professionals',
      link: '/wholesale',
    },
  ];

  const benefits = [
    'Instant transformation',
    'Non-surgical & painless',
    'Customizable to your needs',
    'Durable & reusable',
    'Boost self-esteem',
  ];

  const womenServices = [
    {
      title: 'Lace Hair Toppers',
      description: 'Breathable, natural-looking coverage for crown and top areas',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Full Lace Wigs',
      description: 'Complete transformation with premium human hair',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Clip-in Extensions',
      description: 'Instant length and volume, easy to apply',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const menServices = [
    {
      title: 'Skin Base Systems',
      description: 'Durable PU base for active lifestyles',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Lace Hair Systems',
      description: 'Breathable and natural hairline',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Full Coverage Wigs',
      description: 'Complete solution for full hair loss',
      price: 'Contact for pricing',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const processSteps = [
    { step: 1, title: 'Consultation & Analysis', description: 'Understanding your needs and hair condition' },
    { step: 2, title: 'Choosing Base & Hair Type', description: 'Selecting the perfect match for you' },
    { step: 3, title: 'Customization & Fitting', description: 'Tailored to your specifications' },
    { step: 4, title: 'Attachment/Application', description: 'Professional installation' },
    { step: 5, title: 'Styling & Blending', description: 'Natural look perfection' },
    { step: 6, title: 'Aftercare & Maintenance', description: 'Ongoing support and care' },
  ];

  const whyChooseUs = [
    { title: 'Expert Team', description: '15+ years of experience in hair solutions' },
    { title: 'Premium Quality', description: 'Only the finest materials and craftsmanship' },
    { title: 'Personalized Solutions', description: 'Custom-tailored to your unique needs' },
    { title: 'Aftercare Support', description: 'Comprehensive maintenance guidance' },
    { title: 'Discreet Consultations', description: 'Private and confidential service' },
    { title: 'Transparent Pricing', description: 'No hidden costs or surprises' },
  ];

  const testimonials = [
    {
      text: 'Hair2Hair Studio changed my life. The hair patch looks so natural, nobody can tell!',
      author: 'Anonymous',
      rating: 5,
      gender: 'Female, 35',
    },
    {
      text: 'Professional service and excellent quality. I feel confident again.',
      author: 'Anonymous',
      rating: 5,
      gender: 'Male, 42',
    },
    {
      text: 'The team is incredibly skilled. My wig fits perfectly and looks amazing.',
      author: 'Anonymous',
      rating: 5,
      gender: 'Female, 28',
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h2
                  className="text-5xl md:text-6xl font-serif mb-6"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">{slide.subtitle}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button href="/booking" size="lg">
                    Book Consultation
                  </Button>
                  <Button href="/services" variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm">
                    Explore Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronLeft className="text-white" size={24} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition"
        >
          <ChevronRight className="text-white" size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} hover className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href={service.link} className="text-[#8B1538] font-medium hover:text-[#A0153E] transition">
                  Learn More →
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F5E6EA] to-[#E4B5C0]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-serif mb-6 text-[#8B1538]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Why Choose Hair Patches & Wigs?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#8B1538] rounded-full flex items-center justify-center">
                      <Check className="text-white" size={16} />
                    </div>
                    <p className="text-lg text-gray-800">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy client transformation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-serif text-center mb-8 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Services
          </h2>

          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('women')}
              className={`px-8 py-3 rounded-lg font-medium transition ${
                activeTab === 'women'
                  ? 'bg-[#8B1538] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Women's Solutions
            </button>
            <button
              onClick={() => setActiveTab('men')}
              className={`px-8 py-3 rounded-lg font-medium transition ${
                activeTab === 'men'
                  ? 'bg-[#8B1538] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Men's Solutions
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(activeTab === 'women' ? womenServices : menServices).map((service, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-3">{service.description}</p>
                  <p className="text-[#D4AF37] font-medium mb-4">{service.price}</p>
                  <Button href={activeTab === 'women' ? '/women' : '/men'} variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-serif text-center mb-12 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            How It Works
          </h2>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-[#8B1538] to-[#D4AF37]" />
              <div className="grid grid-cols-6 gap-4">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 relative z-10">
                        {step.step}
                      </div>
                      <h3 className="text-sm font-semibold text-center mb-2 text-gray-800">{step.title}</h3>
                      <p className="text-xs text-center text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-6">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-gray-800">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-serif text-center mb-12 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="p-6 text-center" hover>
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-[#8B1538]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-[#F8F8F8] to-[#EFEFEF]">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-4xl font-serif text-center mb-12 text-[#8B1538]"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.gender}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-[#8B1538]/80" />
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-serif mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl mb-8">
            Book a consultation today and discover the perfect hair solution for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" size="lg" variant="secondary">
              Book Appointment
            </Button>
            <Button
              href={`https://wa.me/918121999243?text=${encodeURIComponent('Hi! I would like to know more about your hair solutions.')}`}
              size="lg"
              className="bg-[#25D366] hover:bg-[#128C7E]"
            >
              WhatsApp Us
            </Button>
          </div>
          <p className="mt-6 text-lg">
            <a href="tel:+918121999243" className="hover:text-[#F4E4C1] transition">
              📞 +91 81219 99243
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
