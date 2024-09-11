import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';
import { StdSkeletonContentModule } from '../../commons/components/std-skeleton-content/std-skeleton-content.module';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';
import { RouterModule } from '@angular/router';
import { pseudoMathRamdon } from 'src/app/shared/helpers';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, StdSkeletonContentModule, StdLayutMainModule],
  standalone: true
})
export class TransfersComponent implements OnInit {
  loading = false;

  ngOnInit() {
    const token = pseudoMathRamdon().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:8080/';
    const url = `${base}${env.apiStdHome.transfers}`;
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`, 'mf-transfers');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
