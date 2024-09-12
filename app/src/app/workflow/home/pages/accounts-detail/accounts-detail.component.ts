import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { pseudoMathRamdon } from 'src/app/shared/helpers';
import {  loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accounts-detail',
  templateUrl: './accounts-detail.component.html',
  styleUrl: './accounts-detail.component.scss',
  standalone: true,
  imports: [CommonModule, StdLayutMainModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountsDetailComponent implements OnInit {
  loading = true;

  ngOnInit() {
    this.loadConsolidatedPosition();
  }

  loadConsolidatedPosition(): void {
    const token = pseudoMathRamdon().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:5678/';
    const url = `${base}${env.apiStdHome.detail_accounts}`;
    loadScript(`${url}/main.js?v=${token}`, 'mf-detail-accounts');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
