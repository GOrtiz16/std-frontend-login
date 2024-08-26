import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAccountsDataComponent } from './details-accounts-data.component';

describe('DetailsAccountsDataComponent', () => {
  let component: DetailsAccountsDataComponent;
  let fixture: ComponentFixture<DetailsAccountsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsAccountsDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsAccountsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
