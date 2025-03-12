
import React, { useState } from 'react';
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    interests: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(interest => interest !== value) };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Show success message
    toast.success("Thank you for your message! We'll be in touch soon.");
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      interests: []
    });
  };

  return (
    <section id="contact" className="section-padding bg-cream relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet opacity-10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="bg-sienna p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let's Discuss Your <span className="text-violet">Business Needs</span>
                </h2>
                
                <p className="text-white/80 mb-8">
                  Whether you're looking for wholesale orders, custom solutions, or partnership opportunities, we're ready to help your business grow.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Our Office</h3>
                      <p className="text-white/70">
                        123 Innovation Way, Suite 500<br />
                        Los Angeles, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Email Us</h3>
                      <p className="text-white/70">
                        partners@luxadhesives.com<br />
                        support@luxadhesives.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-1">Call Us</h3>
                      <p className="text-white/70">
                        +1 (800) 555-1234<br />
                        Mon-Fri: 9am - 6pm PST
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 md:p-12">
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  Get in Touch
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal/70 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sienna focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-charcoal/70 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sienna focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sienna focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal/70 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sienna focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal/70 mb-2">
                      I'm Interested In:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="wholesale"
                          name="interests"
                          value="Wholesale Orders"
                          checked={formData.interests.includes('Wholesale Orders')}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-sienna focus:ring-sienna rounded"
                        />
                        <label htmlFor="wholesale" className="ml-2 text-sm text-charcoal">
                          Wholesale Orders
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="custom"
                          name="interests"
                          value="Custom Solutions"
                          checked={formData.interests.includes('Custom Solutions')}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-sienna focus:ring-sienna rounded"
                        />
                        <label htmlFor="custom" className="ml-2 text-sm text-charcoal">
                          Custom Solutions
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="private"
                          name="interests"
                          value="Private Labeling"
                          checked={formData.interests.includes('Private Labeling')}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-sienna focus:ring-sienna rounded"
                        />
                        <label htmlFor="private" className="ml-2 text-sm text-charcoal">
                          Private Labeling
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="distribution"
                          name="interests"
                          value="Distribution Partnership"
                          checked={formData.interests.includes('Distribution Partnership')}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-sienna focus:ring-sienna rounded"
                        />
                        <label htmlFor="distribution" className="ml-2 text-sm text-charcoal">
                          Distribution Partnership
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal/70 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sienna focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div>
                    <button type="submit" className="w-full btn-primary">
                      Send Message
                    </button>
                    <p className="text-xs text-charcoal/60 mt-3">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
