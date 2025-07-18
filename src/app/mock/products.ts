import { Product } from '../models/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone',
    description: 'Latest model smartphone',
    fullDescription: 'Full description of smartphone',
    price: 699,
    category: 'Electronics',
    image: 'assets/placeholder.png'
  },
  {
    id: '2',
    name: 'Novel Book',
    description: 'A great novel',
    fullDescription: 'Full description of novel',
    price: 19.99,
    category: 'Books',
    image: 'assets/placeholder.png'
  },
  {
    id: '3',
    name: 'T-Shirt',
    description: 'Comfortable cotton t-shirt',
    fullDescription: 'Full description of t-shirt',
    price: 25,
    category: 'Apparel',
    image: 'assets/placeholder.png'
  }
];
