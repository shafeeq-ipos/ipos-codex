import { Component } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  selectedCategory: string | null = null;

  constructor(public sessionService: SessionService) {}

  onCategorySelected(cat: string | null) {
    this.selectedCategory = cat;
  }
}
