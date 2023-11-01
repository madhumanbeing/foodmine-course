import { Component, OnInit } from '@angular/core';
import { calenderFood } from '../shared/models/calenderFood';
import { CalenderFormComponent } from '../calender-form/calender-form.component';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  calenderFood!: calenderFood;
  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit():void{
    this.calenderFood = new calenderFood();
  }
  
}