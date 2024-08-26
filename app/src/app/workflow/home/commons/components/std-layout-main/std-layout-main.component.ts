import { Component, OnInit } from '@angular/core';
import { HomeShellService } from '../../services/home-shell.service';
import { IHomeSessionResponse, IHomeShellResponseError } from '../../services/home-shell.interfaces';
import { TimerService } from 'src/app/shared/core/timer-manager/timer-manager.service';

@Component({
  selector: 'std-layout-main',
  templateUrl: './std-layout-main.component.html'
})
export class StdLayuotComponent implements OnInit {
  loading = false;
  homeSessionData!: IHomeSessionResponse;

  constructor(private homeShellService: HomeShellService, private TimerService: TimerService) {}

  ngOnInit() {
    this.initCounter();
    this.getHomeSession();
  }

  initCounter() {
    this.TimerService.startTimer();
    this.TimerService.onTimerEnd().subscribe(() => {});
  }

  getHomeSession() {
    this.showLoader();

    const userCredentialId = sessionStorage.getItem('user_credential_id');
    if (!userCredentialId) {
      return;
    }

    this.homeShellService.getHomeSession(userCredentialId).subscribe({
      next: (response: IHomeSessionResponse) => {
        this.homeSessionData = response;
        const logintime = 120;
        this.TimerService.setTime(logintime);
      },
      error: (error: IHomeShellResponseError) => {
        this.hideLoader();
        console.error(error);
      },
      complete: () => this.hideLoader()
    });
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }
}
