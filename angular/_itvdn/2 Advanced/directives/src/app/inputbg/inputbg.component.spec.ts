import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbgComponent } from './inputbg.component';

describe('InputbgComponent', () => {
  let component: InputbgComponent;
  let fixture: ComponentFixture<InputbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
