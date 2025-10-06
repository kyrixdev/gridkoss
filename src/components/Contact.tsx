import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Here you would typically send the form data to your server or API
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="bg-[#000] py-20">
      <div className="container mx-auto px-4 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
          Contact
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-semibold text-left text-white mb-6">Ask whatever you have in your mind</h2>
              <p className="text-gray-300 mb-6 text-left">
                We’re here to help you with any questions or concerns. Reach out to us anytime!
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 mr-3 text-[#1e3a8a]" />
                  <span>hetaodrin@gmail.com</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-3 text-[#1e3a8a]" />
                  <span>+383 49527526</span>
                </div>

                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-[#1e3a8a]" />
                  <span>Qamil Bala 37, Pristina, Kosovo</span>
                </div>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.826477515103!2d21.172111099999995!3d42.652032899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ec461f5ea23%3A0xdf2ce16dd0734d9a!2sQamil%20Bala%2C%20Prishtina%2010000!5e1!3m2!1sen!2stn!4v1758883105212!5m2!1sen!2stn"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${errors.name ? 'ring-2 ring-red-500' : ''
                    }`}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${errors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${errors.subject ? 'ring-2 ring-red-500' : ''
                    }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-red-500 text-sm">{errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] ${errors.message ? 'ring-2 ring-red-500' : ''
                    }`}
                />
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}