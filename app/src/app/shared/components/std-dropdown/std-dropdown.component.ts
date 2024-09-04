import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

export interface DataHeader {
  company: string;
  fullName: string;
}

@Component({
  selector: 'std-dropdown',
  templateUrl: './std-dropdown.component.html',
  styleUrls: ['./std-dropdown.component.scss']
})
export class StdDropdownComponent {
  @Input() classes: string = '';
  @Input() data: DataHeader = { company: '', fullName: '' };

  isOpen: boolean = false;

  toggleCollapse(): void {
    this.isOpen = !this.isOpen;
  }
}
