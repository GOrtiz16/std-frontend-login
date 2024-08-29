import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IConsolidatedResponse } from '../interfaces/consolidated-position.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsolidatedService {
  constructor(private http: HttpClient) {}

  postConsolidated(): Observable<IConsolidatedResponse> {
    const customer = JSON.parse(sessionStorage.getItem('customer') || '');
    const body = {
      userCredentialId: sessionStorage.getItem('user_credential_id'),
<<<<<<< HEAD:src/app/consolidated-position/services/consolidated-position.service.ts
      customer: sessionStorage.getItem('customer_id')
=======
      customer: `01${customer.customerIdType || ''}${customer.customerId || ''}`
>>>>>>> 0f75863c223938ddc2850ffae9366eebf927d744:src/app/modules/consolidated-position/services/consolidated-position.service.ts
    };
    const headers = new HttpHeaders({
      'x-santander-client-id': '1234'
    });
    const env = environment.apiConsPosition;

    return env.mock
      ? this.mockFront('')
      : this.http.post<IConsolidatedResponse>(`${env.ip}${env.api_feed}`, body, { headers });
  }

  mockFront(password: string): Observable<IConsolidatedResponse> {
    let response = {} as IConsolidatedResponse;

    response = {
      balance: {
        accounts: [
          {
            totalCurrency: 'Total Soles',
            totalCategory: 190000,
            quantity: 1,
            symbol: 'S/',
            accountList: [
              {
                accountType: 'Cta corriente',
                accountName: 'Crece 1',
                accountCurrency: 'MN',
                accountNumber: '194-9734444-1-25',
                total: 10000,
                symbol: 'S/'
              },
              {
                accountType: 'Cta corriente',
                accountName: 'Crece 1',
                accountCurrency: 'MN',
                accountNumber: '194-9734444-1-25',
                total: 20000,
                symbol: 'S/'
              }
            ]
          },
          {
            totalCurrency: 'Total Dólares',
            totalCategory: 50000,
            quantity: 2,
            symbol: '$',
            accountList: [
              {
                accountType: 'Cta corriente',
                accountName: 'Lorem Ipsum',
                accountCurrency: 'ME',
                accountNumber: '194-9734444-1-25',
                total: 25000,
                symbol: '$'
              }
            ]
          }
        ],
        summary: {
          quantity: 1,
          dollarSymbol: '$',
          solesSymbol: 'S/',
          totalDollars: 100000,
          totalSoles: 370000,
          tc: '3.70'
        }
      },
      investments: {
        productsCategory: [
          {
            totalCurrency: 'Total Soles',
            totalCategory: 9999,
            quantity: 5,
            symbol: 'S/',
            productList: [
              {
                productName: 'cta corriente crece 1',
                total: 10000,
                symbol: 'S/'
              }
            ]
          },
          {
            totalCurrency: 'Total Dolares',
            totalCategory: 99999,
            quantity: 1,
            symbol: '$',
            productList: [
              {
                productName: 'cta corriente crece 1',
                total: 20000,
                symbol: '$'
              }
            ]
          }
        ],
        summary: {
          quantity: 33,
          dollarSymbol: '$',
          solesSymbol: 'S/',
          totalDollars: 100000,
          totalSoles: 370000,
          tc: '3.70'
        }
      },
      debt: {
        directDebt: {
          productsCategory: [
            {
              totalCurrency: 'Total Soles',
              totalCategory: 190000,
              quantity: 5,
              symbol: 'S/',
              productList: [
                {
                  productName: 'cta corriente crece 1',
                  total: 10000,
                  symbol: 'S/'
                }
              ]
            },
            {
              totalCurrency: 'Total Dolares',
              totalCategory: 12341234,
              quantity: 7,
              symbol: '$',
              productList: [
                {
                  productName: 'cta corriente crece 1',
                  total: 7500,
                  symbol: '$'
                },
                {
                  productName: 'cta corriente crece 2',
                  total: 1200,
                  symbol: '$'
                },
                {
                  productName: 'cta corriente crece 3',
                  total: 3300,
                  symbol: '$'
                }
              ]
            }
          ],
          summary: {
            quantity: 22,
            dollarSymbol: '$',
            solesSymbol: 'S/',
            totalDollars: 100000,
            totalSoles: 370000,
            tc: '3.70'
          }
        },
        undirectDebt: {
          productsCategory: [
            {
              totalCurrency: 'Total Soles',
              totalCategory: 0,
              quantity: 5,
              symbol: 'S/',
              productList: [
                {
                  productName: 'cta corriente crece 1',
                  total: 10000,
                  symbol: 'S/'
                }
              ]
            },
            {
              totalCurrency: 'Total Dolares',
              totalCategory: 12341234,
              quantity: 3,
              symbol: '$',
              productList: [
                {
                  productName: 'cta corriente crece 1',
                  total: 7500,
                  symbol: '$'
                },
                {
                  productName: 'cta corriente crece 2',
                  total: 1200,
                  symbol: '$'
                },
                {
                  productName: 'cta corriente crece 3',
                  total: 3300,
                  symbol: '$'
                }
              ]
            }
          ],
          summary: {
            quantity: 1,
            dollarSymbol: '$',
            solesSymbol: 'S/',
            totalDollars: 100000,
            totalSoles: 370000,
            tc: '3.70'
          }
        }
      },
      guarantee: {
        productsCategory: [
          {
            totalCurrency: 'Total Soles',
            totalCategory: 1500,
            quantity: 1,
            symbol: 'S/',
            productList: [
              {
                productName: 'cta corriente crece 1',
                total: 1500,
                symbol: 'S/'
              }
            ]
          },
          {
            totalCurrency: 'Total Dolares',
            totalCategory: 1500,
            quantity: 3,
            symbol: '$',
            productList: [
              {
                productName: 'cta corriente crece 1',
                total: 1500,
                symbol: '$'
              }
            ]
          }
        ],
        summary: {
          quantity: 2,
          dollarSymbol: '$',
          solesSymbol: 'S/',
          totalDollars: 100000,
          totalSoles: 370000,
          tc: '3.70'
        }
      }
    };

    return of(response);
  }
}
