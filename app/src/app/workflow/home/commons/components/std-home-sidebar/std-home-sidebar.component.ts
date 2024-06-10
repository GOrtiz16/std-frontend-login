import { Component, Input, OnInit } from '@angular/core';
import { IPerson, IProfile } from '../../services/home-shell.interfaces';

@Component({
  selector: 'std-home-sidebar',
  templateUrl: './std-home-sidebar.component.html',
  styleUrl: './std-home-sidebar.component.scss',
})
export class StdHomeSidebarComponent implements OnInit {
  @Input() person: IPerson = { personName: '', givenName: '', fullName: '' }
  @Input() profiles: IProfile = { roles: '', key: 0, name: '' }
  @Input() loading: Boolean = false
  
  ngOnInit() {

  }
}

