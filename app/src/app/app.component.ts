import { Component, OnInit } from '@angular/core';
import { CommitInfoService } from './shared/services/commit-info.service';
import { Router } from '@angular/router';

declare global {
  interface Window {
    APP_INFO: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private commitInfoService: CommitInfoService, private router: Router) {
    (window as any).navigateTo = (route: string) => {
      this.router.navigate([route]);
    };
  }

  ngOnInit(): void {
    this.commitInfoService.getCommitInfo().subscribe((info) => (window.APP_INFO = info));
  }
}
