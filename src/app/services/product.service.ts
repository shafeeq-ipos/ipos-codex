import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../mock/products';

@Injectable({ providedIn: 'root' })
export class ProductService {
  getProducts(): Product[] {
    return products;
  }

  getProduct(id: string): Product | undefined {
    return products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return Array.from(new Set(products.map(p => p.category)));
  }
}
