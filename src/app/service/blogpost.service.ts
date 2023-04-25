import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { blogpost } from '../model/blogposts/blogposts.component';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  private baseUrl = 'http://localhost:8080/blogposts';
  constructor(private http: HttpClient) { }

  getAllblogpost(): Observable<blogpost[]> {
    return this.http.get<blogpost[]>(`${this.baseUrl}/all`);
  }

  addblogpost(blogpost: blogpost): Observable<blogpost> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<blogpost>(url, blogpost);
  }
}
