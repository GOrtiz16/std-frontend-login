import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'std-home-footer',
  templateUrl: './std-home-footer.component.html',
  styleUrl: './std-home-footer.component.scss'
})
export class StdHomeFooterComponent implements OnInit {
  @Input() loading = true;

  ngOnInit() {}
}
