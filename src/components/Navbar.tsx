import { Menu, X, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'w-auto bg-black/30 backdrop-blur-lg rounded-lg border border-white/10' 
        : 'w-[95%] max-w-7xl bg-black/90 rounded-lg border border-white/10'
    }`}>
      <div className={`transition-all duration-500 ${
        isScrolled ? 'px-4 py-2' : 'px-6 py-3'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
            {isScrolled && (
              <div className="w-8 h-8 bg-gradient-to-br from-[#8A2BE2] to-[#9370DB] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
            )}
              {!isScrolled && (
                <span className="text-2xl font-md text-white">Gridkoss</span>
              )}
            </div>
          </div>

          {/* Desktop Navigation - Hidden when scrolled */}
          {!isScrolled && (
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Home</a>
            <a href="#services" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Services</a>
            <a href="#testimonials" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Testimonials</a>
            <a href="#faq" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">FAQ</a>
            <a href="#contact" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Contact</a>
          </div>
          )}

          {/* Scrolled Navigation - Compact horizontal layout */}
          {isScrolled && (
            <div className="hidden md:flex items-center space-x-6 ml-4">
              <a href="#" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Home</a>
              <a href="#services" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Services</a>
              <a href="#testimonials" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Testimonials</a>
              <a href="#faq" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">FAQ</a>
              <a href="#contact" className="text-gray-200 p-1 transition-colors hover:rounded-md hover:p-1 hover:bg-gray-500/20">Contact</a>
            </div>
          )}

          {/* CTA Button */}
          <div className="hidden md:block">
            {isScrolled ? (
              <button className="ml-4 w-8 h-8 bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            ) : (
              <button className="bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Started
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-[#8A2BE2] to-[#9370DB] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}