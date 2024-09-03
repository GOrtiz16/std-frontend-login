import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IHomeSessionResponse } from '../../services/home-shell.interfaces';
import { Router } from '@angular/router';
import { HomeShellService } from '../../services/home-shell.service';
import { NavigateSidebar } from '../../../interface/sidebar-navigate.interface';

@Component({
  selector: 'std-home-sidebar',
  templateUrl: './std-home-sidebar.component.html',
  styleUrl: './std-home-sidebar.component.scss'
})
export class StdHomeSidebarComponent implements OnInit {
  isActive!: boolean;

  @Input() homeSession!: IHomeSessionResponse;
  @Input() loading!: boolean;

  @ViewChild('collapseMenu') collapseMenu!: ElementRef;
  navigate_render: NavigateSidebar[] = [
    {
      name: 'consolidated-position',
      label: 'Posición Consolidada',
      icon: 'stock-exchange',
      actived: this.router.url.includes('consolidated-position')
    },
    {
      name: 'accounts',
      label: 'Cuentas',
      icon: 'compare-wallets',
      actived: this.router.url.includes('accounts')
    },
    {
      name: 'transfers',
      label: 'Transferencias',
      icon: 'general-transfers',
      actived: this.router.url.includes('transfers')
    },
    {
      name: 'payments',
      label: 'Pagos',
      icon: 'new-account',
      actived: this.router.url.includes('payments'),
      children: [
        {
          name: 'massive-payments',
          label: 'Pagos masivos',
          actived: false
        }
      ]
    },
    {
      name: 'operations',
      label: 'Consulta de operaciones',
      icon: 'funds-transfer',
      actived: this.router.url.includes('operations')
    }
  ];
  widthRender = 1023;

  constructor(public router: Router, private homeShellService: HomeShellService, private renderer: Renderer2) {}

  ngOnInit() {
    this.homeShellService.getToggleSidebar().subscribe(() => {
      this.toggleSidebar(true);
    });
    const router = this.router.url;
  }

  handleLogout(): void {
    sessionStorage.clear();
    this.router.navigateByUrl('/login').then(() => {
      window.location.reload();
    });
  }

  toggleClass(selector: string, className: string, add: boolean): void {
    const elements = this.collapseMenu.nativeElement.querySelectorAll(`.${selector}`);
    elements.forEach((element: HTMLElement) => {
      add ? this.renderer.addClass(element, className) : this.renderer.removeClass(element, className);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= this.widthRender) {
      if (!this.isActive) {
        const menuOptions: NodeList = this.collapseMenu.nativeElement.querySelectorAll('std-collapse-list');
        menuOptions.forEach((node: any) => node.toogleLabel(true));
      }
      if (this.isActive) {
        const menuOptions: NodeList = this.collapseMenu.nativeElement.querySelectorAll('std-collapse-list');
        menuOptions.forEach((node: any) => node.toogleLabel(false));
      }
    } else if (this.isActive) {
      const menuOptions: NodeList = this.collapseMenu.nativeElement.querySelectorAll('std-collapse-list');
      menuOptions.forEach((node: any) => node.toogleLabel(true));
    }
  }

  toggleSidebar(status?: boolean) {
    this.isActive = !this.isActive;
    const menuOptions: NodeList = this.collapseMenu.nativeElement.querySelectorAll('std-collapse-list');
    menuOptions.forEach((node: any) => node.toogleLabel(status));
  }

  navigateTo(destiny: string): void {
    this.router.navigateByUrl(destiny);
  }
}
