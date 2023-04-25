import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entreprise } from '../model/partner/partner.component';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private baseUrl = 'http://localhost:8080/entreprise';
  constructor(private http: HttpClient) { }

  getAllEntreprise(): Observable<entreprise[]> {
    return this.http.get<entreprise[]>(`${this.baseUrl}/all`);
  }

  addEntreprise(entreprise: entreprise): Observable<entreprise> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<entreprise>(url, entreprise);
  }
}
