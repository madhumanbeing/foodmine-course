import { Component, OnInit } from '@angular/core';
import { CalenderComponent } from '../calender/calender.component';
import { calenderFood } from '../shared/models/calenderFood';
import { CalenderService } from '../services/calender/calender.service';
import { calenderItem } from '../shared/models/calenderItem';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit{
  calender!:calenderFood;
  constructor(private calenderService:CalenderService) {}


  ngOnInit(): void {
    
  }

  removeFromCalender(calenderItem:calenderItem){
    this.calenderService.removeFromCalender(calenderItem.food.title);
    this.setCalender();
  }
  setCalender(){
    this.calender = this.calenderService.getCalender();
  }
}
