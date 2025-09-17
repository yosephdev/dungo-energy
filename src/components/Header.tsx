import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/services', label: 'Services' },
    { path: '/impact', label: 'Impact' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-emerald-700 rounded-full p-2">
              <Sun className="h-6 w-6 text-amber-400" />
            </div>
            <span className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat' }}>
              DUNGO <span className="text-emerald-700">ENERGY SOLUTIONS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-all duration-200 border-b-2 pb-1 ${
                  isActive(item.path)
                    ? 'text-emerald-700 border-amber-400'
                    : 'text-gray-600 border-transparent hover:text-emerald-700 hover:border-amber-400'
                }`}
                style={{ fontFamily: 'Roboto' }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden lg:block bg-emerald-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200"
            style={{ fontFamily: 'Poppins' }}
          >
            Partner With Us
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-emerald-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-2 font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-emerald-700 bg-emerald-50'
                      : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{ fontFamily: 'Roboto' }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mx-4 bg-emerald-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-800 transition-colors duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
                style={{ fontFamily: 'Poppins' }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;