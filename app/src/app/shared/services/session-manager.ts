import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { STDAuthenticationService } from 'src/app/shared/core/authentiication-manager';
import { STDLocalStorageService } from 'src/app/shared/core/storage-manager';

export class Tokens {
  access_token: string = '';
}

export const config = {
  apiUrl: `${environment.API_BASE}auth/`
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_TOKEN = 'Authorization';
  private readonly WEBAPP_TOKEN = 'Authorization';

  constructor(
    private http: HttpClient,
    private localStorage: STDLocalStorageService,
    private authService: STDAuthenticationService,
    private router: Router
  ) {}

  expired() {
    //this.stateManager.setState({ authenticated : true})
  }

  isLoggedIn() {
    return !!this.getAuthToken();
  }

  updateAuthToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type': 'application/json',
        'content-type': 'application/x-www-form-urlencoded',
        'Ocp-Apim-Subscription-Key': environment.SUBSCRIPTION_KEY,
        Authorization: 'Bearer ' + this.getApplicationToken()
      })
    };

    return this.http.post<any>(`${environment.API_BASE}auth`, {}, httpOptions).pipe(
      tap((tokens: Tokens) => {
        this.storeAuthToken(tokens.access_token);
      })
    );
  }

  /* Obtener el access token */
  getAuthToken() {
    return this.localStorage.getItem(this.AUTH_TOKEN);
  }

  private doLoginUser(tokens: Tokens) {
    this.storeAccessToken(tokens);
  }

  doLogoutUser() {
    this.removeAccessTokens();
    this.router.navigateByUrl('login');
  }

  /* Obtener el id_token desde el environment*/
  private getApplicationToken() {
    return environment.APPLICATION_TOKEN;
  }

  // Envía token al localStorage
  private storeAuthToken(authToken: string) {
    this.localStorage.setItem(this.AUTH_TOKEN, authToken);
  }

  private storeAccessToken(tokens: Tokens) {
    this.localStorage.setItem(this.AUTH_TOKEN, tokens.access_token);
  }

  private removeAccessTokens() {
    this.localStorage.removeItem(this.AUTH_TOKEN);
  }
}
