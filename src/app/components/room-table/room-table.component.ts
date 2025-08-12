import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { rooms } from '../../mock/rooms';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-room-table',
  templateUrl: './room-table.component.html',
  styleUrls: ['./room-table.component.css']
})
export class RoomTableComponent {
  rooms = rooms;

  constructor(private sessionService: SessionService, private router: Router) {}

  selectTable(tableId: string): void {
    this.sessionService.setTable(tableId);
    this.router.navigate(['/order']);
  }
}
