import { AuthanticationService } from './../../core/services/authantication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuth } from 'src/app/core/interfaces/auth.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authanticationService: AuthanticationService
  ) {
    this.loginForm = this.fb.group({
      userName: ['', []],
      password: ['', []],
    });
  }

  ngOnInit(): void {}
  onSubmit(): void {
    const credentials: IAuth = {
      userName: this.loginForm.controls['userName'].value,
      password: this.loginForm.controls['password'].value,
    };
    const isValid = this.authanticationService.checkAuth(credentials);
    if (isValid) {
      this.router.navigate(['/patients']);
    } else {
      alert('invalid credentials');
    }
  }
}
