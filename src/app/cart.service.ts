import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // creating an array of Products names as items & assign to an empty array
  items: Product[] = [];
  constructor(private http: HttpClient) {
    console.log(this.items);
  }

  addToCartService(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get< { type: string, price: number } >('/assets/shipping.json');
  }
}
