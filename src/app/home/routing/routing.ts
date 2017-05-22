import { ModuleWithProviders } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/LoginComponent/login.component';
import {LandingComponent} from '../components/LandingComponent/landing.component';


export const appRoutes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);