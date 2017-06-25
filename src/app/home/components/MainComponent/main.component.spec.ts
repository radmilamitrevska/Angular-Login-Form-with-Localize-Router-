import { TestBed, async } from '@angular/core/testing';

import {GlobalService} from "../../services/global.service";
import {MainComponent} from "./main.component";
import {LandingComponent} from "../LandingComponent/landing.component";
import {LoginComponent} from "../LoginComponent/login.component";
import {HeaderComponent} from "../HeaderComponent/header.component";
import {FooterComponent} from "../FooterComponent/footer.component";
import {EmailValidator} from "../../directives/emailValidator";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {translateLoaderFactory} from "../../translate/Translate";
import {appRoutes, AppRouting} from "../../routing/routing";
import {LocalizeRouterModule} from "localize-router";
import {FormsModule} from "@angular/forms";
import {APP_BASE_HREF} from '@angular/common';

describe('MainComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        LandingComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        EmailValidator
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: translateLoaderFactory
          }
        }),
        LocalizeRouterModule.forRoot(appRoutes),
        AppRouting,
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        GlobalService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  /*it(`should have as title 'Hello World!'`, async(() => {
    const fixture = TestBed.createComponent(Component1);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Hello World!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(Component1);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Hello World!');
  }));*/
});
