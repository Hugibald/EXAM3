import { Injectable } from '@angular/core';
import { IProducts } from './iproducts.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProducts[] = [];
  addToCart(product: IProducts): void {
    let existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cart.push({ ...product });
    }
  }
  getCartItems(): IProducts[] {
    return this.cart;
  }
  updateCart(items: IProducts[]) {
    this.cart = items;
  }
  clearCart() {
    this.cart = [];
  }
  calculateTotal(): { service: number; total: number; discount: number; subTotal: number } {
    let sum = 0;
    let discount = 0;
    let total = 0;
    let subTotal = 0;
    for (let product of this.cart) {
      sum = sum + product.price * product.quantity;
    }
    let service = sum * 0.1;
    subTotal = sum + service;
    if (subTotal > 40) {
      discount = subTotal * 0.15;
      total = subTotal - discount;
    } else {
      total = subTotal;
    }
    return { service, total, discount, subTotal };
  }
}
