import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterCreds, User } from '../../../types/user';
import { AccountService } from '../../../core/services/account-service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  private accountService = inject(AccountService);
  cancelRegister = output<boolean>();
  protected creds = {} as RegisterCreds;

  register() {
    console.log('Registering user with credentials:', this.creds);
    this.accountService.register(this.creds).subscribe({
      next: (user) => {
        console.log('User registered successfully:', user);
        this.cancelRegister.emit(false);
      },
      error: (error) => {
        console.error('Error registering user:', error);
      }
    });
    // Here you would typically call a service to handle the registration logic
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
