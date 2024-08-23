import { Injectable } from '@angular/core';
import { AuthTokenFactory } from '../core/base/authentication';

@Injectable()
export class STDAuthenticationService extends AuthTokenFactory {}
