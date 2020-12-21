import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../service/travel.service';


import { Country } from '../shared/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  country:any;
  error:Error=new Error();
  constructor(private route: ActivatedRoute, 
    private router: Router,private travelService: TravelService,
    ) {
   
   }

  ngOnInit(): void {
    const cname=this.route.snapshot.params['cname'];
    this.travelService.getCountry(cname).subscribe(
      (response)=>{
        
        this.country=response;
        console.log(this.country)
      },
      (error)=>{
        console.log(error);
      }
   );
    
  }


}