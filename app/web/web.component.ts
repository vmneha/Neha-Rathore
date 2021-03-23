import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.css']
})
export class WebComponent implements OnInit {

  name: string = 'this is web componenet';

  constructor() { }

  ngOnInit(): void {
  }

}
