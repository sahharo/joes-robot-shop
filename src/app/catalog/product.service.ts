import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = '/assets/db.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<{ products: IProduct[] }>(this.url).pipe(
      map(response => response.products)
    );
  }
}
