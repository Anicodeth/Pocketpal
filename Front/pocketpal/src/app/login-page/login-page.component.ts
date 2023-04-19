import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginForm: FormGroup;
  public signupForm: FormGroup;
  constructor(private service: AppserviceService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
    });
  }

  //function to handle the login functionality
  login() {
    this.service
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response) => {
        this.service.userData = response
      });
  }
  //function to handle the signup functionality
  signup() {
    this.service
      .signIn(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
