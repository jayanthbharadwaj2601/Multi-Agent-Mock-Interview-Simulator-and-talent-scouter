import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewscreenComponent } from './interviewscreen.component';

describe('InterviewscreenComponent', () => {
  let component: InterviewscreenComponent;
  let fixture: ComponentFixture<InterviewscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterviewscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
