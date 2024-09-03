import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OtpService {
  private emailVerified = false;
  private otpValidated = false;
  private apiStdLogin = environment.apiStdLogin;
  constructor(private httpService: HttpService) {}

  sendOtpRequest(email: string, channel: string): Observable<any> {
    const body = {
      credential: {
        email,
        channel
      }
    };
    this.emailVerified = true;
    return this.httpService.post(this.apiStdLogin.api_generating_from_email_otp, body);
  }

  validateOtpRequest(userCredentialId: string, otp: string): Observable<any> {
    const body = {
      credential: {
        userCredentialId
      },
      verification: {
        otp
      }
    };
    this.otpValidated = true;
    return this.httpService.post(this.apiStdLogin.api_send_otp_validate, body);
  }

  isOtpValidated(): boolean {
    return this.otpValidated;
  }

  isEmailVerified(): boolean {
    return this.emailVerified;
  }
}
