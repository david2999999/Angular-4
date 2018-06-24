import { Component, OnInit } from '@angular/core';
import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories$;
  category: string;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private route: ActivatedRoute) {

    productService.getAll()
      .subscribe(products => {
        this.products = products;
      });

    this.categories$ = this.categoryService.getAll();

    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    });
  }

  ngOnInit() {
  }

}
