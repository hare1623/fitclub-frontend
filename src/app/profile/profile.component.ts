import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  logout() {
    // Implement logout logic here
    // For example, navigate to the login page
    this.router.navigate(['/login']);
  }
}
