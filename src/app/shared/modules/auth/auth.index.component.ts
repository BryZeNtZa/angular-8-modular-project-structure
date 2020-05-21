import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppAuthService } from '@service/auth/app.auth.service';

@Component({
  template: '<app-auth-login></app-auth-login>'
})
export class AuthIndexComponent {
  constructor(
    private router: Router
  ) {
    // redirect to home if already logged in
    if ( AppAuthService.getUser() ) {
      this.router.navigate(['/']);
    }
  }
}
