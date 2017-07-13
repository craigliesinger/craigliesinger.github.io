import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingPageMathDashComponent } from './app-landing-page-math-dash.component';

describe('AppLandingPageMathDashComponent', () => {
  let component: AppLandingPageMathDashComponent;
  let fixture: ComponentFixture<AppLandingPageMathDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingPageMathDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingPageMathDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
