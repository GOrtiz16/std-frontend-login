import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSkeletonFooterComponent } from './std-skeleton-footer.component';

describe('StdSkeletonFooterComponent', () => {
  let component: StdSkeletonFooterComponent;
  let fixture: ComponentFixture<StdSkeletonFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdSkeletonFooterComponent]
    })
    .compileComponents();
 
    fixture = TestBed.createComponent(StdSkeletonFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
