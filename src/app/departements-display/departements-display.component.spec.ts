import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsDisplayComponent } from './departements-display.component';

describe('DepartementsDisplayComponent', () => {
  let component: DepartementsDisplayComponent;
  let fixture: ComponentFixture<DepartementsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementsDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
