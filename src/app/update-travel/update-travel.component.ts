import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable,Subject } from "rxjs";  
import { TravelService } from '../travel.service';
import { Traveller } from '../traveller';

@Component({
  selector: 'app-update-travel',
  templateUrl: './update-travel.component.html',
  styleUrls: ['./update-travel.component.css']
})
export class UpdateTravelComponent implements OnInit {

  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject(); 
  
  constructor( private travelService:TravelService) { }
  isUpDated: boolean = false;
  
  journeys : Traveller[] = [];
  journey : Traveller = new Traveller();
  deleteMessage=false;  
  journeylist: any;  
  isupdated = false; 
  travellerName : String = 'Ankit';



  ngOnInit(): void {
    this.isUpDated = false;
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };  
    this.travelService.getTravellerList().subscribe(
      data => {
        this.journeys = data;
      this.dtTrigger.next();
      }
    )
  }

  updateJourney(id: number){  
    
    this.travelService.getTravellerById(id) 
      .subscribe(  
      data => {  
          this.journeylist=data,
          console.log(this.journeylist)
                 
       },  
       error => console.log(error));  
  
 }  
 
 journeyupdateform=new FormGroup({  
  
    id:new FormControl(),
   destination:new FormControl(),  
   endDate:new FormControl()  
 });  
 
 updateJou(){  
   this.journey=new Traveller();   
  this.journey.destination=this.JourneyDestination!.value;  
  this.journey.endDate=this.JourneyEnddate!.value;  
 
    
 
  this.travelService.updateTravel(this.journeylist.id,this.journey).subscribe(  
   data => {       
     this.isupdated=true;  
     this.travelService.getTravellerList().subscribe(data =>{  
       this.journeys =data  
       })  
   },  
   error => console.log(error));    
  } 


  get JourneyDestination(){  
    return this.journeyupdateform.get('destination');  
  }  
  
 
  get JourneyEnddate(){  
    return this.journeyupdateform.get('endDate');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  
}
