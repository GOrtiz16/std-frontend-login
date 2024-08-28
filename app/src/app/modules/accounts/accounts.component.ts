import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../components/std-auth-loading/commons/loading.service';
import { Router } from '@angular/router';
import { AccountsService } from './services/accounts.service';
import { IAccount, IAccountsResponse } from './interfaces/accounts.interface';

@Component({
  selector: 'mf-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit {
  loading = true;
  accounts: Array<IAccount>;
  slides = [
    { text: 'Espacio para Banner', imageUrl: '' },
    { text: 'Espacio para Banner', imageUrl: '' },
    { text: 'Espacio para Banner', imageUrl: '' }
  ];

  constructor(public accountsService: AccountsService, public router: Router, public loadingService: LoadingService) {}

  ngOnInit() {
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });

    this.getAccounts();
  }

  getAccounts(): void {
    this.showLoader();
    this.accountsService.searchAccounts().subscribe(this._mapAccounts.bind(this), () => {
      this.hideLoader();
    });
  }

  private _mapAccounts(response: IAccountsResponse): void {
    this.hideLoader();
    if (!response) {
      return;
    }

    this.accounts = response.accounts;
    console.log(this.accounts);
  }

  goToAccountSelect(): void {
    this.router.navigate(['/accounts-detail']);
  }

  goToAccountDetail(): void {
    this.router.navigate(['/details-accounts-data']);
  }

  showLoader() {
    this.loadingService.sendEvent({ loader: { show: true } });
  }

  hideLoader() {
    this.loadingService.sendEvent({ loader: { show: false } });
  }

  ctaDetail() {
    this.router.navigate(['/accounts']);
  }
}
