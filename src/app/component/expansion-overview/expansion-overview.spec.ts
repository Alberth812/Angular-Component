import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionOverviewExample} from './expansion-overview';

describe('ExpansionOverview', () => {
  let component: ExpansionOverviewExample;
  let fixture: ComponentFixture<ExpansionOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionOverviewExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
