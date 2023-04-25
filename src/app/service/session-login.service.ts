import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { user } from '../model/user/user.component';
import { Router } from '@angular/router';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

finuser='http://localhost:8080/user/email';
add='/user/add';
  constructor(private httpClient : HttpClient , private router :Router) { }
  
  
  saveUser(user: user): Observable<user> {
    return this.httpClient.post<user>(environment.baseURL+this.add, user);
  }

}
