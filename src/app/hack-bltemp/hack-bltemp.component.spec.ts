import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackBLTempComponent } from './hack-bltemp.component';

describe('HackBLTempComponent', () => {
  let component: HackBLTempComponent;
  let fixture: ComponentFixture<HackBLTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackBLTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackBLTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
