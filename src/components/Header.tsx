import { useState, useEffect } from 'react';
import { Menu, X, Download, Github, Shield, Terminal, Laptop, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600">
              <Shield size={24} className="text-white" />
            </div>
            <span className="ml-2 text-2xl font-bold text-white font-['Orbitron']">
              <span className="text-blue-500">V</span>
              <span className="text-blue-400">e</span>
              <span className="text-blue-300">x</span>
              <span className="text-blue-400">u</span>
              <span className="text-blue-500">s</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a 
              href="#features" 
              className="text-gray-300 hover:text-white transition-colors font-medium flex items-center"
            >
              <Terminal size={18} className="mr-1" />
              Features
            </a>
            <a 
              href="#downloads" 
              className="text-gray-300 hover:text-white transition-colors font-medium flex items-center"
            >
              <Download size={18} className="mr-1" />
              Downloads
            </a>
            <a 
              href="#showcase" 
              className="text-gray-300 hover:text-white transition-colors font-medium flex items-center"
            >
              <Laptop size={18} className="mr-1" />
              Showcase
            </a>
            <a 
              href="#docs" 
              className="text-gray-300 hover:text-white transition-colors font-medium flex items-center"
            >
              <ExternalLink size={18} className="mr-1" />
              Documentation
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#main-download"
              className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center"
            >
              <Download size={18} className="mr-2" />
              Download Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} className="text-white" />
              ) : (
                <Menu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 shadow-lg py-4">
          <div className="px-4 space-y-3">
            <a
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors font-medium flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Terminal size={18} className="mr-2" />
              Features
            </a>
            <a
              href="#downloads"
              className="block text-gray-300 hover:text-white transition-colors font-medium flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={18} className="mr-2" />
              Downloads
            </a>
            <a
              href="#showcase"
              className="block text-gray-300 hover:text-white transition-colors font-medium flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Laptop size={18} className="mr-2" />
              Showcase
            </a>
            <a
              href="#docs"
              className="block text-gray-300 hover:text-white transition-colors font-medium flex items-center py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ExternalLink size={18} className="mr-2" />
              Documentation
            </a>
            <div className="pt-2">
              <a
                href="#main-download"
                className="block w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Download Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;