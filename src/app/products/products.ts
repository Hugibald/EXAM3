import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart-service';
import { IProducts } from '../iproducts.interface';
import { PRODUCTS } from '../productList';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  productArray: IProducts[] = PRODUCTS;
  constructor(private cartService: CartService) {}
  addToCart(p: IProducts): void {
    this.cartService.addToCart(p);
  }
}
