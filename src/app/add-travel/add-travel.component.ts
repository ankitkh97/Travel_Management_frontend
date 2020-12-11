import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TravelService } from '../travel.service';
import { Traveller } from '../traveller';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  constructor( private travelService:TravelService) { }

  traveller : Traveller = new Traveller();
  submitted = false;
  data : any;

  ngOnInit(): void {

    this.submitted = false;
  }


  travelSaveForm = new FormGroup({
    name : new FormControl(''),
    source : new FormControl(''),
    startDate : new FormControl()
  })

  saveTravel() {
  
    this.traveller = new Traveller();
    this.traveller.name = this.TravellerName.value;
    this.traveller.source = this.TravellerSource.value;
    this.traveller.startDate = this.TravellerStartDate.value;

    this.submitted = true;  
    this.save();  
  }

  save() {  
    console.log(this.traveller)
    this.travelService.addTravel(this.traveller)  
      .subscribe((data: any) => console.log(data), (error: any) => console.log(error));  
    this.traveller = new Traveller();  
  }  

  get TravellerName() : any{
    return this.travelSaveForm.get('name');  
  }

  get TravellerSource() : any{
    return this.travelSaveForm.get('source');  
  }

  get TravellerStartDate() : any{
    return this.travelSaveForm.get('startDate');  
  }

  addTravelForm(){
    this.submitted = false;
    this.travelSaveForm.reset();
  }
}
