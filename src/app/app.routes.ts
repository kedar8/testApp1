import { Routes } from '@angular/router';

import { LoginPageComponent } from './loginpage/loginpage.component';
import { RegistrationComponent } from './registration/registration.component';
export const CREATIVE_DEMO_ROUTE: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login', component: LoginPageComponent,
    },
    {
        path: 'registration', component: RegistrationComponent,
    },
    {
        path: 'home', loadChildren: './homepage/homepage.module#HomeModule',
    },
];