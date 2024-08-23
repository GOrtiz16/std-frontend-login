import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { mockResponses } from './mock.response'; // Importa las respuestas mockeadas

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('santander_obw_token');

    if (environment.apiStdLogin.mock) {
      const mockKey = `${req.method} ${req.url}`;
      if (mockResponses[mockKey]) {
        const mockResponse = new HttpResponse({
          status: 200,
          body: mockResponses[mockKey]
        });
        return of(mockResponse).pipe(delay(3000));
      }
    }

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });

      return next.handle(cloned);
    } 

    return next.handle(req);
  }
}
