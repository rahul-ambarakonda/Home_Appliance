import ProductCard from './ProductCard';

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

runTest('ProductCard should be a function', () => {
  if (typeof ProductCard !== 'function') {
    throw new Error('ProductCard is not a function');
  }
});

// More advanced tests would require a React testing utility (e.g., @testing-library/react)
// to render the component and assert on its output and props.
// Without such a utility, we can only verify basic JS properties of the component itself.
