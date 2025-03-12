
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-display font-bold tracking-tight text-sienna">
          LuxAdhesives
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <Link 
              to="#products" 
              className="font-medium text-charcoal hover:text-sienna transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <Link 
              to="#features" 
              className="font-medium text-charcoal hover:text-sienna transition-colors"
            >
              Features
            </Link>
          </li>
          <li>
            <Link 
              to="#why-us" 
              className="font-medium text-charcoal hover:text-sienna transition-colors"
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link 
              to="#contact" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sienna"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {mobileMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fade-in">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <Link 
                to="#products" 
                className="block font-medium text-charcoal hover:text-sienna transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
            </li>
            <li>
              <Link 
                to="#features" 
                className="block font-medium text-charcoal hover:text-sienna transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link 
                to="#why-us" 
                className="block font-medium text-charcoal hover:text-sienna transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link 
                to="#contact" 
                className="block btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
