import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../service/travel.service';

import { Traveller } from '../shared/traveller';


@Component({
  selector: 'app-view-travel',
  templateUrl: './view-travel.component.html',
  styleUrls: ['./view-travel.component.css']
})
export class ViewTravelComponent implements OnInit {

  travel : Traveller[]=[];
  error:Error=new Error();
  
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private travelService: TravelService) { 
        
      }

  ngOnInit(): void {
    this.travelService.getUserTravels().subscribe(
      (response:any)=>{
          this.travel=response;
      },
      (error:Error)=>{
        this.error=error;
        console.log(this.error);
      },
      ()=>{}
    )
  }

}