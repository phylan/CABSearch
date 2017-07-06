import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreambleComponent } from './preamble.component';

describe('PreambleComponent', () => {
  let component: PreambleComponent;
  let fixture: ComponentFixture<PreambleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreambleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreambleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
