import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';

@Component({
  selector: 'app-mobile-accounts-detail',
  templateUrl: './mobile-accounts-detail.component.html',
  styleUrl: './mobile-accounts-detail.component.scss'
})
export class MobileAccountsDetailComponent implements OnInit {
  loading = true;

  ngOnInit() {
    // loadAsset(`http://57.151.56.184/styles.css`);
    // loadScript(`http://57.151.56.184/arspositionacc-1.js?v=2`);
    
    // loadAsset(`http://127.0.0.1:8080/styles.css`);
    loadScript(`http://127.0.0.1:8080/main.js`);
  }
  
  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
