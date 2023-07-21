import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  title = 'Detail Product Dari ID : ';
  productId!: number;
  productDetailList: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.productDetailList = this.fb.group({
      name_product: [''],
      stock_product: [0],
      quantity_product: [0],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.productId = params['id']));
    this.productService.getDetailProduct(this.productId).subscribe(
      (result) => {
        this.productDetailList.patchValue(result.data[0]);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updatedForm = () => {
    const productUpdateList = this.productDetailList.value;
    const productUpdate = {
      id_product: this.productId,
      name_product: productUpdateList.name_product,
      stock_product: productUpdateList.stock_product,
      quantity_product: productUpdateList.quantity_product,
    };
    this.productService.updateProduct(productUpdate).subscribe(
      () => {
        this.router.navigate(['/about']);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
