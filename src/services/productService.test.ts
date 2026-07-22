import { getProducts } from './productService';
import mockProducts from '../data/mockProducts';

function runTest(name: string, testFunction: () => void) {
  try {
    testFunction();
    console.log(`✓ ${name}`);
  } catch (error) {
    console.error(`✗ ${name}`);
    console.error(error);
    process.exit(1);
  }
}

runTest('getProducts should return an array', () => {
  const products = getProducts();
  if (!Array.isArray(products)) {
    throw new Error('getProducts did not return an array');
  }
});

runTest('getProducts should return the mockProducts array', () => {
  const products = getProducts();
  if (products !== mockProducts) {
    throw new Error('getProducts did not return the exact mockProducts array reference');
  }
});

runTest('getProducts should return at least 5 products', () => {
  const products = getProducts();
  if (products.length < 5) {
    throw new Error(`Expected at least 5 products, but found ${products.length}`);
  }
});
