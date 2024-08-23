import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAccountsDetailComponent } from './mobile-accounts-detail.component';

describe('MobileAccountsDetailComponent', () => {
  let component: MobileAccountsDetailComponent;
  let fixture: ComponentFixture<MobileAccountsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileAccountsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileAccountsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
