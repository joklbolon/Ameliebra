
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sienna opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/assets/images/logo-white.png" alt="AmelieBra Logo" className="h-10" />
              <h2 className="text-2xl font-display font-bold tracking-tight text-violet">
                AmelieBra
              </h2>
            </div>
            <p className="text-white/70 max-w-xs">
              Premium silicone and adhesive lingerie solutions for innovative brands seeking quality and performance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <img src="/assets/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <img src="/assets/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <img src="/assets/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Adhesive Bras</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Nipple Covers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Silicone Inserts</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Body Tapes</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Adhesive Thongs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Custom Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">B2B Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Wholesale</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Private Labeling</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Custom Development</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Partner Portal</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Marketing Support</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Shipping & Fulfillment</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Sustainability</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Press</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-violet transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} AmelieBra. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="text-white/50 hover:text-violet text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-violet text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-violet text-sm transition-colors">
              Cookies
            </a>
            <a href="#" className="text-white/50 hover:text-violet text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
