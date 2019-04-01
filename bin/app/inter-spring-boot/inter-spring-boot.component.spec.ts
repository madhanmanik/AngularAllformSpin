import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterSpringBootComponent } from './inter-spring-boot.component';

describe('InterSpringBootComponent', () => {
  let component: InterSpringBootComponent;
  let fixture: ComponentFixture<InterSpringBootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterSpringBootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterSpringBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
