import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HacksComponent } from './hacks.component';

describe('HacksComponent', () => {
  let component: HacksComponent;
  let fixture: ComponentFixture<HacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
