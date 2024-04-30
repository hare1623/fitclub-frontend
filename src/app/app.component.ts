import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title = 'fitclub';
  constructor(private authService:AuthService){}
  ngOnInit(){
  let userDetails = localStorage.getItem("user");
  if(userDetails){
  this.authService.setUserData(JSON.parse(userDetails))
}
}
}
