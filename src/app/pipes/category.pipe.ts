import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(products: Product[], category: string | null): Product[] {
    if (!category) {
      return products;
    }
    return products.filter(p => p.category === category);
  }
}
