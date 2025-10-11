import { Routes } from '@angular/router';
import { About } from './about/about';
import { Cart } from './cart/cart';
import { Home } from './home/home';
import { Details } from './products/details/details';
import { Products } from './products/products';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'cart', component: Cart },
  { path: 'products', component: Products },
  { path: 'details/:id', component: Details },
  { path: '**', redirectTo: '' },
];
