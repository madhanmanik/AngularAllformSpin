import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntSpringCoComponent } from './int-spring-co.component';

describe('IntSpringCoComponent', () => {
  let component: IntSpringCoComponent;
  let fixture: ComponentFixture<IntSpringCoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntSpringCoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntSpringCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
