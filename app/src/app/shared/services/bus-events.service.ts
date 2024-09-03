import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface IEvent {
  loader: {
	show: boolean
  }
}

@Injectable({
	providedIn: 'root'
})
export class AppBusEventsService {
	private eventBus = new BehaviorSubject<IEvent | undefined>(undefined);
	eventBus$ = this.eventBus.asObservable();

	sendEvent(event: IEvent): void {
		this.eventBus.next({...this.eventBus.value, ...event});
	}

	getCurrentEvent(): IEvent {
		return this.eventBus.value as IEvent;
	}

	reset(): void {
		this.eventBus.next(undefined);
	}
}