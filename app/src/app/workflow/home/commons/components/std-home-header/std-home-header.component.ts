import { Component, Input, OnInit } from '@angular/core';
import { ICompany, ICurrencyPriceReference } from '../../services/home-shell.interfaces';

@Component({
  selector: 'std-home-header',
  templateUrl: './std-home-header.component.html',
  styleUrl: './std-home-header.component.scss'
})
export class StdHomeHeaderComponent implements OnInit {
  @Input() currencyPriceReference: ICurrencyPriceReference = { currency: '', salesPrice: 0, buyPrice: 0 };
  @Input() companies: ICompany = { company: '', fullName: '', isHolding: false };
  @Input() loading: Boolean = false
  
  ngOnInit() {
  }
}
