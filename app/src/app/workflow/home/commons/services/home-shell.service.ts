import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IHttpErrorResponse } from 'src/app/workflow/auth/pages/login/services/login.service';
import { IHomeSessionResponse } from './home-shell.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HomeShellService {
  private toggleSidebar = new EventEmitter();
  private homeSessionEmitter = new EventEmitter();

  constructor(private http: HttpClient) {}

  setToggleSidebar() {
    this.toggleSidebar.emit();
  }

  getToggleSidebar() {
    return this.toggleSidebar;
  }

  setHomeSessionEmitter() {
    this.homeSessionEmitter.emit();
  }

  getHomeSessionEmitter() {
    return this.homeSessionEmitter;
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
          nameHolding: 'Holding 1',
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
          customerId: '20100065039',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 1',
          profiles: [{ key: 1, name: 'Administrador' }]
        },
        {
          fullName: 'AJEPER S.A.',
          customerId: '20100065040',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 2',
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
          customerId: '20100065041',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 2',
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
          customerId: '20100065042',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 3',
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
          customerId: '20100065043',
          customerIdType: 2,
          isHolding: false,
          nameHolding: '',
          profiles: []
        },
        {
          fullName: 'INVERSIONES GLOBAL S.A.C.',
          customerId: '20567812345',
          customerIdType: 2,
          isHolding: true,
          nameHolding: 'Holding 4',
          profiles: []
        },
        {
          fullName: 'CORPORACION ALFA S.R.L.',
          customerId: '20543210987',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 5',
          profiles: [{ key: 1, name: 'Director' }]
        },
        {
          fullName: 'GRUPO BETA S.A.',
          customerId: '20345678901',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 6',
          profiles: []
        },
        {
          fullName: 'COMPANIA SIGMA S.R.L.',
          customerId: '20432109876',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 6',
          profiles: []
        },
        {
          fullName: 'EMPRESA XYZ S.A.C.',
          customerId: '20654321098',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 7',
          profiles: [{ key: 2, name: 'Gerente General' }]
        },
        {
          fullName: 'SOLUCIONES OMEGA S.A.',
          customerId: '20765432109',
          customerIdType: 2,
          isHolding: true,
          nameHolding: 'Holding 8',
          profiles: []
        },
        {
          fullName: 'CONSULTORIA DELTA S.R.L.',
          customerId: '20876543210',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 9',
          profiles: [{ key: 3, name: 'Analista' }]
        },
        {
          fullName: 'NEGOCIOS GAMMA S.A.C.',
          customerId: '20987654321',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 9',
          profiles: []
        },
        {
          fullName: 'CORPORACION EPSILON S.A.C.',
          customerId: '20123456789',
          customerIdType: 2,
          isHolding: false,
          nameHolding: 'Holding 10',
          profiles: []
        },
        {
          fullName: 'GRUPO ZETA S.A.',
          customerId: '20234567890',
          customerIdType: 2,
          isHolding: true,
          nameHolding: 'Holding 11',
          profiles: []
        }
      ],
      date: '28 August 2024',
      time: '15:20 hrs'
    };

    return of(response).pipe(delay(1000));
  }
}
