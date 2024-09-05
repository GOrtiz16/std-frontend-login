import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-accounts-detail',
  templateUrl: './accounts-detail.component.html',
  styleUrl: './accounts-detail.component.scss'
})
export class AccountsDetailComponent implements OnInit {
  loading = true;

  ngOnInit() {
this.loadConsolidatedPosition()
  }

  loadConsolidatedPosition(): void {
    const token = Math.random().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:8081/';
    const url = `${base}${env.apiStdHome.detail_accounts}`;
    console.log("url",url)
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`, 'mf-detail-accounts');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
