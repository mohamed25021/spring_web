import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PFE } from '../model/pfe/pfe.component';

@Injectable({
  providedIn: 'root'
})
export class PfeService {
  private apiUrl = 'http://localhost:8080/pfe';
  constructor(private http: HttpClient) { }
  
  getAllPFE(): Observable<PFE[]> {
    return this.http.get<PFE[]>(this.apiUrl);
  }

  getPFEById(id: number): Observable<PFE> {
    return this.http.get<PFE>(`${this.apiUrl}/${id}`);
  }

  createPFE(pfe: PFE): Observable<PFE> {
    return this.http.post<PFE>(this.apiUrl, pfe);
  }

  updatePFE(id: number, pfe: PFE): Observable<PFE> {
    return this.http.put<PFE>(`${this.apiUrl}/${id}`, pfe);
  }

  deletePFE(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
