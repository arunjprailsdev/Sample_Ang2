import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdrComponent } from './rdr.component';

describe('RdrComponent', () => {
  let component: RdrComponent;
  let fixture: ComponentFixture<RdrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
