import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { entreprise } from '../model/partner/partner.component';
import { Observable } from 'rxjs';
import { Field } from '../model/field/field.component';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  private baseUrl = 'http://localhost:8080/fields';
  constructor(private http: HttpClient) { }

  getAllfield(): Observable<Field[]> {
    return this.http.get<Field[]>(`${this.baseUrl}/all`);
  }

  addfield(field: Field): Observable<Field> {
    const url = `${this.baseUrl}/add`;
    return this.http.post<Field>(url, entreprise);
  }
}
