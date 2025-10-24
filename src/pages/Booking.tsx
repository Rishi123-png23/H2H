import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    gender: '',
    age: '',
    previousCustomer: '',
    concerns: '',
    communication: '',
    hearAbout: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Submit booking to Web3Forms
      try {
        // Use Web3Forms service with traditional form submission
        const form = document.createElement('form');
        form.action = 'https://api.web3forms.com/submit';
        form.method = 'POST';
        form.style.display = 'none';
        
        // Add Web3Forms fields
        const fields = {
          access_key: '675b3c24-8999-426b-819b-29bc8e789cc7',
          subject: 'New Appointment Booking - Hair 2 Hair Studio',
          from_name: 'Hair 2 Hair Studio Website',
          redirect: 'https://web3forms.com/success',
          service: formData.service,
          date: formData.date,
          time: formData.time,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          gender: formData.gender,
          age: formData.age,
          previousCustomer: formData.previousCustomer,
          concerns: formData.concerns,
          communication: formData.communication,
          hearAbout: formData.hearAbout,
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
        alert('Booking confirmed! You will receive a confirmation email shortly.');
        
        // Reset form data
        setFormData({
          service: '',
          date: '',
          time: '',
          name: '',
          phone: '',
          email: '',
          gender: '',
          age: '',
          previousCustomer: '',
          concerns: '',
          communication: '',
          hearAbout: '',
        });
        setStep(1);
        
      } catch (error) {
        console.error('Error sending booking:', error);
        alert('Sorry, there was an error sending your booking. Please try again.');
      }
    }
  };

  const timeSlots = [
    '9:00 AM',
    '9:30 AM',
    '10:00 AM',
    '10:30 AM',
    '11:00 AM',
    '11:30 AM',
    '12:00 PM',
    '12:30 PM',
    '1:00 PM',
    '1:30 PM',
    '2:00 PM',
    '2:30 PM',
    '3:00 PM',
    '3:30 PM',
    '4:00 PM',
    '4:30 PM',
    '5:00 PM',
    '5:30 PM',
    '6:00 PM',
    '6:30 PM',
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-[#8B1538] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Book An Appointment
          </h1>
          <p className="text-xl text-gray-600">Let's find the perfect time for your consultation</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    step >= s ? 'bg-[#8B1538] text-white' : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {s}
                </div>
                {s < 5 && (
                  <div
                    className={`w-16 h-1 ${step > s ? 'bg-[#8B1538]' : 'bg-gray-200'}`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Date/Time</span>
            <span>Details</span>
            <span>Additional</span>
            <span>Confirm</span>
          </div>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-[#8B1538]" size={28} />
                  <h2 className="text-2xl font-semibold text-gray-800">Select Service</h2>
                </div>
                <div className="space-y-3">
                  {[
                    "Women's Hair Patch Consultation",
                    "Women's Wig Fitting",
                    "Men's Hair System Consultation",
                    'Hair Extension Fitting',
                    'Maintenance/Follow-up',
                    'Wholesale Business Meeting',
                  ].map((service) => (
                    <label
                      key={service}
                      className={`block p-4 border-2 rounded-lg cursor-pointer transition ${
                        formData.service === service
                          ? 'border-[#8B1538] bg-[#F5E6EA]'
                          : 'border-gray-200 hover:border-[#8B1538]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        checked={formData.service === service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mr-3"
                        required
                      />
                      <span className="font-medium">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-[#8B1538]" size={28} />
                  <h2 className="text-2xl font-semibold text-gray-800">Choose Date & Time</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Date *</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Time *</label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`p-2 text-sm rounded-lg border transition ${
                            formData.time === time
                              ? 'bg-[#8B1538] text-white border-[#8B1538]'
                              : 'border-gray-300 hover:border-[#8B1538]'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="text-[#8B1538]" size={28} />
                  <h2 className="text-2xl font-semibold text-gray-800">Personal Details</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age Range</label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      >
                        <option value="">Select</option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36-45">36-45</option>
                        <option value="46-55">46-55</option>
                        <option value="56+">56+</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-[#8B1538]" size={28} />
                  <h2 className="text-2xl font-semibold text-gray-800">Additional Information</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Are you a previous customer?
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      value={formData.previousCustomer}
                      onChange={(e) => setFormData({ ...formData, previousCustomer: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specific Concerns (Optional)
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      placeholder="Please share any specific concerns or requirements..."
                      value={formData.concerns}
                      onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Communication Method
                    </label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      value={formData.communication}
                      onChange={(e) => setFormData({ ...formData, communication: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="Phone">Phone</option>
                      <option value="Email">Email</option>
                      <option value="WhatsApp">WhatsApp</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">How did you hear about us?</label>
                    <select
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1538]"
                      value={formData.hearAbout}
                      onChange={(e) => setFormData({ ...formData, hearAbout: e.target.value })}
                    >
                      <option value="">Select</option>
                      <option value="Google Search">Google Search</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Friend/Family">Friend/Family</option>
                      <option value="Walk-in">Walk-in</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-[#8B1538]" size={28} />
                  <h2 className="text-2xl font-semibold text-gray-800">Confirm Your Booking</h2>
                </div>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Service</p>
                      <p className="font-semibold">{formData.service}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Date</p>
                      <p className="font-semibold">{formData.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Time</p>
                      <p className="font-semibold">{formData.time}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Name</p>
                      <p className="font-semibold">{formData.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <p className="font-semibold">{formData.phone}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-semibold">{formData.email}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-[#F5E6EA] rounded-lg">
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                  <p className="text-sm text-gray-700">
                    Please provide at least 24 hours notice for cancellations. You can reschedule your appointment at
                    any time by contacting us.
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                  Back
                </Button>
              )}
              <Button type="submit" className="flex-1">
                {step === 5 ? 'Confirm Appointment' : 'Next'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
