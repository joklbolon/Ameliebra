
import React, { useEffect } from 'react';

const WhyUs = () => {
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
    <section id="why-us" className="section-padding bg-sienna text-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative scroll-trigger">
              <div className="relative bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Business meeting" 
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 md:right-0 bg-white text-charcoal p-6 rounded-xl shadow-xl max-w-xs animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-sienna/10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-sienna">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal/70">Annual Growth</p>
                    <p className="text-2xl font-bold text-sienna">142%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              <div className="scroll-trigger">
                <div className="inline-block py-1 px-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
                  Partner With Us
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Why <span className="text-violet">Choose Us</span> For Your Business
                </h2>
                <p className="text-white/80 text-lg mb-8">
                  We're more than just a supplier – we're your partner in growth. Our team brings expertise, innovation, and dedication to help your brand succeed.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start scroll-trigger">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rapid Market Response</h3>
                    <p className="text-white/70">
                      Stay ahead with our agile production and R&D teams that quickly adapt to market trends and consumer demands.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start scroll-trigger">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-white/70">
                      Every product undergoes rigorous testing for adhesion, comfort, and durability, ensuring your customers get the best.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start scroll-trigger">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Dedicated B2B Portal</h3>
                    <p className="text-white/70">
                      Access our exclusive portal for easy ordering, tracking, marketing materials, and customer support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 scroll-trigger">
                <button className="btn-primary bg-white text-sienna hover:bg-white/90">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
