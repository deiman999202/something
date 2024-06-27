import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PasswordValidationBoxComponent } from '../password-validation-box/password-validation-box.component';

@Component({
  selector: 'app-password-container',
  standalone: true,
  imports: [PasswordValidationBoxComponent, FormsModule],
  templateUrl: './password-container.component.html',
  styleUrl: './password-container.component.scss'
})
export class PasswordContainerComponent {
    color1:string = "gray";
    color2:string = "gray";
    color3:string = "gray";
    receivedText = "";
  
    hasNumbers = false;
    hasLetters = false;
    hasSpecialCharacters = false;

    verifyPassword(inputEvent:Event) : void {
    this.receivedText = (inputEvent.target as HTMLTextAreaElement).value;

    this.hasNumbers = /\d/.test(this.receivedText)
    this.hasLetters = /[a-zA-Z]/g.test(this.receivedText)
    this.hasSpecialCharacters = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.receivedText);

    if (this.receivedText.length > 0 && this.receivedText.length < 8)
      {
        this.color1 = "red";
        this.color2 = "red";
        this.color3 = "red";
        return;
      }
    if (this.hasLetters && this.hasNumbers && this.hasSpecialCharacters)
      {
        this.color1 = "green";
        this.color2 = "green";
        this.color3 = "green";
        return;
      }  

    if (this.hasNumbers && this.hasLetters
    ||
    this.hasSpecialCharacters && this.hasLetters
    ||
    this.hasSpecialCharacters && this.hasNumbers
    )
      {
        this.color1 = "yellow";
        this.color2 = "yellow";
        this.color3 = "gray";
        return;
      }

    if (this.hasNumbers || this.hasLetters || this.hasSpecialCharacters)
      {
        this.color1 = "red";
        this.color2 = "gray";
        this.color3 = "gray";
        return;
      }

      this.color1 = "gray";
      this.color2 = "gray";
      this.color3 = "gray";
 }
}
