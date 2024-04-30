import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor ( private router:Router){
   
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userDetails =localStorage.getItem("user")
      if(userDetails){
     let user =JSON.parse(userDetails);
      if(localStorage.getItem("authToken")&&user){
   return true;
  }
  else {
    this.router.navigate(['/login'])
    return false
  }
  }
  else {
    this.router.navigate(['/login'])
    return false
  }
}
}