import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signInData';
import { AuthenticationService } from '../service/authentication/authentication.service';


@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // isFormValid = false;
  // areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {

    console.log(signInForm.value)

    const signInData = new SignInData(signInForm.value.username,signInForm.value.password);
    this.authenticationService.authenticate(signInData);
    

  }

  
}