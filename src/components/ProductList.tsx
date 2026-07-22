import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/productService';
import { Product } from '../types/product';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchedProducts = getProducts();
    setProducts(fetchedProducts);
  }, []);

  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
