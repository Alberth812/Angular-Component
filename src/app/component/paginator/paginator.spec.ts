import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorsComponent } from './paginator';

describe('Paginator', () => {
  let component: PaginatorsComponent;
  let fixture: ComponentFixture<PaginatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
