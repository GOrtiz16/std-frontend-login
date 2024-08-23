import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment.development';
import { InfoService } from '../../../services/info.service';
import { InfoInterface } from '../interfaces/password-recovery';
import { KeyBoardHelper } from 'src/app/shared/services/keyboard.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordUpdateService {
  private apiStdLogin = environment.apiStdLogin;
  private keyBoardHelperService = new KeyBoardHelper();

  constructor(private httpService: HttpService, private infoService: InfoService) {}

  passwordUpdate(password: string, accessToken: string, codeVerification: string): Observable<any> {
    return this.getChannelInfo().pipe(
      switchMap((response: InfoInterface) => {
        this.keyBoardHelperService.setKeyBoard(response.keyboard);
        const selectedKey = this.keyBoardHelperService.getPasswordHash(password);
        const seed = response.keyboard.seed;
        const body = { accessToken, codeVerification, seed, password: { selectedKey } };

        return this.httpService.post(this.apiStdLogin.api_update_password, body);
      }),
      catchError((error) => error)
    );
  }

  getChannelInfo(): Observable<any> {
    return this.infoService.getCanalSecurity();
  }
}
