import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/account-service';
import { inject,signal } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  private accountService = inject(AccountService);
  protected creds: any = {};
  protected loggedIn = signal(false);

  login()
  {
    this.accountService.login(this.creds).subscribe({
      next: result => {
        this.loggedIn.set(true);
        this.creds = {};
        console.log(result)
      },
      error: error => alert(error.message)
    })
  }

  logout()
  {
    this.loggedIn.set(false);
  }
}
