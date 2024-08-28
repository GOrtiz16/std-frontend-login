import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAccountsResponse } from '../interfaces/accounts.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private http: HttpClient) {}

  searchAccounts(): Observable<IAccountsResponse> {
    const body = {
      credential: {
        userCredentialId: 'NWwH4mLV'
      }
    };
    const headers = new HttpHeaders({
      'x-santander-client-id': '1234'
    });
    const env = environment.apiConsPosition;

    return env.mock
      ? this.mockFront('')
      : this.http.post<IAccountsResponse>(`${env.ip}${env.search_accounts}`, body, { headers });
  }

  mockFront(password: string): Observable<IAccountsResponse> {
    let response = {} as IAccountsResponse;

    response = {
      accounts: [
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '456-1234567-8-90',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 38540.0,
          countableBalance: 41200.0,
          deferredBalance: 15000.0,
          retainedBalance: 8000.0
        },
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '789-6543210-3-21',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 67000,
          countableBalance: 68000,
          deferredBalance: 19000,
          retainedBalance: 5000
        },
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '321-0987654-6-43',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 52300,
          countableBalance: 54000,
          deferredBalance: 12000,
          retainedBalance: 10000
        },
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '654-3210987-2-54',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 75000,
          countableBalance: 76000,
          deferredBalance: 23000,
          retainedBalance: 9000
        },
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '987-4561230-9-65',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 48000,
          countableBalance: 49000,
          deferredBalance: 11000,
          retainedBalance: 12000
        },
        {
          accountType: 'Corriente',
          accountName: 'Nombre Lorem Ipsum',
          accountCurrency: 'MN',
          accountNumber: '123-7894561-2-76',
          currencyType: 'Soles',
          symbol: 'S/',
          availableBalance: 64000,
          countableBalance: 65000,
          deferredBalance: 18000,
          retainedBalance: 6000
        }
      ]
    };

    return of(response);
  }
}
