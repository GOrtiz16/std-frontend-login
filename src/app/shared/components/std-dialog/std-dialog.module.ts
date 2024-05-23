import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdDialogComponent } from './std-dialog.component';
import { MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [StdDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDialogContent,
    MatButtonModule,
    MatIcon,
  ],
  exports: [StdDialogComponent],
})
export class StdDialogModule {}
