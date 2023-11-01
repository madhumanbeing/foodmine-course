import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CalenderService } from '../services/calender/calender.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-calender-form',
  templateUrl: './calender-form.component.html',
  styleUrls: ['./calender-form.component.css'],
})
export class CalenderFormComponent {
  food!:Food;
  constructor(private activatedRoute:ActivatedRoute, private calenderService: CalenderService, private router: Router){

  }


  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  addToCalender(){
    this.calenderService.addToCalender(this.food);
    
  }

  ngOnInit(): void {

  }
  
}