import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../service/app-service.service';
import { log } from 'console';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gym',
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent implements OnInit {

  constructor(private appService:AppServiceService,private router: Router) { }
 classes:any[]=[];

  ngOnInit(): void {
    this.getClassData();
  }

  scrollToSection(sectionId: string): void {
    const yOffset:number = -50; 
const element = document.getElementById(sectionId);

    if (element) {
      const y:any = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }

  getClassData(){
    this.appService.getRequest('http://localhost:8000/api/class').subscribe((res)=>{
      console.log(res);
      this.classes= res;
      console.log(this.classes)
    });
  }

  navigateToProfile(){
    this.router.navigate(['/profile']);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
