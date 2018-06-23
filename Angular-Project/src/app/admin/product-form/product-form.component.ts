import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../services/category.service';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(private router: Router,
              private categoryService: CategoryService,
              private productService: ProductService,
              private route: ActivatedRoute) {

    this.categories$ = categoryService.getCategories();
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // after getting 1 item, the observable basically unsubscribe
    if (id) {
      this.productService.get(id).take(1).subscribe(p => this.product = p);
      console.log(this.product);
    }


  }

  ngOnInit() {
  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

}
