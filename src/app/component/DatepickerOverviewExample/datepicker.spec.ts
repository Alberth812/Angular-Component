import { ComponentFixture, TestBed } from '@angular/core/testing';

import {DatepickerOverviewExample } from './datepicker';

describe('Datepicker', () => {
  let component: DatepickerOverviewExample;
  let fixture: ComponentFixture<DatepickerOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerOverviewExample],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatepickerOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
