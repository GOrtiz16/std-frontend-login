import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSkeletonContentComponent } from './std-skeleton-content.component';

describe('StdSkeletonContentComponent', () => {
  let component: StdSkeletonContentComponent;
  let fixture: ComponentFixture<StdSkeletonContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdSkeletonContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSkeletonContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
