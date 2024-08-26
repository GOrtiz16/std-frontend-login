import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'std-auth-header',
  templateUrl: './std-auth-header.component.html',
  styleUrl: './std-auth-header.component.scss'
})
export class StdAuthHeaderComponent implements OnInit {
  isLogin = false;
  isNotLogin = false;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    this.verifyLogin();
  }

  verifyLogin() {
    this.router.events.subscribe((event) => {
      this.isLogin = location.pathname === '/login';
      this.isNotLogin = !this.isLogin;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
