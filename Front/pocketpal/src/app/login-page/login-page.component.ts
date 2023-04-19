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
  isClassActive: boolean = false;
  constructor(private service: AppserviceService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  cheaker() {
    this.isClassActive = !this.isClassActive;
  }

  // login(email: string, password: string) {
  //   this.service.signIn(email, password).subscribe((data) => {
  //     console.log(data);
  //   });
  // }
  // // signup(name: string, email: string, password: string) {
  // //   this.service.signUp(name, email, password).subscribe((data) => {
  // //     console.log(data);
  // //   });
  // }

  //function to handle the login functionality
  login() {
    this.service
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
  //function to handle the signup functionality
  signup() {
    this.service
      .signUp(
        this.signupForm.value.name,
        this.signupForm.value.email,
        this.signupForm.value.password
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
