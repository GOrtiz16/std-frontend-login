import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICompany, ICurrencyExchange } from '../../services/home-shell.interfaces';
import { HomeShellService } from '../../services/home-shell.service';

@Component({
  selector: 'std-home-header',
  templateUrl: './std-home-header.component.html',
  styleUrl: './std-home-header.component.scss'
})
export class StdHomeHeaderComponent implements OnInit, OnChanges {
  @Input() currencyPriceReference: ICurrencyExchange = { exchangeRateSale: 0, exchangeRateBuy: 0 };
  @Input() companies: Array<ICompany> = [];
  @Input() loading!: Boolean;

  dataHeader: any;

  constructor(
    private homeShellService: HomeShellService
  ) {

  }
  ngOnInit() { }

  ngOnChanges(): void {
    this.dataHeader = {
      buyPrice: this.currencyPriceReference.exchangeRateBuy,
      salesPrice: this.currencyPriceReference.exchangeRateSale
    };
  }

  setToggleSidebar() {
    this.homeShellService.setToggleSidebar();
  }
}
