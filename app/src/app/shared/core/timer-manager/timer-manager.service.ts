import { Inject, Injectable } from '@angular/core';
import { Subject, Observable, timer, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { TimerManagerConfigToken } from './timer-manager.token';
import { ITimerSession } from './timer-manager.module';

interface ITimer {timeLeft: number, timeFormatted: string}
@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timer$: Observable<number>;
  private timerSubscription: Subscription = new Subscription();
  private timerStarted: boolean = false;
  private timeLeft: number = 0;
  private time:number = 0;

  private timerSubject = new Subject< ITimer>();
  private timerEndSubject: Subject<void> = new Subject<void>();

  constructor(@Inject(TimerManagerConfigToken) config: ITimerSession) {
     
    if( config['timeSeconds'].toString.length >= 60) {
      throw('El timpo no puede ser mas de 60 Segundos');
    }

    if(config['timeSeconds']) {
      this.time = config['timeSeconds']
      this.timeLeft = config['timeSeconds']
    }
    this.timer$ = timer(0, 1000);
  }

  startTimer(): void {
    if (!this.timerStarted) {
      this.timerStarted = true;
      this.timerSubscription = this.timer$.pipe(
        takeWhile(() => this.timeLeft > 0)
      ).subscribe(() => {
        this.timeLeft--;
        this.timerSubject.next({timeLeft: this.timeLeft, timeFormatted:this.formatTime(this.timeLeft)});
        if (this.timeLeft === 0) {
          this.timerEndSubject.next();
          this.timerStarted = false; // Ensure the timer is marked as stopped
        }
      });
    }
  }

  stopTimer(): void {
    if (this.timerStarted) {
      this.timerStarted = false;
      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
      }
    }
  }

  resetTimer(): void {
    this.stopTimer();
    this.timeLeft = this.time
    this.timerSubject.next({timeLeft: this.timeLeft, timeFormatted:this.formatTime(this.timeLeft)});
  }
  
  setTime(timeSeconds: number): void {
    this.time = timeSeconds
    this.resetTimer()
    this.startTimer()
  }

  getTimeLeft(): Observable<ITimer> {
    return this.timerSubject.asObservable();
  }

  onTimerEnd(): Observable<void> {
    return this.timerEndSubject.asObservable();
  }

  formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  }
}
