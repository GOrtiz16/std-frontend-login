import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMobileMovementsComponent } from './detail-mobile-movements.component';

describe('DetailMobileMovementsComponent', () => {
  let component: DetailMobileMovementsComponent;
  let fixture: ComponentFixture<DetailMobileMovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMobileMovementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailMobileMovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
