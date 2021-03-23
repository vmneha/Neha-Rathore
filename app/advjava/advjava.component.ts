import { Component } from '@angular/core';

@Component({
  selector: 'app-advjava',
  templateUrl: './advjava.component.html',
  styleUrls: ['./advjava.component.css']
})
export class AdvjavaComponent {

  //constructor() { }

  //ngOnInit(): void {
  //}
  searchText: string = '';
  courses: any[] = [


    { courseId: 101, courseName: 'HTML', coursePrice: 3000, courseDescription: 'HTML stands for "Hypertext Markup Language"', image: "../assets/html1.jfif" },
    { courseId: 102, courseName: 'CSS', coursePrice: 2000, courseDescription: 'CSS stands for "Cascading Style Sheets"', image: "../assets/css1.jfif" },
    { courseId: 103, courseName: 'JS', coursePrice: 5000, courseDescription: 'JS stands for "JavaScript"', image: "../assets/javascript1.jfif" },
    { courseId: 104, courseName: 'Bootstrap', coursePrice: 6000, courseDescription: 'Bootstrap 4 is completely free to download and use!', image: "../assets/bootstrap1.jfif" },
    { courseId: 105, courseName: 'Angular', coursePrice: 5000, courseDescription: 'Able to create reactive Single Page Applications (SPAs)', image: "../assets/angulat1.jfif" },

  ]

}
