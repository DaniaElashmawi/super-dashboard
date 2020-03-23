import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperDashLayoutComponent } from './super-dash-layout.component';

describe('SuperDashLayoutComponent', () => {
  let component: SuperDashLayoutComponent;
  let fixture: ComponentFixture<SuperDashLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperDashLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperDashLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
