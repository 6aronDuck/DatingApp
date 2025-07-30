import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds } from '../../../types/user';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  protected creds = {} as RegisterCreds;

  register() {
    console.log('Registering user with credentials:', this.creds);
    // Here you would typically call a service to handle the registration logic
  }

  cancel() {
    console.log('Registration cancelled');
    // Logic to handle cancellation, e.g., closing the registration form
  }
}
