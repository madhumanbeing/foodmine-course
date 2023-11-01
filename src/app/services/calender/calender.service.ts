import { Injectable } from '@angular/core';
import { calenderFood } from 'src/app/shared/models/calenderFood';
import { Food } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  private calender:calenderFood = new calenderFood();
  
  addToCalender(food:Food):void{
    let calenderItem = this.calender.items.find(item => item.food.title == food.title)
    if(calenderItem){
      calenderItem.food = food;
    }
    else {
      this.calender.items.push({food:food})
    }
  }

  removeFromCalender(foodTitle:string):void {
    this.calender.items = 
    this.calender.items.filter(item => item.food.title != foodTitle)
  }

  getCalender():calenderFood{
    return this.calender
  }
}
