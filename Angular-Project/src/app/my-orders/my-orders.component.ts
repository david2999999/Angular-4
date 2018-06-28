import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor(private authService: AuthService,
      private orderService: OrderService) {

    this.orders$ = authService.user$.switchMap(user => this.orderService.getOrdersByUser(user.uid));
  }

  ngOnInit() {
  }

}
