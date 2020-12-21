import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../service/travel.service';
import { Traveller } from '../shared/traveller';



@Component({
  selector: 'app-update',
  templateUrl: './update-travel.component.html',
  styleUrls: ['./update-travel.component.css']
})
export class UpdateTravelComponent implements OnInit {

  travel: Traveller;
  updateForm:any;
  submission:boolean=false;
  constructor(private route: ActivatedRoute, 
    private router: Router, 
      private travelService: TravelService) {
        this.travel=new Traveller();
       }

  ngOnInit(): void {
  }
  onSubmit(updateForm:any) {
    const id=+this.route.snapshot.params['id'];
    this.travelService.updateTravel(this.travel,id).subscribe(_result => {
      this.submission=true;
      this.updateForm=updateForm;
      this.updateForm.reset();
    },(error: any) => console.log(error));
    
  }

}