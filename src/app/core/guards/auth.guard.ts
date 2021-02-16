import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthanticationService } from '../services/authantication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthanticationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthanticated) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
