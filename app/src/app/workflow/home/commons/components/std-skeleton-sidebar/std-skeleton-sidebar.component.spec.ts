import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdSkeletonSidebarComponent } from './std-skeleton-sidebar.component';

describe('StdSkeletonSidebarComponent', () => {
  let component: StdSkeletonSidebarComponent;
  let fixture: ComponentFixture<StdSkeletonSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StdSkeletonSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdSkeletonSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
