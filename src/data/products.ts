
import { Product } from '@/components/Products';

// Product data 
export const productData: Product[] = [
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

// Helper function to easily add new products
export const addProduct = (product: Omit<Product, 'id'>): Product => {
  const newId = Math.max(...productData.map(p => p.id)) + 1;
  const newProduct = { ...product, id: newId };
  productData.push(newProduct);
  return newProduct;
};
