import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordContainerComponent } from './password-container.component';

describe('PasswordContainerComponent', () => {
  let component: PasswordContainerComponent;
  let fixture: ComponentFixture<PasswordContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
