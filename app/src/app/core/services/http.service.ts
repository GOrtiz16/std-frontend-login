import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiStdLogin = environment.apiStdLogin.ip;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-santander-client-id': 'SESSION=' + environment.OcpApimSubscriptionKey,
    'Ocp-Apim-Subscription-Key': environment.OcpApimSubscriptionKey
  });

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiStdLogin}/${endpoint}`, { headers: this.headers });
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http.post<T>(`${this.apiStdLogin}${endpoint}`, body, { headers: this.headers });
  }
}
