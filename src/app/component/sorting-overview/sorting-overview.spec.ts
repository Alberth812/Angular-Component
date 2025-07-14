import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortingOverviewComponent } from './sorting-overview';
import { C } from '@angular/cdk/keycodes';

describe('SortingOverview', () => {
  let component: SortingOverviewComponent;
  let fixture: ComponentFixture<SortingOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortingOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
