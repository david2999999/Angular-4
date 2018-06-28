import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminOrdersComponent} from './components/admin-orders/admin-orders.component';
import {AdminProductsComponent} from './components/admin-products/admin-products.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {AdminAuthGuard} from './services/admin-auth-guard.service';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {DataTableModule} from 'angular5-data-table';
import {HttpModule} from '@angular/http';
import {LoginComponent} from '../login/login.component';
import {RouterModule} from '@angular/router';
import {MyOrdersComponent} from '../my-orders/my-orders.component';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component';
import {CheckOutComponent} from '../check-out/check-out.component';
import {AuthGuard} from '../shared/services/auth-guard.service';
import {OrderSuccessComponent} from '../order-success/order-success.component';
import {ProductsComponent} from '../products/products.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DataTableModule,
    RouterModule.forChild([
      { path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]},
      { path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  providers: [
    AdminAuthGuard
  ]
})
export class AdminModule { }
