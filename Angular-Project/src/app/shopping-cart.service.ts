import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Product} from './models/product';
import 'rxjs/add/operator/take';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getCart(cartId: string) {
    return this.db.object('/shopping-carts/' + cartId);
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCart() {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  async addToCart(product: Product) {
    const cartId = await this.getOrCreateCart();
    const item$ = this.getItem(cartId, product.$key);
      item$.take(1).subscribe(item => {
      if (item.$exists()) {
        item$.update({quantity: item.quantity + 1});
      } else {
        item$.set({ product: product, quantity: 1 });
      }
    });
  }
}