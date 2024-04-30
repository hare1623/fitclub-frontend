import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AppServiceService } from '../service/app-service.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private router : Router, private appService :AppServiceService,private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    // Check if the form is valid before submitting
    if (this.loginForm.valid) {
      const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    const loginData = this.loginForm.value;
      this.appService.postRequest('http://localhost:8000/api/login', loginData)
        .subscribe(
          response => {
            localStorage.setItem("authToken",response.token)
            localStorage.setItem("user",JSON.stringify(response.user));
            this.authService.setUserData(response.user)
      this.router.navigate(['/home']);
          },
          error => {
            console.error('Login error:', error);
            this.errorMessage = 'Invalid email or password';
          }
        );

      console.log('Email:', email);
      console.log('Password:', password);

      this.loginForm.reset();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
