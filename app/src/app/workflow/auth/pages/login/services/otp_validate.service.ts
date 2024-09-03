import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


import { environment } from 'src/environments/environment';
import { IOtpValidateResponse } from '../interfaces/info-response.interfaces';

@Injectable({
  providedIn: 'root',
})
export class OtpValidateService {
  constructor(private http: HttpClient) {}

  validateOtpCode(request:{}): Observable<IOtpValidateResponse> {
  
    return this.http.post<IOtpValidateResponse>(
        `${environment.apiStdLogin.ip }${environment.apiStdLogin.api_send_otp_validate}`,
        request,
        { headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e') }
      );
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
      'x-santander-client-id': 'SESSION=' + token,
    });
    return headers;
  }
}
