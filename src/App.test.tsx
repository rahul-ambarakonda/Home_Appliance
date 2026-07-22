import App from './App';

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

runTest('App should be a function', () => {
  if (typeof App !== 'function') {
    throw new Error('App is not a function');
  }
});

// To test if Header and ProductList components are rendered,
// a React testing library would be required to inspect the virtual DOM.
