import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  increase(item: CartItem): void {
    this.cartService.addToCart(item.product);
  }

  decrease(item: CartItem): void {
    this.cartService.decreaseQuantity(item.product);
  }

  remove(item: CartItem): void {
    this.cartService.removeFromCart(item.product);
  }
}
