import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;
  username:String='';
  

  constructor(private http: HttpClient,private router: Router , private authenticationService : AuthenticationService) {
    this.usersUrl = 'http://localhost:8080/';
  }


  public login(user: User) {
        //localStorage.setItem('username',user.name.valueOf());
            this.username=user.username;
    return this.http.post<any>(this.usersUrl+'login', user);
  }
  public signup(user: User) {
    //localStorage.setItem('username',user.name.valueOf());
    this.username=user.username;
    return this.http.post<any>(this.usersUrl+'signup', user);
  }

  public logout()
  {
   // localStorage.removeItem('username');
    this.username='';
    this.authenticationService.isAuthenticated = false;
    this.router.navigate(['/']);
  }
  

}
