import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consolidated-position',
  templateUrl: './consolidated-position.component.html',
  styleUrl: './consolidated-position.component.scss'
})
export class ConsolidatedPositionComponent implements OnInit {
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
