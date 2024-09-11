import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface DataHeader {
  company: string;
  fullName: string;
}

@Component({
  selector: 'std-dropdown',
  templateUrl: './std-dropdown.component.html',
  styleUrls: ['./std-dropdown.component.scss']
})
export class StdDropdownComponent implements OnInit {
  @Input() classes: string = '';
  @Input() data: DataHeader = { company: '', fullName: '' };
  @Input() disableButton!: boolean;

  @Output() filerCompanyEmitter = new EventEmitter<string>();
  @Output() toggleCollapseEmitter = new EventEmitter<boolean>();
  @Output() onChangeCompanyEmitter = new EventEmitter<void>();

  isOpen!: boolean;

  ngOnInit() {}

  toggleCollapse(): void {
    this.isOpen = !this.isOpen;
    this.toggleCollapseEmitter.emit(this.isOpen);
  }

  onInputChange(event: any): void {
    this.filerCompanyEmitter.emit(event.target.value);
  }

  onChangeCompany(): void {
    this.onChangeCompanyEmitter.emit();
  }
}
