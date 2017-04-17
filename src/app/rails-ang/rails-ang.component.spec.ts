import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RailsAngComponent } from './rails-ang.component';

describe('RailsAngComponent', () => {
  let component: RailsAngComponent;
  let fixture: ComponentFixture<RailsAngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RailsAngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RailsAngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
