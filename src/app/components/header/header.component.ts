import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public cartService: CartService, public sessionService: SessionService) {}

  lock(): void {
    this.sessionService.lock();
  }

  closeSession(): void {
    this.sessionService.closeSession();
  }
}
