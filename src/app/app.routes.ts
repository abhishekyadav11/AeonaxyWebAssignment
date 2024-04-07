import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { OptionsComponent } from './options/options.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';

export const routes: Routes = [
    {path:'',component: LoginComponent},
    { path: 'profile', component: ProfileComponent },
    { path: 'options', component: OptionsComponent },
    { path: 'email', component: EmailConfirmationComponent },
];
