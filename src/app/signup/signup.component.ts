import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
import { NewUser } from '../shared/newuser';
import { User } from '../shared/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
 
  error: Error=new Error();
  hasError:boolean=false;

   
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService, private authenticationService : AuthenticationService ) { 
        this.user = new User();
        
      }

  ngOnInit(): void {
  }
  onSubmit(userForm:any) {
    
    this.userService.signup(this.user).subscribe(_result => {
      if(_result==true)      
    {
      this.authenticationService.isAuthenticated = true;
      this.gotoHome();
    }
    else
    {
      this.hasError=true;
    }
    
    },
    error => {console.log(error);
      this.error=error;
    });
  }

 gotoHome() {
    this.router.navigate(['/home']);
  }

  

}