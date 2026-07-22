import ProductList from './ProductList';

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

runTest('ProductList should be a function', () => {
  if (typeof ProductList !== 'function') {
    throw new Error('ProductList is not a function');
  }
});

// Testing the useEffect hook and rendering of ProductCard components
// would require a React testing utility (e.g., @testing-library/react).
// Without it, we can only verify basic JS properties.
