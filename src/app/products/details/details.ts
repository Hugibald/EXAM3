import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CartService } from '../../cart-service';
import { IProducts } from '../../iproducts.interface';
import { PRODUCTS } from '../../productList';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  product: IProducts | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) {}
  ngOnInit() {
    let productID = Number(this.route.snapshot.params['id']);
    this.product = PRODUCTS.find((p) => p.id === productID);
  }
  addToCart(product: IProducts): void {
    this.cartService.addToCart(product);
  }
}
