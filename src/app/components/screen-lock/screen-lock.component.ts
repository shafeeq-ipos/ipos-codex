import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-screen-lock',
  templateUrl: './screen-lock.component.html',
  styleUrls: ['./screen-lock.component.css']
})
export class ScreenLockComponent {
  pin = '';

  constructor(public sessionService: SessionService) {}

  unlock(): void {
    if (this.sessionService.unlock(this.pin)) {
      this.pin = '';
    } else {
      alert('Wrong PIN');
    }
  }
}
