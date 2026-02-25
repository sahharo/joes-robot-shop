import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../catalog/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url = 'http://localhost:3000/cart';

  constructor(private http: HttpClient) {}

  add(product: IProduct): Observable<IProduct> {
    console.log(`product ${product.name} added to cart`);
    return this.http.post<IProduct>(this.url, product);
  }

  getCart(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
