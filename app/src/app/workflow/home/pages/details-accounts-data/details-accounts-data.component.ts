import { Component, OnInit } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';

@Component({
  selector: 'app-details-accounts-data',
  templateUrl: './details-accounts-data.component.html',
  styleUrl: './details-accounts-data.component.scss'
})
export class DetailsAccountsDataComponent implements OnInit {
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
