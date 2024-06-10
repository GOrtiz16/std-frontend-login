import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


import { environment } from 'src/environments/environment';
import { IInfoChannelResponse } from '../../models/responses/info-response.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChannelInfoService {
  constructor(private http: HttpClient) {}

  getChannnelInfo(): Observable<IInfoChannelResponse> {
    const infpForm = {
      seed: '14bf1deb-60c4-46c1-a2f1-adb501fe759e',
    };
 
    return environment.apiStdLogin.mock ?
    this.mockFront()
    :
    this.http.post<IInfoChannelResponse>(
        `${environment.apiStdLogin.ip}${environment.apiStdLogin.api_info_canal}`,
        infpForm,
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

  mockFront () : Observable<IInfoChannelResponse>{
    let response = {} as IInfoChannelResponse
    response = {
      "time": {
          "milliseconds": 3000  
      },
      "channel": {
          "code": "OB",
          "name": "Banca por internet Santanderd",
          "description": "ingrese una descripcion"
      },
      "keyboard": {
          "seed": "c0406f85-a8b8-45cf-baec-9ea365cda4ee",
          "keys": [
              {
                  "value": "a",
                  "id": "ed491f0f-af48-4869-8742-113260586acd"
              },
              {
                  "value": "e",
                  "id": "bdbadb1b-4fb5-4d67-8224-a0115b62cede"
              },
          ]
      }
  }
    return of(response)
  }

}
