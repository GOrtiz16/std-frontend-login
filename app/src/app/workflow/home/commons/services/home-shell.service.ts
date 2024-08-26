import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IHttpErrorResponse } from 'src/app/workflow/auth/pages/login/services/login.service';
import { IHomeSessionResponse } from './home-shell.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeShellService {
  private toggleSidebar = new EventEmitter();
  constructor(private http: HttpClient) {}

  setToggleSidebar() {
    this.toggleSidebar.emit();
  }

  getToggleSidebar() {
    return this.toggleSidebar;
  }

  getHomeSession(userCredentialId: string): Observable<IHomeSessionResponse> {
    return environment.apiStdHome.mock
      ? this.mockFront('')
      : this.http.post<IHomeSessionResponse>(
          `${environment.apiStdHome.ip}${environment.apiStdHome.api_home_session}/${userCredentialId}`,
          { headers: this.getToken('14bf1deb-60c4-46c1-a2f1-adb501fe759e') }
        );
  }

  getToken(token: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
      'x-santander-client-id': 'SESSION=' + token
    });
    return headers;
  }

  mockFront(password: string): Observable<IHomeSessionResponse> {
    let response = {} as IHomeSessionResponse;

    const customError461 = new IHttpErrorResponse(403, 404, '', null, 'ERR461', 'session-expired');
    const customError462 = new IHttpErrorResponse(403, 404, '', null, 'ERR462', 'maintenance');
    const customError463 = new IHttpErrorResponse(403, 404, '', null, 'ERR463', 'active-session-other-browser');
    const customError464 = new IHttpErrorResponse(403, 404, '', null, 'ERR464', 'session-closed');

    response = {
      person: {
        givenName: 'VICTOR SANTINO SANTANDERO',
        fullName: 'VICTOR SANTINO SANTANDERO ****************************** ******************************'
      },
      currencyExchange: {
        exchangeRateSale: 4.272,
        exchangeRateBuy: 3.358
      },
      customers: [
        {
          fullName: 'VECTOR QA GLOBAL SAC',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: true,
          profiles: [
            { key: 1, name: 'Administrador' },
            { key: 2, name: 'Firmante' },
            { key: 3, name: 'Preparador' },
            { key: 4, name: 'Enviador' },
            { key: 5, name: 'Consultar' },
            { key: 6, name: 'Revisor' },
            { key: 7, name: 'Registra/Editar' },
            { key: 8, name: 'Elab.Lotes Imp.' },
            { key: 9, name: 'Elab.Lotes Prep' },
            { key: 10, name: 'Elab.Lotes Edit' },
            { key: 11, name: 'Elab.Lotes Cerr' },
            { key: 12, name: 'Elab.Lotes Cons' },
            { key: 13, name: 'Cash Nexus' }
          ]
        },
        {
          fullName: 'SOCIEDAD LAS CASUARINAS S.R.L.',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: false,
          profiles: [{ key: 1, name: 'Administrador' }]
        },
        {
          fullName: 'AJEPER S.A.',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: false,
          profiles: [
            { key: 1, name: 'Administrador' },
            { key: 2, name: 'Firmante' },
            { key: 3, name: 'Preparador' },
            { key: 4, name: 'Enviador' },
            { key: 5, name: 'Consultar' },
            { key: 6, name: 'Revisor' },
            { key: 7, name: 'Registra/Editar' },
            { key: 8, name: 'Elab.Lotes Imp.' },
            { key: 9, name: 'Elab.Lotes Prep' },
            { key: 10, name: 'Elab.Lotes Edit' },
            { key: 11, name: 'Elab.Lotes Cerr' },
            { key: 12, name: 'Elab.Lotes Cons' },
            { key: 13, name: 'Cash Nexus' }
          ]
        },
        {
          fullName: 'INVERSIONES PLATINUM S.A.C.',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: false,
          profiles: [
            { key: 1, name: 'Administrador' },
            { key: 2, name: 'Firmante' },
            { key: 3, name: 'Preparador' },
            { key: 4, name: 'Enviador' },
            { key: 5, name: 'Consultar' },
            { key: 6, name: 'Revisor' },
            { key: 7, name: 'Registra/Editar' },
            { key: 8, name: 'Elab.Lotes Imp.' },
            { key: 9, name: 'Elab.Lotes Prep' },
            { key: 10, name: 'Elab.Lotes Edit' },
            { key: 11, name: 'Elab.Lotes Cerr' },
            { key: 12, name: 'Elab.Lotes Cons' },
            { key: 13, name: 'Cash Nexus' }
          ]
        },
        {
          fullName: 'CORPORACION DRD S.A.C',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: false,
          profiles: [
            { key: 1, name: 'Administrador' },
            { key: 2, name: 'Firmante' },
            { key: 3, name: 'Preparador' },
            { key: 4, name: 'Enviador' },
            { key: 5, name: 'Consultar' },
            { key: 6, name: 'Revisor' },
            { key: 7, name: 'Registra/Editar' },
            { key: 8, name: 'Elab.Lotes Imp.' },
            { key: 9, name: 'Elab.Lotes Prep' },
            { key: 10, name: 'Elab.Lotes Edit' },
            { key: 11, name: 'Elab.Lotes Cerr' },
            { key: 12, name: 'Elab.Lotes Cons' },
            { key: 13, name: 'Cash Nexus' },
            { key: 14, name: 'Floor Plan OFB' }
          ]
        },
        {
          fullName: 'ZZZZZZZZZZZZZZZZZZZZZZZZZZZ',
          customerId: '20100065038',
          customerIdType: 2,
          isHolding: false,
          profiles: []
        }
      ]
    };

    return of(response);
  }
}
