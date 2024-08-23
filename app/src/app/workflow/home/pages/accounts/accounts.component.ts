import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-accounts-detail',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent implements OnInit {
  loading = true;

  ngOnInit() {
    const url = env.production ? `${env.apiStdHome.ip}${env.apiStdHome.positionacc}` : 'http://127.0.0.1:8080/accounts';
    const token = Math.random().toString(36).substring(2, 9);
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`,"mf-accounts");
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
