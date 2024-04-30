import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  getRequest(url:string):Observable<any>{
    return this.http.get(url);
  }
  postRequest(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
}
