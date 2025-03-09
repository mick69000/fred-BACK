import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api'; // Adresse du backend

  constructor(private http: HttpClient) {}

  // 📌 Récupérer la liste des engins selon le type
  getEngins(type: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/engins/${type}`);
  }

  // 📌 Récupérer la liste des engins selon le type
  getAllEngins(): Observable<any> {
    return this.http.get(`${this.apiUrl}/engins/`);
  }

  // 📌 ajoute un engin a partir de son numéro et de sa série
  setEngin(type: string, numero: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${numero}`, { type });
  }

  // 📌 supprime un engin a partir de son numéro
  deleteEngin(numero: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${numero}`);
  }
}
