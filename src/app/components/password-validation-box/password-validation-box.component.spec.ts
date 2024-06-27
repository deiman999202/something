import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidationBoxComponent } from './password-validation-box.component';

describe('PasswordValidationBoxComponent', () => {
  let component: PasswordValidationBoxComponent;
  let fixture: ComponentFixture<PasswordValidationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordValidationBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordValidationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
