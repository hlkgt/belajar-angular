import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductModel } from '../product-model';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'Welcome To Home';
  productModel!: ProductModel;
  postProduct = new FormGroup({
    nameProduct: new FormControl(),
    stockProduct: new FormControl(),
    quantityProduct: new FormControl(),
  });

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  submitedForm = (): void => {
    const postProductValue = this.postProduct.value;
    this.productModel = {
      name_product: postProductValue.nameProduct,
      stock_product: postProductValue.stockProduct,
      quantity_product: postProductValue.quantityProduct,
    };
    this.productService.postProduct(this.productModel).subscribe(
      (result) => {
        console.log(result.message);
      },
      (error) => {
        console.log(error);
      }
    );
    this.router.navigate(['/about']);
    this.postProduct.reset();
  };
}
