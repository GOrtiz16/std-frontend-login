import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAuthLoadingComponent } from './std-auth-loading.component';

describe('StdAuthLoadingComponent', () => {
  let component: StdAuthLoadingComponent;
  let fixture: ComponentFixture<StdAuthLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdAuthLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdAuthLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
