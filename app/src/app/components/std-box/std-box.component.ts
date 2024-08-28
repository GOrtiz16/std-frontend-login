import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'std-box',
  templateUrl: './std-box.component.html'
})
export class StdBoxComponent {
  @Input() classes: string;
  @Input() label: string;
  @Input() labelLink: string;
  @Input() iconLink: string;
  @Input() link: boolean;
  @Input() classesLink: string;

  @Output() clickLink = new EventEmitter<void>();

  get boxClasses(): string {
    return ['rounded-lg flex flex-col gap-5 p-6 border border-alternative-medium lg:flex-1', this.classes]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');
  }

  onClickLink(): void {
    this.clickLink.emit();
  }
}
