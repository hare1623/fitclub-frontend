import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GymComponent } from './gym/gym.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: GymComponent},
  { path: 'dashboard' , component: DashboardComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: '**', redirectTo: '/login' } // Redirect to login page for any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
