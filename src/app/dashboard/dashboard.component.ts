import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router : Router,private appService : AppServiceService){}

  ngOnInit(){
    this.getClassData();
    this.getUsersData();
  }

  usersData :any;

  userColumns: string[] = ['name', 'age', 'weight', 'class', 'userType'];

  classesData :any;

  classColumns: string[] = ['className', 'description', 'timing', 'numUsers'];

  getClassData(){
    this.appService.getRequest('http://localhost:8000/api/class').subscribe((res)=>{
      console.log(res);
      this.classesData= res;
      console.log(this.classesData)
    });
  }

  getUsersData(){
    this.appService.getRequest('http://localhost:8000/api/user').subscribe((res)=>{
      console.log(res);
      this.usersData= res;
      console.log(this.usersData)
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
