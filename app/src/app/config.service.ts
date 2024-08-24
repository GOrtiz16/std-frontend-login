import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { appName } from './app.module';

export interface appConfigModel{
  env:string,
  appName:string
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient,@Inject(appName)private appName:string) { }

  private appConfiguration:appConfigModel | undefined;

  setConfigurationDetails(){
  
    return this.http.get(`/assets/configurations/config.json`).pipe(
      tap((response:any)=>{
        console.log(response);
        this.appConfiguration=response;
      })
    )
  }

  retreiveConfigurationDetails(){
    return this.appConfiguration;
  }
}
