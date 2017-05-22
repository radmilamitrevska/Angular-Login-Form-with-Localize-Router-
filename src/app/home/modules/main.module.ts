import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MainComponent} from '../components/MainComponent/main.component';
import {LandingComponent} from '../components/LandingComponent/landing.component';
import {LoginComponent} from '../components/LoginComponent/login.component';
import {HeaderComponent} from '../components/HeaderComponent/header.component';
import {FooterComponent} from '../components/FooterComponent/footer.component';
import {GlobalService} from "../services/global.service";
import {appRoutes, AppRouting} from "../routing/routing";
import {EmailValidator} from "../directives/emailValidator";
import { FormsModule }   from '@angular/forms';
import {LocalizeRouterModule} from "localize-router";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {translateLoaderFactory} from "../translate/Translate";


@NgModule({
    bootstrap: [MainComponent],
    declarations: [
        MainComponent,
        LandingComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        EmailValidator
    ],
    imports: [
        BrowserModule,
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
        GlobalService
    ]
})
export class MainModule {}