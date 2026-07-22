import Header from './Header';

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

runTest('Header should be a function', () => {
  if (typeof Header !== 'function') {
    throw new Error('Header is not a function');
  }
});

// To test the content like 'Home Appliances' or applied styles,
// a React testing library would be required.
