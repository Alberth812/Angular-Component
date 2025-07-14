import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarDeterminateExample } from './progress-bar';

describe('ProgressBar', () => {
  let component: ProgressBarDeterminateExample;
  let fixture: ComponentFixture<ProgressBarDeterminateExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarDeterminateExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarDeterminateExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
