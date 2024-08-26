import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IHomeSessionResponse } from '../../services/home-shell.interfaces';
import { HomeShellService } from '../../services/home-shell.service';

@Component({
  selector: 'std-home-header',
  templateUrl: './std-home-header.component.html',
  styleUrl: './std-home-header.component.scss'
})
export class StdHomeHeaderComponent implements OnInit, OnChanges {
  @Input() homeSession!: IHomeSessionResponse;
  @Input() loading!: Boolean;

  dataHeader: any;
  dataDropDown: any;

  constructor(private homeShellService: HomeShellService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.dataHeader = {
      buyPrice: this.homeSession.currencyExchange.exchangeRateBuy,
      salesPrice: this.homeSession.currencyExchange.exchangeRateSale
    };
    this.dataDropDown = {
      company: this.homeSession.customers[0].customerId,
      fullName: this.homeSession.customers[0].fullName
    };
  }

  setToggleSidebar() {
    this.homeShellService.setToggleSidebar();
  }
}
