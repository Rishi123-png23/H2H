import { Award, Heart, Users, Target } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function About() {
  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & Master Hair Specialist',
      experience: '15+ years',
      expertise: 'Hair Bonding & Systems',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Hair Stylist',
      experience: '10+ years',
      expertise: 'Wigs & Extensions',
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Anil Reddy',
      role: 'Hair Replacement Specialist',
      experience: '8+ years',
      expertise: 'Men\'s Hair Systems',
      image: 'https://images.pexels.com/photos/1319799/pexels-photo-1319799.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Kavya Menon',
      role: 'Consultation Expert',
      experience: '6+ years',
      expertise: 'Color Matching & Customization',
      image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=400',
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
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2008, Hair2Hair Studio began with a simple vision: to help people regain their confidence
                  through natural, high-quality hair replacement solutions.
                </p>
                <p>
                  We understand how difficult hair loss and hair thinning can be. Every issue is unique, and every
                  client deserves personalized attention. That's why we've dedicated ourselves to becoming experts in
                  non-surgical hair replacement solutions.
                </p>
                <p>
                  Over 15 years later, we've helped thousands of clients transform their appearance and boost their
                  self-esteem. Our commitment to quality, discretion, and natural results has made us one of the most
                  trusted names in hair replacement in Telangana.
                </p>
                <p className="text-[#8B1538] font-medium italic">
                  At Hair 2 Hair Studio, we pay attention to our customers' problems with great detail, giving them the
                  best without any compromise.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800"
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
          <h2
            className="text-4xl font-serif text-center text-[#8B1538] mb-12"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-[#8B1538] font-medium mb-2">{member.role}</p>
                  <div className="border-t pt-3 mt-3 text-sm text-gray-600 space-y-1">
                    <p>
                      <span className="font-medium">Experience:</span> {member.experience}
                    </p>
                    <p>
                      <span className="font-medium">Expertise:</span> {member.expertise}
                    </p>
                  </div>
                </div>
              </Card>
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
