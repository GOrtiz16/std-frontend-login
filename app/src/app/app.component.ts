import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Output } from '@angular/core';
import { Router } from '@angular/router';
import { appName } from './app.module';
import { LoadingService } from './components/std-auth-loading/commons/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Output()
  postMessageEvent = new EventEmitter();
  title = 'angular-element-micro';
  loading = true;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private router: Router,
    @Inject(appName)public appName:string,
    private cdref: ChangeDetectorRef,
    public loadingService: LoadingService
    ){}

  environment:string|undefined="";

  ngOnInit(){
  
    this.initLoader();
    const element = this.host.nativeElement;
    //let configurationDetails:appConfigModel|undefined=this.configService.retreiveConfigurationDetails();
    this.environment='dev'//configurationDetails?.env;
    console.log( this.readAttribute(element, "fullscreen", true))
    
    let message = {
      value: "This is a message from position consolidated MF 1",
      id: 1
    };
    this.postMessageEvent.emit(message);
    console.log("location.pathname.split('/')[2]",location.pathname)
    // this.router.navigate(['/details-accounts-data'])
    this.router.navigate([location.pathname])
   
  }

  initLoader(){
    this.loadingService.eventBus$.subscribe((state)=>{
      this.loading = state?.loader.show || false
      this.cdref.detectChanges()
    })
  }
  readAttribute(elem: HTMLElement, attrName: string, isRequired = true) {
    const attribute = elem.getAttribute(attrName);
    const myVariable = sessionStorage.getItem('tokendesesion');
    console.log("Lectura de MF",myVariable);
    sessionStorage.setItem('tokendesesion',  attribute +" >*************************************************");

    if (isRequired && attribute === null)
      throw new Error(`Attribute ${attrName} is required`);
    return attribute;
  }
}

