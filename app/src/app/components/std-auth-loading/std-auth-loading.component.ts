import { Component, Input, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import lottie from 'lottie-web';

type TType = 'normal' | 'percentage';

@Component({
  selector: 'std-auth-loading',
  templateUrl: './std-auth-loading.component.html',
  styleUrl: './std-auth-loading.component.scss'
})
export class StdAuthLoadingComponent implements AfterViewInit {

  @Input() type: TType = 'normal';

  @ViewChild('loaderIcon') bigLoaderIconContaner!: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {    
    if (this.bigLoaderIconContaner) {
      const animation = lottie.loadAnimation({
        container: this.bigLoaderIconContaner.nativeElement,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/json/bigLoader.json',
      });
    }
  }

}
