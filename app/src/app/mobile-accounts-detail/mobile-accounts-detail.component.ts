import { Component, OnInit } from '@angular/core';
import { delay, of, tap } from 'rxjs';
import { LoadingService } from '../components/std-auth-loading/commons/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-accounts-detail',
  templateUrl: './mobile-accounts-detail.component.html',
  styleUrl: './mobile-accounts-detail.component.scss'
})
export class MobileAccountsDetailComponent implements OnInit{
  constructor(
    public loadingService: LoadingService,
    public router: Router
  ){}
  loading = true;

  ngOnInit() {
    console.log(window.location)
    window.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
    this.doMainOrchestation().subscribe();
  }


  doMainOrchestation() {
    return of(undefined).pipe(
      tap(() => this.showLoader()),
      delay(1500),
      tap(() => this.hideLoader())
    );
  }

  showLoader() {
    this.loadingService.sendEvent({ loader: { show: true } });
  }

  hideLoader() {
    this.loadingService.sendEvent({ loader: { show: false } });
  }
  ctaDetail() {
    console.log("click")
    this.router.navigate(['/mobile-accounts-detail'])

  }
}