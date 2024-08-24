import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAccountTransactionsResponse } from './details-accounts-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountsDetailService {
  constructor(private http: HttpClient) {}

  searchTransactions(): Observable<IAccountTransactionsResponse> {
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
      : this.http.post<IAccountTransactionsResponse>(`${env.ip}${env.search_transactions}`, body, { headers });
  }

  mockFront(password: string): Observable<IAccountTransactionsResponse> {
    let response = {} as IAccountTransactionsResponse;

    response = {
      accountName: 'Cta. Corriente Dólares Lorem Ipsum',
      accountNumber: '194-9734444-1-2',
      cci: '04194-9734444-1-2',
      symbol: 'S/',
      availableBalance: 50000,
      countableBalance: 50001,
      deferredBalance: 50002,
      retainedBalance: 50003,
      init: 1,
      limit: 25,
      total: 999,
      currentPage: 1,
      pages: 6,
      accountTransactions: [
        {
          date: '30/05/2024',
          dateValue: '30/05/2024',
          operationNumber: '123-456-789-0',
          description: 'Transferencia inmediata al 003 020',
          channel: 'Office Banking',
          amount: 100.0,
          balance: -100.0
        },
        {
          date: '01/06/2024',
          dateValue: '01/06/2024',
          operationNumber: '234-567-890-1',
          description: 'Transferencia inmediata al 003 021',
          channel: 'Office Banking',
          amount: 150.0,
          balance: 250.0
        },
        {
          date: '02/06/2024',
          dateValue: '02/06/2024',
          operationNumber: '345-678-901-2',
          description: 'Pago de servicios',
          channel: 'Mobile Banking',
          amount: 200.0,
          balance: -450.0
        },
        {
          date: '03/06/2024',
          dateValue: '03/06/2024',
          operationNumber: '456-789-012-3',
          description: 'Depósito en efectivo',
          channel: 'Cajero automático',
          amount: 500.0,
          balance: 905.0
        },
        {
          date: '04/06/2024',
          dateValue: '04/06/2024',
          operationNumber: '567-890-123-4',
          description: 'Transferencia a cuenta 003 022',
          channel: 'Online Banking',
          amount: -300.0,
          balance: 650.0
        },
        {
          date: '05/06/2024',
          dateValue: '05/06/2024',
          operationNumber: '678-901-234-5',
          description: 'Compra en supermercado',
          channel: 'Tarjeta de débito',
          amount: 205.0,
          balance: 400.0
        },
        {
          date: '06/06/2024',
          dateValue: '06/06/2024',
          operationNumber: '789-012-345-6',
          description: 'Transferencia inmediata al 003 023',
          channel: 'Office Banking',
          amount: -3005.0,
          balance: 705.0
        },
        {
          date: '07/06/2024',
          dateValue: '07/06/2024',
          operationNumber: '890-123-456-7',
          description: 'Pago de tarjeta de crédito',
          channel: 'Mobile Banking',
          amount: 400.0,
          balance: 1015.0
        },
        {
          date: '08/06/2024',
          dateValue: '08/06/2024',
          operationNumber: '901-234-567-8',
          description: 'Transferencia a cuenta 003 024',
          channel: 'Online Banking',
          amount: 405.0,
          balance: 1600.0
        },
        {
          date: '09/06/2024',
          dateValue: '09/06/2024',
          operationNumber: '012-345-678-9',
          description: 'Retiro en cajero automático',
          channel: 'Cajero automático',
          amount: 500.0,
          balance: 1010.0
        },
        {
          date: '10/06/2024',
          dateValue: '10/06/2024',
          operationNumber: '123-456-789-0',
          description: 'Compra en tienda en línea',
          channel: 'Tarjeta de débito',
          amount: 550.0,
          balance: 550.0
        },
        {
          date: '11/06/2024',
          dateValue: '11/06/2024',
          operationNumber: '234-567-890-1',
          description: 'Pago de servicios',
          channel: 'Office Banking',
          amount: 100.0,
          balance: 405.0
        },
        {
          date: '12/06/2024',
          dateValue: '12/06/2024',
          operationNumber: '345-678-901-2',
          description: 'Depósito en efectivo',
          channel: 'Mobile Banking',
          amount: 600.0,
          balance: 1050.0
        },
        {
          date: '13/06/2024',
          dateValue: '13/06/2024',
          operationNumber: '456-789-012-3',
          description: 'Transferencia inmediata al 003 025',
          channel: 'Online Banking',
          amount: 700.0,
          balance: 1705.0
        },
        {
          date: '14/06/2024',
          dateValue: '14/06/2024',
          operationNumber: '567-890-123-4',
          description: 'Compra en supermercado',
          channel: 'Cajero automático',
          amount: 800.0,
          balance: 905.0
        },
        {
          date: '15/06/2024',
          dateValue: '15/06/2024',
          operationNumber: '678-901-234-5',
          description: 'Pago de tarjeta de crédito',
          channel: 'Tarjeta de débito',
          amount: 90.0,
          balance: 5.0
        },
        {
          date: '16/06/2024',
          dateValue: '16/06/2024',
          operationNumber: '789-012-345-6',
          description: 'Transferencia a cuenta 003 026',
          channel: 'Office Banking',
          amount: 1000.0,
          balance: 1005.0
        },
        {
          date: '17/06/2024',
          dateValue: '17/06/2024',
          operationNumber: '890-123-456-7',
          description: 'Retiro en cajero automático',
          channel: 'Mobile Banking',
          amount: 1100.0,
          balance: 2150.0
        },
        {
          date: '18/06/2024',
          dateValue: '18/06/2024',
          operationNumber: '901-234-567-8',
          description: 'Compra en tienda en línea',
          channel: 'Online Banking',
          amount: 1200.0,
          balance: 950.0
        },
        {
          date: '19/06/2024',
          dateValue: '19/06/2024',
          operationNumber: '012-345-678-9',
          description: 'Pago de servicios',
          channel: 'Cajero automático',
          amount: 1300.0,
          balance: 2025.0
        },
        {
          date: '20/06/2024',
          dateValue: '20/06/2024',
          operationNumber: '123-456-789-0',
          description: 'Depósito en efectivo',
          channel: 'Tarjeta de débito',
          amount: 1400.0,
          balance: 3605.0
        },
        {
          date: '21/06/2024',
          dateValue: '21/06/2024',
          operationNumber: '234-567-890-1',
          description: 'Transferencia inmediata al 003 027',
          channel: 'Office Banking',
          amount: 1500.0,
          balance: 2105.0
        },
        {
          date: '22/06/2024',
          dateValue: '22/06/2024',
          operationNumber: '345-678-901-2',
          description: 'Compra en supermercado',
          channel: 'Mobile Banking',
          amount: 1600.0,
          balance: 550.0
        },
        {
          date: '23/06/2024',
          dateValue: '23/06/2024',
          operationNumber: '456-789-012-3',
          description: 'Pago de tarjeta de crédito',
          channel: 'Online Banking',
          amount: 1700.0,
          balance: 2205.0
        },
        {
          date: '25/06/2024',
          dateValue: '25/06/2024',
          operationNumber: '678-901-234-5',
          description: 'Retiro en cajero automático',
          channel: 'Tarjeta de débito',
          amount: 1900.0,
          balance: 2350.0
        }
      ]
    };

    return of(response);
  }
}
