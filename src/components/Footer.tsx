import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import 'primeicons/primeicons.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-auto rounded-lg flex items-center justify-center">
                <img src='logo.jpg' alt='logo' className='w-16 h-auto' />
              </div>
              <span className="text-xl font-bold text-white">CommandoAI</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge AI solutions.
              We make artificial intelligence accessible and practical for companies of all sizes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/commando_ai/"
                className="text-gray-400 hover:text-[#1e3a8a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@commando_ai"
                className="text-gray-400 hover:text-[#1e3a8a] transition-colors"
                aria-label="TikTok"
              >
                <i className="pi pi-tiktok text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-white font-semibold mb-6">Education</h3>
            <ul className="space-y-4">
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  AI for Business & Marketing
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  AI for Programming
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  AI for Data Science
                </a>
              </li>
              <li>
                <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                  AI for Cyber Security
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  AI Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  AI Security
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3 text-[#1e3a8a]" />
                <a href="mailto:hetaodrin@gmail.com" className="hover:text-white transition-colors">
                  hetaodrin@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3 text-[#1e3a8a]" />
                <a href="tel:+38349527526" className="hover:text-white transition-colors">
                  +383 49 527 526
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-[#1e3a8a] flex-shrink-0" />
                <span>Qamil Bala 37<br />Pristina, Kosovo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest AI insights and updates delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-[#1A1A1A] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a] border border-white/10"
              />
              <button className="bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} CommandoAI AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}