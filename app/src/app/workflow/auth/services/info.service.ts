import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  private apiStdLogin = environment.apiStdLogin;
  
  constructor(private httpService: HttpService) {}

  getCanalSecurity(): Observable<any> {
    const body = {};

    return this.httpService.post(this.apiStdLogin.api_info_canal, body);
  }
}
