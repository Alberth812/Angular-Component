import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioOverviewExample } from './radio-overview-example';

describe('RadioOverviewExample', () => {
  let component: RadioOverviewExample;
  let fixture: ComponentFixture<RadioOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
