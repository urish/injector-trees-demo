import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaisyComponent } from './daisy.component';

describe('DaisyComponent', () => {
  let component: DaisyComponent;
  let fixture: ComponentFixture<DaisyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaisyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
