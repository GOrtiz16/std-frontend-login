import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdHeaderComponent } from './std-header.component';

describe('StdHeaderComponent', () => {
  let component: StdHeaderComponent;
  let fixture: ComponentFixture<StdHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StdHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StdHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
