import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { prof } from '../model/encadrant/encadrant.component';


@Injectable({
  providedIn: 'root'
})
export class EncadrantService {

  private baseUrl = 'http://localhost:8080/prof';
  constructor(private http: HttpClient){ }

  getAllProfessors(): Observable<prof[]> {
    return this.http.get<prof[]>(`${this.baseUrl}/all`);
  }

  addProfessor(prof: prof): Observable<prof> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<prof>(url, prof);
  }
}
