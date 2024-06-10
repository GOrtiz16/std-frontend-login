import { Component, OnInit} from '@angular/core';
import { delay, map, of, switchMap, tap } from 'rxjs';
import { HomeShellService } from './commons/services/home-shell.service';
import { IHomeShellResponseOK, IHomeShellResponseError, IPerson, IProfile, ICurrencyPriceReference, ICompany } from './commons/services/home-shell.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  loading = true;
  personData: IPerson = { personName: '', givenName: '', fullName: '' };
  profilesData: IProfile = { roles: '', key: 0, name: '' };
  currencyPriceReferenceData: ICurrencyPriceReference = { currency: '', salesPrice: 0, buyPrice: 0 };
  companiesData: ICompany = { company: '', fullName: '', isHolding: false };
  
  constructor(
    private homeShellService: HomeShellService
  ){}
  ngOnInit() {
    this.doMainOrchestation().subscribe(()=>{})
  }
  
  doMainOrchestation() {
    return of(undefined).pipe(
      tap(() => {
          this.showLoader()
      }),
      switchMap(() => {
        let request = {
          "userCredentialId": "VNANDI"
        }
        return this.homeShellService.getShellinfo(request).pipe(
          map((response: IHomeShellResponseOK) => {
            this.setData(response)
          },
          (error: IHomeShellResponseError) => {}
        ),
        )
      }),
      delay(1500),
      tap(() => {
        this.hideLoader()
      }),
    )
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }

  setData(response: IHomeShellResponseOK){
    this.personData = response.person
    this.profilesData = response.profiles
    this.currencyPriceReferenceData = response.currencyPriceReference
    this.companiesData = response.companies
  }
}

