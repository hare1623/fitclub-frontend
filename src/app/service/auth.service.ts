import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public userData$: Observable<any> = this.userDataSubject.asObservable();

  constructor() { }

  setUserData(userData: any): void {
    this.userDataSubject.next(userData);
  }

  getUserData(): any {
    return this.userDataSubject.value;
  }
}
