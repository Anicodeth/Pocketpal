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
  public mobileToggle:boolean = true;


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


  isButtonDisabled : boolean = false;
  isClassActive : boolean = false;

  cheaker(){
    this.isClassActive = !this.isClassActive;
  }

  toggle(){
    this.mobileToggle = !this.mobileToggle;
  }

  //function to handle the login functionality
  login() {

    this.isButtonDisabled = true;

    this.service
      .signIn(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response: any) => {
        this.isButtonDisabled = false;
        this.service.userData = response;

        sessionStorage.setItem('jwt', response.token);

        this.router.navigateByUrl("/dashboard")

      }, (err) => {
        alert(err.message);
        this.isButtonDisabled = false
      }
      
      );
  }
  //function to handle the signup functionality
  signup() {
    this.isButtonDisabled = true;
    this.service
      .signUp(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password)
      
      .subscribe((response) => {
        this.isButtonDisabled = true;
        this.cheaker()
        
      },(err)=>{
        this.isButtonDisabled = true;
        alert(err.message)
      }
      );
  }
}