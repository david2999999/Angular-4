import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {AppUser} from '../models/app-user';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit{
  appUser: AppUser;

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {}

  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
    const cart$ =  await this.shoppingCartService.getCart();
    cart$.subscribe(cart => {
      cart.items
    });
  }

  logout() {
    this.authService.logout();
  }

}
