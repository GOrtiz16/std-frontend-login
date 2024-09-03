import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSkeletonHeaderComponent } from './std-skeleton-header.component';

describe('StdSkeletonHeaderComponent', () => {
  let component: StdSkeletonHeaderComponent;
  let fixture: ComponentFixture<StdSkeletonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdSkeletonHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSkeletonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
