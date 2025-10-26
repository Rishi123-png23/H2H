import { Award, Heart, Users, Target } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function About() {
  const team = [
    {
      name: 'Jampala Sathish',
      role: 'Founder & Master Hair Specialist',
      experience: '10+ years',
      expertise: 'Hair Bonding & Systems',
      image: '/Data/Sathish.jpg',
    },
    {
      name: 'Jampala Rishi Krishna',
      role: 'Cheif Technical Officer',
      experience: '2+ years',
      expertise: 'Technical worksand Marketing',
      image: '/Data/Rishi.png',
    },
    {
      name: 'Jampala Anil',
      role: 'Hair Replacement Specialist',
      experience: '5+ years',
      expertise: 'Men\'s Hair Systems',
      image: '/Data/anil.jpg',
    },
    {
      name: 'Jampala Navya',
      role: 'Consultation Expert',
      experience: '6+ years',
      expertise: 'Marketing Lead',
      image: '/Data/Navya.jpg',
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empathy & Understanding',
      description: 'We understand the emotional impact of hair loss and treat every client with compassion',
    },
    {
      icon: Award,
      title: 'Excellence & Quality',
      description: 'We never compromise on quality and only use the finest materials',
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your satisfaction and confidence are at the heart of everything we do',
    },
    {
      icon: Target,
      title: 'Natural Results',
      description: 'Our goal is to create solutions that look and feel completely natural',
    },
  ];

  return (
    <div className="min-h-screen pb-16">
      <div
        className="h-64 bg-cover bg-center relative mb-12"
        style={{
          backgroundImage: "url('/Data/about us.png')",
        }}
      >
  <div className="absolute inset-0 bg-gradient-to-r from-[#8B1538]/90 via-[#A0153E]/75 to-[#8B1538]/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Us
            </h1>
            <p className="text-xl">Where Beauty Meets Comfort</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl font-serif text-[#8B1538] mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Our Vision & Goal
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  We are a team of dedicated professionals who specialize in hair replacement, hair extensions, and hair
                  wigs. Our mission is to help our clients feel confident and beautiful by providing high-quality hair
                  solutions that look and feel natural. At our salon, we understand how important it is to have healthy,
                  beautiful hair.
                </p>
                <p>
                  Unfortunately, many people struggle with hair loss due to various factors such as genetics, medical
                  conditions, or aging. That’s where we come in – we offer a range of services to help restore your hair
                  and boost your confidence.
                </p>
                <p>
                  Our hair replacement services are designed to provide a natural-looking solution for those
                  experiencing hair loss. We use the latest techniques and technologies to create a customized hair
                  system that fits your scalp perfectly and looks like your own natural hair.
                </p>
                <p>
                  Whether you’re dealing with partial or complete hair loss, we have a solution that can help. In
                  addition to hair replacement, we also offer hair extensions for those looking to add length, volume,
                  or color to their hair.
                </p>
                <p>
                  Our extensions are made from high-quality human hair and are designed to blend seamlessly with your
                  natural hair. We offer a variety of options to suit different hair types, textures, and styles.
                </p>
                <p>
                  For those who prefer a non-surgical solution, we offer a range of hair wigs. Our wigs are made from
                  the finest materials and are available in a range of colors, lengths, and styles. We can help you
                  choose the perfect wig to suit your face shape, skin tone, and personal style.
                </p>
                <p>
                  At our salon, we believe that everyone deserves to feel confident and beautiful. That's why we offer a
                  welcoming, supportive environment where you can feel comfortable discussing your hair concerns and
                  finding the right solution for you.
                </p>
                <p>
                  Our team is committed to providing exceptional service and helping you achieve the look you've always
                  wanted. Thank you for considering us for your hair needs. We look forward to working with you and
                  helping you achieve the beautiful, healthy hair you deserve.
                </p>
                
                {/* Hidden SEO Content */}
                <div className="hidden">
                  <h3>About H2H Hair Studio - Best Hair Patches & Wigs in Hyderabad, Khammam, Kothagudem, Dilsukhnagar</h3>
                  <p>H2H Hair Studio (Hair2Hair) is the leading hair replacement specialist serving Hyderabad, Khammam, Kothagudem, and Dilsukhnagar. Our main branch is located in Dilsukhnagar, Hyderabad, and we provide premium hair patches, wigs, and non-surgical hair replacement solutions across Telangana.</p>
                  <p>With over 15 years of experience, H2H Hair Studio has become the trusted choice for hair patches in Hyderabad, hair studio Khammam, hair studio Kothagudem, and hair studio Dilsukhnagar. We specialize in natural-looking hair replacement solutions for men and women.</p>
                  <p>Our expert team at H2H Hair Studio provides professional hair patch installation, wig fitting, hair bonding, and complete hair replacement services. We serve customers from all areas of Hyderabad, Khammam, Kothagudem, Dilsukhnagar, Secunderabad, and surrounding districts in Telangana.</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/Data/about us.png"
                alt="Hair2Hair Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2
            className="text-4xl font-serif text-center text-[#8B1538] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#A0153E] rounded-full mb-4">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-serif text-[#8B1538] mb-4"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated professionals bring years of experience and expertise to provide you with the best hair solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Professional Image Container */}
                  <div className="relative h-80 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Professional Content */}
                  <div className="p-6 lg:p-8">
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#8B1538] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-[#8B1538] font-semibold text-sm lg:text-base mb-4 tracking-wide uppercase">
                        {member.role}
                      </p>
                      
                      {/* Professional Details */}
                      <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-[#8B1538] rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">
                            <span className="text-gray-900">Experience:</span> {member.experience}
                          </span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                          <span className="text-sm text-gray-600 font-medium">
                            <span className="text-gray-900">Expertise:</span> {member.expertise}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2
            className="text-4xl font-serif text-center text-[#8B1538] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Certifications & Partnerships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Professional Training</h3>
              <p className="text-gray-600 text-sm">Certified by International Hair Replacement Academy</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Quality Standards</h3>
              <p className="text-gray-600 text-sm">ISO certified quality management systems</p>
            </Card>
            <Card className="p-6 text-center">
              <Award className="text-[#D4AF37] mx-auto mb-4" size={48} />
              <h3 className="font-semibold text-lg mb-2">Premium Suppliers</h3>
              <p className="text-gray-600 text-sm">Partnerships with leading international hair suppliers</p>
            </Card>
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#F5E6EA] to-[#E4B5C0] rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Visit Our Studio
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Experience our warm, welcoming environment where privacy and comfort are our top priorities. Come see why
            thousands trust us with their hair transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/booking" size="lg">
              Schedule a Visit
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Get Directions
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
