import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdService {
  getProductList() {
    return [
      { productId: 101, productName: 'Neha', productPrice: 1000, productDescription: '"Java is Good"', image: "../assets/neha.png" },
      { productId: 102, productName: 'Dipali', productPrice: 2000, productDescription: '"Course are easy"', image: "../assets/dipali.png" },
      { productId: 103, productName: 'Preety', productPrice: 3000, productDescription: '"Awesome website"', image: "../assets/preety.png" },
      { productId: 104, productName: 'Nehamahalle', productPrice: 4000, productDescription: '"Good learning platform"', image: "../assets/mneha.png" },
      { productId: 104, productName: 'Nehamahalle', productPrice: 4000, productDescription: '"Good learning platform"', image: "../assets/tr2.jfif" },

      //{ productId: 105, productName: 'Rahul', productPrice: 5000, productDescription: 'extra small', image: "../assets/Air2.jpg" },

    ]
  }
}
