import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { environment } from 'src/environments/environment';
import { IHttpErrorResponse } from 'src/app/workflow/auth/pages/login/commons/services/api/login.service';
import { IHomeShellResponseError, IHomeShellResponseOK } from './home-shell.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HomeShellService {
  constructor(private http: HttpClient) {}
  
  getShellinfo(request: {}): Observable<IHomeShellResponseOK> {
    return environment.apiStdHome.mock ?
    this.mockFront('')
    :
     this.http.post<IHomeShellResponseOK>(
        `${environment.apiStdHome.ip }${environment.apiStdHome.api_home_shell}`,
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
  mockFront (password: string) : Observable<IHomeShellResponseOK>{
    let response = {} as IHomeShellResponseOK;
    const customError461 = new IHttpErrorResponse(
      403,
      404, 
      '', 
      null, 
      'ERR461',
      'session-expired'
    );

    const customError462 = new IHttpErrorResponse(
      403,
      404, 
      '', 
      null, 
      'ERR462', 
      'maintenance' 
    );

    const customError463 = new IHttpErrorResponse(
      403,
      404, 
      '', 
      null, 
      'ERR463', 
      'active-session-other-browser' 
    );

    const customError464 = new IHttpErrorResponse(
      403,
      404, 
      '', 
      null, 
      'ERR464', 
      'session-closed' 
    );
 
    response = {
      "person": {
          "personName": "Juan Perez",
          "givenName": "Juan",
          "fullName": "Juan Perez Castillo"
      },
      "currencyPriceReference": {
          "currency": "USD",
          "salesPrice": 3.83,
          "buyPrice": 3.7
      },
      "companies": {
          "company": "GRUPO AREQUIPA",
          "fullName": "ACEROS AREQUIPA S.A.",
          "isHolding": false
      },
      "profiles": {
          "roles": "Firmante",
          "key": 22,
          "name": "Firmante"
      }
  }
    return of(response)
  }
}
