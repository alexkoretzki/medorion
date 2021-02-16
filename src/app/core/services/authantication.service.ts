import { Injectable } from '@angular/core';
import { IAuth } from '../interfaces/auth.interface';

Injectable({
  providedIn: 'root',
});
export class AuthanticationService {
  private _isAuthanticated: boolean = false;
  private validCredentials = {
    userName: 'medorion',
    password: 'admin123',
  };
  get isAuthanticated(): boolean {
    return this._isAuthanticated;
  }
  set isAuthanticated(value: boolean) {
    this._isAuthanticated = value;
  }

  checkAuth(credentials: IAuth): boolean {
    if (
      credentials.userName === this.validCredentials.userName &&
      credentials.password === this.validCredentials.password
    ) {
      this.isAuthanticated = true;
      return true;
    }

    return false;
  }
}
