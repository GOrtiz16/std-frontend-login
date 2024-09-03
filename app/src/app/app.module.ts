import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { STDTimerManagerModule } from './shared/core/timer-manager/timer-manager.module';
import { defineCustomElements } from 'stencil-library/loader';
import { STDAuthenticationModule } from './shared/core/authentiication-manager';
import { STDStorageModule } from './shared/core/storage-manager';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor'; // Ajusta el path según tu estructura de carpetas

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    STDTimerManagerModule.forRoot({timeSeconds: 20, order: 'des'}),
    STDAuthenticationModule.forRoot(),
    STDStorageModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

defineCustomElements();
