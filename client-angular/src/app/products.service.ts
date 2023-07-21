import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'http://127.0.0.1:5800/api/product';
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getDetailProduct(productId: number): Observable<any> {
    return this.http.get<any>(`http://127.0.0.1:5800/api/product/${productId}`);
  }
  postProduct(productList: any): Observable<any> {
    return this.http.post<any>(
      'http://127.0.0.1:5800/api/product',
      productList
    );
  }
  updateProduct(detailData: any): Observable<any> {
    return this.http.patch<any>(
      'http://127.0.0.1:5800/api/product/update',
      detailData
    );
  }
  deleteProduct(productId: number): Observable<any> {
    return this.http.delete<any>(
      `http://127.0.0.1:5800/api/product/delete/${productId}`
    );
  }
}
