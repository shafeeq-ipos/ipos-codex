import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OrderService {
  placeOrder(details: any): void {
    console.log('Order placed', details);
  }
}
