
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
            <h2 className="text-2xl font-display font-bold tracking-tight text-violet">
              LuxAdhesives
            </h2>
            <p className="text-white/70 max-w-xs">
              Premium silicone and adhesive lingerie solutions for innovative brands seeking quality and performance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-violet transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
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
            &copy; {new Date().getFullYear()} LuxAdhesives. All rights reserved.
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
