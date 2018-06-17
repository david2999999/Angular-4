import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseZippyComponent } from './exercise-zippy.component';

describe('ExerciseZippyComponent', () => {
  let component: ExerciseZippyComponent;
  let fixture: ComponentFixture<ExerciseZippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseZippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseZippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
