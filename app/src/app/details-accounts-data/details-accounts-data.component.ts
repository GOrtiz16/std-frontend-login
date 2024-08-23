import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../components/std-auth-loading/commons/loading.service';
import { Router } from '@angular/router';
import { AccountsService } from '../accounts/services/accounts.service';
import { IAccount, IAccountsResponse } from '../accounts/interfaces/accounts.interface';
import { AccountsDetailService } from './details-accounts-data.service';
import { IAccountTransactionsResponse } from './details-accounts-data.interface';

@Component({
  selector: 'app-details-accounts-data',
  templateUrl: './details-accounts-data.component.html',
  styleUrl: './details-accounts-data.component.scss'
})
export class DetailsAccountsDataComponent implements OnInit {
  loading = true;
  accounts: Array<IAccount>;
  transactions: IAccountTransactionsResponse;
  periodList: Array<string> = [];
  slides = [
    { text: 'Espacio para Banner', imageUrl: '' },
    { text: 'Espacio para Banner', imageUrl: '' },
    { text: 'Espacio para Banner', imageUrl: '' }
  ];

  constructor(
    public accountsService: AccountsService,
    public accountsDetailService: AccountsDetailService,
    public loadingService: LoadingService,
    public router: Router
  ) {}

  ngOnInit() {
    this.accountsService.searchAccounts().subscribe(this._mapAccounts.bind(this), () => {
      this.hideLoader();
    });
    this.accountsDetailService.searchTransactions().subscribe(this._mapTransactions.bind(this), () => {
      this.hideLoader();
    });
    this.getPreviousMonths();
  }

  private _mapAccounts(response: IAccountsResponse): void {
    this.hideLoader();
    if (!response) {
      return;
    }

    this.accounts = response.accounts;
    console.log(this.accounts);
  }

  private _mapTransactions(response: IAccountTransactionsResponse): void {
    this.hideLoader();
    if (!response) {
      return;
    }

    this.transactions = response;
  }

  showLoader() {
    this.loadingService.sendEvent({ loader: { show: true } });
  }

  hideLoader() {
    this.loadingService.sendEvent({ loader: { show: false } });
  }

  toggleModal(modal: HTMLElement, visible: boolean) {
    visible ? modal.setAttribute('show', '') : modal.removeAttribute('show');
  }

  copyAccountToClipboard(data: string): void {
    if (!navigator.clipboard) {
      console.error('El navegador no soporta la API del portapapeles.');
      return;
    }

    navigator.clipboard
      .writeText(data)
      .then(() => console.log('Cuenta copiada al portapapeles.'))
      .catch((err) => console.error('Error al copiar la cuenta al portapapeles: ', err));
  }

  private getPreviousMonths(): void {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const today = currentDate.getDate();
    const isCurrentMonthCompleted = today >= new Date(currentYear, currentMonth + 1, 0).getDate();
    let startMonth = isCurrentMonthCompleted ? currentMonth : currentMonth - 1;
    let startYear = currentYear;

    Array.from({ length: 6 }).forEach((_) => {
      startMonth < 0 && ((startMonth = 11), startYear--);
      const monthName = new Date(startYear, startMonth).toLocaleString('default', { month: 'long' });
      const month = monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
      this.periodList.push(`${startYear} - ${month}`);
      startMonth--;
    });

    this.periodList.reverse();
  }
}
