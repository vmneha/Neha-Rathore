import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-net',
  templateUrl: './net.component.html',
  styleUrls: ['./net.component.css']
})
export class NetComponent  {
  searchText: string = '';
  products: any[] = [


    { productId: 1, productName: 'Core-Java', productPrice: 3000, productDescription: 'Core Java is used for developing computing or desktop applications.', image: "../assets/Air3.jpg" },
    { productId: 2, productName: 'Basic-Java', productPrice: 2000, productDescription: 'The basic concepts of the Java programming language.', image: "../assets/Air2.jpg" },
    { productId: 3, productName: 'Advance-Java', productPrice: 5000, productDescription: 'Advance Java is used for developing enterprise applications', image: "../assets/Air1.jpg" },
    { productId: 4, productName: 'Hybernet+Advance-Java', productPrice: 6000, productDescription: 'This hibernate tutorial provides in-depth concepts of Hibernate Framework with simplified examples', image: "../assets/Air4.jpg" },
    { productId: 5, productName: 'Spring+Advance-Java', productPrice: 7000, productDescription: 'Spring framework makes the easy development of JavaEE application.', image: "../assets/Air2.jpg" },

  ]
  }

