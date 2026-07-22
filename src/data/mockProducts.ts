import { Product } from '../types/product.d';

const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'Smart Refrigerator',
    category: 'Kitchen Appliances',
    price: 1299.99,
    imageUrl: 'https://via.placeholder.com/300x300?text=Smart+Refrigerator',
    description: 'A spacious smart refrigerator with an interactive touchscreen and internal cameras.',
    features: ['28 cu. ft. capacity', 'Family Hub touchscreen', 'Twin Cooling Plus', 'Energy Star certified'],
  },
  {
    id: 'prod-002',
    name: 'Front-Load Washing Machine',
    category: 'Laundry Appliances',
    price: 799.00,
    imageUrl: 'https://via.placeholder.com/300x300?text=Washing+Machine',
    description: 'Efficient and quiet washing machine with multiple wash cycles and steam function.',
    features: ['5.0 cu. ft. capacity', 'Steam wash', 'Vibration Reduction Technology', '12 wash cycles'],
  },
  {
    id: 'prod-003',
    name: 'Convection Wall Oven',
    category: 'Kitchen Appliances',
    price: 949.50,
    imageUrl: 'https://via.placeholder.com/300x300?text=Convection+Oven',
    description: 'Built-in convection oven for even baking and roasting, with self-cleaning feature.',
    features: ['5.3 cu. ft. capacity', 'True Convection', 'Self-cleaning', 'Delay bake'],
  },
  {
    id: 'prod-004',
    name: 'Robot Vacuum Cleaner',
    category: 'Cleaning Appliances',
    price: 499.99,
    imageUrl: 'https://via.placeholder.com/300x300?text=Robot+Vacuum',
    description: 'Intelligent robot vacuum with powerful suction and smart mapping for effortless cleaning.',
    features: ['Smart navigation', 'Automatic dirt disposal', 'Wi-Fi connectivity', 'Multi-floor mapping'],
  },
  {
    id: 'prod-005',
    name: 'Automatic Coffee Maker',
    category: 'Kitchen Appliances',
    price: 199.00,
    imageUrl: 'https://via.placeholder.com/300x300?text=Coffee+Maker',
    description: 'Programmable coffee maker with a built-in grinder for fresh, delicious coffee every morning.',
    features: ['12-cup capacity', 'Integrated burr grinder', 'Programmable timer', 'Keep warm function'],
  },
  {
    id: 'prod-006',
    name: 'Air Purifier',
    category: 'Environmental Control',
    price: 249.00,
    imageUrl: 'https://via.placeholder.com/300x300?text=Air+Purifier',
    description: 'High-efficiency air purifier with HEPA filter to remove allergens, dust, and odors.',
    features: ['HEPA filtration', 'Covers up to 500 sq ft', 'Quiet operation', 'Smart sensor'],
  },
  {
    id: 'prod-007',
    name: 'Smart Thermostat',
    category: 'Environmental Control',
    price: 179.99,
    imageUrl: 'https://via.placeholder.com/300x300?text=Smart+Thermostat',
    description: 'Energy-saving smart thermostat that learns your preferences and can be controlled remotely.',
    features: ['Remote control via app', 'Learning capabilities', 'Energy reports', 'Voice assistant compatible'],
  },
];

export default mockProducts;
