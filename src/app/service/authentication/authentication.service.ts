import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signInData';
import { TravelService } from 'src/app/travel.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData("test" , "12345");
  isAuthenticated = false;

  constructor(private router : Router, private travelService: TravelService) { }
  // travellerLoginObject! : any;
  authenticate(signInData: SignInData) : boolean {

    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true;
      this.router.navigate(["home"]);
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;    
    }

  }

  private checkCredentials(signInData : SignInData) : boolean {
    
     return this.checkUsername(signInData.getUsername()) && this.checkPassword(signInData.getPassword());

  }

  private checkUsername(username : String) :boolean {

    //  this.travelService.getTravellerLoginName(username).subscribe(data => {
    //    console.log(data);
    //   this.travellerLoginObject = data;
    // });
    console.log(username === this.mockedUser.getUsername());

    return username === this.mockedUser.getUsername();

   

  }

  private checkPassword(password : String) :boolean {
    // console.log(password)
    return password === this.mockedUser.getPassword();
    // return password === this.travellerLoginObject.password;
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
