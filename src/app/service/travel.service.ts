import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../shared/country';
import { Traveller } from '../shared/traveller';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class TravelService {
  
  

  private baseUrl = 'http://localhost:8080/';



  constructor(private http : HttpClient, private _userServcie:UserService,private router: Router) { }

  public getUserTravels(): Observable<any> {
    return this.http.get<Traveller>(`http://localhost:8080/username/${this._userServcie.username}/travels`);
  }

  public addUserJourney(traveller : Traveller) {
console.log(traveller)
    return this.http.post(`http://localhost:8080/username/${this._userServcie.username}/addUserJourney`,traveller);
  }

  public updateTravel(traveller:Traveller,id:Number)
  {
      return this.http.put<Traveller>(`http://localhost:8080/username/${this._userServcie.username}/updateUserJourney/${id}`,traveller);
  }
  public getCountry(countryname:String)
  { console.log(countryname)
    return this.http.get<Country[]>(`http://localhost:8080/username/${this._userServcie.username}/country/${countryname}`);
  }
}
