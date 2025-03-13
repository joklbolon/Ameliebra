
import React from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  tag: string;
}

const ProductCard = ({ id, name, description, image, tag }: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-xl overflow-hidden shadow-lg hover-card scroll-trigger">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute top-4 right-4 py-1 px-3 bg-sienna text-white text-xs font-semibold rounded-full">
          {tag}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal mb-2">{name}</h3>
        <p className="text-charcoal/70 mb-4">{description}</p>
        <button className="w-full btn-secondary">View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
