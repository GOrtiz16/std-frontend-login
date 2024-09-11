import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ICompany, IHomeSessionResponse } from '../../services/home-shell.interfaces';
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
  currentDate!: string;
  selectedCustomerId!: string;
  newSelectedCustomerId!: string;
  disableButton!: boolean;
  companyList: Array<ICompany> = [];

  constructor(private homeShellService: HomeShellService) {}

  ngOnInit() {
    this.setCurrentDate();
  }

  setCurrentDate(): void {
    const currentDate = new Date();
    this.currentDate = currentDate.toLocaleDateString('es-US', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  ngOnChanges(): void {
    this.companyList = this.homeSession?.customers;
    this.dataHeader = {
      buyPrice: this.homeSession?.currencyExchange.exchangeRateBuy || '0.000',
      salesPrice: this.homeSession?.currencyExchange.exchangeRateSale || '0.000'
    };
    this.dataDropDown = {
      company: this.homeSession?.customers[0].nameHolding,
      fullName: this.homeSession?.customers[0].fullName
    };
    this.verifySelectedCompany();
  }

  setToggleSidebar() {
    this.homeShellService.setToggleSidebar();
  }

  verifySelectedCompany(): void {
    const _customer = sessionStorage.getItem('customer');
    const customer = _customer ? JSON.parse(_customer) : null;
    this.selectedCustomerId = customer?.customerId || '';
  }

  filterCompanyList(term: string): void {
    this.companyList = this.homeSession?.customers.filter((c: ICompany) =>
      c.fullName.toLowerCase().includes(term.toLowerCase())
    );
  }

  onCompanySelect(company: ICompany): void {
    // this.disableButton = company.customerId === this.selectedCustomerId;
    this.newSelectedCustomerId = company.customerId;
  }

  // Boton Consultar (Cambiar de empresa)
  onChangeCompany(): void {
    const _home = sessionStorage.getItem('home');
    const home = _home ? JSON.parse(_home) : null;
    const newCompany = home?.customers.find((c: any) => c.customerId === this.newSelectedCustomerId);
    // TODO: llamar a servicio indicando nueva compañia/customer seleccionado
    sessionStorage.setItem('customer', JSON.stringify(newCompany));
    window.location.reload();
  }

  toggleCollapse(isOpen: any): void {}
}
