import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Traveller } from './traveller';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  
  

  private baseUrl = 'http://localhost:8080/';



  constructor(private http : HttpClient) { }

  getTravellerList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + 'traveller');
  }

  addTravel(traveller : object) : Observable <any> {

    return this.http.post(`${this.baseUrl}` + 'addTraveller',traveller);
  }

  getTravellerById(id : number) :Observable <Object> {

    return this.http.get(`${this.baseUrl}id/${id}`)
  }

//   getTravellerLoginName(name : String) :Observable <Object> {
// console.log(this.http.get(`${this.baseUrl}login/${name}`))
//     return this.http.get(`${this.baseUrl}login/${name}`)
//   }

  getTravellerByCountry(destination : String): Observable<any> {
    return this.http.get(`${this.baseUrl}destination/${destination}`)
  }
 

  updateTravel(id: number, value: any): Observable<Object> {  
    console.log(value);
    return this.http.put(`${this.baseUrl}update/${id}`, value);  
  }  
}
