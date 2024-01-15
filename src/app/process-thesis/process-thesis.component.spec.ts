import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessThesisComponent } from './process-thesis.component';

describe('ProcessThesisComponent', () => {
  let component: ProcessThesisComponent;
  let fixture: ComponentFixture<ProcessThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
