import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseObjectObservable} from 'angularfire2/database';
import {Product} from './models/product';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import {ShoppingCart} from './models/shopping-cart';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  async getCart(): Promise<Observable<ShoppingCart>> {
    const cartId = await this.getOrCreateCart();
    return this.db.object('/shopping-carts/' + cartId)
      .map(x => new ShoppingCart(x.items));
  }

  async addToCart(product: Product) {
    this.updateItem(product, 1);
  }

  async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() {
    const cartId = await this.getOrCreateCart();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }


  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private async getOrCreateCart(): Promise<string> {
    const cartId = localStorage.getItem('cartId');
    if (cartId) { return cartId; }

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
  }

  private async updateItem(product: Product, change: number) {
    const cartId = await this.getOrCreateCart();
    const item$ = this.getItem(cartId, product.$key);
    item$.take(1).subscribe(item => {
      item$.update({
        title: product.title,
        imageUrl: product.imageUrl,
        price: product.price,
        quantity: (item.quantity || 0) + change
      });
    });
  }
}
