import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-700 rounded-full p-2">
                <Sun className="h-6 w-6 text-amber-400" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat' }}>
                DUNGO <span className="text-emerald-400">ENERGY SOLUTIONS</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md" style={{ fontFamily: 'Roboto' }}>
              Providing sustainable energy access to rural communities through innovative solar solutions 
              and community engagement programs.
            </p>
            <div className="text-sm text-gray-400" style={{ fontFamily: 'Roboto' }}>
              In partnership with Villageboom GmbH
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Montserrat' }}>Quick Links</h3>
            <ul className="space-y-2" style={{ fontFamily: 'Roboto' }}>
              <li><Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors">Our Projects</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-emerald-400 transition-colors">Services</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-emerald-400 transition-colors">Our Impact</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4" style={{ fontFamily: 'Montserrat' }}>Contact</h3>
            <ul className="space-y-3" style={{ fontFamily: 'Roboto' }}>
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@dungo.yoseph.dev</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Ethiopia</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-emerald-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-600 transition-colors duration-200"
              style={{ fontFamily: 'Poppins' }}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" style={{ fontFamily: 'Roboto' }}>
          <p>&copy; 2025 Dungo Energy Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;