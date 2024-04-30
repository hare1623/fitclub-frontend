import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GymComponent } from './gym/gym.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from './login-guard.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent,canActivate: [LoginGuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: GymComponent,canActivate: [LoginGuardGuard]},
  { path: 'dashboard' , component: DashboardComponent,canActivate: [LoginGuardGuard,RoleGuard]},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
