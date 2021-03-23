import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  //constructor(private translateService: TranslateService) {
  //  translateService.setDefaultLang('en');
  //}

  //changeLocale(locale: string) {
  //  this.translateService.use(locale)
  //}

  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  changeLocale(locale: string) {
    this.translateService.use(locale)
  }
}
