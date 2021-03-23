import { Component } from '@angular/core';
import { ProdService } from '../productService/prod.service';

@Component({
  selector: 'app-corejava',
  templateUrl: './corejava.component.html',
  styleUrls: ['./corejava.component.css']
})
export class CorejavaComponent  {

  //constructor() { }

  //ngOnInit(): void {
  //}
  searchText: string = '';
  products: any[] = [


    { productId: 1, productName: 'Core-Java', productPrice: 3000, productDescription: 'Core Java is used for developing computing or desktop applications.', image: "../assets/tr1.jfif" },
    { productId: 2, productName: 'Basic-Java', productPrice: 2000, productDescription: 'The basic concepts of the Java programming language.', image: "../assets/tr2.jfif" },
    { productId: 3, productName: 'Advance-Java', productPrice: 5000, productDescription: 'Advance Java is used for developing enterprise applications', image: "../assets/tr3.jfif" },
    { productId: 4, productName: 'Hybernet+Advance-Java', productPrice: 6000, productDescription: 'This hibernate tutorial provides in-depth concepts with examples', image: "../assets/tr4.jfif" },
    { productId: 5, productName: 'Spring+Advance-Java', productPrice: 7000, productDescription: 'Spring framework makes the easy development of JavaEE application.', image: "../assets/mat1.jfif" },

  ]
  //products = [];
  //constructor(private ProductService: ProdService) {
  //  this.products = ProductService.getProductList()
  //}

}
