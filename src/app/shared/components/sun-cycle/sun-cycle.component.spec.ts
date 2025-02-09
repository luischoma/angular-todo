import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunCycleComponent } from './sun-cycle.component';

describe('SunCycleComponent', () => {
  let component: SunCycleComponent;
  let fixture: ComponentFixture<SunCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunCycleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
