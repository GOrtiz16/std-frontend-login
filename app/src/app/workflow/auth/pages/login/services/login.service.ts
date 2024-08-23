import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

import { ILoginUserRequest } from '../interfaces/login-user-request.interface';
import { IAuthenticationResponse } from '../interfaces/login-user-response.interface';

import { environment } from 'src/environments/environment';

export class IHttpErrorResponse extends HttpErrorResponse {
  code: string = '';
  description: string = '';

  constructor(error: any, status: number, statusText: string, headers: any, code: string, description: string) {
    super({ error, status, statusText, headers });
    this.code = code || '';
    this.description = description || '';
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  loginUser(request: ILoginUserRequest): Observable<IAuthenticationResponse> {
    const { seed, password } = request;
    const loginForm = {
      seed,
      userCredentialId: request.userCredentialId,
      password: {
        selectedKey: password
      }
    };

    return environment.apiStdLogin.mock
      ? this.mockFront(request.userCredentialId)
      : this.http.post<IAuthenticationResponse>(
          `${environment.apiStdLogin.ip}${environment.apiStdLogin.api_authentication}`,
          loginForm,
          { headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e') }
        );
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-santander-client-id': 'SESSION=' + token
    });

    return headers;
  }

  mockFront(userName: string): Observable<IAuthenticationResponse> {
    let response = {} as IAuthenticationResponse;
    const customError461 = new IHttpErrorResponse(403, 404, '', null, 'ERR461', 'session-expired');
    const customError462 = new IHttpErrorResponse(403, 404, '', null, 'ERR462', 'maintenance');
    const customError463 = new IHttpErrorResponse(403, 404, '', null, 'ERR463', 'active-session-other-browser');
    const customError464 = new IHttpErrorResponse(403, 404, '', null, 'ERR464', 'session-closed');

    switch (userName) {
      //HU1. Escenario 1 - Ingreso correcto de usuario nuevo con clave de 4 dígitos generada por el banco
      case 'escenario0':
        response = {
          credentialOwner: { isFirstLogin: false, success: true, retry: 0 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;
      case 'escenario1':
        response = {
          credentialOwner: { isFirstLogin: true, success: true, retry: 0 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;
      case 'escenario2':
        response = {
          credentialOwner: { isFirstLogin: false, success: false, retry: 2 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;
      case 'escenario3':
        response = {
          credentialOwner: { isFirstLogin: false, success: false, retry: 1 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;
      case 'escenario4':
        response = {
          credentialOwner: { isFirstLogin: false, success: false, retry: -1 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;
      case 'escenario5':
        response = {
          credentialOwner: { isFirstLogin: false, success: false, retry: -2 },
          sessionToken: { accessToken: '', refreshToken: '' }
        };
        break;

      case 'escenario6':
        return throwError(() => customError461);
      case 'escenario7':
        return throwError(() => customError462);
      case 'escenario8':
        return throwError(() => customError463);
      case 'escenario9':
        return throwError(() => customError464);

      default:
        break;
    }

    return of(response).pipe(delay(1500));
  }
}
