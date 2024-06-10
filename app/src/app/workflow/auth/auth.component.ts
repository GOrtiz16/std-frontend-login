import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppBusEventsService } from 'src/app/shared/services/bus-events.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  loading = true;
   constructor(
    private cdref: ChangeDetectorRef,
    public appBusEventsService: AppBusEventsService
   ){}

   ngOnInit() {
    this.appBusEventsService.eventBus$.subscribe((state)=>{
      this.loading = state?.loader.show || false
      this.cdref.detectChanges()
    })
  }
}
