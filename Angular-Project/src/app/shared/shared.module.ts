import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {ProductQuantityComponent} from './components/product-quantity/product-quantity.component';
import {UserService} from './services/user.service';
import {ProductService} from './services/product.service';
import {AuthService} from './services/auth.service';
import {OrderService} from './services/order.service';
import {AuthGuard} from './services/auth-guard.service';
import {ShoppingCartService} from './services/shopping-cart.service';
import {CategoryService} from './services/category.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
