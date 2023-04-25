import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private http : HttpClient) { }

  public get_blogposts(){
    let mydata= this.http.get<any>("http://localhost:8080/blogposts/all");
    return mydata;
  }
}
