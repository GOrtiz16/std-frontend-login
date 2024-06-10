import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'std-home-footer',
  templateUrl: './std-home-footer.component.html',
  styleUrl: './std-home-footer.component.scss'
})
export class StdHomeFooterComponent implements OnInit {
  loading = true;

  ngOnInit() {
    this.verifyLoading();
  }

  verifyLoading() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }
}
