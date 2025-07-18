import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent {
  categories = this.productService.getCategories();
  @Output() categorySelected = new EventEmitter<string | null>();

  constructor(private productService: ProductService) {}

  selectCategory(category: string | null): void {
    this.categorySelected.emit(category);
  }
}
