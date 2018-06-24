import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ShoppingCartService} from '../shopping-cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;
  @Input('show-actions') showActions = true;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      this.shoppingCartService.create()
        .then(result => {
          localStorage.setItem('cartId', result.key);
        });
    }
  }

}
