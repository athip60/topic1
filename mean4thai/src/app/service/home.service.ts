import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  baseUrl = 'http://localhost:4040/api/student';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  getStudents(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/all`);
  }
  postStudents(data): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, JSON.stringify(data), this.httpOptions);
  }
}