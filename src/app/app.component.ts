import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordContainerComponent } from './components/password-container/password-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pass-val';
}
