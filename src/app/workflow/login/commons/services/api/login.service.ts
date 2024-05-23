import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ILoginUserRequest } from '../../models/requests/login-user-request.interface';
import { ILoginUserResponse } from '../../models/responses/login-user-response.interface';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  getUserChannnelInfo(): Observable<ILoginUserResponse> {
    const request = {};
    return this.http.post<ILoginUserResponse>(
      `${environment.apiStd.baseURL}${environment.apiStd.servicePath.infoLogin}`,
      request
    );
  }

  loginUser(request: ILoginUserRequest): Observable<ILoginUserResponse> {
    const loginForm = {
      seed: '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
      username: request.username,
      password: {
        keys: [
          'f6381c2a-f7e0-4701-afd1-31995d65d0aa',
          '8de755b9-fa2f-4f77-a620-5b6089b6a23c',
          '8edc457a-3202-46ff-aae0-5fc031e16d20',
          'be57a30a-3d5c-4f71-9de4-7ea3c8487f20',
          'fb7eda63-81cf-4842-92cc-35a05d442235',
          '33b3a006-f100-4380-98e8-88c7e0d0765e',
          'd6558e8a-35d5-4bab-b4cc-268036d0d7fc',
          '2713f4d6-965f-4fa2-a0e0-e84cc846a551',
        ],
      },
    };
    return this.http.post<ILoginUserResponse>(
      `${environment.apiStd.baseURL}${environment.apiStd.servicePath.loginUser}`,
      loginForm,
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
