import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor ( private router:Router){
   
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let userDetails =localStorage.getItem("user");
      if(userDetails){
      let userType = JSON.parse(userDetails).type
       if(userType==='admin'){
        return true}{
          this.router.navigate(['/home'])
          return false}
    }
    else
    {return false;}
  }
  
}
