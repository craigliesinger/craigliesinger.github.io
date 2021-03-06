import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLandingPageComponent } from './app-landing-page.component';

describe('AppLandingPageComponent', () => {
  let component: AppLandingPageComponent;
  let fixture: ComponentFixture<AppLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
