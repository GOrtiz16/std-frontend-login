import { Component, OnInit } from '@angular/core';
import { delay, map, of, switchMap, tap } from 'rxjs';
import { HomeShellService } from '../../services/home-shell.service';
import {
  IHomeShellResponseOK,
  IHomeShellResponseError,
  IPerson,
  IProfile,
  ICurrencyExchange,
  ICompany
} from '../../services/home-shell.interfaces';
import { TimerService } from 'src/app/shared/core/timer-manager/timer-manager.service';

@Component({
  selector: 'std-layout-main',
  templateUrl: './std-layout-main.component.html'
})
export class StdLayuotComponent implements OnInit {
  loading = false;
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
      // tap(() => this.showLoader()),
      switchMap(() => {
        let request = 'VSANTINO';
        return this.homeShellService.getShellinfo(request).pipe(
          map(
            (response: IHomeShellResponseOK) => {
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

  setData(response: IHomeShellResponseOK) {
    this.personData = response.person;
    this.currencyPriceReferenceData = response.currencyExchange;
    this.companiesData = response.customers;
  }
}
