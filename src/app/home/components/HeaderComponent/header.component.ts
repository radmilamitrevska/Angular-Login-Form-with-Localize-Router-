import { Component } from '@angular/core';
import {LocalizeRouterService} from "localize-router";

@Component({
  selector: 'header-app',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private localize: LocalizeRouterService) {}

  //Change default language
  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
