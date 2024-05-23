import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'std-header',
  templateUrl: './std-header.component.html',
  styleUrl: './std-header.component.scss'
})
export class StdHeaderComponent implements OnInit {
  isLogin = false;
  isNotLogin = false;

  constructor(
    private router: Router) {}

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogin = event.urlAfterRedirects === '/login';
        this.isNotLogin = !this.isLogin;
      }
    });
  }

}
