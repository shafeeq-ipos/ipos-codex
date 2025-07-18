import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html'
})
export class CategoryFilterComponent implements OnInit {
  categories: string[] = [];
  @Output() categorySelected = new EventEmitter<string | null>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: string | null): void {
    this.categorySelected.emit(category);
  }
}
