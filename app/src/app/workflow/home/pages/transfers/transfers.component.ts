import { Component } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss'
})
export class TransfersComponent {
  loading = true;

  ngOnInit() {
    this.verifyLoading();
    const url = env.production ? `${env.apiStdHome.ip}${env.apiStdHome.transfers}` : 'http://127.0.0.1:8080';
    const token = Math.random().toString(36).substring(2, 9);
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/arstransfers-1.js?v=${token}`,'');
    // const url = env.production ? `${env.apiStdHome.ip}${env.apiStdHome.transfers}` : 'http://127.0.0.1:8080/transfers';
    // const token = Math.random().toString(36).substring(2, 9);
    // // loadAsset(`${url}/styles.css`);
    // loadScript(`${url}/main.js?v=${token}`, 'std-mfe-transfers');
  }

  verifyLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }

}
