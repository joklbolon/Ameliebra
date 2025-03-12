
import React, { useEffect } from 'react';

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-item').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.feature-item').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sienna opacity-10 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-sienna/10 rounded-full text-sienna font-medium text-sm mb-4">
            What Makes Us Different
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Features That <span className="text-gradient">Set Us Apart</span>
          </h2>
          <p className="text-charcoal/80 text-lg">
            Our products are engineered with cutting-edge technology to provide superior comfort, support, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 1-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21a48.25 48.25 0 0 1-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Skin-Friendly Materials</h3>
            <p className="text-charcoal/70 mb-4">
              Our medical-grade silicone is hypoallergenic, breathable, and designed for sensitive skin.
            </p>
          </div>

          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Reusable Design</h3>
            <p className="text-charcoal/70 mb-4">
              Our products are washable and reusable up to 30+ times, making them eco-friendly and cost-effective.
            </p>
          </div>

          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Invisible Under Clothing</h3>
            <p className="text-charcoal/70 mb-4">
              Seamless, ultra-thin edges designed to be completely invisible under even the most revealing outfits.
            </p>
          </div>

          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Long-Lasting Adhesive</h3>
            <p className="text-charcoal/70 mb-4">
              Advanced adhesive technology that stays secure for up to 12 hours of wear in various conditions.
            </p>
          </div>

          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Customizable Options</h3>
            <p className="text-charcoal/70 mb-4">
              Tailor our products to your brand with custom colors, shapes, packaging, and branding.
            </p>
          </div>

          <div className="feature-item glass-card rounded-xl p-8 flex flex-col items-center text-center scroll-trigger">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-sienna text-white mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">B2B Support</h3>
            <p className="text-charcoal/70 mb-4">
              Comprehensive business support including wholesale pricing, private labeling, and marketing assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
