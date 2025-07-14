import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTogglesComponent } from './slide-toggles';

describe('SlideToggles', () => {
  let component: SlideTogglesComponent;
  let fixture: ComponentFixture<SlideTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideTogglesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
