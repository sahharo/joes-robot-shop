import { Component, Input, Output, EventEmitter } from '@angular/core';
import { iProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: iProduct;
  @Output() buy = new EventEmitter()

  getImageUrl(product: iProduct): string {
    if (!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }


  buyButtonClicked(product: iProduct) {
    this.buy.emit();
  }
}
