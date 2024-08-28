import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'std-card-price',
  templateUrl: './std-card-price.component.html'
})
export class StdCardPriceComponent implements OnInit {
  @Input() label: string;
  @Input() result: string;
  @Input() totalSoles: string;
  @Input() totalDollars: string;
  @Input() classes: string;
  @Input() toggle: boolean;

  total: string;
  cardClasses: string;

  ngOnInit() {
    this.total = this.totalSoles;
    this.cardClasses = ['lg:flex rounded-lg border border-alternative-medium w-full', this.classes]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  toggleEvent(event:any) {
    this.total = event.detail ? this.totalDollars : this.totalSoles;
  }
}
