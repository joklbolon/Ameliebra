
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';

// Product type definition
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  tag: string;
}

// Import all product data from a separate file to make it easier to manage
import { productData } from '@/data/products';

const Products = () => {
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
          {productData.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              tag={product.tag}
            />
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
