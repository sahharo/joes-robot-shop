import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../catalog/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  private cartSubject = new BehaviorSubject<IProduct[]>([]);
  cart$: Observable<IProduct[]> = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    this.http.get<IProduct[]>(this.url).subscribe({
      next: (cart) => this.cartSubject.next(cart),
      error: () => this.cartSubject.next([]),
    });
  }

  add(product: IProduct): void {
    const newCart = [...this.cartSubject.getValue(), product];
    this.cartSubject.next(newCart);
    this.http.post<IProduct>(this.url, product).subscribe();
  }

  remove(product: IProduct): void {
    const newCart = this.cartSubject.getValue().filter(p => p.id !== product.id);
    this.cartSubject.next(newCart);
    this.http.post<IProduct[]>(this.url, newCart).subscribe();
  }

  getCart(): Observable<IProduct[]> {
    return this.cart$;
  }
}
