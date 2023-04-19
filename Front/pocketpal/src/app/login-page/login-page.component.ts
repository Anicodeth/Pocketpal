import { Component, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppserviceService } from '../appservice.service';
import { Router } from "@angular/router";
import {OnChanges} from "@angular/core"

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  public loginForm: FormGroup;
  public signupForm: FormGroup;


  constructor(private service: AppserviceService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  isClassActive : boolean = false;

  cheaker(){
    this.isClassActive = ! this.isClassActive;
  }
  //function to handle the login functionality
  login() {
    this.service
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response: any) => {

        this.service.userData = response

        sessionStorage.setItem('auth_token', response.token);

        this.router.navigateByUrl("/dashboard")

      }, (err) => {
        console.log(err.message);
      }
      
      );
  }
  //function to handle the signup functionality
  signup() {
    console.log(13442)
    this.service
      .signUp(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password)
      
      .subscribe((response) => {
        
        console.log(response);
        this.cheaker()
        
      },(err)=>{
        alert(err.message)
      }
      );
  }
}