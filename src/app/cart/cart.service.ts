import { Injectable } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<IProduct[]>([]);
  cart$: Observable<IProduct[]> = this.cartSubject.asObservable();

  constructor() {
    this.cartSubject.next([]); // Começa com cart vazio
  }

  add(product: IProduct): void {
    const newCart = [...this.cartSubject.getValue(), product];
    this.cartSubject.next(newCart);
  }

  remove(product: IProduct): void {
    const newCart = this.cartSubject.getValue().filter(p => p.id !== product.id);
    this.cartSubject.next(newCart);
  }

  getCart(): Observable<IProduct[]> {
    return this.cart$;
  }
}
