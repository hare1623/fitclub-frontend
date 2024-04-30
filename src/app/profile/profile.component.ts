import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userName = 'John Doe';
  age = 30;
  classes = ['Yoga', 'Pilates', 'Zumba'];
  hoursInGym = 15;
  weight = 78;

  constructor(private router: Router,private authService : AuthService) { }
  userData:any;
  ngOnInit(){
    this.userData = this.authService.getUserData();
    console.log('User data in profile page:', this.userData);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
