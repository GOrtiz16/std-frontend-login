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

export class PasswordRetrieveService {
  private apiStdLogin = environment.apiStdLogin;
  private keyBoardHelperService = new KeyBoardHelper();

  constructor(private httpService: HttpService, private infoService: InfoService) {}

  passwordRetrieve(password: string, userCredentialId: string): Observable<any> {
    return this.getCanalSecurity().pipe(
      switchMap((response: InfoInterface) => {
        this.keyBoardHelperService.setKeyBoard(response.keyboard);
        const keyboard = this.keyBoardHelperService.getPasswordHash(password);
        const body = {
          userCredentialId: userCredentialId,
          seed: response.keyboard.seed,
          password: {
            selectedKey: keyboard
          }
        };
        return this.httpService.post(this.apiStdLogin.api_retrieve_password, body);
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  private getCanalSecurity(): Observable<any> {
    return this.infoService.getCanalSecurity();
  }
}
