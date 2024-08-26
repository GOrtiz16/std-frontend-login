import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TimerService } from 'src/app/shared/core/timer-manager/timer-manager.service';

@Component({
  selector: 'std-home-security',
  templateUrl: './std-home-security.component.html',
  styleUrl: './std-home-security.component.scss'
})
export class StdHomeSecurityComponent implements OnInit {
  showModal = false;
  timerPrinted = '';

  constructor(private sts: TimerService, private router: Router) {}
  ngOnInit() {
    // this.sts.getTimeLeft().subscribe((v) => {
    //   this.timerPrinted = v.timeFormatted || '';
    //   console.log(v);
    //   if (v.timeLeft - 60 <= 0) {
    //     this.openModal();
    //   }
    // });
    // this.sts.onTimerEnd().subscribe(() => {
    //   this.closeSessionByTime();
    // });
  }

  closeModal() {
    this.showModal = false;
  }

  continueSession() {
    this.closeModal();
    this.sts.resetTimer();
    this.sts.startTimer();
  }

  openModal(): void {
    this.showModal = true;
  }

  closeSessionByTime() {
    this.closeModal();
    this.router.navigateByUrl('/session-status/session-expired');
  }

  closeSessionByModal() {
    this.router.navigate(['/login']);
  }
}
