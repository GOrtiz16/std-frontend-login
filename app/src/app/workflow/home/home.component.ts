import { Component, OnInit } from '@angular/core';
import { delay, map, of, switchMap, tap } from 'rxjs';
import { HomeShellService } from './commons/services/home-shell.service';
import {
  IHomeSessionResponse,
  IHomeShellResponseError,
  IPerson,
  IProfile,
  ICurrencyExchange,
  ICompany
} from './commons/services/home-shell.interfaces';
import { TimerService } from 'src/app/shared/core/timer-manager/timer-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  loading = true;
  personData: IPerson = { givenName: '', fullName: '' };
  profilesData: IProfile = { roles: '', key: 0, name: '' };
  currencyPriceReferenceData: ICurrencyExchange = { exchangeRateSale: 0, exchangeRateBuy: 0 };
  companiesData: Array<ICompany> = [];

  constructor(private homeShellService: HomeShellService, private TimerService: TimerService) {}

  ngOnInit() {
    this.initCounter();
    this.initMainOrchestation().subscribe(
      () => {},
      () => {
        this.hideLoader();
      }
    );
  }

  initCounter() {
    this.TimerService.startTimer();
    this.TimerService.onTimerEnd().subscribe(() => {});
  }

  initMainOrchestation() {
    return of(undefined).pipe(
      tap(() => this.showLoader()),
      switchMap(() => {
        let request = { userCredentialId: 'VNANDI' };
        return this.homeShellService.getHomeSession(request).pipe(
          map(
            (response: IHomeSessionResponse) => {
              this.setData(response);
              const logintime = 120;
              this.TimerService.setTime(logintime);
            },
            (error: IHomeShellResponseError) => {}
          )
        );
      }),
      delay(1500),
      tap(() => this.hideLoader())
    );
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }

  setData(response: IHomeSessionResponse) {
    this.personData = response.person;
    this.currencyPriceReferenceData = response.currencyExchange;
    this.companiesData = response.customers;
  }
}
