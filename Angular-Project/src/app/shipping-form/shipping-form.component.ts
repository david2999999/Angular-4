import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Order} from '../shared/models/order';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {OrderService} from '../shared/services/order.service';
import {AuthService} from '../shared/services/auth.service';
import {ShoppingCart} from '../shared/models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  shipping = {};
  userId: string;
  userSubscription: Subscription;

  constructor(private orderService: OrderService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user => {
      this.userId = user.uid;
    });
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
