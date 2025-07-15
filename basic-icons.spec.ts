import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIconsComponent } from './basic-icons';

describe('BasicIcons', () => {
  let component: BasicIconsComponent;
  let fixture: ComponentFixture<BasicIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicIconsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
