import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { IOtpResponse } from '../interfaces/info-response.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  constructor(private http: HttpClient) {}

  sendOtpCode(request: {}): Observable<IOtpResponse> {
    return environment.apiStdLogin.mock
      ? this.mockFront()
      : this.http.post<IOtpResponse>(`${environment.apiStdLogin.ip}${environment.apiStdLogin.api_send_otp}`, request, {
          headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e')
        });
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
      'x-santander-client-id': 'SESSION=' + token
    });

    return headers;
  }

  mockFront(): Observable<any> {
    const response = {
      sendOtp: {
        email: 'rxxxxxxx@santander.com.pe'
      }
    };

    return of(response).pipe(delay(1500));
  }
}
