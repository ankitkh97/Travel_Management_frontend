  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

import { TravelService } from '../service/travel.service';
import { UserService } from '../service/user.service';

import { CountryName } from '../shared/countryname';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  country: CountryName;
  links = [
    
    { path: '/addTravel', title: 'Plan Your Journey', color: 'white' },
    {path:'/viewTravel',title:'View Journeys', color: 'white'},    
];
  constructor(public _userService:UserService,private _travelService:TravelService,private route: ActivatedRoute, 
    private router: Router ,public authenticationService : AuthenticationService) {
      this.country=new CountryName();
     }

  ngOnInit(): void {
    
  }
  onSubmit()
  {

  this.router.navigate(['/country',this.country.name]);
  
  }


}