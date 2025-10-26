import { Scissors, Sparkles, Users, Wrench } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Services() {
  const services = [
    {
      id: 'bonding',
      title: 'Hair Bonding Procedure',
      icon: Scissors,
      duration: '2-3 hours',
      description:
        'A semi-permanent hair replacement solution where hair patches are bonded to your scalp using medical-grade adhesives.',
      process: [
        'Consultation and scalp analysis',
        'Cleaning and preparation of application area',
        'Custom fitting and adjustment',
        'Application of bonding adhesive',
        'Attachment and securing of hair patch',
        'Styling and blending',
      ],
      benefits: ['Long-lasting (4-6 weeks)', 'Natural appearance', 'Water-resistant', 'Can shower and swim'],
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'weaving',
      title: 'Hair Weaving',
      icon: Sparkles,
      duration: '3-4 hours',
      description:
        'A non-adhesive method where hair extensions are woven into your existing hair using a thread-based technique.',
      process: [
        'Hair assessment and preparation',
        'Creating base tracks with your natural hair',
        'Weaving hair extensions onto tracks',
        'Securing with thread',
        'Styling and finishing',
      ],
      benefits: ['No chemicals or glue', 'Breathable', 'Adjustable', 'Minimal tension on scalp'],
      image: 'https://i.pinimg.com/originals/df/d8/72/dfd872195ea95e604d03ee5b28627766.jpg',
    },
    {
      id: 'clip-in',
      title: 'Clip-in Hair Solutions',
      icon: Users,
      duration: '30 minutes',
      description:
        'Temporary clip-in hair systems that can be applied and removed daily without any permanent attachment.',
      process: [
        'Selection of appropriate clip-in system',
        'Demonstrating application technique',
        'Adjusting clips for secure fit',
        'Blending with natural hair',
        'Styling guidance',
      ],
      benefits: ['No commitment', 'Easy to apply and remove', 'Can style as desired', 'Reusable'],
      image: 'https://tse4.mm.bing.net/th/id/OIP.vEsLRRYpDjVnl8naWeCn7AHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 'extensions',
      title: 'Hair Extension Services',
      icon: Wrench,
      duration: '2-4 hours',
      description:
        'Professional application of various extension types including I-Tips, tape-ins, and clip-ins for added length and volume.',
      process: [
        'Consultation on extension type',
        'Color matching and selection',
        'Sectioning natural hair',
        'Application of extensions',
        'Blending and styling',
        'Care instructions',
      ],
      benefits: ['Instant length and volume', 'Natural look', 'Long-lasting', 'Multiple methods available'],
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const wigServices = [
    {
      title: 'Custom Wig Creation',
      description: 'Fully customized wigs designed specifically for your measurements and preferences',
    },
    {
      title: 'Wig Styling & Cutting',
      description: 'Professional styling, cutting, and customization of your wig',
    },
    {
      title: 'Wig Maintenance & Repair',
      description: 'Deep cleaning, conditioning, and repair services for your wigs',
    },
    {
      title: 'Chemotherapy Wig Consultation',
      description: 'Compassionate consultations and solutions for medical hair loss',
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#C19A6B]/80 to-[#D4AF37]/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Services
            </h1>
            <p className="text-xl">Professional Hair Replacement & Extension Solutions</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Hair Replacement Services
          </h2>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={service.id} id={service.id}>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`order-2 lg:order-${index % 2 === 0 ? '1' : '2'}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover min-h-[300px]"
                      />
                    </div>
                    <div className={`p-8 order-1 lg:order-${index % 2 === 0 ? '2' : '1'}`}>
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#C19A6B] to-[#D4AF37] rounded-full mb-4">
                        <service.icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-3xl font-serif text-[#C19A6B] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        {service.title}
                      </h3>
                      <p className="text-[#D4AF37] font-medium mb-4">Duration: {service.duration}</p>
                      <p className="text-gray-700 mb-6">{service.description}</p>

                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-gray-800">Process Overview:</h4>
                        <ol className="space-y-2">
                          {service.process.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="font-semibold text-[#C19A6B] mt-0.5">{idx + 1}.</span>
                              <span className="text-gray-700">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold text-lg mb-3 text-gray-800">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[#C19A6B] rounded-full" />
                              <span className="text-gray-700">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button href="/booking">Book This Service</Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#C19A6B] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Wig Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wigServices.map((service, index) => (
              <Card key={index} hover className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button href="/contact" variant="outline" size="sm">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-serif text-[#C19A6B] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Not Sure Which Service is Right for You?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Book a free consultation with our experts. We'll assess your needs and recommend the best solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" size="lg">
              Book Free Consultation
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
