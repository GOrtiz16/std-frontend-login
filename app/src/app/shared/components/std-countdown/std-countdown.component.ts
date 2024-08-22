import { Component, OnInit, Input } from '@angular/core';
import { TimerService } from '../../core/timer-manager/timer-manager.service';

type TPosition = 'end' | 'center';

@Component({
  selector: 'std-countdown',
  templateUrl: './std-countdown.component.html',
  styleUrls: ['./std-countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  @Input() label: string = '';
  @Input() position: TPosition = 'end';

  countdownMinutes: number = 5;
  countdownSeconds: number = 0;
  interval: any;
  showModal = false;
  sizeModal = 'm';

  timerPrinted = ''
  constructor(private sts: TimerService){
  }
  ngOnInit() {
    this.sts.getTimeLeft().subscribe(v => {
      this.timerPrinted = v.timeFormatted || '';
    });

    this.sts.onTimerEnd().subscribe(v => {
      this.openModal();
    });

  }

  closeModal() {
    this.sts.resetTimer();
    this.sts.startTimer();
    this.showModal = false;
  }

  openModal(): void {
    this.showModal = true;
  }
}
