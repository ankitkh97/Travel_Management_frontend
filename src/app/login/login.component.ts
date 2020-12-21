import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

import { UserService } from '../service/user.service';
import { User } from '../shared/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  user: User;
  hasError:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService , private authenticationService : AuthenticationService) { 
        this.user = new User();
      }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.login(this.user).subscribe(_result => {
      if(_result==true)
      {
        this.authenticationService.isAuthenticated = true;
        this.router.navigate(["home"]);
      }
      else{
        this.hasError=true;
      }
    });
  }

  
}