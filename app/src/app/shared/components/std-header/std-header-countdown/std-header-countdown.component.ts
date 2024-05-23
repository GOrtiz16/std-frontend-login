import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StdDialogComponent } from 'src/app/shared/components/std-dialog/std-dialog.component';

@Component({
  selector: 'std-header-countdown',
  templateUrl: './std-header-countdown.component.html',
  styleUrls: ['./std-header-countdown.component.scss'],
})
export class HeaderCountdownComponent implements OnInit {
  countdownMinutes: number = 5;
  countdownSeconds: number = 0;
  interval: any;

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
        if (this.countdownSeconds == 0 && this.countdownMinutes == 0) {
          clearInterval(this.interval);
          this.openTimerDialog();
        }
      } else {
        if (this.countdownMinutes > 0) {
          this.countdownMinutes--;
          this.countdownSeconds = 59;
        }
      }
    }, 1000);
  }

  openTimerDialog(): void {
    this.matDialog.open(StdDialogComponent, {
      disableClose: true,
      width: '600px',
      data: {
        title: 'El tiempo ha expirado',
        content: 'Por favor, intenta nuevamente',
      },
    });
  }
}
