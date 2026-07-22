import mockProducts from '../data/mockProducts';
import { Product } from '../types/product.d';

export const getProducts = (): Product[] => {
  return mockProducts;
};
