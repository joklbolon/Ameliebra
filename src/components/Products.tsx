
import React, { useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  tag: string;
}

const Products = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Invisible Adhesive Bra",
      description: "Ultra-light silicone adhesive bra with advanced skin-friendly formula.",
      image: "/assets/images/products/product-1.jpg",
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Lift & Shape Silicone Pads",
      description: "Contoured silicone pads designed for natural enhancement and support.",
      image: "/assets/images/products/product-2.jpg",
      tag: "Premium"
    },
    {
      id: 3,
      name: "Seamless Adhesive Nipple Covers",
      description: "Ultra-thin, reusable silicone covers with invisible edges.",
      image: "/assets/images/products/product-3.jpg",
      tag: "New"
    },
    {
      id: 4,
      name: "Body Contour Adhesive Tape",
      description: "Medical-grade adhesive tape for versatile styling solutions.",
      image: "/assets/images/products/product-4.jpg",
      tag: "Flexible"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 150); // Staggered animation
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.product-card').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.product-card').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="products" className="section-padding bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 bg-violet rounded-full text-sienna font-medium text-sm mb-4">
            Premium Collection
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Innovative <span className="text-gradient font-extrabold">Adhesive Solutions</span>
          </h2>
          <p className="text-charcoal/80 text-lg">
            Discover our premium line of silicone and adhesive lingerie products designed for comfort, durability, and confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="product-card bg-white rounded-xl overflow-hidden shadow-lg hover-card scroll-trigger"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-4 right-4 py-1 px-3 bg-sienna text-white text-xs font-semibold rounded-full">
                  {product.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-charcoal mb-2">{product.name}</h3>
                <p className="text-charcoal/70 mb-4">{product.description}</p>
                <button className="w-full btn-secondary">View Details</button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View Full Catalog
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
