import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './shopping/component/products/products.component';
import { ShoppingCartComponent } from './shopping/component/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './shopping/component/check-out/check-out.component';
import { OrderSuccessComponent } from './shopping/component/order-success/order-success.component';
import { MyOrdersComponent } from './shopping/component/my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './shared/services/auth-guard.service';
import {AdminAuthGuard} from './admin/services/admin-auth-guard.service';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';
import {DataTableModule} from 'angular5-data-table';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {ShoppingModule} from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: ProductsComponent},
      { path: 'login', component: LoginComponent},
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
