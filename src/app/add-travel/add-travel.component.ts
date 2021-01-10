import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../service/travel.service';
import { Traveller } from '../shared/traveller';



@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  travel: Traveller;
  travelForm:any;
  submission:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private travelService: TravelService) {
        this.travel=new Traveller();
       }

  ngOnInit(): void {
  }
  onSubmit(travelForm:any) {
    console.log(travelForm)
    this.travelService.addUserJourney(this.travel).subscribe(_result => {
      
      this.submission=true;
      this.travelForm=travelForm;
    },error => console.log(error));
    
  }
  
  // checkDate(){
    
  //     let enddate = document.getElementById("enddate");
  //     let startdate = document.getElementById("startdate")!;
        
  //     if (new Date enddate.getTime() <= ToDate.getTime()) {
  //         alert("The Date must be Bigger or Equal to today date");
  //         return false;
  //     }
  //     return true;
  // }
  addJourneyform()
  {
    this.travelForm.reset();
    this.submission=false;
    
    
  }

}