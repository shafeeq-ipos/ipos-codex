import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cashierId = '';
  pin = '';

  constructor(private sessionService: SessionService, private router: Router) {}

  login(): void {
    if (this.cashierId && this.pin) {
      this.sessionService.openSession(this.cashierId, this.pin);
      this.router.navigate(['/rooms']);
    }
  }
}
