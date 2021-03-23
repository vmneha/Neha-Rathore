import { Component } from '@angular/core';
import { ProdService } from '../productService/prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  searchText: string = '';
  empErrorMsg: any = '';
  SortbyParam: string = '';
  //products: any[] = [


  //  { productId: 101, productName: 'Nestle', productPrice: 1000, productDescription: 'large', image: "../assets/Air3.jpg" },
  //  { productId: 102, productName: 'Parle', productPrice: 2000, productDescription: 'midium', image: "../assets/Air2.jpg" },
  //  { productId: 103, productName: 'Britannia', productPrice: 3000, productDescription: 'small', image: "../assets/Air1.jpg" },
  //  { productId: 104, productName: 'Cadbury', productPrice: 4000, productDescription: 'extra large', image: "../assets/Air4.jpg" },
  //  { productId: 105, productName: 'colgate', productPrice: 5000, productDescription: 'extra small', image: "../assets/Air2.jpg" },

  //]
  products = [];
  constructor(private ProductService: ProdService) {
    this.products = ProductService.getProductList()
  }

}
