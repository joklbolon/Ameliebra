
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      if (!parallaxRef.current) return;
      const scrollPosition = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-trigger').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.scroll-trigger').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Parallax Background */}
      <div className="parallax absolute inset-0 z-0">
        <div 
          ref={parallaxRef}
          className="parallax-bg"
          style={{ 
            backgroundImage: 'linear-gradient(135deg, rgba(60, 21, 24, 0.8), rgba(41, 41, 41, 0.7)), url(/images/hero-bg.jpg)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block py-1 px-3 bg-violet/90 backdrop-blur-sm rounded-full text-sienna font-medium text-sm mb-4 scroll-trigger">
              B2B Silicone & Adhesive Lingerie Solutions
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight scroll-trigger" style={{ transitionDelay: '0.1s' }}>
              <span className="block">Redefining</span>
              <span className="text-gradient font-extrabold">Comfort & Confidence</span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-lg mx-auto lg:mx-0 scroll-trigger" style={{ transitionDelay: '0.2s' }}>
              Premium silicone adhesive lingerie solutions for fashion-forward brands. Elevate your collection with innovative, skin-friendly products.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 scroll-trigger" style={{ transitionDelay: '0.3s' }}>
              <Link to="#contact" className="btn-primary">
                Request Samples
              </Link>
              <Link to="#products" className="btn-secondary text-white border-white hover:bg-white/10">
                Explore Products
              </Link>
            </div>
          </div>
          
          <div className="relative scroll-trigger" style={{ transitionDelay: '0.4s' }}>
            <div className="relative z-10 bg-white/20 backdrop-blur-lg p-1 rounded-2xl shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1602000133732-bb2d4e7ecd95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80" 
                alt="Silicone adhesive lingerie product" 
                className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
              />
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-violet rounded-full opacity-70 blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-12 -left-8 w-32 h-32 bg-sienna rounded-full opacity-50 blur-xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24 mb-8 scroll-trigger" style={{ transitionDelay: '0.5s' }}>
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-3xl lg:text-4xl font-bold text-sienna">98%</p>
            <p className="text-charcoal/80 font-medium mt-2">Customer Satisfaction</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-3xl lg:text-4xl font-bold text-sienna">50+</p>
            <p className="text-charcoal/80 font-medium mt-2">Brand Partners</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-3xl lg:text-4xl font-bold text-sienna">24hrs</p>
            <p className="text-charcoal/80 font-medium mt-2">Support Response</p>
          </div>
          
          <div className="glass-card rounded-xl p-6 text-center">
            <p className="text-3xl lg:text-4xl font-bold text-sienna">12+</p>
            <p className="text-charcoal/80 font-medium mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
