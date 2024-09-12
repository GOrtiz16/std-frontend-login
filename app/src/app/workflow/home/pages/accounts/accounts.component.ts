import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { pseudoMathRamdon } from 'src/app/shared/helpers';
import { loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';
import { StdLayutMainModule } from '../../commons/components/std-layout-main/std-layout-main.module';

@Component({
  selector: 'app-accounts-detail',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss',
  standalone: true,
  imports: [CommonModule,StdLayutMainModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AccountsComponent implements OnInit {
  loading = false;

  ngOnInit() {
    const token = pseudoMathRamdon().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:5678/';
    const url = `${base}${env.apiStdHome.accounts}`;
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`, 'mf-accounts');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
