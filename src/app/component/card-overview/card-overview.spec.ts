import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOverviewComponent } from './card-overview';

describe('CardOverview', () => {
  let component: CardOverviewComponent;
  let fixture: ComponentFixture<CardOverviewComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
