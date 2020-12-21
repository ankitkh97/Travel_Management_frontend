import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traveller } from '../shared/traveller';

@Injectable({
  providedIn: 'root'
})
export class TravellerService {
  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/traveller';
  }

  public findAll(): Observable<Traveller[]> {
    return this.http.get<Traveller[]>(this.usersUrl);
  }

  public save(traveller: Traveller) {
    return this.http.post<Traveller>(this.usersUrl, traveller);
  }
}