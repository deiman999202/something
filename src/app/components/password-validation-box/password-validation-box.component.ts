import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-validation-box',
  standalone: true,
  imports: [],
  templateUrl: './password-validation-box.component.html',
  styleUrl: './password-validation-box.component.scss'
})
export class PasswordValidationBoxComponent {

    @Input() color!:string;
    @Input() content!:string;
}
