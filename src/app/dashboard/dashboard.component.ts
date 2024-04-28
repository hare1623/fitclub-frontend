import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router : Router){}

  usersData = [
    { name: 'John Doe', age: 30, weight: 70, class: 'Yoga', userType: 'Regular' },
    { name: 'Jane Smith', age: 25, weight: 65, class: 'Pilates', userType: 'Premium' },
    // Add more user data as needed
  ];

  userColumns: string[] = ['name', 'age', 'weight', 'class', 'userType'];

  classesData = [
    { className: 'Yoga', description: 'Beginner yoga class', timing: 'Mon/Wed 6-7pm', numUsers: 15 },
    { className: 'Pilates', description: 'Advanced pilates class', timing: 'Tue/Thu 5-6pm', numUsers: 10 },
    // Add more class data as needed
  ];

  classColumns: string[] = ['className', 'description', 'timing', 'numUsers', 'actions'];

  deleteClass(classData: any) {
    // Implement delete class logic here
  }

  logout() {
    // Implement logout logic here
    // For example, navigate to the login page
    this.router.navigate(['/login']);
  }
}
