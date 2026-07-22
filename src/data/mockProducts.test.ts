import mockProducts from './mockProducts';

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

runTest('should export an array of products', () => {
  if (!Array.isArray(mockProducts)) {
    throw new Error('mockProducts is not an array');
  }
});

runTest('should contain at least 5 products', () => {
  if (mockProducts.length < 5) {
    throw new Error(`Expected at least 5 products, but found ${mockProducts.length}`);
  }
});

runTest('all products should have required properties (id, name, description, price, imageUrl)', () => {
  mockProducts.forEach(product => {
    if (typeof product.id !== 'string' || product.id.length === 0) {
      throw new Error(`Product with invalid ID found: ${JSON.stringify(product)}`);
    }
    if (typeof product.name !== 'string' || product.name.length === 0) {
      throw new Error(`Product with invalid name found: ${JSON.stringify(product)}`);
    }
    if (typeof product.description !== 'string' || product.description.length === 0) {
      throw new Error(`Product with invalid description found: ${JSON.stringify(product)}`);
    }
    if (typeof product.price !== 'number' || product.price <= 0) {
      throw new Error(`Product with invalid price found: ${JSON.stringify(product)}`);
    }
    if (typeof product.imageUrl !== 'string' || product.imageUrl.length === 0) {
      throw new Error(`Product with invalid imageUrl found: ${JSON.stringify(product)}`);
    }
  });
});
