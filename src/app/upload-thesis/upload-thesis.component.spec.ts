import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadThesisComponent } from './upload-thesis.component';

describe('UploadThesisComponent', () => {
  let component: UploadThesisComponent;
  let fixture: ComponentFixture<UploadThesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadThesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadThesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
