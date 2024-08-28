import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../components/std-auth-loading/commons/loading.service';
import { Router } from '@angular/router';
import { ConsolidatedService } from './services/consolidated-position.service';
import { IConsolidatedResponse, ISummary } from './interfaces/consolidated-position.interface';
declare var window: any;

interface slideInterface {
  text?: string;
  imageUrl?: string;
}

@Component({
  selector: 'mf-consolidated-position',
  templateUrl: './consolidated-position.html',
  styleUrls: ['./consolidated-position.scss']
})

export class ConsolidatedPositionComponent implements OnInit {
  slides: slideInterface[] = [];
  data: IConsolidatedResponse;
  labels = [
    ['cuenta', 'cuentas'],
    ['producto', 'productos'],
    ['garantía', 'garantías']
  ];

  constructor(
    public loadingService: LoadingService,
    public consolidatedService: ConsolidatedService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getConsolidatedPosition();
    this.slideDate();
  }

  getConsolidatedPosition() {
    this.showLoader();
    this.consolidatedService.postConsolidated().subscribe(
      this._mapConsolidatedPosition.bind(this),
      () => {
        this.hideLoader();
      }
    );
  }

  private _mapConsolidatedPosition(response: IConsolidatedResponse): void {
    this.hideLoader();
    if (!response) {
      return;
    }

    const debt = {
      directDebt: this._mapItem(response.debt.directDebt, 1),
      undirectDebt: this._mapItem(response.debt.undirectDebt, 1)
    };

    this.data = {
      balance: this._mapItem(response.balance, 0),
      investments: this._mapItem(response.investments, 1),
      debt,
      guarantee: this._mapItem(response.guarantee, 2)
    };
  }

  private _mapItem(item: any, label: number): any {
    const summary = this._mapSummary(item.summary, label);
    const hasAccounts = !!item.accounts;
    const accountsOrProducts = hasAccounts ? item.accounts : item.productsCategory;
    const accountsOrProductsMapped = accountsOrProducts.map((x: any) => {
      const quantity = `${x.quantity} ${x.quantity == 1 ? this.labels[label][0] : this.labels[label][1]}`;
      return { ...x, quantity };
    });

    return hasAccounts
      ? { summary, accounts: accountsOrProductsMapped }
      : { summary, productsCategory: accountsOrProductsMapped };
  }

  private _mapSummary(summary: ISummary, label: number) {
    const quantity = `${summary.quantity} ${summary.quantity == 1 ? this.labels[label][0] : this.labels[label][1]}`;
    return { ...summary, quantity };
  }

  showLoader() {
    this.loadingService.sendEvent({ loader: { show: true } });
  }

  hideLoader() {
    this.loadingService.sendEvent({ loader: { show: false } });
  }

  ctaDetail() {
    // Navegación si es necesario
    // this.router.navigate(['/account-detail']);
  }

  slideDate() {
    this.slides = [
      { text: 'Espacio para Banner', imageUrl: '' },
      { text: 'Espacio para Banner', imageUrl: '' },
      { text: 'Espacio para Banner', imageUrl: '' }
    ];
  }

  goToAccounts(): void {
    window.navigateTo('/accounts');
  }

  toggleModal(modal: HTMLElement, open: boolean): void {
    open ? modal.setAttribute('show', '') : modal.removeAttribute('show');
  }

  radioChanged(event: any) {
    console.log(event.detail);
  }
}
