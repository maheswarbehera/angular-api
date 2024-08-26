import { Injectable } from '@angular/core';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];

  addToCart(product: Product, qty: any) {
    this.cart.push(product);
  }

  getCartItems() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
