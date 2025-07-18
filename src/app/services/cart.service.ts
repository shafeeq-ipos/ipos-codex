import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  items$ = this.itemsSubject.asObservable();

  get items(): CartItem[] {
    return this.itemsSubject.value;
  }

  addToCart(product: Product): void {
    const items = [...this.itemsSubject.value];
    const item = items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity++;
    } else {
      items.push({ product, quantity: 1 });
    }
    this.itemsSubject.next(items);
  }

  decreaseQuantity(product: Product): void {
    const items = [...this.itemsSubject.value];
    const item = items.find(i => i.product.id === product.id);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromCart(product);
        return;
      }
      this.itemsSubject.next(items);
    }
  }

  removeFromCart(product: Product): void {
    const items = this.itemsSubject.value.filter(i => i.product.id !== product.id);
    this.itemsSubject.next(items);
  }

  clear(): void {
    this.itemsSubject.next([]);
  }

  getTotal(): number {
    return this.itemsSubject.value.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
