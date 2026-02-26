import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products: IProduct[] = [];
  filter: string = '';

  constructor(
    private cartSvc: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: () => {
      }
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
  }

  getDiscountedClasses(product: IProduct): string {
    return product.discount > 0 ? 'strikethrough bold' : '';
  }

  getFilteredProducts(): IProduct[] {
    return this.filter === ''
      ? this.products
      : this.products.filter(product => product.category === this.filter);
  }
}
