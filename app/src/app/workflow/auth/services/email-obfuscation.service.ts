import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailObfuscationService {

  constructor() { }

  obfuscateEmail(email: string): string {
    const [user, domain] = email.split('@');
    const obfuscatedUser = user[0] + '***' + user[user.length - 1];
    const [domainName, domainExtension] = domain.split('.');
    const obfuscatedDomain = domainName[0] + '***' + domainName[domainName.length - 1] + '.' + domainExtension;

    return `${obfuscatedUser}@${obfuscatedDomain}`;
  }
}
