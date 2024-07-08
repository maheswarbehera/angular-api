import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category/category';

@Injectable({
  providedIn: 'root'
})

export class ProductService { 

  constructor(private http: HttpClient) { }

  apiUrl = 'https://fakestoreapi.com/products/'

  getProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.apiUrl + `${id}`);
  }

  getProductLimit(limit: number){
    return this.http.get<Product[]>(this.apiUrl + `?limit=${limit}`);
  }

  getAllCategories() {
    return this.http.get<Category[]>(this.apiUrl + `categories` );
  }

  getProductsByCategory(category: string) {
    return this.http.get<Product[]>(this.apiUrl + `category/${category}`);
  }
}

