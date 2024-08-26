import { Component, ElementRef, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IHomeSessionResponse } from '../../services/home-shell.interfaces';
import { Router } from '@angular/router';
import { HomeShellService } from '../../services/home-shell.service';

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

  widthRender = 1023;

  constructor(public router: Router, private homeShellService: HomeShellService, private renderer: Renderer2) {}

  ngOnInit() {
    this.homeShellService.getToggleSidebar().subscribe(() => {
      this.toggleSidebar(true);
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

  navigateTo(destiny: number): void {
    const path = { 1: '/consolidated-position', 2: '/accounts', 3: '/transfers' }[destiny];
    this.router.navigateByUrl(path || '/');
  }
}
