import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss'
})
export class TransfersComponent implements OnInit {
  loading = false;

  ngOnInit() {
    const token = Math.random().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:8080';
    const url = `${base}/${env.apiStdHome.transfers}`;
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`, 'mf-transfers');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
