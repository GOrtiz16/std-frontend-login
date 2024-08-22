import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-consolidated-position',
  templateUrl: './consolidated-position.component.html',
  styleUrl: './consolidated-position.component.scss'
})

export class ConsolidatedPositionComponent implements OnInit {
  loading = false;

  ngOnInit() {
    // this.verifyLoading();
    const url = env.production ? `${env.apiStdHome.ip}${env.apiStdHome.positionacc}` : 'http://127.0.0.1:8080/consolidated-position';
    const token = Math.random().toString(36).substring(2, 9);
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`,'mf-consolidated-position');
  }

  // verifyLoading() {
  //   setTimeout(() => {
  //     this.loading = false;
  //   }, 1500);
  // }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }

}
