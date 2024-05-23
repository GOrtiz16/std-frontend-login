import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './std-dialog.component.html',
  styleUrls: ['./std-dialog.component.scss'],
})
export class StdDialogComponent {
  @Input() icon: 'alert' | 'error' | 'success';
  @Input() title = 'title';
  @Input() content = 'content';
  @Input() buttonLabel: string;
  @Input() template: TemplateRef<HTMLElement>;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string;
      content: string;
      template: TemplateRef<HTMLElement>;
      icon?: any;
      buttonLabel?: any;
    }
  ) {
    this.icon = data.icon || 'alert';
    this.title = data.title;
    this.content = data.content;
    this.buttonLabel = data.buttonLabel || 'Volver al inicio';
    this.template = data.template;
  }

  ngOnInit() {}
}
