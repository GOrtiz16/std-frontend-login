import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { loadAsset, loadScript } from 'src/app/shared/helpers/asset-loader.helper';
import { environment as env } from 'src/environments/environment';
import { HomeShellService } from '../../commons/services/home-shell.service';
import { DOCUMENT } from '@angular/common';
import { pseudoMathRamdon } from 'src/app/shared/helpers';

@Component({
  selector: 'app-consolidated-position',
  templateUrl: './consolidated-position.component.html',
  styleUrl: './consolidated-position.component.scss'
})
export class ConsolidatedPositionComponent implements OnInit {
  loading = false;

  constructor(
    private homeShellService: HomeShellService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.homeShellService.getHomeSessionEmitter().subscribe(() => this.loadConsolidatedPosition());
    this.setOverflowClass();
  }

  private setOverflowClass(): void {
    this.renderer.addClass(this.document.body, 'overflow-hidden');
  }

  loadConsolidatedPosition(): void {
    const token = pseudoMathRamdon().toString(36).substring(2, 9);
    const base = env.production ? env.apiStdHome.ip : 'http://127.0.0.1:5678/';
    const url = `${base}${env.apiStdHome.consolidated_position}`;
    // loadAsset(`${url}/styles.css`);
    loadScript(`${url}/main.js?v=${token}`, 'mf-consolidated-position');
  }

  postMessage(messageFromChild: Event) {
    console.log(messageFromChild);
  }
}
