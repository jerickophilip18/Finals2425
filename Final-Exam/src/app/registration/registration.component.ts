import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user = {
    name:'',
    email: '',
    password: ''
  };

  isSubmitted = true;

  get passwordMismatch() {
    return this.user.password;
  }

  onSubmit() {
    if (!this.passwordMismatch) {
      this.isSubmitted = false;
      console.log('User Data:', this.user);
    }
  }
}
