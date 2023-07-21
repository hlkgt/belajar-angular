import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  title = 'Welcome To About';
  nomorProduct = 1;
  datas: any;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getData().subscribe(
      (result) => {
        this.datas = result.datas;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteProduct(productId: number): void {
    const confirmNotification = confirm(
      `Yakin Ingin Menghapus Product dengan id ${productId}`
    );
    if (confirmNotification) {
      this.productService.deleteProduct(productId).subscribe(
        (result) => {
          console.log(result.message);
          location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
