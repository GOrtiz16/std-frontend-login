import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'std-radio-button',
  templateUrl: './std-radio-button.component.html'
})
export class StdRadioButtonComponent {
  @Input() label!: string;
  @Input() name!: string;
  @Input() value!: string;
  @Input() checked: boolean = false;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() white: boolean = false;
  @Input() status: 'default' | 'error' = 'default';
  @Input() classes!: string;
  @Input() classesRadio!: string;

  @Output() changeEmitter = new EventEmitter<any>();

  onChange(): void {
    this.changeEmitter.emit(this.value);
  }

  get statusClasses(): string {
    return (
      {
        default:
          'text-alternative border-border-default checked:text-white checked:bg-radio-checked checked:border-alternative checked:hover:border-alternative',
        error: 'text-white border-error checked:bg-radio-error checked:border-error hover:border-error'
      }[this.status] || ''
    );
  }

  get checkboxClasses(): string {
    return [
      'w-6 h-6 rounded-full outline-0 checked:bg-[length:13px] checked:border-[2px]',
      !this.readonly && !this.disabled ? this.statusClasses : '',
      this.readonly
        ? 'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:border-border-disabled checked:hover:border-border-disabled'
        : '',
      this.disabled
        ? 'text-dark/[0.06] bg-dark/[0.06] border-border-disabled checked:bg-radio-checked-disabled checked:border-border-disabled checked:hover:border-border-disabled'
        : '',
      this.classesRadio
    ]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  get wrapperClasses(): string {
    return ['flex gap-2', this.readonly ? 'pointer-events-none' : '', this.white ? 'text-white' : '', this.classes]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
  }
}
