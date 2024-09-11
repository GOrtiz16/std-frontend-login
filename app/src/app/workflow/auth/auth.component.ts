import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { AppBusEventsService } from 'src/app/shared/services/bus-events.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  loading = true;
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
    private cdref: ChangeDetectorRef,
    public appBusEventsService: AppBusEventsService
  ) {}

  ngOnInit() {
    this.appBusEventsService.eventBus$.subscribe((state) => {
      this.loading = state?.loader.show || false;
      this.cdref.detectChanges();
    });

    this.removeOverflowClass();
  }

  private removeOverflowClass(): void {
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
  }
}
