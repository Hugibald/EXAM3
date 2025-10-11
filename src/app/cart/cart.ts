import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart-service';
import { IProducts } from '../iproducts.interface';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cart: IProducts[] = [];
  service: number = 0;
  total: number = 0;
  discount: number = 0;
  subTotal: number = 0;
  constructor(private cartService: CartService) {
    this.loadCart();
    this.showTotal();
  }
  loadCart() {
    this.cart = this.cartService.getCartItems();
  }
  showTotal() {
    let { service, total, discount, subTotal } = this.cartService.calculateTotal();
    this.service = service;
    this.total = total;
    this.discount = discount;
    this.subTotal = subTotal;
  }
  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }
  increaseQuantity(item: IProducts) {
    item.quantity++;
    this.cartService.updateCart(this.cart);
    this.showTotal();
  }
  decreaseQuantity(item: IProducts) {
    if (item.quantity > 1) {
      item.quantity--;
      this.cartService.updateCart(this.cart);
    } else {
      this.deleteItem(item);
    }
    this.showTotal();
  }
  deleteItem(item: IProducts) {
    let index = this.cart.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      this.cart.splice(index, 1);
      this.cartService.updateCart(this.cart);
      this.showTotal();
    }
  }
}
