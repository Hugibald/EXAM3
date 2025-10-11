import { Injectable } from '@angular/core';
import { IProducts } from './iproducts.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: IProducts[] = [];
  // Adds item to cart
  addToCart(product: IProducts): void {
    let existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      // ... copies the product
      // Inside the cart is a copy of the item that we can manipulate
      this.cart.push({ ...product });
    }
  }
  // Gets the items inside the cart
  getCartItems(): IProducts[] {
    return this.cart;
  }
  // Makes sure the manipulations display
  updateCart(items: IProducts[]) {
    this.cart = items;
  }
  // Empty the whole cart - deletes the copies
  clearCart() {
    this.cart = [];
  }
  // Calculates the Service, subTotal, discount and total
  calculateTotal(): { service: number; total: number; discount: number; subTotal: number } {
    let sum = 0;
    let discount = 0;
    let total = 0;
    let subTotal = 0;
    for (let product of this.cart) {
      sum = sum + product.price * product.quantity;
    }
    // Calculate service
    let service = sum * 0.1;
    // Calculate subTotal
    subTotal = sum + service;
    // Calculates discount
    if (subTotal > 40) {
      discount = subTotal * 0.15;
      // Calculate total
      total = subTotal - discount;
    } else {
      // if subTotal < 40 then:
      total = subTotal;
    }
    return { service, total, discount, subTotal };
  }
}
