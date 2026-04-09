import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Trash2, Truck, User, Clock, CheckCircle } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Areas', path: '/areas' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-primary-dark text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-accent p-2 rounded-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">KITTOE <span className="text-primary-accent">RAW</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'text-primary-accent' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:07884576020" className="flex items-center space-x-2 text-primary-accent font-bold">
              <Phone className="w-4 h-4" />
              <span>07884576020</span>
            </a>
            <Link to="/contact" className="btn-primary py-2 px-4 text-sm">Get a Quote</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-primary-dark border-t border-white/10 py-4 px-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 text-lg font-medium hover:text-primary-accent"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
            <a href="tel:07884576020" className="flex items-center space-x-2 text-primary-accent font-bold">
              <Phone className="w-5 h-5" />
              <span>07884576020</span>
            </a>
            <Link to="/contact" className="btn-primary w-full">Get a Quote</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary-accent p-2 rounded-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">KITTOE <span className="text-primary-accent">RAW</span></span>
            </Link>
            <p className="text-gray-400 mb-6">
              Professional removals and waste clearance services in Nottingham. Reliable, trustworthy, and fully insured.
            </p>

{/*
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-primary-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
*/}

          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/waste-clearance" className="hover:text-primary-accent">Waste Clearance</Link></li>
              <li><Link to="/property-clearance" className="hover:text-primary-accent">Property Clearance</Link></li>
              <li><Link to="/house-removals" className="hover:text-primary-accent">House Removals</Link></li>
              <li><Link to="/man-with-van" className="hover:text-primary-accent">Man With Van</Link></li>
              <li><Link to="/services" className="hover:text-primary-accent">All Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/pricing" className="hover:text-primary-accent">Pricing Guide</Link></li>
              <li><Link to="/areas" className="hover:text-primary-accent">Areas We Cover</Link></li>
              <li><Link to="/about" className="hover:text-primary-accent">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-accent">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-accent shrink-0" />
                <span>07884576020</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-accent shrink-0" />
                <span>hello@kittoeraw.uk</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-accent shrink-0" />
                <span>Nottingham, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Kittoe Removals and Waste. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
