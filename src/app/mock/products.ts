import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cheese Pizza',
    description: 'Classic cheese pizza',
    fullDescription: 'A delicious pizza topped with rich tomato sauce and mozzarella cheese.',
    price: 12.5,
    category: 'Pizza',
    image: 'assets/placeholder.png'
  },
  {
    id: '2',
    name: 'Veggie Burger',
    description: 'Grilled veggie patty with fresh toppings',
    fullDescription: 'A hearty burger made with a grilled vegetable patty, lettuce, tomato and a soft bun.',
    price: 9.99,
    category: 'Burgers',
    image: 'assets/placeholder.png'
  },
  {
    id: '3',
    name: 'Caesar Salad',
    description: 'Crisp romaine with Caesar dressing',
    fullDescription: 'Fresh romaine lettuce tossed with creamy Caesar dressing, croutons and parmesan.',
    price: 8.5,
    category: 'Salads',
    image: 'assets/placeholder.png'
  }
];
