import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackBLEComponent } from './hack-ble.component';

describe('HackBLEComponent', () => {
  let component: HackBLEComponent;
  let fixture: ComponentFixture<HackBLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HackBLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackBLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
